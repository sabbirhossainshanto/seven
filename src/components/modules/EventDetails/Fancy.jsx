import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId,
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
      };

      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, marketName) => {
    if (!pnl?.MarketId) {
      return;
    }
    setMarketName(marketName);
    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <Fragment>
      {fancyData?.length > 0 && (
        <div className="market fancy" id="mk-fancy">
          <div className="mk-head">
            <h3>Fancy</h3>
            <span className="lim">Min 100 · Max 50,000</span>
          </div>
          <div
            className="mk-cols"
            style={{ gridTemplateColumns: "1fr repeat(2,64px)" }}
          >
            <span />
            <span style={{ color: "var(--lay)", fontWeight: 600 }}>No</span>
            <span style={{ color: "var(--back)", fontWeight: 600 }}>Yes</span>
          </div>
          {fancyData?.map((game) => {
            const pnl =
              pnlBySelection?.find((pnl) => pnl?.MarketId === game?.id) || {};

            return (
              <div
                className={`runner  ${game?.status === "SUSPENDED" ? "suspended" : ""}`}
                key={game?.id}
              >
                <div>
                  <span className="nm"> {game?.name}</span>

                  <span className="book" data-fbook="1|0" />
                </div>
                <button
                  onClick={() =>
                    handleBetSlip(
                      "lay",
                      game,
                      game?.runners?.[0],
                      game?.runners?.[0]?.lay?.[0]?.line,
                      game?.runners?.[0]?.lay?.[0]?.price,
                    )
                  }
                  className="o no"
                >
                  {game?.runners?.[0]?.lay?.[0]?.line}
                  <small> {game?.runners?.[0]?.lay?.[0]?.price}</small>
                </button>
                <button
                  onClick={() =>
                    handleBetSlip(
                      "back",
                      game,
                      game?.runners?.[0],
                      game?.runners?.[0]?.back?.[0]?.line,
                      game?.runners?.[0]?.back?.[0]?.price,
                    )
                  }
                  className="o yes"
                >
                  {game?.runners?.[0]?.back?.[0]?.line}
                  <small>{game?.runners?.[0]?.back?.[0]?.price}</small>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default Fancy;
