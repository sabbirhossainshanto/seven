const LeftSidebar = () => {
  return (
    <aside className="left">
      <div className="side">
        <h4>Sports</h4>
        <div id="sportlist">
          <button className="sp" aria-current="true">
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
          <button className="sp" aria-current="false">
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
          <button className="sp" aria-current="false">
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
          <button className="sp" aria-current="false">
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
          <button className="sp" aria-current="false">
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
          <button className="sp" aria-current="false">
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
          <button className="sp" aria-current="false">
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
    </aside>
  );
};

export default LeftSidebar;
