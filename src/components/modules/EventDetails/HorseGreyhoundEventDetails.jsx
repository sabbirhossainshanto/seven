import { Fragment, useEffect, useState } from "react";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useExposure } from "../../../hooks/exposure";
import MobileBetSlip from "./MobileBetSlip";
import { LanguageKey } from "../../../const";
import toast from "react-hot-toast";
import useLanguage from "../../../hooks/use-language";

const HorseGreyhoundEventDetails = ({ data }) => {
  const { getLanguage } = useLanguage();
  const { runnerId } = useSelector((state) => state.event);
  const { eventId } = useParams();
  const { data: exposure } = useExposure(eventId);
  const { token } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const [timeDiff, setTimeDiff] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

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
      toast.error("Please login to place a bet.");
    }
  };

  useEffect(() => {
    if (!data?.[0]?.openDate) return;

    const targetDateStr = data[0].openDate;
    const [date, time] = targetDateStr.split(" ");
    const [day, month, year] = date.split("/");
    const [hour, minute, second] = time.split(":");

    const targetDate = new Date(year, month - 1, day, hour, minute, second);

    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        const currentDate = new Date();
        const diffInMs = targetDate - currentDate;

        if (diffInMs <= 0) {
          clearInterval(interval);
          setTimeDiff({ day: 0, hour: 0, minute: 0, second: 0 });
          return;
        }

        const day = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minute = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((diffInMs % (1000 * 60)) / 1000);

        setTimeDiff({ day, hour, minute, second });
      }, 1000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <Fragment>
      <div className="horse-banner">
        <img
          style={{ width: "100%" }}
          src="https://g1ver.sprintstaticdata.com/v42/static/front/img/10.png"
          className="img-fluid"
        />
        <div className="horse-banner-detail">
          <div className="text-success">{getLanguage(LanguageKey.OPEN)}</div>
          {timeDiff?.day ||
          timeDiff?.hour ||
          timeDiff?.minute ||
          timeDiff?.second ? (
            <div className="horse-timer">
              <span style={{ display: "flex", gap: "5px" }}>
                {timeDiff?.day > 0 && (
                  <span>
                    {timeDiff?.day}{" "}
                    <small>{getLanguage(LanguageKey.DAY)}</small>
                  </span>
                )}
                {timeDiff?.hour > 0 && (
                  <span>
                    {timeDiff?.hour}{" "}
                    <small>{getLanguage(LanguageKey.HOUR)}</small>
                  </span>
                )}
                {timeDiff?.minute > 0 && (
                  <span>
                    {timeDiff?.minute}{" "}
                    <small>{getLanguage(LanguageKey.MINUTE)}</small>
                  </span>
                )}
                {timeDiff?.hour === 0 && timeDiff?.minute < 60 && (
                  <span>
                    {timeDiff?.second}{" "}
                    <small>{getLanguage(LanguageKey.SECOND)}</small>
                  </span>
                )}
              </span>
              <span>{getLanguage(LanguageKey.REMAINING)}</span>
            </div>
          ) : null}

          <div className="time-detail">
            <p>{data?.[0]?.eventName}</p>
            <h5>
              <span>{data?.[0]?.openDate}</span>
              <span>| {data?.[0]?.raceType}</span>
            </h5>
          </div>
        </div>
      </div>
      {data?.length > 0 &&
        data?.map((game) => {
          return (
            <div key={game?.id} className="market" id="mk-mo">
              <div className="mk-head">
                <h3>{game?.name?.toUpperCase()}</h3>
                <span className="matched">
                  Matched <b data-matched={1}>966K</b>
                </span>
                <span className="lim">
                  Min {game?.minLiabilityPerBet} · Max{" "}
                  {game?.maxLiabilityPerBet}
                </span>
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
                return (
                  <Fragment key={runner?.id}>
                    <div className="runner">
                      <div>
                        <span className="nm">{runner?.horse_name}</span>

                        <span className="book" data-book="1|0|Match odds">
                          <div
                            className="jockey-detail sm-d-none d-md-flex"
                            style={{ display: "flex" }}
                          >
                            {runner?.jocky && (
                              <span className="jockey-detail-box">
                                <b>Jockey:</b>
                                <span style={{ fontWeight: "normal" }}>
                                  {runner?.jocky}
                                </span>
                              </span>
                            )}
                            {runner?.trainer && (
                              <span className="jockey-detail-box">
                                <b>Trainer:</b>
                                <span style={{ fontWeight: "normal" }}>
                                  {runner?.trainer}
                                </span>
                              </span>
                            )}
                            {runner?.age && (
                              <span className="jockey-detail-box">
                                <b>Age:</b>
                                <span style={{ fontWeight: "normal" }}>
                                  {runner?.age}
                                </span>
                              </span>
                            )}
                          </div>
                        </span>
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

export default HorseGreyhoundEventDetails;
