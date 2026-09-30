/* eslint-disable react/no-unknown-property */
const Home = () => {
  return (
    <div className="shell">
      {/* Left: sports */}
      <aside className="left">
        <div className="side">
          <h4>Sports</h4>
          <div id="sportlist">
            <button
              className="sp"
              aria-current="true"
              onclick="pickSport('all')"
            >
              <svg
                className="si si-all"
                style={{ "--t": "-0.363s" }}
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path
                  className="a-gem g1"
                  d="M11 7l4 4-4 4-4-4z"
                  fill="currentColor"
                  stroke="none"
                />
                <path
                  className="a-gem g2"
                  d="M21 7l4 4-4 4-4-4z"
                  fill="currentColor"
                  stroke="none"
                />
                <path
                  className="a-gem g4"
                  d="M11 17l4 4-4 4-4-4z"
                  fill="currentColor"
                  stroke="none"
                />
                <path
                  className="a-gem g3"
                  d="M21 17l4 4-4 4-4-4z"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              <span className="sp-name">All sports</span>
              <span className="live">● 5</span>
              <span className="n">20</span>
            </button>
            <button
              className="sp"
              aria-current="false"
              onclick="pickSport('cricket')"
            >
              <svg
                className="si si-cricket"
                style={{ "--t": "-0.363s" }}
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
              <span className="sp-name">Cricket</span>
              <span className="live">● 3</span>
              <span className="n">14</span>
            </button>
            <button
              className="sp"
              aria-current="false"
              onclick="pickSport('football')"
            >
              <svg
                className="si si-football"
                style={{ "--t": "-0.363s" }}
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <ellipse
                  className="a-shadow"
                  cx={16}
                  cy="28.4"
                  rx="5.5"
                  ry={1}
                  fill="currentColor"
                  stroke="none"
                  opacity=".3"
                />
                <g className="a-bounce">
                  <g transform="translate(0 6)">
                    <g className="a-spin">
                      <circle cx={16} cy={15} r={6} />
                      <path
                        d="M16 12.2l2.66 1.93-1.01 3.14h-3.3l-1.01-3.14z"
                        fill="currentColor"
                        stroke="none"
                      />
                      <path
                        d="M16 12.2V9M18.66 14.13l3.05-.98M17.65 17.27l1.88 2.58M14.35 17.27l-1.88 2.58M13.34 14.13l-3.05-.98"
                        strokeWidth=".9"
                      />
                      <path
                        d="M18.25 9.44l2.35 1.7-2.01.3zM21.99 15.42l-.9 2.76-.91-1.82zM17.45 20.82h-2.9L16 19.4zM10.91 18.18l-.9-2.76 1.81.94zM11.4 11.14l2.35-1.7-.34 2z"
                        fill="currentColor"
                        stroke="none"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span className="sp-name">Football</span>
              <span className="live">● 9</span>
              <span className="n">62</span>
            </button>
            <button
              className="sp"
              aria-current="false"
              onclick="pickSport('tennis')"
            >
              <svg
                className="si si-tennis"
                style={{ "--t": "-0.363s" }}
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 27.6H30" opacity=".35" />
                <g transform="rotate(-24 6 18)" opacity=".85">
                  <ellipse cx={6} cy={14} rx="3.2" ry="4.3" />
                  <path
                    d="M4.4 11.2v5.6M6 9.8v8.4M7.6 11.2v5.6M3 13h6M3 15h6"
                    strokeWidth=".6"
                    opacity=".7"
                  />
                  <path d="M6 18.3v6.2" strokeWidth={2} />
                </g>
                <path d="M16 18.6v9" strokeWidth={1} />
                <path
                  d="M15.2 19.4h1.6v8.2h-1.6z"
                  strokeWidth=".5"
                  fill="currentColor"
                  fillOpacity=".25"
                />
                <path d="M14.8 18.6h2.4" strokeWidth="1.6" />
                <g className="a-tx">
                  <g className="a-ty">
                    <circle
                      cx={16}
                      cy="24.6"
                      r="2.9"
                      fill="currentColor"
                      fillOpacity=".3"
                    />
                    <path
                      d="M14 22.5q2 2.1 0 4.2M18 22.5q-2 2.1 0 4.2"
                      strokeWidth={1}
                    />
                  </g>
                </g>
              </svg>
              <span className="sp-name">Tennis</span>
              <span className="live">● 6</span>
              <span className="n">27</span>
            </button>
            <button
              className="sp"
              aria-current="false"
              onclick="pickSport('basketball')"
            >
              <svg
                className="si si-basketball"
                style={{ "--t": "-0.363s" }}
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x={8} y={2} width={16} height={8} rx={1} opacity=".55" />
                <rect
                  x={13}
                  y={5}
                  width={6}
                  height={4}
                  strokeWidth={1}
                  opacity=".55"
                />
                <path d="M3 29.2H29" opacity=".35" />
                <g className="a-hoop">
                  <circle
                    cx={16}
                    cy={8}
                    r="3.3"
                    fill="currentColor"
                    fillOpacity=".2"
                  />
                  <path
                    d="M12.7 8h6.6M16 4.7v6.6M13.6 5.7q2.4 2.3 0 4.6M18.4 5.7q-2.4 2.3 0 4.6"
                    strokeWidth={1}
                  />
                </g>
                <path d="M10.3 12h11.4" strokeWidth="1.9" />
                <g className="a-net">
                  <path
                    d="M10.8 12.3l1.8 6.2M21.2 12.3l-1.8 6.2M13.4 12.3l1 6.2M18.6 12.3l-1 6.2M11.9 15.6h8.2M12.6 18.5h6.8"
                    strokeWidth={1}
                    opacity=".8"
                  />
                </g>
              </svg>
              <span className="sp-name">Basketball</span>
              <span className="live">● 2</span>
              <span className="n">11</span>
            </button>
            <button
              className="sp"
              aria-current="false"
              onclick="pickSport('horse')"
            >
              <svg
                className="si si-horse"
                style={{ "--t": "-0.363s" }}
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path
                  className="a-ground"
                  d="M1 28H31"
                  strokeDasharray="3 4"
                  opacity=".45"
                />
                <path
                  className="a-dust"
                  d="M3 25.5h3.5M1.5 23h3"
                  strokeWidth={1}
                  opacity=".5"
                />
                <g className="a-gallop">
                  <g transform="translate(10.2 15.4)" className="far">
                    <g className="a-hu far">
                      <path d="M0 0L-1.3 4.8" strokeWidth="2.7" />
                      <g transform="translate(-1.3 4.8)">
                        <g className="a-hl far">
                          <path d="M0 0L.5 5.8" strokeWidth="1.2" />
                          <path d="M.1 6.1h1.5" strokeWidth="1.5" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g transform="translate(20.6 16.4)" className="far">
                    <g className="a-fu far">
                      <path d="M0 0L.3 4.4" strokeWidth="2.3" />
                      <g transform="translate(.3 4.4)">
                        <g className="a-fl far">
                          <path d="M0 0V5.2" strokeWidth="1.2" />
                          <path d="M-.4 5.5h1.5" strokeWidth="1.5" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g transform="translate(8 13.4)">
                    <path
                      className="a-tail"
                      d="M0 0C-2.2 0-4.4 1-6.4 3.2-5 2.8-3.6 2.7-2.3 3-3.6 3.7-4.6 4.8-5.2 6.2-3 4.9-1 3.1.2 1.6z"
                      fill="currentColor"
                      stroke="none"
                    />
                  </g>
                  <path
                    d="M9 12.2C12 11.4 16 12.2 19.5 11.2 21.5 10.4 23 8.2 24.4 6.4L24.8 4.6 25.7 6C27 6.6 28.8 8.4 30 9.8 30.4 10.4 30 11.3 29.2 11.2 27.8 10.9 26.6 10.6 25.8 10.9 24.6 12.2 23.4 14.4 22.6 16.2 22.2 17.4 21 18.2 19.6 18.4 16.5 18.9 13.5 18.8 11 18.2 9 17.8 7.6 16.6 7.5 14.8 7.5 13.6 8 12.8 9 12.2z"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path
                    className="a-mane"
                    d="M20.6 10.7l-2.1.7M21.7 9.6l-2.2.5M22.7 8.4l-2.1.3M23.6 7.2l-1.8.1"
                    strokeWidth=".7"
                  />
                  <circle
                    cx="27.1"
                    cy="8.3"
                    r=".5"
                    fill="#0B0B0C"
                    stroke="none"
                  />
                  <circle
                    cx="29.5"
                    cy="10.2"
                    r=".32"
                    fill="#0B0B0C"
                    stroke="none"
                  />
                  <g transform="translate(11.4 15.8)" className="near">
                    <g className="a-hu near">
                      <path d="M0 0L-1.3 4.8" strokeWidth="2.7" />
                      <g transform="translate(-1.3 4.8)">
                        <g className="a-hl near">
                          <path d="M0 0L.5 5.8" strokeWidth="1.2" />
                          <path d="M.1 6.1h1.5" strokeWidth="1.5" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g transform="translate(21.4 16.8)" className="near">
                    <g className="a-fu near">
                      <path d="M0 0L.3 4.4" strokeWidth="2.3" />
                      <g transform="translate(.3 4.4)">
                        <g className="a-fl near">
                          <path d="M0 0V5.2" strokeWidth="1.2" />
                          <path d="M-.4 5.5h1.5" strokeWidth="1.5" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="sp-name">Horse racing</span>
              <span className="n">38</span>
            </button>
            <button
              className="sp"
              aria-current="false"
              onclick="pickSport('kabaddi')"
            >
              <svg
                className="si si-kabaddi"
                style={{ "--t": "-0.363s" }}
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M26 4v25" strokeDasharray="2 2.5" opacity=".45" />
                <path d="M2 29H30" opacity=".35" />
                <g className="a-raid">
                  <g transform="translate(13 20)">
                    <circle
                      cx={0}
                      cy={-11}
                      r="2.2"
                      fill="currentColor"
                      stroke="none"
                    />
                    <path d="M0-8.2L-1.2 1" />
                    <g transform="translate(-.4 -6.4)">
                      <path className="a-reach" d="M0 0l6 1.2" />
                    </g>
                    <path d="M-.4-6.4l-4 3" />
                    <path d="M-1.2 1l4.4 7.6M-1.2 1l-4.8 7.6" />
                  </g>
                </g>
              </svg>
              <span className="sp-name">Kabaddi</span>
              <span className="live">● 1</span>
              <span className="n">4</span>
            </button>
          </div>
        </div>
        <div id="clubMini">
          <button
            className="club-mini"
            onclick="go('club')"
            style={{
              "--c": "#d4af63",
              "--m": `linear-gradient(
          135deg,
          #7e5e26,
          #f6e6ba 45%,
          #c9a45c 62%,
          #6e5019
        )`,
              "--g": "#e6c46e",
              "--mt": `linear-gradient(
          135deg,
          #7e5e26,
          #f6e6ba 45%,
          #c9a45c 62%,
          #6e5019
        )`,
            }}
          >
            <span className="cm-top">
              <svg className="crown" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 10H5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx={12} cy={5} r="1.2" fill="currentColor" />
              </svg>
              <span>The Club</span>
              <span className="gem3d sm" data-gem="gold" aria-hidden="true">
                <svg viewBox="-2 0 104 92">
                  <defs>
                    <clipPath id="gm5c">
                      <polygon points="4,34 30,12 70,12 96,34 50,88" />
                    </clipPath>
                    <linearGradient id="gm5s" x1={0} x2={1} y1={0} y2=".25">
                      <stop offset=".35" stopColor="#fff" stopOpacity={0} />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".9" />
                      <stop offset=".65" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <g
                    stroke="rgba(255,246,216,.55)"
                    strokeWidth=".7"
                    strokeLinejoin="round"
                  >
                    <polygon points="4,34 30,12 27,34" fill="#F4D992" />
                    <polygon points="30,12 40,24 27,34" fill="#CDA75C" />
                    <polygon points="30,12 70,12 60,24 40,24" fill="#FFF6D8" />
                    <polygon points="40,24 60,24 50,34" fill="#F4D992" />
                    <polygon points="40,24 50,34 27,34" fill="#FFF6D8" />
                    <polygon points="60,24 73,34 50,34" fill="#CDA75C" />
                    <polygon points="70,12 60,24 73,34" fill="#8E6C2E" />
                    <polygon points="70,12 96,34 73,34" fill="#8E6C2E" />
                    <polygon points="4,34 15.5,52 50,88" fill="#CDA75C" />
                    <polygon points="15.5,52 27,34 50,88" fill="#F4D992" />
                    <polygon points="4,34 27,34 15.5,52" fill="#FFF6D8" />
                    <polygon points="27,34 38.5,52 50,88" fill="#CDA75C" />
                    <polygon points="38.5,52 50,34 50,88" fill="#8E6C2E" />
                    <polygon points="27,34 50,34 38.5,52" fill="#F4D992" />
                    <polygon points="50,34 61.5,52 50,88" fill="#F4D992" />
                    <polygon points="61.5,52 73,34 50,88" fill="#CDA75C" />
                    <polygon points="50,34 73,34 61.5,52" fill="#CDA75C" />
                    <polygon points="73,34 84.5,52 50,88" fill="#8E6C2E" />
                    <polygon points="84.5,52 96,34 50,88" fill="#56401A" />
                    <polygon points="73,34 96,34 84.5,52" fill="#8E6C2E" />
                  </g>
                  <g clipPath="url(#gm5c)">
                    <rect
                      className="gem-sheen"
                      x={-60}
                      y={0}
                      width={60}
                      height={92}
                      fill="url(#gm5s)"
                    />
                  </g>
                  <polygon
                    points="4,34 30,12 70,12 96,34 50,88"
                    fill="none"
                    stroke="rgba(0,0,0,.35)"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    className="gem-spark s1"
                    d="M36 15l1.6 3.6 3.6 1.6-3.6 1.6L36 25.4l-1.6-3.6-3.6-1.6 3.6-1.6z"
                    fill="#fff"
                  />
                  <path
                    className="gem-spark s2"
                    d="M78 30l1.1 2.4 2.4 1.1-2.4 1.1-1.1 2.4-1.1-2.4-2.4-1.1 2.4-1.1z"
                    fill="#fff"
                  />
                </svg>
              </span>
            </span>
            <b>Gold</b>
            <span className="cm-bar">
              <i style={{ width: "48.53333333333333%" }} />
            </span>
            <small>38,600 pts to Platinum</small>
            <span className="cm-cta">Become a member →</span>
          </button>
        </div>
      </aside>
      {/* Main */}
      <main id="main">
        <div className="chips sport-chips" aria-label="Sports">
          <button
            className="chip"
            aria-pressed="true"
            onclick="pickSport('all')"
          >
            <svg
              className="si si-all"
              style={{ "--t": "-0.366s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path
                className="a-gem g1"
                d="M11 7l4 4-4 4-4-4z"
                fill="currentColor"
                stroke="none"
              />
              <path
                className="a-gem g2"
                d="M21 7l4 4-4 4-4-4z"
                fill="currentColor"
                stroke="none"
              />
              <path
                className="a-gem g4"
                d="M11 17l4 4-4 4-4-4z"
                fill="currentColor"
                stroke="none"
              />
              <path
                className="a-gem g3"
                d="M21 17l4 4-4 4-4-4z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            All sports
          </button>
          <button
            className="chip"
            aria-pressed="false"
            onclick="pickSport('cricket')"
          >
            <svg
              className="si si-cricket"
              style={{ "--t": "-0.366s" }}
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
            Cricket
          </button>
          <button
            className="chip"
            aria-pressed="false"
            onclick="pickSport('football')"
          >
            <svg
              className="si si-football"
              style={{ "--t": "-0.366s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <ellipse
                className="a-shadow"
                cx={16}
                cy="28.4"
                rx="5.5"
                ry={1}
                fill="currentColor"
                stroke="none"
                opacity=".3"
              />
              <g className="a-bounce">
                <g transform="translate(0 6)">
                  <g className="a-spin">
                    <circle cx={16} cy={15} r={6} />
                    <path
                      d="M16 12.2l2.66 1.93-1.01 3.14h-3.3l-1.01-3.14z"
                      fill="currentColor"
                      stroke="none"
                    />
                    <path
                      d="M16 12.2V9M18.66 14.13l3.05-.98M17.65 17.27l1.88 2.58M14.35 17.27l-1.88 2.58M13.34 14.13l-3.05-.98"
                      strokeWidth=".9"
                    />
                    <path
                      d="M18.25 9.44l2.35 1.7-2.01.3zM21.99 15.42l-.9 2.76-.91-1.82zM17.45 20.82h-2.9L16 19.4zM10.91 18.18l-.9-2.76 1.81.94zM11.4 11.14l2.35-1.7-.34 2z"
                      fill="currentColor"
                      stroke="none"
                    />
                  </g>
                </g>
              </g>
            </svg>
            Football
          </button>
          <button
            className="chip"
            aria-pressed="false"
            onclick="pickSport('tennis')"
          >
            <svg
              className="si si-tennis"
              style={{ "--t": "-0.366s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 27.6H30" opacity=".35" />
              <g transform="rotate(-24 6 18)" opacity=".85">
                <ellipse cx={6} cy={14} rx="3.2" ry="4.3" />
                <path
                  d="M4.4 11.2v5.6M6 9.8v8.4M7.6 11.2v5.6M3 13h6M3 15h6"
                  strokeWidth=".6"
                  opacity=".7"
                />
                <path d="M6 18.3v6.2" strokeWidth={2} />
              </g>
              <path d="M16 18.6v9" strokeWidth={1} />
              <path
                d="M15.2 19.4h1.6v8.2h-1.6z"
                strokeWidth=".5"
                fill="currentColor"
                fillOpacity=".25"
              />
              <path d="M14.8 18.6h2.4" strokeWidth="1.6" />
              <g className="a-tx">
                <g className="a-ty">
                  <circle
                    cx={16}
                    cy="24.6"
                    r="2.9"
                    fill="currentColor"
                    fillOpacity=".3"
                  />
                  <path
                    d="M14 22.5q2 2.1 0 4.2M18 22.5q-2 2.1 0 4.2"
                    strokeWidth={1}
                  />
                </g>
              </g>
            </svg>
            Tennis
          </button>
          <button
            className="chip"
            aria-pressed="false"
            onclick="pickSport('basketball')"
          >
            <svg
              className="si si-basketball"
              style={{ "--t": "-0.366s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x={8} y={2} width={16} height={8} rx={1} opacity=".55" />
              <rect
                x={13}
                y={5}
                width={6}
                height={4}
                strokeWidth={1}
                opacity=".55"
              />
              <path d="M3 29.2H29" opacity=".35" />
              <g className="a-hoop">
                <circle
                  cx={16}
                  cy={8}
                  r="3.3"
                  fill="currentColor"
                  fillOpacity=".2"
                />
                <path
                  d="M12.7 8h6.6M16 4.7v6.6M13.6 5.7q2.4 2.3 0 4.6M18.4 5.7q-2.4 2.3 0 4.6"
                  strokeWidth={1}
                />
              </g>
              <path d="M10.3 12h11.4" strokeWidth="1.9" />
              <g className="a-net">
                <path
                  d="M10.8 12.3l1.8 6.2M21.2 12.3l-1.8 6.2M13.4 12.3l1 6.2M18.6 12.3l-1 6.2M11.9 15.6h8.2M12.6 18.5h6.8"
                  strokeWidth={1}
                  opacity=".8"
                />
              </g>
            </svg>
            Basketball
          </button>
          <button
            className="chip"
            aria-pressed="false"
            onclick="pickSport('horse')"
          >
            <svg
              className="si si-horse"
              style={{ "--t": "-0.366s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path
                className="a-ground"
                d="M1 28H31"
                strokeDasharray="3 4"
                opacity=".45"
              />
              <path
                className="a-dust"
                d="M3 25.5h3.5M1.5 23h3"
                strokeWidth={1}
                opacity=".5"
              />
              <g className="a-gallop">
                <g transform="translate(10.2 15.4)" className="far">
                  <g className="a-hu far">
                    <path d="M0 0L-1.3 4.8" strokeWidth="2.7" />
                    <g transform="translate(-1.3 4.8)">
                      <g className="a-hl far">
                        <path d="M0 0L.5 5.8" strokeWidth="1.2" />
                        <path d="M.1 6.1h1.5" strokeWidth="1.5" />
                      </g>
                    </g>
                  </g>
                </g>
                <g transform="translate(20.6 16.4)" className="far">
                  <g className="a-fu far">
                    <path d="M0 0L.3 4.4" strokeWidth="2.3" />
                    <g transform="translate(.3 4.4)">
                      <g className="a-fl far">
                        <path d="M0 0V5.2" strokeWidth="1.2" />
                        <path d="M-.4 5.5h1.5" strokeWidth="1.5" />
                      </g>
                    </g>
                  </g>
                </g>
                <g transform="translate(8 13.4)">
                  <path
                    className="a-tail"
                    d="M0 0C-2.2 0-4.4 1-6.4 3.2-5 2.8-3.6 2.7-2.3 3-3.6 3.7-4.6 4.8-5.2 6.2-3 4.9-1 3.1.2 1.6z"
                    fill="currentColor"
                    stroke="none"
                  />
                </g>
                <path
                  d="M9 12.2C12 11.4 16 12.2 19.5 11.2 21.5 10.4 23 8.2 24.4 6.4L24.8 4.6 25.7 6C27 6.6 28.8 8.4 30 9.8 30.4 10.4 30 11.3 29.2 11.2 27.8 10.9 26.6 10.6 25.8 10.9 24.6 12.2 23.4 14.4 22.6 16.2 22.2 17.4 21 18.2 19.6 18.4 16.5 18.9 13.5 18.8 11 18.2 9 17.8 7.6 16.6 7.5 14.8 7.5 13.6 8 12.8 9 12.2z"
                  fill="currentColor"
                  stroke="none"
                />
                <path
                  className="a-mane"
                  d="M20.6 10.7l-2.1.7M21.7 9.6l-2.2.5M22.7 8.4l-2.1.3M23.6 7.2l-1.8.1"
                  strokeWidth=".7"
                />
                <circle
                  cx="27.1"
                  cy="8.3"
                  r=".5"
                  fill="#0B0B0C"
                  stroke="none"
                />
                <circle
                  cx="29.5"
                  cy="10.2"
                  r=".32"
                  fill="#0B0B0C"
                  stroke="none"
                />
                <g transform="translate(11.4 15.8)" className="near">
                  <g className="a-hu near">
                    <path d="M0 0L-1.3 4.8" strokeWidth="2.7" />
                    <g transform="translate(-1.3 4.8)">
                      <g className="a-hl near">
                        <path d="M0 0L.5 5.8" strokeWidth="1.2" />
                        <path d="M.1 6.1h1.5" strokeWidth="1.5" />
                      </g>
                    </g>
                  </g>
                </g>
                <g transform="translate(21.4 16.8)" className="near">
                  <g className="a-fu near">
                    <path d="M0 0L.3 4.4" strokeWidth="2.3" />
                    <g transform="translate(.3 4.4)">
                      <g className="a-fl near">
                        <path d="M0 0V5.2" strokeWidth="1.2" />
                        <path d="M-.4 5.5h1.5" strokeWidth="1.5" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Horse racing
          </button>
          <button
            className="chip"
            aria-pressed="false"
            onclick="pickSport('kabaddi')"
          >
            <svg
              className="si si-kabaddi"
              style={{ "--t": "-0.366s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M26 4v25" strokeDasharray="2 2.5" opacity=".45" />
              <path d="M2 29H30" opacity=".35" />
              <g className="a-raid">
                <g transform="translate(13 20)">
                  <circle
                    cx={0}
                    cy={-11}
                    r="2.2"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path d="M0-8.2L-1.2 1" />
                  <g transform="translate(-.4 -6.4)">
                    <path className="a-reach" d="M0 0l6 1.2" />
                  </g>
                  <path d="M-.4-6.4l-4 3" />
                  <path d="M-1.2 1l4.4 7.6M-1.2 1l-4.8 7.6" />
                </g>
              </g>
            </svg>
            Kabaddi
          </button>
        </div>
        <div className="promo-row solo">
          <section
            className="hb"
            id="hb"
            aria-roledescription="carousel"
            aria-label="Promotions"
            style={{ "--px": "-0.429", "--py": "0.247" }}
          >
            <div className="hb-track">
              <div
                className="hb-slide tone-gold"
                role="group"
                aria-roledescription="slide"
                aria-label="1 of 5"
                data-i={0}
                onclick="openLogin('register')"
                aria-hidden="true"
                inert
              >
                <div className="hb-bg" aria-hidden="true">
                  <i className="hb-rays" />
                  <i className="hb-floor" />
                </div>
                <div className="hb-art" aria-hidden="true">
                  <div className="art-coins">
                    <span className="c3 coin" style={{ "--i": 0 }}>
                      <i className="c3-face">7</i>
                    </span>
                    <span className="c3 coin" style={{ "--i": 1 }}>
                      <i className="c3-face">7</i>
                    </span>
                    <span className="c3 coin" style={{ "--i": 2 }}>
                      <i className="c3-face">7</i>
                    </span>
                    <span className="c3 coin" style={{ "--i": 3 }}>
                      <i className="c3-face">7</i>
                    </span>
                    <span className="c3 coin" style={{ "--i": 4 }}>
                      <i className="c3-face">7</i>
                    </span>
                    <span className="c3 coin" style={{ "--i": 5 }}>
                      <i className="c3-face">7</i>
                    </span>
                    <span className="c3 coin fly" style={{ "--i": 6 }}>
                      <i className="c3-face">7</i>
                    </span>
                    <span className="c3 coin fly f2" style={{ "--i": 7 }}>
                      <i className="c3-face">7</i>
                    </span>
                  </div>
                </div>
                <div className="hb-txt">
                  <small>Welcome offer</small>
                  <h2>
                    100% bonus
                    <br />
                    up to <em>10,000</em>
                  </h2>
                  <p>
                    On your first deposit. Join with your mobile in 30 seconds.
                  </p>
                  <span className="btn hb-cta">Join now</span>
                </div>
              </div>
              <div
                className="hb-slide tone-ruby"
                role="group"
                aria-roledescription="slide"
                aria-label="2 of 5"
                data-i={1}
                onclick="toggleDrawer(true)"
                aria-hidden="true"
                inert
              >
                <div className="hb-bg" aria-hidden="true">
                  <i className="hb-rays" />
                  <i className="hb-floor" />
                </div>
                <div className="hb-art" aria-hidden="true">
                  <div className="art-balls">
                    <span
                      className="c3 ball"
                      style={{ "--c": "#e53935", "--i": 0 }}
                    >
                      <i>7</i>
                    </span>
                    <span
                      className="c3 ball"
                      style={{ "--c": "#f2b233", "--i": 1 }}
                    >
                      <i>21</i>
                    </span>
                    <span
                      className="c3 ball"
                      style={{ "--c": "#2e9d4e", "--i": 2 }}
                    >
                      <i>3</i>
                    </span>
                    <span
                      className="c3 ball"
                      style={{ "--c": "#2f7fd6", "--i": 3 }}
                    >
                      <i>49</i>
                    </span>
                    <span
                      className="c3 ball"
                      style={{ "--c": "#9b4ddb", "--i": 4 }}
                    >
                      <i>12</i>
                    </span>
                  </div>
                </div>
                <div className="hb-txt">
                  <small>Daily Jackpot</small>
                  <h2>
                    Win big
                    <br />
                    <em>every 24 hours</em>
                  </h2>
                  <p>
                    Guaranteed 1,00,000 prize pool. One free ticket every day.
                  </p>
                  <span className="btn hb-cta">Get tickets</span>
                </div>
              </div>
              <div
                className="hb-slide tone-violet"
                role="group"
                aria-roledescription="slide"
                aria-label="3 of 5"
                data-i={2}
                onclick="go('partners')"
                aria-hidden="true"
                inert
              >
                <div className="hb-bg" aria-hidden="true">
                  <i className="hb-rays" />
                  <i className="hb-floor" />
                </div>
                <div className="hb-art" aria-hidden="true">
                  <div className="art-gifts">
                    <span className="c3 tile" style={{ "--i": 0 }}>
                      <svg viewBox="0 0 48 48">
                        <rect
                          x={15}
                          y={5}
                          width={18}
                          height={38}
                          rx={4}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                        />
                        <circle cx={24} cy={38} r="1.8" fill="currentColor" />
                      </svg>
                      <b>iPhone</b>
                    </span>
                    <span className="c3 tile big" style={{ "--i": 1 }}>
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinejoin="round"
                      >
                        <path d="M5 30v-5l5-2 5-8h16l6 8 6 2v5z" />
                        <circle cx={14} cy={31} r={4} />
                        <circle cx={35} cy={31} r={4} />
                      </svg>
                      <b>Car</b>
                    </span>
                    <span className="c3 tile" style={{ "--i": 2 }}>
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinejoin="round"
                      >
                        <path d="M4 26l40-14-12 26-7-9zM25 29l-4 9 4-5" />
                      </svg>
                      <b>Dubai</b>
                    </span>
                  </div>
                </div>
                <div className="hb-txt">
                  <small>Refer &amp; Win</small>
                  <h2>
                    Win an <em>iPhone</em>, a Dubai trip
                    <br />— even a car
                  </h2>
                  <p>
                    Invite friends who play. Every friend brings you closer.
                  </p>
                  <span className="btn hb-cta">Refer now</span>
                </div>
              </div>
              <div
                className="hb-slide tone-ice"
                role="group"
                aria-roledescription="slide"
                aria-label="4 of 5"
                data-i={3}
                onclick="go('club')"
                aria-hidden="true"
                inert
              >
                <div className="hb-bg" aria-hidden="true">
                  <i className="hb-rays" />
                  <i className="hb-floor" />
                </div>
                <div className="hb-art" aria-hidden="true">
                  <div className="art-gems">
                    <span
                      className="gem3d b1"
                      data-gem="gold"
                      aria-hidden="true"
                    >
                      <svg viewBox="-2 0 104 92">
                        <defs>
                          <clipPath id="gm1c">
                            <polygon points="4,34 30,12 70,12 96,34 50,88" />
                          </clipPath>
                          <linearGradient
                            id="gm1s"
                            x1={0}
                            x2={1}
                            y1={0}
                            y2=".25"
                          >
                            <stop
                              offset=".35"
                              stopColor="#fff"
                              stopOpacity={0}
                            />
                            <stop
                              offset=".5"
                              stopColor="#fff"
                              stopOpacity=".9"
                            />
                            <stop
                              offset=".65"
                              stopColor="#fff"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <g
                          stroke="rgba(255,246,216,.55)"
                          strokeWidth=".7"
                          strokeLinejoin="round"
                        >
                          <polygon points="4,34 30,12 27,34" fill="#F4D992" />
                          <polygon points="30,12 40,24 27,34" fill="#CDA75C" />
                          <polygon
                            points="30,12 70,12 60,24 40,24"
                            fill="#FFF6D8"
                          />
                          <polygon points="40,24 60,24 50,34" fill="#F4D992" />
                          <polygon points="40,24 50,34 27,34" fill="#FFF6D8" />
                          <polygon points="60,24 73,34 50,34" fill="#CDA75C" />
                          <polygon points="70,12 60,24 73,34" fill="#8E6C2E" />
                          <polygon points="70,12 96,34 73,34" fill="#8E6C2E" />
                          <polygon points="4,34 15.5,52 50,88" fill="#CDA75C" />
                          <polygon
                            points="15.5,52 27,34 50,88"
                            fill="#F4D992"
                          />
                          <polygon points="4,34 27,34 15.5,52" fill="#FFF6D8" />
                          <polygon
                            points="27,34 38.5,52 50,88"
                            fill="#CDA75C"
                          />
                          <polygon
                            points="38.5,52 50,34 50,88"
                            fill="#8E6C2E"
                          />
                          <polygon
                            points="27,34 50,34 38.5,52"
                            fill="#F4D992"
                          />
                          <polygon
                            points="50,34 61.5,52 50,88"
                            fill="#F4D992"
                          />
                          <polygon
                            points="61.5,52 73,34 50,88"
                            fill="#CDA75C"
                          />
                          <polygon
                            points="50,34 73,34 61.5,52"
                            fill="#CDA75C"
                          />
                          <polygon
                            points="73,34 84.5,52 50,88"
                            fill="#8E6C2E"
                          />
                          <polygon
                            points="84.5,52 96,34 50,88"
                            fill="#56401A"
                          />
                          <polygon
                            points="73,34 96,34 84.5,52"
                            fill="#8E6C2E"
                          />
                        </g>
                        <g clipPath="url(#gm1c)">
                          <rect
                            className="gem-sheen"
                            x={-60}
                            y={0}
                            width={60}
                            height={92}
                            fill="url(#gm1s)"
                          />
                        </g>
                        <polygon
                          points="4,34 30,12 70,12 96,34 50,88"
                          fill="none"
                          stroke="rgba(0,0,0,.35)"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                        <path
                          className="gem-spark s1"
                          d="M36 15l1.6 3.6 3.6 1.6-3.6 1.6L36 25.4l-1.6-3.6-3.6-1.6 3.6-1.6z"
                          fill="#fff"
                        />
                        <path
                          className="gem-spark s2"
                          d="M78 30l1.1 2.4 2.4 1.1-2.4 1.1-1.1 2.4-1.1-2.4-2.4-1.1 2.4-1.1z"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    <span
                      className="gem3d b2"
                      data-gem="diamond"
                      aria-hidden="true"
                    >
                      <svg viewBox="-2 0 104 92">
                        <defs>
                          <clipPath id="gm2c">
                            <polygon points="4,34 30,12 70,12 96,34 50,88" />
                          </clipPath>
                          <linearGradient
                            id="gm2s"
                            x1={0}
                            x2={1}
                            y1={0}
                            y2=".25"
                          >
                            <stop
                              offset=".35"
                              stopColor="#fff"
                              stopOpacity={0}
                            />
                            <stop
                              offset=".5"
                              stopColor="#fff"
                              stopOpacity=".9"
                            />
                            <stop
                              offset=".65"
                              stopColor="#fff"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <g
                          stroke="rgba(235,252,255,.8)"
                          strokeWidth=".7"
                          strokeLinejoin="round"
                        >
                          <polygon points="4,34 30,12 27,34" fill="#D6F6FF" />
                          <polygon points="30,12 40,24 27,34" fill="#93D8F2" />
                          <polygon
                            points="30,12 70,12 60,24 40,24"
                            fill="#FFFFFF"
                          />
                          <polygon points="40,24 60,24 50,34" fill="#D6F6FF" />
                          <polygon points="40,24 50,34 27,34" fill="#FFFFFF" />
                          <polygon points="60,24 73,34 50,34" fill="#93D8F2" />
                          <polygon points="70,12 60,24 73,34" fill="#3F9CC7" />
                          <polygon points="70,12 96,34 73,34" fill="#3F9CC7" />
                          <polygon points="4,34 15.5,52 50,88" fill="#93D8F2" />
                          <polygon
                            points="15.5,52 27,34 50,88"
                            fill="#D6F6FF"
                          />
                          <polygon points="4,34 27,34 15.5,52" fill="#FFFFFF" />
                          <polygon
                            points="27,34 38.5,52 50,88"
                            fill="#93D8F2"
                          />
                          <polygon
                            points="38.5,52 50,34 50,88"
                            fill="#3F9CC7"
                          />
                          <polygon
                            points="27,34 50,34 38.5,52"
                            fill="#D6F6FF"
                          />
                          <polygon
                            points="50,34 61.5,52 50,88"
                            fill="#D6F6FF"
                          />
                          <polygon
                            points="61.5,52 73,34 50,88"
                            fill="#93D8F2"
                          />
                          <polygon
                            points="50,34 73,34 61.5,52"
                            fill="#93D8F2"
                          />
                          <polygon
                            points="73,34 84.5,52 50,88"
                            fill="#3F9CC7"
                          />
                          <polygon
                            points="84.5,52 96,34 50,88"
                            fill="#1B5A7C"
                          />
                          <polygon
                            points="73,34 96,34 84.5,52"
                            fill="#3F9CC7"
                          />
                        </g>
                        <g clipPath="url(#gm2c)">
                          <rect
                            className="gem-sheen"
                            x={-60}
                            y={0}
                            width={60}
                            height={92}
                            fill="url(#gm2s)"
                          />
                        </g>
                        <polygon
                          points="4,34 30,12 70,12 96,34 50,88"
                          fill="none"
                          stroke="rgba(0,0,0,.35)"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                        <path
                          className="gem-spark s1"
                          d="M36 15l1.6 3.6 3.6 1.6-3.6 1.6L36 25.4l-1.6-3.6-3.6-1.6 3.6-1.6z"
                          fill="#fff"
                        />
                        <path
                          className="gem-spark s2"
                          d="M78 30l1.1 2.4 2.4 1.1-2.4 1.1-1.1 2.4-1.1-2.4-2.4-1.1 2.4-1.1z"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    <span
                      className="gem3d b3"
                      data-gem="platinum"
                      aria-hidden="true"
                    >
                      <svg viewBox="-2 0 104 92">
                        <defs>
                          <clipPath id="gm3c">
                            <polygon points="4,34 30,12 70,12 96,34 50,88" />
                          </clipPath>
                          <linearGradient
                            id="gm3s"
                            x1={0}
                            x2={1}
                            y1={0}
                            y2=".25"
                          >
                            <stop
                              offset=".35"
                              stopColor="#fff"
                              stopOpacity={0}
                            />
                            <stop
                              offset=".5"
                              stopColor="#fff"
                              stopOpacity=".9"
                            />
                            <stop
                              offset=".65"
                              stopColor="#fff"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <g
                          stroke="rgba(255,255,255,.7)"
                          strokeWidth=".7"
                          strokeLinejoin="round"
                        >
                          <polygon points="4,34 30,12 27,34" fill="#F3F5F8" />
                          <polygon points="30,12 40,24 27,34" fill="#D2D8DF" />
                          <polygon
                            points="30,12 70,12 60,24 40,24"
                            fill="#FFFFFF"
                          />
                          <polygon points="40,24 60,24 50,34" fill="#F3F5F8" />
                          <polygon points="40,24 50,34 27,34" fill="#FFFFFF" />
                          <polygon points="60,24 73,34 50,34" fill="#D2D8DF" />
                          <polygon points="70,12 60,24 73,34" fill="#9EA7B1" />
                          <polygon points="70,12 96,34 73,34" fill="#9EA7B1" />
                          <polygon points="4,34 15.5,52 50,88" fill="#D2D8DF" />
                          <polygon
                            points="15.5,52 27,34 50,88"
                            fill="#F3F5F8"
                          />
                          <polygon points="4,34 27,34 15.5,52" fill="#FFFFFF" />
                          <polygon
                            points="27,34 38.5,52 50,88"
                            fill="#D2D8DF"
                          />
                          <polygon
                            points="38.5,52 50,34 50,88"
                            fill="#9EA7B1"
                          />
                          <polygon
                            points="27,34 50,34 38.5,52"
                            fill="#F3F5F8"
                          />
                          <polygon
                            points="50,34 61.5,52 50,88"
                            fill="#F3F5F8"
                          />
                          <polygon
                            points="61.5,52 73,34 50,88"
                            fill="#D2D8DF"
                          />
                          <polygon
                            points="50,34 73,34 61.5,52"
                            fill="#D2D8DF"
                          />
                          <polygon
                            points="73,34 84.5,52 50,88"
                            fill="#9EA7B1"
                          />
                          <polygon
                            points="84.5,52 96,34 50,88"
                            fill="#68727D"
                          />
                          <polygon
                            points="73,34 96,34 84.5,52"
                            fill="#9EA7B1"
                          />
                        </g>
                        <g clipPath="url(#gm3c)">
                          <rect
                            className="gem-sheen"
                            x={-60}
                            y={0}
                            width={60}
                            height={92}
                            fill="url(#gm3s)"
                          />
                        </g>
                        <polygon
                          points="4,34 30,12 70,12 96,34 50,88"
                          fill="none"
                          stroke="rgba(0,0,0,.35)"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                        <path
                          className="gem-spark s1"
                          d="M36 15l1.6 3.6 3.6 1.6-3.6 1.6L36 25.4l-1.6-3.6-3.6-1.6 3.6-1.6z"
                          fill="#fff"
                        />
                        <path
                          className="gem-spark s2"
                          d="M78 30l1.1 2.4 2.4 1.1-2.4 1.1-1.1 2.4-1.1-2.4-2.4-1.1 2.4-1.1z"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="hb-txt">
                  <small>The SevenX Club</small>
                  <h2>
                    Rise through
                    <br />
                    <em>six levels</em>
                  </h2>
                  <p>
                    Up to 12% cashback, 30-minute withdrawals and a personal
                    manager.
                  </p>
                  <span className="btn hb-cta">Explore the Club</span>
                </div>
              </div>
              <div
                className="hb-slide tone-teal on"
                role="group"
                aria-roledescription="slide"
                aria-label="5 of 5"
                data-i={4}
                onclick="
            state.payTab = 'crypto';
            go('wallet');
          "
                aria-hidden="false"
              >
                <div className="hb-bg" aria-hidden="true">
                  <i className="hb-rays" />
                  <i className="hb-floor" />
                </div>
                <div className="hb-art" aria-hidden="true">
                  <div className="art-crypto">
                    <span
                      className="c3 ball cc"
                      style={{ "--c": "#26a17b", "--i": 0 }}
                    >
                      <i>₮</i>
                    </span>
                    <span
                      className="c3 ball cc"
                      style={{ "--c": "#f7931a", "--i": 1 }}
                    >
                      <i>₿</i>
                    </span>
                    <span
                      className="c3 ball cc"
                      style={{ "--c": "#627eea", "--i": 2 }}
                    >
                      <i>Ξ</i>
                    </span>
                    <span
                      className="c3 ball cc"
                      style={{ "--c": "#a6a9aa", "--i": 3 }}
                    >
                      <i>Ł</i>
                    </span>
                  </div>
                </div>
                <div className="hb-txt">
                  <small>Crypto</small>
                  <h2>
                    Play with
                    <br />
                    <em>crypto</em>
                  </h2>
                  <p>Deposit USDT, BTC, ETH, TRX and LTC. Fast withdrawals.</p>
                  <span className="btn hb-cta">Deposit crypto</span>
                </div>
              </div>
            </div>
            <button className="hb-nav prev" aria-label="Previous promotion">
              ‹
            </button>
            <button className="hb-nav next" aria-label="Next promotion">
              ›
            </button>
            <div className="hb-dots">
              <button
                aria-label="Promotion 1"
                data-go={0}
                aria-current="false"
              />
              <button
                aria-label="Promotion 2"
                data-go={1}
                aria-current="false"
              />
              <button
                aria-label="Promotion 3"
                data-go={2}
                aria-current="false"
              />
              <button
                aria-label="Promotion 4"
                data-go={3}
                aria-current="false"
              />
              <button
                aria-label="Promotion 5"
                data-go={4}
                aria-current="true"
              />
            </div>
          </section>
        </div>
        <button className="qp-card" onclick="openQuickPay()">
          <span className="qp-qr">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 3h7v7H3zM5 5v3h3V5zM14 3h7v7h-7zm2 2v3h3V5zM3 14h7v7H3zm2 2v3h3v-3zM14 14h3v3h-3zM18 14h3v2h-3zM14 18h2v3h-2zM18 18h3v3h-3z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="qp-t">
            <b>Deposit in 10 seconds</b>
            <small>UPI · GPay · PhonePe · Paytm — or Bank +5%</small>
          </span>
          <span className="qp-go">Pay ›</span>
        </button>
        <section className="cbx" aria-label="Casino games">
          <div className="cbx-head">
            <h2>Casino</h2>
            <small>Live tables · Indian classics · Instant wins</small>
            <span className="sp" />
            <button className="cbx-all" onclick="go('casino')">
              View all →
            </button>
            <button
              className="cbx-nav"
              onclick="c3bScroll(-1)"
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button
              className="cbx-nav"
              onclick="c3bScroll(1)"
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
          <div className="cbx-track" id="c3bTrack">
            <button
              className="cbx-t"
              style={{ "--h": "#e63946" }}
              onclick="
          state.casinoCat = 'live';
          go('casino');
        "
              aria-label="Live Casino"
            >
              <span className="cbx-svg">
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="lvhl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="lvdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="lvdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="lvgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={30}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <path d="M12 48v5.5a14 5.8 0 0 0 28 0V48" fill="#000" />
                  <path
                    d="M12 50.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={26} cy={48} rx={14} ry="5.8" fill="#1A1A1A" />
                  <ellipse
                    cx={26}
                    cy={48}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={26}
                    cy={48}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#lvhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M12 42v5.5a14 5.8 0 0 0 28 0V42" fill="#000" />
                  <path
                    d="M12 44.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={26} cy={42} rx={14} ry="5.8" fill="#1A1A1A" />
                  <ellipse
                    cx={26}
                    cy={42}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={26}
                    cy={42}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#lvhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M12 36v5.5a14 5.8 0 0 0 28 0V36" fill="#000" />
                  <path
                    d="M12 38.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#E7C35A"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={26} cy={36} rx={14} ry="5.8" fill="#1A1A1A" />
                  <ellipse
                    cx={26}
                    cy={36}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#E7C35A"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={26}
                    cy={36}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#lvhl)"
                    stroke="#E7C35A"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M36 50v5.5a14 5.8 0 0 0 28 0V50" fill="#8E1020" />
                  <path
                    d="M36 52.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={50} cy={50} rx={14} ry="5.8" fill="#D7263D" />
                  <ellipse
                    cx={50}
                    cy={50}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={50}
                    cy={50}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#lvhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M36 44v5.5a14 5.8 0 0 0 28 0V44" fill="#8E1020" />
                  <path
                    d="M36 46.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={50} cy={44} rx={14} ry="5.8" fill="#D7263D" />
                  <ellipse
                    cx={50}
                    cy={44}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={50}
                    cy={44}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#lvhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M36 38v5.5a14 5.8 0 0 0 28 0V38" fill="#8E1020" />
                  <path
                    d="M36 40.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={50} cy={38} rx={14} ry="5.8" fill="#D7263D" />
                  <ellipse
                    cx={50}
                    cy={38}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={50}
                    cy={38}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#lvhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M36 32v5.5a14 5.8 0 0 0 28 0V32" fill="#8E1020" />
                  <path
                    d="M36 34.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={50} cy={32} rx={14} ry="5.8" fill="#D7263D" />
                  <ellipse
                    cx={50}
                    cy={32}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={50}
                    cy={32}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#lvhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <g transform="translate(38 16) rotate(-18)">
                    <ellipse rx={11} ry={11} fill="#8A5A12" />
                    <ellipse
                      rx={11}
                      ry={11}
                      fill="url(#lvgold)"
                      transform="translate(-1.2 -1)"
                    />
                    <path
                      d="M-1.2-8l2 4.6 5 .4-3.8 3.2 1.2 4.9-4.4-2.6-4.4 2.6 1.2-4.9-3.8-3.2 5-.4z"
                      fill="#FFF6C8"
                      opacity=".9"
                    />
                  </g>
                </svg>
              </span>
              <i className="cbx-tag live">LIVE</i>
              <span className="cbx-l">
                <b>Live Casino</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#f77f00" }}
              onclick="
          state.casinoCat = 'cards';
          go('casino');
        "
              aria-label="Indian Games"
            >
              <span className="cbx-svg">
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="inhl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="indl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="indr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="ingold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={30}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <g transform="translate(30 32) rotate(-20)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      K
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      ♠
                    </text>
                  </g>
                  <g transform="translate(38 29) rotate(-4)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      A
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      ♥
                    </text>
                  </g>
                  <g transform="translate(47 30) rotate(14)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      Q
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      ♦
                    </text>
                  </g>
                  <g transform="translate(20 49) scale(1.05)">
                    <path d="M0-10 10-5 0 0-10-5Z" fill="#FFFFFF" />
                    <path d="M-10-5 0 0V11L-10 6Z" fill="url(#indl)" />
                    <path d="M10-5 0 0V11L10 6Z" fill="url(#indr)" />
                    <ellipse cx={0} cy={-5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse
                      cx="-5.5"
                      cy={-2}
                      rx="1.25"
                      ry={1}
                      fill="#C1121F"
                    />
                    <ellipse cx="-4.5" cy={5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={3} cy="1.5" rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={5} cy={4} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={7} cy="6.5" rx="1.25" ry={1} fill="#C1121F" />
                  </g>
                  <g transform="translate(60 50) scale(0.95)">
                    <path d="M0-10 10-5 0 0-10-5Z" fill="#FFFFFF" />
                    <path d="M-10-5 0 0V11L-10 6Z" fill="url(#indl)" />
                    <path d="M10-5 0 0V11L10 6Z" fill="url(#indr)" />
                    <ellipse cx={0} cy={-5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse
                      cx="-5.5"
                      cy={-2}
                      rx="1.25"
                      ry={1}
                      fill="#C1121F"
                    />
                    <ellipse cx="-4.5" cy={5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={3} cy="1.5" rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={5} cy={4} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={7} cy="6.5" rx="1.25" ry={1} fill="#C1121F" />
                  </g>
                </svg>
              </span>
              <span className="cbx-l">
                <b>Indian Games</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#d62828" }}
              onclick="openGame('teen-patti')"
              aria-label="Teen Patti"
            >
              <span className="cbx-svg">
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="tphl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="tpdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="tpdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="tpgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={24}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <g transform="translate(28 35) rotate(-22)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      Q
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      ♥
                    </text>
                  </g>
                  <g transform="translate(40 31) rotate(0)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      K
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      ♥
                    </text>
                  </g>
                  <g transform="translate(52 35) rotate(22)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      A
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      ♥
                    </text>
                  </g>
                </svg>
              </span>
              <i className="cbx-tag live">LIVE</i>
              <span className="cbx-l">
                <b>Teen Patti</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#8338ec" }}
              onclick="openGame('andar-bahar')"
              aria-label="Andar Bahar"
            >
              <span className="cbx-svg">
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="abhl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="abdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="abdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="abgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={30}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <g transform="translate(22 40) rotate(-10)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cback)"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                  </g>
                  <g transform="translate(58 40) rotate(10)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cback)"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                  </g>
                  <g transform="translate(40 30) rotate(-4)">
                    <rect
                      x={-12}
                      y={-18}
                      width={24}
                      height={34}
                      rx="3.2"
                      fill="#000"
                      opacity=".3"
                      transform="translate(1.6 2)"
                    />
                    <rect
                      x={-12}
                      y={-18}
                      width={24}
                      height={34}
                      rx="3.2"
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.2)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-12}
                      y={-18}
                      width={24}
                      height={34}
                      rx="3.2"
                      fill="url(#cshine)"
                    />
                    <path
                      d="M-6 4 0-10 6 4Z"
                      fill="url(#abgold)"
                      stroke="#8A5A12"
                      strokeWidth=".6"
                    />
                    <circle cy={-10} r={2} fill="#D7263D" />
                    <circle cx={-6} cy={4} r="1.6" fill="#1D4ED8" />
                    <circle cx={6} cy={4} r="1.6" fill="#16A34A" />
                    <text
                      y={13}
                      textAnchor="middle"
                      fontSize="6.5"
                      fontWeight={800}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      JOKER
                    </text>
                  </g>
                </svg>
              </span>
              <span className="cbx-l">
                <b>Andar Bahar</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#2a9d8f" }}
              onclick="openGame('roulette')"
              aria-label="Roulette"
            >
              <span className="cbx-svg">
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="rlhl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="rldl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="rldr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="rlgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <defs>
                    <linearGradient id="rlwood" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#B7773A" />
                      <stop offset={1} stopColor="#5A3212" />
                    </linearGradient>
                    <radialGradient id="rlcone" cx=".45" cy=".35" r=".7">
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".5" stopColor="#E2A93B" />
                      <stop offset={1} stopColor="#7A4D10" />
                    </radialGradient>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={32}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <path d="M8 36v6a32 13 0 0 0 64 0v-6" fill="#3A1F0A" />
                  <ellipse
                    cx={40}
                    cy={36}
                    rx={32}
                    ry={13}
                    fill="url(#rlwood)"
                  />
                  <ellipse cx={40} cy={36} rx={26} ry="10.5" fill="#1A1A1A" />
                  <ellipse
                    cx={40}
                    cy={36}
                    rx={24}
                    ry="9.6"
                    fill="none"
                    stroke="#C81E32"
                    strokeWidth={5}
                    strokeDasharray="3.2 3.2"
                  />
                  <ellipse
                    cx={40}
                    cy={36}
                    rx={24}
                    ry="9.6"
                    fill="none"
                    stroke="#E6C46E"
                    strokeWidth=".6"
                  />
                  <ellipse cx={40} cy={35} rx={15} ry={6} fill="url(#rlcone)" />
                  <path
                    d="M40 22v12M33 29h14"
                    stroke="#F6E6BA"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <circle cx={40} cy={22} r="2.4" fill="#FFF3B0" />
                  <circle cx={57} cy={38} r="2.2" fill="#fff" />
                  <circle cx="56.4" cy="37.3" r=".8" fill="#fff" opacity=".9" />
                </svg>
              </span>
              <span className="cbx-l">
                <b>Roulette</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#e9c46a" }}
              onclick="openGame('baccarat')"
              aria-label="Baccarat"
            >
              <span className="cbx-svg">
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="bchl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="bcdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="bcdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="bcgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={26}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <g transform="translate(32 38) rotate(-14)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      9
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      ♦
                    </text>
                  </g>
                  <g transform="translate(48 38) rotate(12)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      K
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      ♠
                    </text>
                  </g>
                  <g transform="translate(40 12)">
                    <path
                      d="M-14 6-16-6-7 0 0-10 7 0 16-6 14 6Z"
                      fill="#8A5A12"
                    />
                    <path
                      d="M-14 5-16-7-7-1 0-11 7-1 16-7 14 5Z"
                      fill="url(#bcgold)"
                    />
                    <rect
                      x="-14.5"
                      y={4}
                      width={29}
                      height={5}
                      rx="1.5"
                      fill="url(#bcgold)"
                      stroke="#8A5A12"
                      strokeWidth=".6"
                    />
                    <circle cx={0} cy={-11} r="1.8" fill="#D7263D" />
                    <circle cx={-16} cy={-7} r="1.5" fill="#1D4ED8" />
                    <circle cx={16} cy={-7} r="1.5" fill="#16A34A" />
                  </g>
                </svg>
              </span>
              <span className="cbx-l">
                <b>Baccarat</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#3a86ff" }}
              onclick="
          state.casinoCat = 'instant';
          go('casino');
        "
              aria-label="Instant Games"
            >
              <span className="cbx-svg">
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="cihl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="cidl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="cidr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="cigold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <defs>
                    <linearGradient id="cib" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FF6B6B" />
                      <stop offset={1} stopColor="#B3122B" />
                    </linearGradient>
                    <linearGradient id="ciw" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFE08A" />
                      <stop offset={1} stopColor="#E0A100" />
                    </linearGradient>
                  </defs>
                  <ellipse
                    cx={44}
                    cy={58}
                    rx={20}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <path
                    d="M2 52C14 50 24 45 30 39"
                    stroke="#fff"
                    strokeWidth={3}
                    strokeLinecap="round"
                    opacity=".4"
                    fill="none"
                    strokeDasharray="1 5"
                  />
                  <g transform="translate(44 30) rotate(-16)">
                    <path d="M-2-2-10-13H-4L7-3Z" fill="#C08A00" />
                    <path d="M-20-1-25-13H-19L-13-2Z" fill="#8E1020" />
                    <path
                      d="M-22 0C-22-4-10-6 8-5 18-4.5 24-2 24 0S18 4.5 8 5C-10 6-22 4-22 0Z"
                      fill="url(#cib)"
                    />
                    <path
                      d="M-18-2C-8-4.5 8-4.5 20-2.5"
                      stroke="#fff"
                      strokeWidth="1.2"
                      opacity=".45"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <ellipse
                      cx={11}
                      cy="-2.6"
                      rx="4.2"
                      ry="2.1"
                      fill="#BFE9FF"
                      stroke="#fff"
                      strokeWidth=".7"
                    />
                    <path d="M-20 1-26 6H-21L-15 2Z" fill="#B3122B" />
                    <path d="M-2 2-12 16H-3L9 3Z" fill="url(#ciw)" />
                    <path
                      d="M-10 13.5H-3.5"
                      stroke="#fff"
                      strokeWidth=".8"
                      opacity=".6"
                    />
                    <ellipse
                      cx="25.5"
                      cy={0}
                      rx="1.6"
                      ry={9}
                      fill="#E6EDF2"
                      opacity=".55"
                    />
                    <circle
                      cx="24.6"
                      cy={0}
                      r={2}
                      fill="#F2C14E"
                      stroke="#8A5A12"
                      strokeWidth=".5"
                    />
                  </g>
                </svg>
              </span>
              <i className="cbx-tag">HOT</i>
              <span className="cbx-l">
                <b>Instant Games</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#f15bb5" }}
              onclick="
          state.casinoCat = 'live';
          go('casino');
        "
              aria-label="Game Shows"
            >
              <span className="cbx-svg">
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="gshl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="gsdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="gsdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="gsgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={20}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <path
                    d="M33 56 40 42 47 56Z"
                    fill="url(#gsgold)"
                    stroke="#8A5A12"
                    strokeWidth=".6"
                  />
                  <g transform="translate(40 26) rotate(12)">
                    <circle r={23} fill="#7A4D10" />
                    <circle r={22} fill="url(#gsgold)" />
                    <path
                      d="M0 0L17.00 0.00A17 17 0 0 1 12.02 12.02Z"
                      fill="#E63946"
                    />
                    <path
                      d="M0 0L12.02 12.02A17 17 0 0 1 0.00 17.00Z"
                      fill="#F4A261"
                    />
                    <path
                      d="M0 0L0.00 17.00A17 17 0 0 1 -12.02 12.02Z"
                      fill="#2A9D8F"
                    />
                    <path
                      d="M0 0L-12.02 12.02A17 17 0 0 1 -17.00 0.00Z"
                      fill="#457B9D"
                    />
                    <path
                      d="M0 0L-17.00 0.00A17 17 0 0 1 -12.02 -12.02Z"
                      fill="#9B5DE5"
                    />
                    <path
                      d="M0 0L-12.02 -12.02A17 17 0 0 1 -0.00 -17.00Z"
                      fill="#F15BB5"
                    />
                    <path
                      d="M0 0L-0.00 -17.00A17 17 0 0 1 12.02 -12.02Z"
                      fill="#FEE440"
                    />
                    <path
                      d="M0 0L12.02 -12.02A17 17 0 0 1 17.00 -0.00Z"
                      fill="#00BBF9"
                    />
                    <circle cx="20.50" cy={0.0} r="1.4" fill="#FFF6C8" />
                    <circle cx="17.75" cy="10.25" r="1.4" fill="#FFF6C8" />
                    <circle cx="10.25" cy="17.75" r="1.4" fill="#FFF6C8" />
                    <circle cx={0.0} cy="20.50" r="1.4" fill="#FFF6C8" />
                    <circle cx="-10.25" cy="17.75" r="1.4" fill="#FFF6C8" />
                    <circle cx="-17.75" cy="10.25" r="1.4" fill="#FFF6C8" />
                    <circle cx="-20.50" cy={0.0} r="1.4" fill="#FFF6C8" />
                    <circle cx="-17.75" cy="-10.25" r="1.4" fill="#FFF6C8" />
                    <circle cx="-10.25" cy="-17.75" r="1.4" fill="#FFF6C8" />
                    <circle cx={-0.0} cy="-20.50" r="1.4" fill="#FFF6C8" />
                    <circle cx="10.25" cy="-17.75" r="1.4" fill="#FFF6C8" />
                    <circle cx="17.75" cy="-10.25" r="1.4" fill="#FFF6C8" />
                    <circle r={17} fill="url(#gshl)" opacity=".25" />
                    <circle
                      r="4.5"
                      fill="url(#gsgold)"
                      stroke="#8A5A12"
                      strokeWidth=".6"
                    />
                  </g>
                  <path
                    d="M40 0 45 6 40 10 35 6Z"
                    fill="#D7263D"
                    stroke="#fff"
                    strokeWidth=".8"
                  />
                </svg>
              </span>
              <span className="cbx-l">
                <b>Game Shows</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#c1121f" }}
              onclick="openGame('dragon-tiger')"
              aria-label="Dragon Tiger"
            >
              <span className="cbx-svg">
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="dthl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="dtdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="dtdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="dtgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <defs>
                    <linearGradient id="dtt" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFFFFF" />
                      <stop offset={1} stopColor="#D9D4CA" />
                    </linearGradient>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={30}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <g transform="translate(26 34) rotate(-10)">
                    <rect
                      x={-12}
                      y={-17}
                      width={24}
                      height={33}
                      rx={4}
                      fill="#1E6B3A"
                    />
                    <rect
                      x={-12}
                      y={-19}
                      width={24}
                      height={33}
                      rx={4}
                      fill="url(#dtt)"
                      stroke="rgba(0,0,0,.2)"
                      strokeWidth=".6"
                    />
                    <text
                      y={4}
                      textAnchor="middle"
                      fontSize={17}
                      fontWeight={900}
                      fill="#C1121F"
                      fontFamily="'Microsoft YaHei','SimHei','Noto Sans CJK SC',serif"
                    >
                      龍
                    </text>
                  </g>
                  <g transform="translate(54 34) rotate(10)">
                    <rect
                      x={-12}
                      y={-17}
                      width={24}
                      height={33}
                      rx={4}
                      fill="#1E3F8A"
                    />
                    <rect
                      x={-12}
                      y={-19}
                      width={24}
                      height={33}
                      rx={4}
                      fill="url(#dtt)"
                      stroke="rgba(0,0,0,.2)"
                      strokeWidth=".6"
                    />
                    <text
                      y={4}
                      textAnchor="middle"
                      fontSize={17}
                      fontWeight={900}
                      fill="#E07A00"
                      fontFamily="'Microsoft YaHei','SimHei','Noto Sans CJK SC',serif"
                    >
                      虎
                    </text>
                  </g>
                </svg>
              </span>
              <span className="cbx-l">
                <b>Dragon Tiger</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#264653" }}
              onclick="openGame('blackjack')"
              aria-label="Blackjack"
            >
              <img
                src="/casino3d/blackjack.webp"
                alt=""
                width={440}
                height={500}
                loading="lazy"
                decoding="async"
                onerror="
            this.nextElementSibling.hidden = false;
            this.remove();
          "
              />
              <span className="cbx-svg" hidden>
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="bjhl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="bjdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="bjdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="bjgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={28}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <g transform="translate(33 31) rotate(-12)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      A
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      ♠
                    </text>
                  </g>
                  <g transform="translate(47 31) rotate(10)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      J
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      ♠
                    </text>
                  </g>
                  <path d="M42 50v5.5a14 5.8 0 0 0 28 0V50" fill="#11307F" />
                  <path
                    d="M42 52.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={56} cy={50} rx={14} ry="5.8" fill="#1D4ED8" />
                  <ellipse
                    cx={56}
                    cy={50}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={56}
                    cy={50}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#bjhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M42 45v5.5a14 5.8 0 0 0 28 0V45" fill="#11307F" />
                  <path
                    d="M42 47.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={56} cy={45} rx={14} ry="5.8" fill="#1D4ED8" />
                  <ellipse
                    cx={56}
                    cy={45}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={56}
                    cy={45}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#bjhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                </svg>
              </span>
              <span className="cbx-l">
                <b>Blackjack</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#16a34a" }}
              onclick="openGame('poker')"
              aria-label="Poker"
            >
              <img
                src="/casino3d/poker.webp"
                alt=""
                width={440}
                height={500}
                loading="lazy"
                decoding="async"
                onerror="
            this.nextElementSibling.hidden = false;
            this.remove();
          "
              />
              <span className="cbx-svg" hidden>
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="pkhl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="pkdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="pkdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="pkgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={30}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <path d="M14 50v5.5a14 5.8 0 0 0 28 0V50" fill="#0B5E2A" />
                  <path
                    d="M14 52.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={28} cy={50} rx={14} ry="5.8" fill="#16A34A" />
                  <ellipse
                    cx={28}
                    cy={50}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={28}
                    cy={50}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#pkhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M14 44v5.5a14 5.8 0 0 0 28 0V44" fill="#0B5E2A" />
                  <path
                    d="M14 46.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={28} cy={44} rx={14} ry="5.8" fill="#16A34A" />
                  <ellipse
                    cx={28}
                    cy={44}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={28}
                    cy={44}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#pkhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M14 38v5.5a14 5.8 0 0 0 28 0V38" fill="#0B5E2A" />
                  <path
                    d="M14 40.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={28} cy={38} rx={14} ry="5.8" fill="#16A34A" />
                  <ellipse
                    cx={28}
                    cy={38}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={28}
                    cy={38}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#pkhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M38 50v5.5a14 5.8 0 0 0 28 0V50" fill="#000" />
                  <path
                    d="M38 52.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#E7C35A"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={52} cy={50} rx={14} ry="5.8" fill="#1A1A1A" />
                  <ellipse
                    cx={52}
                    cy={50}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#E7C35A"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={52}
                    cy={50}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#pkhl)"
                    stroke="#E7C35A"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M38 44v5.5a14 5.8 0 0 0 28 0V44" fill="#8E1020" />
                  <path
                    d="M38 46.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={52} cy={44} rx={14} ry="5.8" fill="#D7263D" />
                  <ellipse
                    cx={52}
                    cy={44}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={52}
                    cy={44}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#pkhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M38 38v5.5a14 5.8 0 0 0 28 0V38" fill="#000" />
                  <path
                    d="M38 40.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#E7C35A"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={52} cy={38} rx={14} ry="5.8" fill="#1A1A1A" />
                  <ellipse
                    cx={52}
                    cy={38}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#E7C35A"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={52}
                    cy={38}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#pkhl)"
                    stroke="#E7C35A"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M38 32v5.5a14 5.8 0 0 0 28 0V32" fill="#8E1020" />
                  <path
                    d="M38 34.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={52} cy={32} rx={14} ry="5.8" fill="#D7263D" />
                  <ellipse
                    cx={52}
                    cy={32}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={52}
                    cy={32}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#pkhl)"
                    stroke="#fff"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <path d="M38 26v5.5a14 5.8 0 0 0 28 0V26" fill="#000" />
                  <path
                    d="M38 28.6a14 5.8 0 0 0 28 0"
                    fill="none"
                    stroke="#E7C35A"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                    opacity=".85"
                  />
                  <ellipse cx={52} cy={26} rx={14} ry="5.8" fill="#1A1A1A" />
                  <ellipse
                    cx={52}
                    cy={26}
                    rx={14}
                    ry="5.8"
                    fill="none"
                    stroke="#E7C35A"
                    strokeWidth="2.2"
                    strokeDasharray="3.2 4.2"
                  />
                  <ellipse
                    cx={52}
                    cy={26}
                    rx="8.5"
                    ry="3.4"
                    fill="url(#pkhl)"
                    stroke="#E7C35A"
                    strokeWidth=".8"
                    opacity=".95"
                  />
                  <g transform="translate(34 22) rotate(-58)">
                    <path d="M-14 0v5.5a14 5.8 0 0 0 28 0V0" fill="#8E1020" />
                    <path
                      d="M-14 2.6a14 5.8 0 0 0 28 0"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.6"
                      strokeDasharray="3 4"
                      opacity=".85"
                    />
                    <ellipse cx={0} cy={0} rx={14} ry="5.8" fill="#D7263D" />
                    <ellipse
                      cx={0}
                      cy={0}
                      rx={14}
                      ry="5.8"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.2"
                      strokeDasharray="3.2 4.2"
                    />
                    <ellipse
                      cx={0}
                      cy={0}
                      rx="8.5"
                      ry="3.4"
                      fill="url(#pkhl)"
                      stroke="#fff"
                      strokeWidth=".8"
                      opacity=".95"
                    />
                  </g>
                </svg>
              </span>
              <span className="cbx-l">
                <b>Poker</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#ff006e" }}
              onclick="
          state.casinoCat = 'all';
          go('casino');
        "
              aria-label="Slots"
            >
              <img
                src="/casino3d/slots.webp"
                alt=""
                width={440}
                height={500}
                loading="lazy"
                decoding="async"
                onerror="
            this.nextElementSibling.hidden = false;
            this.remove();
          "
              />
              <span className="cbx-svg" hidden>
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="slhl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="sldl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="sldr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="slgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <defs>
                    <linearGradient id="slr" x1={0} y1={0} x2={1} y2={0}>
                      <stop offset={0} stopColor="#7A0E1C" />
                      <stop offset=".45" stopColor="#E23B4E" />
                      <stop offset={1} stopColor="#8E1020" />
                    </linearGradient>
                    <linearGradient id="slg" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#ffffff" />
                      <stop offset={1} stopColor="#E9E4DA" />
                    </linearGradient>
                  </defs>
                  <ellipse
                    cx={38}
                    cy={58}
                    rx={24}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <path d="M18 18Q18 8 38 8T58 18V54H18Z" fill="url(#slr)" />
                  <path
                    d="M18 18Q18 8 38 8T58 18"
                    fill="none"
                    stroke="url(#slgold)"
                    strokeWidth={3}
                  />
                  <rect
                    x={15}
                    y={50}
                    width={46}
                    height={7}
                    rx={2}
                    fill="url(#slgold)"
                  />
                  <rect
                    x={21}
                    y={22}
                    width={34}
                    height={18}
                    rx={3}
                    fill="#1A1A1A"
                  />
                  <rect
                    x="21.5"
                    y={24}
                    width={10}
                    height={14}
                    rx="1.5"
                    fill="url(#slg)"
                  />
                  <text
                    x="26.5"
                    y={35}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight={900}
                    fill="#C1121F"
                    fontFamily="Arial Black,Arial,sans-serif"
                  >
                    7
                  </text>
                  <rect
                    x={33}
                    y={24}
                    width={10}
                    height={14}
                    rx="1.5"
                    fill="url(#slg)"
                  />
                  <text
                    x={38}
                    y={35}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight={900}
                    fill="#C1121F"
                    fontFamily="Arial Black,Arial,sans-serif"
                  >
                    7
                  </text>
                  <rect
                    x="44.5"
                    y={24}
                    width={10}
                    height={14}
                    rx="1.5"
                    fill="url(#slg)"
                  />
                  <text
                    x="49.5"
                    y={35}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight={900}
                    fill="#C1121F"
                    fontFamily="Arial Black,Arial,sans-serif"
                  >
                    7
                  </text>
                  <text
                    x={38}
                    y={17}
                    textAnchor="middle"
                    fontSize="6.5"
                    fontWeight={900}
                    fill="#FFF3B0"
                    fontFamily="Arial,sans-serif"
                    letterSpacing=".5"
                  >
                    JACKPOT
                  </text>
                  <path
                    d="M60 36h5V16"
                    fill="none"
                    stroke="#9AA0A6"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <circle cx={65} cy={13} r={4} fill="#D7263D" />
                  <circle
                    cx="63.8"
                    cy="11.8"
                    r="1.3"
                    fill="#fff"
                    opacity=".8"
                  />
                </svg>
              </span>
              <span className="cbx-l">
                <b>Slots</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#06d6a0" }}
              onclick="
          state.casinoCat = 'live';
          go('casino');
        "
              aria-label="Sic Bo"
            >
              <img
                src="/casino3d/sicbo.webp"
                alt=""
                width={440}
                height={500}
                loading="lazy"
                decoding="async"
                onerror="
            this.nextElementSibling.hidden = false;
            this.remove();
          "
              />
              <span className="cbx-svg" hidden>
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="sbhl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="sbdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="sbdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="sbgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <defs>
                    <radialGradient id="sbf" cx=".5" cy=".4" r=".6">
                      <stop offset={0} stopColor="#2FB36A" />
                      <stop offset={1} stopColor="#0E5A30" />
                    </radialGradient>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={30}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <path d="M12 44v4a28 10 0 0 0 56 0v-4" fill="url(#sbgold)" />
                  <ellipse
                    cx={40}
                    cy={44}
                    rx={28}
                    ry={10}
                    fill="url(#sbf)"
                    stroke="url(#sbgold)"
                    strokeWidth={2}
                  />
                  <g transform="translate(30 38) scale(1)">
                    <path d="M0-10 10-5 0 0-10-5Z" fill="#FFFFFF" />
                    <path d="M-10-5 0 0V11L-10 6Z" fill="url(#sbdl)" />
                    <path d="M10-5 0 0V11L10 6Z" fill="url(#sbdr)" />
                    <ellipse cx={0} cy={-5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse
                      cx="-5.5"
                      cy={-2}
                      rx="1.25"
                      ry={1}
                      fill="#C1121F"
                    />
                    <ellipse cx="-4.5" cy={5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={3} cy="1.5" rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={5} cy={4} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={7} cy="6.5" rx="1.25" ry={1} fill="#C1121F" />
                  </g>
                  <g transform="translate(50 38) scale(1)">
                    <path d="M0-10 10-5 0 0-10-5Z" fill="#FFFFFF" />
                    <path d="M-10-5 0 0V11L-10 6Z" fill="url(#sbdl)" />
                    <path d="M10-5 0 0V11L10 6Z" fill="url(#sbdr)" />
                    <ellipse cx={0} cy={-5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse
                      cx="-5.5"
                      cy={-2}
                      rx="1.25"
                      ry={1}
                      fill="#C1121F"
                    />
                    <ellipse cx="-4.5" cy={5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={3} cy="1.5" rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={5} cy={4} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={7} cy="6.5" rx="1.25" ry={1} fill="#C1121F" />
                  </g>
                  <g transform="translate(40 26) scale(1)">
                    <path d="M0-10 10-5 0 0-10-5Z" fill="#FFFFFF" />
                    <path d="M-10-5 0 0V11L-10 6Z" fill="url(#sbdl)" />
                    <path d="M10-5 0 0V11L10 6Z" fill="url(#sbdr)" />
                    <ellipse cx={0} cy={-5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse
                      cx="-5.5"
                      cy={-2}
                      rx="1.25"
                      ry={1}
                      fill="#C1121F"
                    />
                    <ellipse cx="-4.5" cy={5} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={3} cy="1.5" rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={5} cy={4} rx="1.25" ry={1} fill="#C1121F" />
                    <ellipse cx={7} cy="6.5" rx="1.25" ry={1} fill="#C1121F" />
                  </g>
                  <path
                    d="M14 42Q14 6 40 6T66 42"
                    fill="#BFE9FF"
                    opacity=".16"
                  />
                  <path
                    d="M20 30Q22 12 38 9"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2}
                    opacity=".45"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="cbx-l">
                <b>Sic Bo</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#ffbe0b" }}
              onclick="toggleDrawer(true)"
              aria-label="Lottery"
            >
              <img
                src="/casino3d/lottery.webp"
                alt=""
                width={440}
                height={500}
                loading="lazy"
                decoding="async"
                onerror="
            this.nextElementSibling.hidden = false;
            this.remove();
          "
              />
              <span className="cbx-svg" hidden>
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="lthl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="ltdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="ltdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="ltgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <defs>
                    <radialGradient id="ltsph" cx=".35" cy=".3" r=".75">
                      <stop offset={0} stopColor="#fff" stopOpacity=".75" />
                      <stop offset=".35" stopColor="#fff" stopOpacity={0} />
                      <stop offset={1} stopColor="#000" stopOpacity=".35" />
                    </radialGradient>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={30}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <g transform="translate(44 22) rotate(10)">
                    <rect
                      x={-16}
                      y={-12}
                      width={32}
                      height={24}
                      rx={2}
                      fill="#FFF6D8"
                      stroke="#E2B04A"
                      strokeWidth={1}
                    />
                    <path
                      d="M-16-4h32"
                      stroke="#E2B04A"
                      strokeDasharray="2 2"
                    />
                    <text
                      y={7}
                      textAnchor="middle"
                      fontSize={7}
                      fontWeight={800}
                      fill="#B3122B"
                      fontFamily="Arial,sans-serif"
                    >
                      LOTTO
                    </text>
                  </g>
                  <circle cx={22} cy={46} r={9} fill="#1D4ED8" />
                  <circle cx={22} cy={46} r={9} fill="url(#ltsph)" />
                  <circle cx={22} cy="46.5" r="4.68" fill="#fff" />
                  <text
                    x={22}
                    y="49.6"
                    textAnchor="middle"
                    fontSize="8.1"
                    fontWeight={800}
                    fill="#222"
                    fontFamily="Arial,sans-serif"
                  >
                    7
                  </text>
                  <circle cx={40} cy={48} r={9} fill="#D7263D" />
                  <circle cx={40} cy={48} r={9} fill="url(#ltsph)" />
                  <circle cx={40} cy="48.5" r="4.68" fill="#fff" />
                  <text
                    x={40}
                    y="51.6"
                    textAnchor="middle"
                    fontSize="8.1"
                    fontWeight={800}
                    fill="#222"
                    fontFamily="Arial,sans-serif"
                  >
                    21
                  </text>
                  <circle cx={58} cy={46} r={9} fill="#16A34A" />
                  <circle cx={58} cy={46} r={9} fill="url(#ltsph)" />
                  <circle cx={58} cy="46.5" r="4.68" fill="#fff" />
                  <text
                    x={58}
                    y="49.6"
                    textAnchor="middle"
                    fontSize="8.1"
                    fontWeight={800}
                    fill="#222"
                    fontFamily="Arial,sans-serif"
                  >
                    3
                  </text>
                  <circle cx={31} cy={34} r="7.5" fill="#F2B233" />
                  <circle cx={31} cy={34} r="7.5" fill="url(#ltsph)" />
                  <circle
                    cx={31}
                    cy="34.5"
                    r="3.9000000000000004"
                    fill="#fff"
                  />
                  <text
                    x={31}
                    y="37.6"
                    textAnchor="middle"
                    fontSize="6.75"
                    fontWeight={800}
                    fill="#222"
                    fontFamily="Arial,sans-serif"
                  >
                    9
                  </text>
                </svg>
              </span>
              <i className="cbx-tag">24H</i>
              <span className="cbx-l">
                <b>Lottery</b>
              </span>
            </button>
            <button
              className="cbx-t"
              style={{ "--h": "#9b5de5" }}
              onclick="openCardRace()"
              aria-label="Card Race"
            >
              <img
                src="/casino3d/race.webp"
                alt=""
                width={440}
                height={500}
                loading="lazy"
                decoding="async"
                onerror="
            this.nextElementSibling.hidden = false;
            this.remove();
          "
              />
              <span className="cbx-svg" hidden>
                <svg viewBox="0 0 80 64" aria-hidden="true">
                  <defs>
                    <radialGradient id="crhl" cx=".35" cy=".3" r=".8">
                      <stop offset={0} stopColor="#fff" stopOpacity=".9" />
                      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
                    </radialGradient>
                    <linearGradient id="crdl" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#F3F1EC" />
                      <stop offset={1} stopColor="#C9C3B8" />
                    </linearGradient>
                    <linearGradient id="crdr" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#DDD8CF" />
                      <stop offset={1} stopColor="#A9A296" />
                    </linearGradient>
                    <linearGradient id="crgold" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset={0} stopColor="#FFF3B0" />
                      <stop offset=".45" stopColor="#F2C14E" />
                      <stop offset={1} stopColor="#A8701A" />
                    </linearGradient>
                    <linearGradient id="cshine" x1={0} y1={0} x2={1} y2={1}>
                      <stop offset={0} stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".45" stopColor="#fff" stopOpacity=".0" />
                      <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
                      <stop offset=".56" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <pattern
                      id="cback"
                      width={4}
                      height={4}
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(45)"
                    >
                      <rect width={4} height={4} fill="#9B1C2C" />
                      <rect width={2} height={4} fill="#C2253A" />
                    </pattern>
                  </defs>
                  <ellipse
                    cx={40}
                    cy={58}
                    rx={30}
                    ry="4.5"
                    fill="#000"
                    opacity=".35"
                  />
                  <g transform="translate(24 36) rotate(-24)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      A
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      ♥
                    </text>
                  </g>
                  <g transform="translate(34 32) rotate(-8)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      A
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#D7263D"
                      fontFamily="Arial,sans-serif"
                    >
                      ♦
                    </text>
                  </g>
                  <g transform="translate(46 32) rotate(8)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      A
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      ♣
                    </text>
                  </g>
                  <g transform="translate(56 36) rotate(24)">
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#000"
                      opacity=".25"
                      transform="translate(1.6 1.8)"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="#FFFDF7"
                      stroke="rgba(0,0,0,.18)"
                      strokeWidth=".6"
                    />
                    <rect
                      x={-11}
                      y={-16}
                      width={22}
                      height={31}
                      rx={3}
                      fill="url(#cshine)"
                    />
                    <text
                      x="-7.5"
                      y="-7.5"
                      fontSize="7.5"
                      fontWeight={800}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      A
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      fontSize={13}
                      fill="#141414"
                      fontFamily="Arial,sans-serif"
                    >
                      ♠
                    </text>
                  </g>
                  <path
                    d="M30 14a10 10 0 1 1 20 0"
                    fill="none"
                    stroke="url(#crgold)"
                    strokeWidth={5}
                    strokeLinecap="round"
                  />
                  <circle cx={31} cy={12} r="1.1" fill="#8A5A12" />
                  <circle cx={35} cy="6.5" r="1.1" fill="#8A5A12" />
                  <circle cx={45} cy="6.5" r="1.1" fill="#8A5A12" />
                  <circle cx={49} cy={12} r="1.1" fill="#8A5A12" />
                </svg>
              </span>
              <i className="cbx-tag">NEW</i>
              <span className="cbx-l">
                <b>Card Race</b>
              </span>
            </button>
          </div>
        </section>
        <section className="wins" aria-label="Recent wins">
          <span className="wins-l">
            <i />
            Live wins
          </span>
          <div className="wins-track">
            <div className="wins-in" id="winsIn" style={{ "--n": 20 }}>
              <span className="wn">
                <i className="wn-av">P</i>
                <b>Pr•••</b> won <strong>20,510</strong>
                <em>on Cricket · Match odds</em>
                <small>1s ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">K</i>
                <b>Ka•••</b> won <strong>1,390</strong>
                <em>on Aviator</em>
                <small>29s ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>1,240</strong>
                <em>on Dragon Tiger</em>
                <small>55s ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">V</i>
                <b>Vi•••</b> won <strong>15,370</strong>
                <em>on Cricket · Match odds</em>
                <small>1m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">K</i>
                <b>Ka•••</b> won <strong>56,390</strong>
                <em>on Daily Jackpot</em>
                <small>3m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>16,920</strong>
                <em>on Andar Bahar</em>
                <small>2m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">I</i>
                <b>Im•••</b> won <strong>920</strong>
                <em>on Dragon Tiger</em>
                <small>2m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">P</i>
                <b>Pr•••</b> won <strong>6,240</strong>
                <em>on Daily Jackpot</em>
                <small>2m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>37,350</strong>
                <em>on Daily Jackpot</em>
                <small>5m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">M</i>
                <b>Ma•••</b> won <strong>800</strong>
                <em>on Aviator</em>
                <small>11m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">F</i>
                <b>Fa•••</b> won <strong>6,460</strong>
                <em>on Roulette</em>
                <small>6m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">N</i>
                <b>Ne•••</b> won <strong>17,390</strong>
                <em>on Aviator</em>
                <small>11m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">A</i>
                <b>An•••</b> won <strong>610</strong>
                <em>on Roulette</em>
                <small>14m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>9,680</strong>
                <em>on Aviator</em>
                <small>15m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>2,120</strong>
                <em>on Football · Match odds</em>
                <small>8m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">P</i>
                <b>Pr•••</b> won <strong>3,960</strong>
                <em>on Andar Bahar</em>
                <small>11m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>6,820</strong>
                <em>on Football · Match odds</em>
                <small>12m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">R</i>
                <b>Ra•••</b> won <strong>1,060</strong>
                <em>on Football · Match odds</em>
                <small>16m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">P</i>
                <b>Pr•••</b> won <strong>24,640</strong>
                <em>on Teen Patti</em>
                <small>11m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">I</i>
                <b>Im•••</b> won <strong>29,730</strong>
                <em>on Aviator</em>
                <small>24m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">P</i>
                <b>Pr•••</b> won <strong>20,510</strong>
                <em>on Cricket · Match odds</em>
                <small>1s ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">K</i>
                <b>Ka•••</b> won <strong>1,390</strong>
                <em>on Aviator</em>
                <small>29s ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>1,240</strong>
                <em>on Dragon Tiger</em>
                <small>55s ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">V</i>
                <b>Vi•••</b> won <strong>15,370</strong>
                <em>on Cricket · Match odds</em>
                <small>1m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">K</i>
                <b>Ka•••</b> won <strong>56,390</strong>
                <em>on Daily Jackpot</em>
                <small>3m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>16,920</strong>
                <em>on Andar Bahar</em>
                <small>2m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">I</i>
                <b>Im•••</b> won <strong>920</strong>
                <em>on Dragon Tiger</em>
                <small>2m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">P</i>
                <b>Pr•••</b> won <strong>6,240</strong>
                <em>on Daily Jackpot</em>
                <small>2m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>37,350</strong>
                <em>on Daily Jackpot</em>
                <small>5m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">M</i>
                <b>Ma•••</b> won <strong>800</strong>
                <em>on Aviator</em>
                <small>11m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">F</i>
                <b>Fa•••</b> won <strong>6,460</strong>
                <em>on Roulette</em>
                <small>6m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">N</i>
                <b>Ne•••</b> won <strong>17,390</strong>
                <em>on Aviator</em>
                <small>11m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">A</i>
                <b>An•••</b> won <strong>610</strong>
                <em>on Roulette</em>
                <small>14m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>9,680</strong>
                <em>on Aviator</em>
                <small>15m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>2,120</strong>
                <em>on Football · Match odds</em>
                <small>8m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">P</i>
                <b>Pr•••</b> won <strong>3,960</strong>
                <em>on Andar Bahar</em>
                <small>11m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">S</i>
                <b>Sa•••</b> won <strong>6,820</strong>
                <em>on Football · Match odds</em>
                <small>12m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">R</i>
                <b>Ra•••</b> won <strong>1,060</strong>
                <em>on Football · Match odds</em>
                <small>16m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">P</i>
                <b>Pr•••</b> won <strong>24,640</strong>
                <em>on Teen Patti</em>
                <small>11m ago</small>
              </span>
              <span className="wn">
                <i className="wn-av">I</i>
                <b>Im•••</b> won <strong>29,730</strong>
                <em>on Aviator</em>
                <small>24m ago</small>
              </span>
            </div>
          </div>
        </section>
        <div className="sec">
          <h2>In-play</h2>
          <span>5 live</span>
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
          <div
            className="ev"
            onclick="openEvent(1)"
            role="button"
            tabIndex={0}
            onkeydown="if (event.key === 'Enter') openEvent(1);"
          >
            <div className="ev-info">
              <div className="meta">
                <span className="live-pill">2nd inn · 12.3 ov</span>
                <span className="score">142/5</span>
                <span className="tagx">Fancy</span>
                <span className="comp">T20 World Series</span>
                <button
                  className="pin-btn"
                  data-pin="mo:1"
                  aria-pressed="false"
                  aria-label="Pin Match odds · Sydney Sixers v Perth Scorchers"
                  title="Pin"
                  onclick="
              event.stopPropagation();
              togglePin('mo', '1');
            "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  >
                    <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                    <path d="M12 14v6.5" />
                  </svg>
                </button>
              </div>
              <div className="teams">
                Sydney Sixers<em>vs</em>Perth Scorchers
              </div>
            </div>
            <div className="mkt">
              <div className="pair" data-l={1}>
                <button
                  className="o b flash-down"
                  data-ev={1}
                  data-ri={0}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(1, 0, 'b');
            "
                  aria-label="Back Sydney Sixers"
                >
                  1.70<small>154</small>
                </button>
                <button
                  className="o l flash-down"
                  data-ev={1}
                  data-ri={0}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(1, 0, 'l');
            "
                  aria-label="Lay Sydney Sixers"
                >
                  1.72<small>708</small>
                </button>
              </div>
              <div className="pair" data-l="X">
                <span className="o na b">–</span>
                <span className="o na l">–</span>
              </div>
              <div className="pair" data-l={2}>
                <button
                  className="o b flash-down"
                  data-ev={1}
                  data-ri={1}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(1, 1, 'b');
            "
                  aria-label="Back Perth Scorchers"
                >
                  2.32<small>211</small>
                </button>
                <button
                  className="o l flash-down"
                  data-ev={1}
                  data-ri={1}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(1, 1, 'l');
            "
                  aria-label="Lay Perth Scorchers"
                >
                  2.36<small>777</small>
                </button>
              </div>
            </div>
          </div>
          <div
            className="ev"
            onclick="openEvent(2)"
            role="button"
            tabIndex={0}
            onkeydown="if (event.key === 'Enter') openEvent(2);"
          >
            <div className="ev-info">
              <div className="meta">
                <span className="live-pill">67</span>
                <span className="score">1 – 1</span>
                <span className="comp">Premier League</span>
                <button
                  className="pin-btn"
                  data-pin="mo:2"
                  aria-pressed="false"
                  aria-label="Pin Match odds · Arsenal v Chelsea"
                  title="Pin"
                  onclick="
              event.stopPropagation();
              togglePin('mo', '2');
            "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  >
                    <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                    <path d="M12 14v6.5" />
                  </svg>
                </button>
              </div>
              <div className="teams">
                Arsenal<em>vs</em>Chelsea
              </div>
            </div>
            <div className="mkt">
              <div className="pair" data-l={1}>
                <button
                  className="o b flash-down"
                  data-ev={2}
                  data-ri={0}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(2, 0, 'b');
            "
                  aria-label="Back Arsenal"
                >
                  2.08<small>210</small>
                </button>
                <button
                  className="o l flash-down"
                  data-ev={2}
                  data-ri={0}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(2, 0, 'l');
            "
                  aria-label="Lay Arsenal"
                >
                  2.12<small>814</small>
                </button>
              </div>
              <div className="pair" data-l="X">
                <button
                  className="o b flash-up"
                  data-ev={2}
                  data-ri={2}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(2, 2, 'b');
            "
                  aria-label="Back Draw"
                >
                  3.46<small>970</small>
                </button>
                <button
                  className="o l flash-up"
                  data-ev={2}
                  data-ri={2}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(2, 2, 'l');
            "
                  aria-label="Lay Draw"
                >
                  3.56<small>303</small>
                </button>
              </div>
              <div className="pair" data-l={2}>
                <button
                  className="o b flash-down"
                  data-ev={2}
                  data-ri={1}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(2, 1, 'b');
            "
                  aria-label="Back Chelsea"
                >
                  3.61<small>104</small>
                </button>
                <button
                  className="o l flash-down"
                  data-ev={2}
                  data-ri={1}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(2, 1, 'l');
            "
                  aria-label="Lay Chelsea"
                >
                  3.71<small>928</small>
                </button>
              </div>
            </div>
          </div>
          <div
            className="ev"
            onclick="openEvent(3)"
            role="button"
            tabIndex={0}
            onkeydown="if (event.key === 'Enter') openEvent(3);"
          >
            <div className="ev-info">
              <div className="meta">
                <span className="live-pill">Set 2 · 4–3</span>
                <span className="score">1 – 0</span>
                <span className="comp">ATP 500 · Tokyo</span>
                <button
                  className="pin-btn"
                  data-pin="mo:3"
                  aria-pressed="false"
                  aria-label="Pin Match odds · J. Sinner v A. Zverev"
                  title="Pin"
                  onclick="
              event.stopPropagation();
              togglePin('mo', '3');
            "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  >
                    <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                    <path d="M12 14v6.5" />
                  </svg>
                </button>
              </div>
              <div className="teams">
                J. Sinner<em>vs</em>A. Zverev
              </div>
            </div>
            <div className="mkt">
              <div className="pair" data-l={1}>
                <button
                  className="o b flash-down"
                  data-ev={3}
                  data-ri={0}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(3, 0, 'b');
            "
                  aria-label="Back J. Sinner"
                >
                  1.34<small>569</small>
                </button>
                <button
                  className="o l flash-down"
                  data-ev={3}
                  data-ri={0}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(3, 0, 'l');
            "
                  aria-label="Lay J. Sinner"
                >
                  1.36<small>618</small>
                </button>
              </div>
              <div className="pair" data-l="X">
                <span className="o na b">–</span>
                <span className="o na l">–</span>
              </div>
              <div className="pair" data-l={2}>
                <button
                  className="o b flash-up"
                  data-ev={3}
                  data-ri={1}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(3, 1, 'b');
            "
                  aria-label="Back A. Zverev"
                >
                  3.22<small>227</small>
                </button>
                <button
                  className="o l flash-up"
                  data-ev={3}
                  data-ri={1}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(3, 1, 'l');
            "
                  aria-label="Lay A. Zverev"
                >
                  3.32<small>168</small>
                </button>
              </div>
            </div>
          </div>
          <div
            className="ev"
            onclick="openEvent(6)"
            role="button"
            tabIndex={0}
            onkeydown="if (event.key === 'Enter') openEvent(6);"
          >
            <div className="ev-info">
              <div className="meta">
                <span className="live-pill">Q3 · 4:12</span>
                <span className="score">78 – 81</span>
                <span className="comp">NBA Preseason</span>
                <button
                  className="pin-btn"
                  data-pin="mo:6"
                  aria-pressed="false"
                  aria-label="Pin Match odds · Lakers v Warriors"
                  title="Pin"
                  onclick="
              event.stopPropagation();
              togglePin('mo', '6');
            "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  >
                    <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                    <path d="M12 14v6.5" />
                  </svg>
                </button>
              </div>
              <div className="teams">
                Lakers<em>vs</em>Warriors
              </div>
            </div>
            <div className="mkt">
              <div className="pair" data-l={1}>
                <button
                  className="o b flash-up"
                  data-ev={6}
                  data-ri={0}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(6, 0, 'b');
            "
                  aria-label="Back Lakers"
                >
                  2.06<small>725</small>
                </button>
                <button
                  className="o l flash-up"
                  data-ev={6}
                  data-ri={0}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(6, 0, 'l');
            "
                  aria-label="Lay Lakers"
                >
                  2.10<small>183</small>
                </button>
              </div>
              <div className="pair" data-l="X">
                <span className="o na b">–</span>
                <span className="o na l">–</span>
              </div>
              <div className="pair" data-l={2}>
                <button
                  className="o b flash-up"
                  data-ev={6}
                  data-ri={1}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(6, 1, 'b');
            "
                  aria-label="Back Warriors"
                >
                  1.92<small>488</small>
                </button>
                <button
                  className="o l flash-up"
                  data-ev={6}
                  data-ri={1}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(6, 1, 'l');
            "
                  aria-label="Lay Warriors"
                >
                  1.96<small>813</small>
                </button>
              </div>
            </div>
          </div>
          <div
            className="ev"
            onclick="openEvent(9)"
            role="button"
            tabIndex={0}
            onkeydown="if (event.key === 'Enter') openEvent(9);"
          >
            <div className="ev-info">
              <div className="meta">
                <span className="live-pill">2nd half · 8:40</span>
                <span className="score">31 – 29</span>
                <span className="comp">Pro League</span>
                <button
                  className="pin-btn"
                  data-pin="mo:9"
                  aria-pressed="false"
                  aria-label="Pin Match odds · Patna Pirates v U Mumba"
                  title="Pin"
                  onclick="
              event.stopPropagation();
              togglePin('mo', '9');
            "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  >
                    <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                    <path d="M12 14v6.5" />
                  </svg>
                </button>
              </div>
              <div className="teams">
                Patna Pirates<em>vs</em>U Mumba
              </div>
            </div>
            <div className="mkt">
              <div className="pair" data-l={1}>
                <button
                  className="o b flash-up"
                  data-ev={9}
                  data-ri={0}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(9, 0, 'b');
            "
                  aria-label="Back Patna Pirates"
                >
                  1.89<small>400</small>
                </button>
                <button
                  className="o l flash-up"
                  data-ev={9}
                  data-ri={0}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(9, 0, 'l');
            "
                  aria-label="Lay Patna Pirates"
                >
                  1.92<small>363</small>
                </button>
              </div>
              <div className="pair" data-l="X">
                <span className="o na b">–</span>
                <span className="o na l">–</span>
              </div>
              <div className="pair" data-l={2}>
                <button
                  className="o b flash-up"
                  data-ev={9}
                  data-ri={1}
                  data-side="b"
                  onclick="
              event.stopPropagation();
              addSel(9, 1, 'b');
            "
                  aria-label="Back U Mumba"
                >
                  2.05<small>172</small>
                </button>
                <button
                  className="o l flash-up"
                  data-ev={9}
                  data-ri={1}
                  data-side="l"
                  onclick="
              event.stopPropagation();
              addSel(9, 1, 'l');
            "
                  aria-label="Lay U Mumba"
                >
                  2.10<small>887</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sec">
          <h2>Upcoming</h2>
          <span>All sports · 15 events</span>
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
        <div className="up-grp">
          <button className="up-h" onclick="pickSport('cricket')">
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
            <b>Cricket</b>
            <span>3 upcoming</span>
            <em>See all ›</em>
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
            <div
              className="ev"
              onclick="openEvent(4)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(4);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Today 14:30</span>
                  <span className="tagx">Fancy</span>
                  <span className="comp">ODI Series</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:4"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Sri Lanka v Bangladesh"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '4');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Sri Lanka<em>vs</em>Bangladesh
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={4}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(4, 0, 'b');
              "
                    aria-label="Back Sri Lanka"
                  >
                    1.55<small>830</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={4}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(4, 0, 'l');
              "
                    aria-label="Lay Sri Lanka"
                  >
                    1.57<small>239</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={4}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(4, 1, 'b');
              "
                    aria-label="Back Bangladesh"
                  >
                    2.70<small>599</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={4}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(4, 1, 'l');
              "
                    aria-label="Lay Bangladesh"
                  >
                    2.78<small>174</small>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="ev"
              onclick="openEvent(10)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(10);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Today 18:30</span>
                  <span className="tagx">Fancy</span>
                  <span className="comp">ODI Series</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:10"
                    aria-pressed="false"
                    aria-label="Pin Match odds · India v Australia"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '10');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  India<em>vs</em>Australia
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={10}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(10, 0, 'b');
              "
                    aria-label="Back India"
                  >
                    1.82<small>284</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={10}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(10, 0, 'l');
              "
                    aria-label="Lay India"
                  >
                    1.84<small>518</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={10}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(10, 1, 'b');
              "
                    aria-label="Back Australia"
                  >
                    2.12<small>517</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={10}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(10, 1, 'l');
              "
                    aria-label="Lay Australia"
                  >
                    2.16<small>754</small>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="ev"
              onclick="openEvent(11)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(11);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Tomorrow 19:30</span>
                  <span className="comp">T20 League</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:11"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Mumbai v Chennai"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '11');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Mumbai<em>vs</em>Chennai
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={11}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(11, 0, 'b');
              "
                    aria-label="Back Mumbai"
                  >
                    1.95<small>453</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={11}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(11, 0, 'l');
              "
                    aria-label="Lay Mumbai"
                  >
                    1.97<small>985</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={11}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(11, 1, 'b');
              "
                    aria-label="Back Chennai"
                  >
                    1.98<small>151</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={11}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(11, 1, 'l');
              "
                    aria-label="Lay Chennai"
                  >
                    2.02<small>440</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="up-grp">
          <button className="up-h" onclick="pickSport('football')">
            <svg
              className="si si-football"
              style={{ "--t": "-0.367s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <ellipse
                className="a-shadow"
                cx={16}
                cy="28.4"
                rx="5.5"
                ry={1}
                fill="currentColor"
                stroke="none"
                opacity=".3"
              />
              <g className="a-bounce">
                <g transform="translate(0 6)">
                  <g className="a-spin">
                    <circle cx={16} cy={15} r={6} />
                    <path
                      d="M16 12.2l2.66 1.93-1.01 3.14h-3.3l-1.01-3.14z"
                      fill="currentColor"
                      stroke="none"
                    />
                    <path
                      d="M16 12.2V9M18.66 14.13l3.05-.98M17.65 17.27l1.88 2.58M14.35 17.27l-1.88 2.58M13.34 14.13l-3.05-.98"
                      strokeWidth=".9"
                    />
                    <path
                      d="M18.25 9.44l2.35 1.7-2.01.3zM21.99 15.42l-.9 2.76-.91-1.82zM17.45 20.82h-2.9L16 19.4zM10.91 18.18l-.9-2.76 1.81.94zM11.4 11.14l2.35-1.7-.34 2z"
                      fill="currentColor"
                      stroke="none"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <b>Football</b>
            <span>4 upcoming</span>
            <em>See all ›</em>
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
            <div
              className="ev"
              onclick="openEvent(5)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(5);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Today 20:00</span>
                  <span className="comp">La Liga</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:5"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Real Madrid v Sevilla"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '5');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Real Madrid<em>vs</em>Sevilla
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={5}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(5, 0, 'b');
              "
                    aria-label="Back Real Madrid"
                  >
                    1.40<small>173</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={5}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(5, 0, 'l');
              "
                    aria-label="Lay Real Madrid"
                  >
                    1.42<small>809</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <button
                    className="o b"
                    data-ev={5}
                    data-ri={2}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(5, 2, 'b');
              "
                    aria-label="Back Draw"
                  >
                    7.60<small>170</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={5}
                    data-ri={2}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(5, 2, 'l');
              "
                    aria-label="Lay Draw"
                  >
                    8.00<small>162</small>
                  </button>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={5}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(5, 1, 'b');
              "
                    aria-label="Back Sevilla"
                  >
                    5.20<small>796</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={5}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(5, 1, 'l');
              "
                    aria-label="Lay Sevilla"
                  >
                    5.40<small>734</small>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="ev"
              onclick="openEvent(7)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(7);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Tomorrow 00:15</span>
                  <span className="comp">Serie A</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:7"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Juventus v Napoli"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '7');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Juventus<em>vs</em>Napoli
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={7}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(7, 0, 'b');
              "
                    aria-label="Back Juventus"
                  >
                    2.60<small>923</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={7}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(7, 0, 'l');
              "
                    aria-label="Lay Juventus"
                  >
                    2.66<small>230</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <button
                    className="o b"
                    data-ev={7}
                    data-ri={2}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(7, 2, 'b');
              "
                    aria-label="Back Draw"
                  >
                    2.90<small>373</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={7}
                    data-ri={2}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(7, 2, 'l');
              "
                    aria-label="Lay Draw"
                  >
                    2.96<small>601</small>
                  </button>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={7}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(7, 1, 'b');
              "
                    aria-label="Back Napoli"
                  >
                    3.10<small>109</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={7}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(7, 1, 'l');
              "
                    aria-label="Lay Napoli"
                  >
                    3.20<small>307</small>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="ev"
              onclick="openEvent(12)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(12);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Tomorrow 00:30</span>
                  <span className="comp">La Liga</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:12"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Barcelona v Atlético Madrid"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '12');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Barcelona<em>vs</em>Atlético Madrid
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={12}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(12, 0, 'b');
              "
                    aria-label="Back Barcelona"
                  >
                    1.90<small>158</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={12}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(12, 0, 'l');
              "
                    aria-label="Lay Barcelona"
                  >
                    1.93<small>443</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <button
                    className="o b"
                    data-ev={12}
                    data-ri={2}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(12, 2, 'b');
              "
                    aria-label="Back Draw"
                  >
                    4.10<small>963</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={12}
                    data-ri={2}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(12, 2, 'l');
              "
                    aria-label="Lay Draw"
                  >
                    4.20<small>294</small>
                  </button>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={12}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(12, 1, 'b');
              "
                    aria-label="Back Atlético Madrid"
                  >
                    3.90<small>119</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={12}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(12, 1, 'l');
              "
                    aria-label="Lay Atlético Madrid"
                  >
                    4.00<small>302</small>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="ev"
              onclick="openEvent(13)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(13);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Sat 17:30</span>
                  <span className="comp">Premier League</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:13"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Man City v Liverpool"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '13');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Man City<em>vs</em>Liverpool
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={13}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(13, 0, 'b');
              "
                    aria-label="Back Man City"
                  >
                    2.20<small>745</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={13}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(13, 0, 'l');
              "
                    aria-label="Lay Man City"
                  >
                    2.24<small>805</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <button
                    className="o b"
                    data-ev={13}
                    data-ri={2}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(13, 2, 'b');
              "
                    aria-label="Back Draw"
                  >
                    3.60<small>354</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={13}
                    data-ri={2}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(13, 2, 'l');
              "
                    aria-label="Lay Draw"
                  >
                    3.70<small>123</small>
                  </button>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={13}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(13, 1, 'b');
              "
                    aria-label="Back Liverpool"
                  >
                    3.10<small>255</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={13}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(13, 1, 'l');
              "
                    aria-label="Lay Liverpool"
                  >
                    3.15<small>468</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="up-grp">
          <button className="up-h" onclick="pickSport('tennis')">
            <svg
              className="si si-tennis"
              style={{ "--t": "-0.368s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 27.6H30" opacity=".35" />
              <g transform="rotate(-24 6 18)" opacity=".85">
                <ellipse cx={6} cy={14} rx="3.2" ry="4.3" />
                <path
                  d="M4.4 11.2v5.6M6 9.8v8.4M7.6 11.2v5.6M3 13h6M3 15h6"
                  strokeWidth=".6"
                  opacity=".7"
                />
                <path d="M6 18.3v6.2" strokeWidth={2} />
              </g>
              <path d="M16 18.6v9" strokeWidth={1} />
              <path
                d="M15.2 19.4h1.6v8.2h-1.6z"
                strokeWidth=".5"
                fill="currentColor"
                fillOpacity=".25"
              />
              <path d="M14.8 18.6h2.4" strokeWidth="1.6" />
              <g className="a-tx">
                <g className="a-ty">
                  <circle
                    cx={16}
                    cy="24.6"
                    r="2.9"
                    fill="currentColor"
                    fillOpacity=".3"
                  />
                  <path
                    d="M14 22.5q2 2.1 0 4.2M18 22.5q-2 2.1 0 4.2"
                    strokeWidth={1}
                  />
                </g>
              </g>
            </svg>
            <b>Tennis</b>
            <span>2 upcoming</span>
            <em>See all ›</em>
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
            <div
              className="ev"
              onclick="openEvent(8)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(8);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Tomorrow 09:00</span>
                  <span className="comp">WTA 1000 · Beijing</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:8"
                    aria-pressed="false"
                    aria-label="Pin Match odds · A. Sabalenka v C. Gauff"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '8');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  A. Sabalenka<em>vs</em>C. Gauff
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={8}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(8, 0, 'b');
              "
                    aria-label="Back A. Sabalenka"
                  >
                    1.68<small>714</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={8}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(8, 0, 'l');
              "
                    aria-label="Lay A. Sabalenka"
                  >
                    1.70<small>287</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={8}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(8, 1, 'b');
              "
                    aria-label="Back C. Gauff"
                  >
                    2.24<small>284</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={8}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(8, 1, 'l');
              "
                    aria-label="Lay C. Gauff"
                  >
                    2.30<small>814</small>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="ev"
              onclick="openEvent(14)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(14);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Today 16:00</span>
                  <span className="comp">ATP 500 · Tokyo</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:14"
                    aria-pressed="false"
                    aria-label="Pin Match odds · C. Alcaraz v D. Medvedev"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '14');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  C. Alcaraz<em>vs</em>D. Medvedev
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={14}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(14, 0, 'b');
              "
                    aria-label="Back C. Alcaraz"
                  >
                    1.45<small>802</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={14}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(14, 0, 'l');
              "
                    aria-label="Lay C. Alcaraz"
                  >
                    1.47<small>432</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={14}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(14, 1, 'b');
              "
                    aria-label="Back D. Medvedev"
                  >
                    2.85<small>482</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={14}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(14, 1, 'l');
              "
                    aria-label="Lay D. Medvedev"
                  >
                    2.92<small>201</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="up-grp">
          <button className="up-h" onclick="pickSport('basketball')">
            <svg
              className="si si-basketball"
              style={{ "--t": "-0.368s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x={8} y={2} width={16} height={8} rx={1} opacity=".55" />
              <rect
                x={13}
                y={5}
                width={6}
                height={4}
                strokeWidth={1}
                opacity=".55"
              />
              <path d="M3 29.2H29" opacity=".35" />
              <g className="a-hoop">
                <circle
                  cx={16}
                  cy={8}
                  r="3.3"
                  fill="currentColor"
                  fillOpacity=".2"
                />
                <path
                  d="M12.7 8h6.6M16 4.7v6.6M13.6 5.7q2.4 2.3 0 4.6M18.4 5.7q-2.4 2.3 0 4.6"
                  strokeWidth={1}
                />
              </g>
              <path d="M10.3 12h11.4" strokeWidth="1.9" />
              <g className="a-net">
                <path
                  d="M10.8 12.3l1.8 6.2M21.2 12.3l-1.8 6.2M13.4 12.3l1 6.2M18.6 12.3l-1 6.2M11.9 15.6h8.2M12.6 18.5h6.8"
                  strokeWidth={1}
                  opacity=".8"
                />
              </g>
            </svg>
            <b>Basketball</b>
            <span>2 upcoming</span>
            <em>See all ›</em>
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
            <div
              className="ev"
              onclick="openEvent(15)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(15);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Tomorrow 05:00</span>
                  <span className="comp">NBA Preseason</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:15"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Celtics v Knicks"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '15');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Celtics<em>vs</em>Knicks
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={15}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(15, 0, 'b');
              "
                    aria-label="Back Celtics"
                  >
                    1.70<small>877</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={15}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(15, 0, 'l');
              "
                    aria-label="Lay Celtics"
                  >
                    1.73<small>351</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={15}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(15, 1, 'b');
              "
                    aria-label="Back Knicks"
                  >
                    2.18<small>146</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={15}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(15, 1, 'l');
              "
                    aria-label="Lay Knicks"
                  >
                    2.22<small>866</small>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="ev"
              onclick="openEvent(16)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(16);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Tomorrow 23:15</span>
                  <span className="comp">EuroLeague</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:16"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Real Madrid v Olympiacos"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '16');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Real Madrid<em>vs</em>Olympiacos
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={16}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(16, 0, 'b');
              "
                    aria-label="Back Real Madrid"
                  >
                    1.58<small>346</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={16}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(16, 0, 'l');
              "
                    aria-label="Lay Real Madrid"
                  >
                    1.60<small>295</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={16}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(16, 1, 'b');
              "
                    aria-label="Back Olympiacos"
                  >
                    2.45<small>173</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={16}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(16, 1, 'l');
              "
                    aria-label="Lay Olympiacos"
                  >
                    2.50<small>435</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="up-grp">
          <button className="up-h" onclick="pickSport('horse')">
            <svg
              className="si si-horse"
              style={{ "--t": "-0.368s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path
                className="a-ground"
                d="M1 28H31"
                strokeDasharray="3 4"
                opacity=".45"
              />
              <path
                className="a-dust"
                d="M3 25.5h3.5M1.5 23h3"
                strokeWidth={1}
                opacity=".5"
              />
              <g className="a-gallop">
                <g transform="translate(10.2 15.4)" className="far">
                  <g className="a-hu far">
                    <path d="M0 0L-1.3 4.8" strokeWidth="2.7" />
                    <g transform="translate(-1.3 4.8)">
                      <g className="a-hl far">
                        <path d="M0 0L.5 5.8" strokeWidth="1.2" />
                        <path d="M.1 6.1h1.5" strokeWidth="1.5" />
                      </g>
                    </g>
                  </g>
                </g>
                <g transform="translate(20.6 16.4)" className="far">
                  <g className="a-fu far">
                    <path d="M0 0L.3 4.4" strokeWidth="2.3" />
                    <g transform="translate(.3 4.4)">
                      <g className="a-fl far">
                        <path d="M0 0V5.2" strokeWidth="1.2" />
                        <path d="M-.4 5.5h1.5" strokeWidth="1.5" />
                      </g>
                    </g>
                  </g>
                </g>
                <g transform="translate(8 13.4)">
                  <path
                    className="a-tail"
                    d="M0 0C-2.2 0-4.4 1-6.4 3.2-5 2.8-3.6 2.7-2.3 3-3.6 3.7-4.6 4.8-5.2 6.2-3 4.9-1 3.1.2 1.6z"
                    fill="currentColor"
                    stroke="none"
                  />
                </g>
                <path
                  d="M9 12.2C12 11.4 16 12.2 19.5 11.2 21.5 10.4 23 8.2 24.4 6.4L24.8 4.6 25.7 6C27 6.6 28.8 8.4 30 9.8 30.4 10.4 30 11.3 29.2 11.2 27.8 10.9 26.6 10.6 25.8 10.9 24.6 12.2 23.4 14.4 22.6 16.2 22.2 17.4 21 18.2 19.6 18.4 16.5 18.9 13.5 18.8 11 18.2 9 17.8 7.6 16.6 7.5 14.8 7.5 13.6 8 12.8 9 12.2z"
                  fill="currentColor"
                  stroke="none"
                />
                <path
                  className="a-mane"
                  d="M20.6 10.7l-2.1.7M21.7 9.6l-2.2.5M22.7 8.4l-2.1.3M23.6 7.2l-1.8.1"
                  strokeWidth=".7"
                />
                <circle
                  cx="27.1"
                  cy="8.3"
                  r=".5"
                  fill="#0B0B0C"
                  stroke="none"
                />
                <circle
                  cx="29.5"
                  cy="10.2"
                  r=".32"
                  fill="#0B0B0C"
                  stroke="none"
                />
                <g transform="translate(11.4 15.8)" className="near">
                  <g className="a-hu near">
                    <path d="M0 0L-1.3 4.8" strokeWidth="2.7" />
                    <g transform="translate(-1.3 4.8)">
                      <g className="a-hl near">
                        <path d="M0 0L.5 5.8" strokeWidth="1.2" />
                        <path d="M.1 6.1h1.5" strokeWidth="1.5" />
                      </g>
                    </g>
                  </g>
                </g>
                <g transform="translate(21.4 16.8)" className="near">
                  <g className="a-fu near">
                    <path d="M0 0L.3 4.4" strokeWidth="2.3" />
                    <g transform="translate(.3 4.4)">
                      <g className="a-fl near">
                        <path d="M0 0V5.2" strokeWidth="1.2" />
                        <path d="M-.4 5.5h1.5" strokeWidth="1.5" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <b>Horse racing</b>
            <span>2 upcoming</span>
            <em>See all ›</em>
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
            <div
              className="ev"
              onclick="openEvent(17)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(17);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Today 15:40</span>
                  <span className="comp">Ascot · Race 3 · 8 runners</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:17"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Galloping Star v Royal Ascent"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '17');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Galloping Star<em>vs</em>Royal Ascent
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={17}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(17, 0, 'b');
              "
                    aria-label="Back Galloping Star"
                  >
                    3.20<small>400</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={17}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(17, 0, 'l');
              "
                    aria-label="Lay Galloping Star"
                  >
                    3.30<small>852</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={17}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(17, 1, 'b');
              "
                    aria-label="Back Royal Ascent"
                  >
                    4.50<small>275</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={17}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(17, 1, 'l');
              "
                    aria-label="Lay Royal Ascent"
                  >
                    4.70<small>193</small>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="ev"
              onclick="openEvent(18)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(18);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Today 16:15</span>
                  <span className="comp">Mumbai · Race 5 · 10 runners</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:18"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Desert Wind v Midnight Sun"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '18');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Desert Wind<em>vs</em>Midnight Sun
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={18}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(18, 0, 'b');
              "
                    aria-label="Back Desert Wind"
                  >
                    2.80<small>949</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={18}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(18, 0, 'l');
              "
                    aria-label="Lay Desert Wind"
                  >
                    2.90<small>325</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={18}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(18, 1, 'b');
              "
                    aria-label="Back Midnight Sun"
                  >
                    5.00<small>266</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={18}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(18, 1, 'l');
              "
                    aria-label="Lay Midnight Sun"
                  >
                    5.20<small>714</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="up-grp">
          <button className="up-h" onclick="pickSport('kabaddi')">
            <svg
              className="si si-kabaddi"
              style={{ "--t": "-0.368s" }}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M26 4v25" strokeDasharray="2 2.5" opacity=".45" />
              <path d="M2 29H30" opacity=".35" />
              <g className="a-raid">
                <g transform="translate(13 20)">
                  <circle
                    cx={0}
                    cy={-11}
                    r="2.2"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path d="M0-8.2L-1.2 1" />
                  <g transform="translate(-.4 -6.4)">
                    <path className="a-reach" d="M0 0l6 1.2" />
                  </g>
                  <path d="M-.4-6.4l-4 3" />
                  <path d="M-1.2 1l4.4 7.6M-1.2 1l-4.8 7.6" />
                </g>
              </g>
            </svg>
            <b>Kabaddi</b>
            <span>2 upcoming</span>
            <em>See all ›</em>
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
            <div
              className="ev"
              onclick="openEvent(19)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(19);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Today 20:00</span>
                  <span className="comp">Pro League</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:19"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Bengaluru Bulls v Jaipur Panthers"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '19');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Bengaluru Bulls<em>vs</em>Jaipur Panthers
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={19}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(19, 0, 'b');
              "
                    aria-label="Back Bengaluru Bulls"
                  >
                    1.76<small>748</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={19}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(19, 0, 'l');
              "
                    aria-label="Lay Bengaluru Bulls"
                  >
                    1.79<small>635</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={19}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(19, 1, 'b');
              "
                    aria-label="Back Jaipur Panthers"
                  >
                    2.08<small>350</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={19}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(19, 1, 'l');
              "
                    aria-label="Lay Jaipur Panthers"
                  >
                    2.12<small>621</small>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="ev"
              onclick="openEvent(20)"
              role="button"
              tabIndex={0}
              onkeydown="if (event.key === 'Enter') openEvent(20);"
            >
              <div className="ev-info">
                <div className="meta">
                  <span className="time-pill">Tomorrow 20:00</span>
                  <span className="comp">Pro League</span>
                  <button
                    className="pin-btn"
                    data-pin="mo:20"
                    aria-pressed="false"
                    aria-label="Pin Match odds · Tamil Thalaivas v Telugu Titans"
                    title="Pin"
                    onclick="
                event.stopPropagation();
                togglePin('mo', '20');
              "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M9 3.5h6l-1 5.5 3.5 3.2V14h-11v-1.8L10 9z" />
                      <path d="M12 14v6.5" />
                    </svg>
                  </button>
                </div>
                <div className="teams">
                  Tamil Thalaivas<em>vs</em>Telugu Titans
                </div>
              </div>
              <div className="mkt">
                <div className="pair" data-l={1}>
                  <button
                    className="o b"
                    data-ev={20}
                    data-ri={0}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(20, 0, 'b');
              "
                    aria-label="Back Tamil Thalaivas"
                  >
                    1.88<small>228</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={20}
                    data-ri={0}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(20, 0, 'l');
              "
                    aria-label="Lay Tamil Thalaivas"
                  >
                    1.91<small>760</small>
                  </button>
                </div>
                <div className="pair" data-l="X">
                  <span className="o na b">–</span>
                  <span className="o na l">–</span>
                </div>
                <div className="pair" data-l={2}>
                  <button
                    className="o b"
                    data-ev={20}
                    data-ri={1}
                    data-side="b"
                    onclick="
                event.stopPropagation();
                addSel(20, 1, 'b');
              "
                    aria-label="Back Telugu Titans"
                  >
                    1.95<small>342</small>
                  </button>
                  <button
                    className="o l"
                    data-ev={20}
                    data-ri={1}
                    data-side="l"
                    onclick="
                event.stopPropagation();
                addSel(20, 1, 'l');
              "
                    aria-label="Lay Telugu Titans"
                  >
                    1.99<small>734</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "16px" }} />
      </main>
      {/* Right: bet slip (desktop) */}
      <aside className="right">
        <div className="slip" id="slip-desktop">
          <div className="bs-tabs" role="tablist">
            <button role="tab" aria-selected="true" onclick="slipTabTo('slip')">
              Betslip <span className="cnt">0</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              onclick="slipTabTo('open')"
            >
              Open bets <span className="cnt">0</span>
            </button>
          </div>
          <div className="oc">
            <button
              className="oc-sw"
              role="switch"
              aria-checked="false"
              onclick="toggleOneClick()"
            >
              <i />
              <span>One-click betting</span>
            </button>
          </div>
          <div className="empty">
            <div className="slip-sevi">
              <svg
                className="sevi pose-wave"
                viewBox="-10 -6 180 186"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="sv2g" x1={0} y1={0} x2="0.35" y2={1}>
                    <stop offset={0} stopColor="#FFF1C2" />
                    <stop offset=".35" stopColor="#E9C872" />
                    <stop offset=".7" stopColor="#C9A04F" />
                    <stop offset={1} stopColor="#8E6A2A" />
                  </linearGradient>
                  <linearGradient id="sv2w" x1={0} y1={0} x2={0} y2={1}>
                    <stop offset={0} stopColor="#F6E6BA" />
                    <stop offset=".55" stopColor="#C9A45C" />
                    <stop offset={1} stopColor="#7E5E26" />
                  </linearGradient>
                  <radialGradient id="sv2e" cx=".45" cy=".4" r=".6">
                    <stop offset={0} stopColor="#fff" />
                    <stop offset={1} stopColor="#F1EBDD" />
                  </radialGradient>
                </defs>
                <ellipse
                  className="sv-shadow"
                  cx={80}
                  cy={176}
                  rx={34}
                  ry={5}
                  fill="rgba(0,0,0,.28)"
                />
                <g className="sv-all">
                  <g
                    className="sv-wl"
                    fill="url(#sv2w)"
                    stroke="#6B4E1C"
                    strokeWidth=".8"
                    strokeLinejoin="round"
                  >
                    <path
                      transform="translate(-6 22)"
                      d="M47 13C35 8 18 6 3 8C17 13 33 17 47 20ZM47 20C35 17.5 21 17 9 18.5C21 22 35 24 47 25.5ZM47 25.5C38 25 28 26 18 28.5C28 31 39 31 47 31Z"
                    />
                  </g>
                  <g
                    className="sv-wr"
                    fill="url(#sv2w)"
                    stroke="#6B4E1C"
                    strokeWidth=".8"
                    strokeLinejoin="round"
                  >
                    <path
                      transform="translate(166 22) scale(-1 1)"
                      d="M47 13C35 8 18 6 3 8C17 13 33 17 47 20ZM47 20C35 17.5 21 17 9 18.5C21 22 35 24 47 25.5ZM47 25.5C38 25 28 26 18 28.5C28 31 39 31 47 31Z"
                    />
                  </g>
                  {/* arms (behind the body) */}
                  <g className="sv-arm-l">
                    <path
                      d="M82 106Q66 110 52 118"
                      fill="none"
                      stroke="#B8893E"
                      strokeWidth="7.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx={50}
                      cy={119}
                      r="8.5"
                      fill="#FFFDF7"
                      stroke="#3A2A10"
                      strokeWidth="2.2"
                    />
                  </g>
                  <g className="sv-arm-r">
                    <path
                      d="M114 100Q132 98 142 84"
                      fill="none"
                      stroke="#B8893E"
                      strokeWidth="7.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx={143}
                      cy={81}
                      r="8.5"
                      fill="#FFFDF7"
                      stroke="#3A2A10"
                      strokeWidth="2.2"
                    />
                  </g>
                  {/* shoes */}
                  <ellipse cx={66} cy={168} rx={12} ry="6.5" fill="#1B1206" />
                  <ellipse cx={90} cy={168} rx={12} ry="6.5" fill="#1B1206" />
                  <ellipse
                    cx={62}
                    cy="165.5"
                    rx={4}
                    ry="1.6"
                    fill="rgba(255,255,255,.35)"
                  />
                  <ellipse
                    cx={86}
                    cy="165.5"
                    rx={4}
                    ry="1.6"
                    fill="rgba(255,255,255,.35)"
                  />
                  {/* the 7 */}
                  <path
                    className="sv-seven"
                    d="M44 30H122Q134 30 130 42L96 156Q93 164 84 164H70Q60 164 63 154L92 76H44Q34 76 34 66V40Q34 30 44 30Z"
                    fill="url(#sv2g)"
                    stroke="#3A2A10"
                    strokeWidth={3}
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46 36H118Q124 36 122 41"
                    fill="none"
                    stroke="rgba(255,255,255,.75)"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M98 88L76 152"
                    fill="none"
                    stroke="rgba(255,255,255,.35)"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  {/* crown */}
                  <g
                    className="sv-crown"
                    transform="translate(0 -3) rotate(-5 82 26)"
                  >
                    <path
                      d="M64 30L62 12L73 21L82 8L91 21L102 12L100 30Z"
                      fill="url(#sv2w)"
                      stroke="#3A2A10"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                    <circle
                      cx={82}
                      cy={9}
                      r="2.6"
                      fill="#C8102E"
                      stroke="#3A2A10"
                      strokeWidth={1}
                    />
                    <circle cx="62.5" cy="12.5" r={2} fill="#2F7BFF" />
                    <circle cx="101.5" cy="12.5" r={2} fill="#1FE38A" />
                  </g>
                  {/* face */}
                  <ellipse
                    cx={54}
                    cy={62}
                    rx={6}
                    ry="3.6"
                    fill="#F28B82"
                    opacity=".55"
                  />
                  <ellipse
                    cx={112}
                    cy={62}
                    rx={6}
                    ry="3.6"
                    fill="#F28B82"
                    opacity=".55"
                  />
                  <path
                    d="M60 41Q67 37 74 41M91 41Q98 37 105 41"
                    fill="none"
                    stroke="#3A2A10"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <g className="sv-eyes">
                    <ellipse
                      cx={67}
                      cy={53}
                      rx={8}
                      ry="9.5"
                      fill="url(#sv2e)"
                      stroke="#3A2A10"
                      strokeWidth={2}
                    />
                    <ellipse
                      cx={98}
                      cy={53}
                      rx={8}
                      ry="9.5"
                      fill="url(#sv2e)"
                      stroke="#3A2A10"
                      strokeWidth={2}
                    />
                    <circle
                      className="sv-pupil"
                      cx={69}
                      cy={55}
                      r="4.2"
                      fill="#2A1B08"
                    />
                    <circle
                      className="sv-pupil"
                      cx={100}
                      cy={55}
                      r="4.2"
                      fill="#2A1B08"
                    />
                    <circle cx="70.6" cy={53} r="1.5" fill="#fff" />
                    <circle cx="101.6" cy={53} r="1.5" fill="#fff" />
                  </g>
                  <path
                    className="sv-smile"
                    d="M73 65Q82 73 92 65"
                    fill="none"
                    stroke="#3A2A10"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  {/* bow tie */}
                  <g className="sv-tie">
                    <path
                      d="M96 80L84 73V89Z M96 80L108 73V89Z"
                      fill="#C8102E"
                      stroke="#3A2A10"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="92.5"
                      y="76.5"
                      width={7}
                      height={7}
                      rx={2}
                      fill="#E0314A"
                      stroke="#3A2A10"
                      strokeWidth="1.6"
                    />
                  </g>
                </g>
                <g className="sv-spark" fill="#FFE08A">
                  <path d="M18 40l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                  <path d="M146 30l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z" />
                  <path d="M150 110l1.4 3.4 3.4 1.4-3.4 1.4-1.4 3.4-1.4-3.4-3.4-1.4 3.4-1.4z" />
                </g>
              </svg>
            </div>
            Click a price to add a selection.
            <br />
            <span style={{ fontSize: "12px" }}>
              Blue to back (bet for) · pink to lay (bet against)
            </span>
          </div>
          <div className="slip-foot">
            <div className="tot">
              <span>Liability</span>
              <b style={{ color: "var(--loss)" }} data-slip-liab>
                0.00
              </b>
            </div>
            <label className="bs-chk">
              <input type="checkbox" />
              Confirm bets before placing
            </label>
            <div data-slip-lvl />
            <div className="bs-act">
              <button className="bs-cancel">Cancel all</button>
              <button className="bs-place" data-place disabled>
                Log in to bet
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Home;
