import { useState } from "react";
import Score from "./Score";
import TennisScore from "./TennisScore";
import { useVideoMutation } from "../../../redux/features/events/events";
import { useParams } from "react-router-dom";
import { Settings } from "../../../api";

const ScoreCardLiveTV = ({ data }) => {
  const { eventTypeId, eventId } = useParams();
  const [sportsVideo, { data: iframe }] = useVideoMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(1);

  const handleGetVideo = async () => {
    const payload = {
      eventTypeId: eventTypeId,
      eventId: eventId,
      type: "video",
      casinoCurrency: Settings.casino_currency,
    };
    await sportsVideo(payload).unwrap();
  };

  console.log(iframe);

  return (
    <section className={`mc  ${isOpen ? "open" : ""}`}>
      <div className="mc-bar">
        <div className="mc-tabs" role="tablist">
          <button
            onClick={() => setTab(1)}
            role="tab"
            aria-selected={tab === 1}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2.5" y="3.5" width={15} height={13} rx="1.5" />
              <path d="M2.5 8h15M8 8v8.5" />
            </svg>
            Scorecard
          </button>
          {data?.score?.hasVideo && (
            <button
              onClick={() => {
                setTab(2);
                handleGetVideo();
              }}
              role="tab"
              aria-selected={tab === 2}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x={2} y="4.5" width={16} height={11} rx="1.5" />
                <path d="M7 1.5l3 3 3-3" />
              </svg>
              Live TV
              <i className="mc-live" />
            </button>
          )}
          {data?.score?.tracker && (
            <button
              onClick={() => setTab(3)}
              role="tab"
              aria-selected={tab === 3}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x={2} y="4.5" width={16} height={11} rx="1.5" />
                <path d="M7 1.5l3 3 3-3" />
              </svg>
              Tracker
              <i className="mc-live" />
            </button>
          )}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mc-toggle"
          aria-expanded="false"
          aria-label="Expand scorecard and TV"
        >
          <svg viewBox="0 0 20 20">
            <path
              d="M5 8l5 5 5-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <button className="mc-sum">
        {/* {data?.score?.hasVideo && <i className="mc-live" />} */}
        {/* {data?.iscore && eventTypeId == 4 && (
          <span>
            <b>SIX</b> <strong>142/5</strong> <b>SCO</b> · 2nd inn · 12.3 ov ·
            Need 61 off 46 balls
          </span>
        )} */}
      </button>
      {tab === 1 && eventTypeId == 4 && data?.iscore && (
        <Score iscore={data?.iscore} />
      )}

      {tab === 1 && eventTypeId == 2 && data?.score && (
        <TennisScore eventTypeId={eventTypeId} score={data?.score} />
      )}

      {data?.score?.tracker && tab === 3 && (
        <div
          style={{
            width: "100%",
            height: "125px",
            overflow: "hidden",
          }}
        >
          {" "}
          <iframe
            style={{
              width: "100%",
            }}
            className="premium-iframe"
            src={data?.score?.tracker}
          ></iframe>
        </div>
      )}

      {iframe?.result?.url && data?.score?.hasVideo && tab === 2 && (
        <div className="mc-wrap">
          <div className="mc-body">
            <div className="tv " id="tv">
              <div
                style={{
                  marginTop: "10px",
                  width: "100%",

                  overflow: "hidden",
                  padding: "0px 8px",
                }}
                className="embed-responsive embed-responsive-16by9 ng-star-inserted"
              >
                <iframe
                  id="tvStr"
                  className="embed-responsive-item w-100"
                  src={iframe?.result?.url}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ScoreCardLiveTV;
