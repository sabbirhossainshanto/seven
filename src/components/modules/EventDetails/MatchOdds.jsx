import { Fragment, useEffect, useState } from "react";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useExposure } from "../../../hooks/exposure";
import MobileBetSlip from "./MobileBetSlip";

const MatchOdds = ({ data }) => {
  const [speedCashOut, setSpeedCashOut] = useState(null);
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const dispatch = useDispatch();
  const { runnerId, stake, predictOdd } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure(eventId);

  const handleBetSlip = (betType, games, runner, price) => {
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
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
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
        exposure: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
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

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId,
  ) => {
    let runner,
      largerExposure,
      layValue,
      oppositeLayValue,
      lowerExposure,
      speedCashOut;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }
    if (exposureA > 0 && exposureB > 0) {
      const difference = Math.abs(exposureA - exposureB);
      if (difference <= 10) {
        speedCashOut = true;
      }
    }
    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
      exposureA,
      exposureB,
      runner1,
      runner2,
      speedCashOut,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id,
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id,
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id,
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, data]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <Fragment>
      {data?.length > 0 &&
        data?.map((game) => {
          const teamProfitForGame = teamProfit?.find(
            (profit) =>
              profit?.gameId === game?.id && profit?.isOnePositiveExposure,
          );
          const speedCashOut = teamProfit?.find(
            (profit) => profit?.gameId === game?.id && profit?.speedCashOut,
          );
          return (
            <div key={game?.id} className="market" id="mk-mo">
              <div className="mk-head">
                <h3>{game?.name?.toUpperCase()}</h3>
                <span className="matched">
                  Matched <b data-matched={1}>966K</b>
                </span>
                <span className="lim">Min 100 · Max 200,000</span>
              </div>
              <div className="mk-cols desk">
                <span />
                <span />
                <span />
                <span>Back</span>
                <span>Lay</span>
                <span />
                <span />
              </div>
              <div className="mk-cols mob">
                <span />
                <span style={{ color: "var(--back)", fontWeight: 600 }}>
                  Back
                </span>
                <span style={{ color: "var(--lay)", fontWeight: 600 }}>
                  Lay
                </span>
              </div>
              {game?.runners?.map((runner) => {
                const pnl = pnlBySelection?.find(
                  (pnl) => pnl?.RunnerId === runner?.id,
                );
                const predictOddValues = predictOdd?.find(
                  (val) => val?.id === runner?.id,
                );
                return (
                  <Fragment key={runner?.id}>
                    <div className="runner">
                      <div>
                        <span className="nm">{runner?.name}</span>

                        <span className="book" data-book="1|0|Match odds" />
                      </div>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "back",
                            game,
                            runner,
                            runner?.back?.[2]?.price,
                          )
                        }
                        className="o b flash-up"
                        data-ev={1}
                        data-ri={0}
                        data-side="b"
                        data-d="-0.04"
                      >
                        {runner?.back?.[2]?.price}
                        <small>{runner?.back?.[2]?.size}</small>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "back",
                            game,
                            runner,
                            runner?.back?.[1]?.price,
                          )
                        }
                        className="o b flash-up"
                        data-ev={1}
                        data-ri={0}
                        data-side="b"
                        data-d="-0.02"
                      >
                        {runner?.back?.[1]?.price}
                        <small>{runner?.back?.[1]?.size}</small>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "back",
                            game,
                            runner,
                            runner?.back?.[0]?.price,
                          )
                        }
                        className="o b main flash-up"
                        data-ev={1}
                        data-ri={0}
                        data-side="b"
                        data-d={0}
                      >
                        {runner?.back?.[0]?.price}
                        <small> {runner?.back?.[0]?.size}</small>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "lay",
                            game,
                            runner,
                            runner?.lay?.[0]?.price,
                          )
                        }
                        className="o l main flash-up"
                        data-ev={1}
                        data-ri={0}
                        data-side="l"
                        data-d={0}
                      >
                        {runner?.lay?.[0]?.price}
                        <small> {runner?.lay?.[0]?.size}</small>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "lay",
                            game,
                            runner,
                            runner?.lay?.[1]?.price,
                          )
                        }
                        className="o l flash-up"
                        data-ev={1}
                        data-ri={0}
                        data-side="l"
                        data-d="0.02"
                      >
                        {runner?.lay?.[1]?.price}
                        <small>{runner?.lay?.[1]?.size}</small>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "lay",
                            game,
                            runner,
                            runner?.lay?.[2]?.price,
                          )
                        }
                        className="o l flash-up"
                        data-ev={1}
                        data-ri={0}
                        data-side="l"
                        data-d="0.04"
                      >
                        {runner?.lay?.[2]?.price}
                        <small>{runner?.lay?.[2]?.size}</small>
                      </button>
                    </div>
                    {runner?.id === runnerId && (
                      <MobileBetSlip currentPlaceBetEvent={game} />
                    )}
                  </Fragment>
                );
              })}
            </div>
          );
        })}
    </Fragment>
  );
};

export default MatchOdds;
