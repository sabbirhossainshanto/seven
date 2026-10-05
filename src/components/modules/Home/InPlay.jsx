import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGroupQuery } from "../../../hooks/group";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";
import { useNavigate } from "react-router-dom";
import { filterLiveVirtual } from "../../../utils/filter-live-virtual";
import LiveVirtual from "./LiveVirtual";

const InPlay = () => {
  const { getLanguage } = useLanguage();
  const [liveVirtual, setLiveVirtual] = useState([]);
  const { group } = useSelector((state) => state.global);
  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    },
  );

  const [categories, setCategories] = useState([]);
  const eventName = {
    4: getLanguage(LanguageKey.CRICKET),
    2: getLanguage(LanguageKey.TENNIS),
    1: getLanguage(LanguageKey.FOOTBALL),
  };
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId),
        ),
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);
  return (
    <Fragment>
      <div className="sec">
        <h2>{getLanguage(LanguageKey.IN_PLAY)}</h2>

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
      {categories?.map((category) => {
        const groupedData = filterLiveVirtual(liveVirtual, category, data, 1);
        return (
          <Fragment key={category}>
            <button className="up-h">
              <svg
                className="si si-cricket"
                style={{ "--t": "-0.367s" }}
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 28.5H29" opacity=".35" />
                <path
                  d="M3.2 17.5v11M5 17.5v11M6.8 17.5v11M2.6 16.6h4.8"
                  strokeWidth="1.1"
                  opacity=".6"
                />
                <g transform="translate(9 5)">
                  <g className="a-bat">
                    <path d="M0 0l1.5 4" strokeWidth="1.9" />
                    <path
                      d="M.8 4.3l3.8-1.3 4.2 12.2-3.8 1.3z"
                      fill="currentColor"
                      fillOpacity=".3"
                    />
                  </g>
                </g>
                <circle
                  className="a-cball"
                  cx={19}
                  cy="12.5"
                  r="1.9"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              <b> {eventName[category]}</b>
              <LiveVirtual
                setLiveVirtual={setLiveVirtual}
                category={category}
              />
            </button>
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
                groupedData.map(([keys]) => {
                  console.log(data);
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
                          {data[keys]?.inPlay === 1 && (
                            <span className="live-pill">In-Play</span>
                          )}
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
                            {data?.[keys]?.[0]?.ex?.availableToBack[0]?.price ||
                              "-"}
                            <small>
                              {" "}
                              {data?.[keys]?.[0]?.ex?.availableToBack?.[0]
                                ?.size || "-"}
                            </small>
                          </button>
                          <button
                            className="o l flash-down"
                            data-ev={1}
                            data-ri={0}
                            data-side="l"
                            aria-label="Lay Sydney Sixers"
                          >
                            {data?.[keys]?.[0]?.ex?.availableToLay?.[0]
                              ?.price || "-"}
                            <small>
                              {" "}
                              {data?.[keys]?.[0]?.ex?.availableToLay?.[0]
                                ?.size || "-"}
                            </small>
                          </button>
                        </div>
                        <div className="pair" data-l="X">
                          <span className="o na b">
                            {data?.[keys]?.[2]?.ex?.availableToBack?.[0]
                              ?.price || "-"}
                          </span>
                          <span className="o na l">
                            {" "}
                            {data?.[keys]?.[2]?.ex?.availableToLay?.[0]
                              ?.price || "-"}
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
                            {data?.[keys]?.[1]?.ex?.availableToBack?.[0]
                              ?.price || "-"}
                            <small>
                              {" "}
                              {data?.[keys]?.[1]?.ex?.availableToBack?.[0]
                                ?.size || "-"}
                            </small>
                          </button>
                          <button
                            className="o l flash-down"
                            data-ev={1}
                            data-ri={1}
                            data-side="l"
                            aria-label="Lay Perth Scorchers"
                          >
                            {data?.[keys]?.[1]?.ex?.availableToLay?.[0]
                              ?.price || "-"}
                            <small>
                              {" "}
                              {data?.[keys]?.[1]?.ex?.availableToLay?.[0]
                                ?.size || "-"}
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
      })}
    </Fragment>
  );
};

export default InPlay;
