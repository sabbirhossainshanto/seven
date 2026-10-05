import { useSelector } from "react-redux";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import LiveVirtual from "./LiveVirtual";

const EventCard = ({ data, filterData, title, setLiveVirtual }) => {
  const { getLanguage } = useLanguage();
  const eventName = {
    4: getLanguage(LanguageKey.CRICKET),
    2: getLanguage(LanguageKey.TENNIS),
    1: getLanguage(LanguageKey.FOOTBALL),
    5: getLanguage(LanguageKey.KABADDI),
  };
  const { group } = useSelector((state) => state.global);
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  return (
    <Fragment>
      <div className="sec up-h">
        <h2 style={{ color: "white" }}>
          {title === "IN_PLAY"
            ? getLanguage(LanguageKey.IN_PLAY)
            : getLanguage(LanguageKey.UP_COMING)}{" "}
          {eventName[group]}{" "}
        </h2>
        <LiveVirtual category={group} setLiveVirtual={setLiveVirtual} />
        <span className="ev-legend">
          <span>
            <i style={{ background: "var(--back)" }} />
            Back
          </span>
          <span>
            <i style={{ background: "var(--lay)" }} />
            Lay
          </span>
        </span>
      </div>
      <div className="events">
        <div className="ev-head">
          <span>Match</span>
          <div className="cols">
            <span>1</span>
            <span>X</span>
            <span>2</span>
          </div>
        </div>

        {data &&
          filterData.map(([keys]) => {
            return (
              <div
                onClick={() => navigateGameList(keys)}
                key={keys}
                className="ev"
                role="button"
                tabIndex={0}
              >
                <div className="ev-info">
                  <div className="meta">
                    <span
                      className={`${data[keys]?.inPlay === 1 ? "live-pill" : "time-pill"}`}
                    >
                      {data[keys]?.inPlay === 1 ? "In-Play" : data[keys]?.date}
                    </span>

                    {data[keys]?.isFancy === 1 && (
                      <span className="tagx">Fancy</span>
                    )}
                  </div>
                  <div className="teams">
                    {data[keys]?.player1}
                    <em>vs</em> {data[keys]?.player2}
                  </div>
                </div>
                <div className="mkt">
                  <div className="pair" data-l={1}>
                    <button
                      className="o b flash-down"
                      data-ev={1}
                      data-ri={0}
                      data-side="b"
                      aria-label="Back Sydney Sixers"
                    >
                      {data?.[keys]?.[0]?.ex?.availableToBack[0]?.price || "-"}
                      <small>
                        {" "}
                        {data?.[keys]?.[0]?.ex?.availableToBack?.[0]?.size ||
                          "-"}
                      </small>
                    </button>
                    <button
                      className="o l flash-down"
                      data-ev={1}
                      data-ri={0}
                      data-side="l"
                      aria-label="Lay Sydney Sixers"
                    >
                      {data?.[keys]?.[0]?.ex?.availableToLay?.[0]?.price || "-"}
                      <small>
                        {" "}
                        {data?.[keys]?.[0]?.ex?.availableToLay?.[0]?.size ||
                          "-"}
                      </small>
                    </button>
                  </div>
                  <div className="pair" data-l="X">
                    <span className="o na b">
                      {data?.[keys]?.[2]?.ex?.availableToBack?.[0]?.price ||
                        "-"}
                    </span>
                    <span className="o na l">
                      {" "}
                      {data?.[keys]?.[2]?.ex?.availableToLay?.[0]?.price || "-"}
                    </span>
                  </div>
                  <div className="pair" data-l={2}>
                    <button
                      className="o b flash-down"
                      data-ev={1}
                      data-ri={1}
                      data-side="b"
                      aria-label="Back Perth Scorchers"
                    >
                      {data?.[keys]?.[1]?.ex?.availableToBack?.[0]?.price ||
                        "-"}
                      <small>
                        {" "}
                        {data?.[keys]?.[1]?.ex?.availableToBack?.[0]?.size ||
                          "-"}
                      </small>
                    </button>
                    <button
                      className="o l flash-down"
                      data-ev={1}
                      data-ri={1}
                      data-side="l"
                      aria-label="Lay Perth Scorchers"
                    >
                      {data?.[keys]?.[1]?.ex?.availableToLay?.[0]?.price || "-"}
                      <small>
                        {" "}
                        {data?.[keys]?.[1]?.ex?.availableToLay?.[0]?.size ||
                          "-"}
                      </small>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default EventCard;
