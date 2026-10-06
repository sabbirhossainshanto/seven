import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useLanguage from "../../../hooks/use-language";
import useBalance from "../../../hooks/balance";
import { useCurrentBets } from "../../../hooks/currentBets";
import { useExposure } from "../../../hooks/exposure";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setPredictOdd,
  setPrice,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import toast from "react-hot-toast";
import { LanguageKey } from "../../../const";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";

const BetSlip = () => {
  const { getLanguage } = useLanguage();
  const { closePopupForForever } = useSelector((state) => state.global);
  const { pathname } = useLocation();
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventId, eventTypeId } = useParams();
  const dispatch = useDispatch();
  const { price, stake, placeBetValues } = useSelector((state) => state.event);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchExposure } = useExposure(eventId);
  const [betDelay, setBetDelay] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: eventData } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
      skip: !pathname.includes("/event-details"),
    },
  );
  const currentPlaceBetEvent = eventData?.result?.find(
    (item) => item?.id === placeBetValues?.marketId,
  );

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(placeBetValues?.price));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize.toFixed(2)
          : null,
      ),
    );

    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  useEffect(() => {
    if (betDelay <= 0) {
      setBetDelay(null);
    }
    dispatch(setPredictOdd([]));
  }, [placeBetValues, dispatch, betDelay]);

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
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */
  const handleOrderBets = async () => {
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),
        isbetDelay: isBetDelay(placeBetValues),
        apk: closePopupForForever ? true : false,
      },
    ];
    setLoading(true);
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

    setTimeout(async () => {
      const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

      if (data?.success) {
        setLoading(false);
        refetchExposure();
        refetchBalance();
        refetchCurrentBets();

        setBetDelay("");
        toast.success(data?.result?.result?.placed?.[0]?.message);
        dispatch(setPlaceBetValues(null));
        dispatch(setStake(null));
      } else {
        setLoading(false);
        toast.error(
          data?.error?.status?.[0]?.description || data?.error?.errorMessage,
        );
        setBetDelay(null);
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
    <Fragment>
      <div className={`bs-gh  ${placeBetValues?.back ? "b" : "l"}`}>
        <span>
          <i>
            {placeBetValues?.back ? "Back" : "Lay"} <small>(Bet for)</small>
          </i>
          <i> {getLanguage(LanguageKey.ODDS)}</i>
        </span>
        <span> {getLanguage(LanguageKey.STAKE)}</span>
        <span> {getLanguage(LanguageKey.PROFIT)}</span>
      </div>
      <div className="bs-sel b">
        <div className="bs-nm">
          <button className="bs-x" aria-label="Remove Sydney Sixers">
            ×
          </button>
          <div>
            <b>{placeBetValues?.selectedBetName}</b>
            <small>{placeBetValues?.name?.join(" vs ")}</small>
          </div>
        </div>
        <div className="bs-in">
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
              type="number"
              value={price}
              placeholder="Enter Odds"
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
          <b className="bs-pl up" data-pl="1-0-b-ex">
            +0.00
          </b>
        </div>
        <div className="bs-quick">
          {parseButtonValues?.slice?.(0, 6)?.map((button, i) => (
            <button key={i} onClick={() => handleButtonValue(button?.value)}>
              {button?.value}
            </button>
          ))}
        </div>
        {/* <div className="bs-tools">
          <button onClick={() => dispatch(setStake(100))}>Min</button>
          <button
            onClick={() =>
              dispatch(setStake(placeBetValues?.maxLiabilityPerBet))
            }
          >
            Max
          </button>
          <button onClick={() => dispatch(setStake(null))}>Clear</button>
        </div> */}
      </div>
      <div className="slip-foot">
        <div data-slip-lvl />
        <div className="bs-act">
          <button
            className="bs-cancel"
            onClick={() => {
              dispatch(setPredictOdd([]));
              dispatch(setPlaceBetValues(null));
              dispatch(setStake(null));
            }}
          >
            {getLanguage(LanguageKey.CANCEL_BET)}
          </button>

          <button
            onClick={handleOrderBets}
            className="bs-place"
            data-place
            disabled
          >
            {getLanguage(LanguageKey.PLACE_BET)}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default BetSlip;
