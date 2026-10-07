const MatchHead = ({ data }) => {
  const result = data?.result?.[0];
  return (
    <div className="match-head">
      {/* <div className="crumb">
        <svg
          className="si si-cricket"
          style={{ "--t": "-0.937s" }}
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
        <button>Cricket</button>
        <span>›</span>
        <span>{result?.competitionName}</span>
      </div> */}
      <h1>{result?.eventName}</h1>
      <div className="sub">
        <span style={{ color: "var(--win)", fontWeight: 600 }}>
          {result?.openDate}
        </span>
      </div>
    </div>
  );
};

export default MatchHead;
