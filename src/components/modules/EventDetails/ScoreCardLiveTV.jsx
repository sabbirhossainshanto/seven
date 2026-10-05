const ScoreCardLiveTV = () => {
  return (
    <section className="mc">
      <div className="mc-bar">
        <div className="mc-tabs" role="tablist">
          <button role="tab" aria-selected="false">
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
          <button role="tab" aria-selected="false">
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
        </div>
        <button
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
        <i className="mc-live" />
        <span>
          <b>SIX</b> <strong>142/5</strong> <b>SCO</b> · 2nd inn · 12.3 ov ·
          Need 61 off 46 balls
        </span>
      </button>
      <div className="mc-wrap">
        <div className="mc-body">
          <div className="sc">
            <div className="sc-teams">
              <div className="sc-row now">
                <span className="bat" title="Batting" />
                <b>Sydney Sixers</b>
                <strong>142/5</strong>
                <small>12.3 ov</small>
              </div>
              <div className="sc-row">
                <span />
                <b>Perth Scorchers</b>
                <strong>202/6</strong>
                <small>20.0 ov</small>
              </div>
            </div>
            <div className="sc-chase">
              Need 61 off 46 balls
              <span>
                CRR <b>11.36</b>
              </span>
              <span>
                RRR <b>7.96</b>
              </span>
              <span>
                Target <b>203</b>
              </span>
            </div>
            <div className="sc-tbl">
              <table>
                <thead>
                  <tr>
                    <th>Batter</th>
                    <th>R</th>
                    <th>B</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>SR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      J. Philippe <i className="strike">*</i>
                    </td>
                    <td>
                      <b>48</b>
                    </td>
                    <td>31</td>
                    <td>5</td>
                    <td>2</td>
                    <td>154.8</td>
                  </tr>
                  <tr>
                    <td>M. Henriques</td>
                    <td>
                      <b>22</b>
                    </td>
                    <td>14</td>
                    <td>2</td>
                    <td>1</td>
                    <td>157.1</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>Bowler</th>
                    <th>O</th>
                    <th>M</th>
                    <th>R</th>
                    <th>W</th>
                    <th>Econ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>J. Richardson</td>
                    <td>2.3</td>
                    <td>0</td>
                    <td>24</td>
                    <td>
                      <b>1</b>
                    </td>
                    <td>10.43</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sc-over">
              <small>This over</small>
              <i className="ball b-1">1</i>
              <i className="ball b-4">4</i>
              <i className="ball b-dot">•</i>
              <i className="ball b-W">W</i>
              <i className="ball b-6">6</i>
              <i className="ball b-2">2</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoreCardLiveTV;
