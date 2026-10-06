import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import toast from "react-hot-toast";

import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";

const MobileBetSlip = ({ currentPlaceBetEvent }) => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();

  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);

  // const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  const [betDelay, setBetDelay] = useState("");

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),

        apk: closePopupForForever ? true : false,
        isbetDelay: isBetDelay(placeBetValues),
      },
    ];

    let delay = 0;

    if (isDelay(placeBetValues)) {
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 3 &&
        placeBetValues?.name?.length === 2
      ) {
        delay = 9000;
      }
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 7 &&
        placeBetValues?.name?.length === 3
      ) {
        delay = 9000;
      } else {
        setBetDelay(currentPlaceBetEvent?.betDelay);
        delay = Settings?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
      }
    }

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);
        console.log(data);
        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();
          setBetDelay("");
          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
          setBetDelay("");
          setBetDelay(false);
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong. Please try again.");
        setBetDelay("");
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };

  return (
    <div
      className={`ibs  ${placeBetValues?.back ? "b" : "l"}`}
      role="group"
      aria-label="Bet slip"
    >
      <div className="ibs-top">
        <span className="bs-sd">{placeBetValues?.back ? "Back" : "Lay"} </span>
        <div>
          <b>{placeBetValues?.selectedBetName}</b>
          <small>{placeBetValues?.btype}</small>
        </div>
        <button
          onClick={handleCancelBet}
          className="bs-x"
          aria-label="Close bet slip"
        >
          ×
        </button>
      </div>

      <div className="ibs-in">
        <div>
          <small>Odds</small>
          <div className="bs-px">
            {!placeBetValues?.isWeak && (
              <button
                onClick={() => {
                  handleDecreasePrice(
                    price,
                    placeBetValues,
                    dispatch,
                    setPrice,
                  );
                  setIsCashOut(false);
                }}
                aria-label="Lower odds"
              >
                −
              </button>
            )}

            <input
              onChange={(e) => {
                dispatch(setPrice(e.target.value));
                setIsCashOut(false);
              }}
              value={price}
              aria-label="Odds"
            />
            {!placeBetValues?.isWeak && (
              <button
                onClick={() => {
                  handleIncreasePrice(
                    price,
                    placeBetValues,
                    dispatch,
                    setPrice,
                  );
                  setIsCashOut(false);
                }}
                aria-label="Higher odds"
              >
                +
              </button>
            )}
          </div>
        </div>
        <div>
          <small>Stake</small>
          <div className="bs-px">
            {/* <button aria-label="Less">−</button> */}
            <input
              onChange={(e) => {
                dispatch(setStake(e.target.value));
                setIsCashOut(false);
              }}
              className="bs-stake"
              type="number"
              placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
              value={stake !== null && stake}
              aria-label="Stake"
            />
            {/* <button aria-label="More">+</button> */}
          </div>
        </div>
      </div>
      <div className="bs-quick">
        {parseButtonValues?.slice(0, 6)?.map((button, i) => (
          <button key={i} onClick={() => handleButtonValue(button?.value)}>
            {button?.value}
          </button>
        ))}
      </div>
      {/* <div className="bs-tools">
        <button>Min</button>
        <button>Max</button>
        <button>Clear</button>
        <button>Edit stakes</button>
      </div> */}
      <div className="ibs-sum">
        <span>
          Profit{" "}
          <b className="up" data-pl="1-1-b-ex">
            {profit}
          </b>
        </span>
      </div>
      <div className="bs-act">
        <button onClick={handleCancelBet} className="bs-cancel">
          Cancel
        </button>
        <button onClick={handleOrderBets} className="bs-place">
          Place bet
        </button>
      </div>
    </div>
  );
};

export default MobileBetSlip;
