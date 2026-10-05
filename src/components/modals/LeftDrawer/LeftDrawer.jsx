import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setShowLeftDrawer } from "../../../redux/features/global/globalSlice";

const LeftDrawer = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="drawer-bg open" id="drawerBg"></div>
      <aside
        className="drawer open"
        id="sportsDrawer"
        aria-label="All sports"
        aria-hidden="false"
      >
        <div className="dr-head">
          <b>All sports</b>
          <button
            onClick={() => dispatch(setShowLeftDrawer(false))}
            className="dr-x"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div
          className="dr-lang"
          data-no-i18n
          role="group"
          aria-label="Language"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx={12} cy={12} r="8.5" />
            <path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.2 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.2-3.8-8.5s1.2-6.1 3.8-8.5z" />
          </svg>
          <button lang="en" aria-pressed="true">
            English
          </button>
          <button lang="hi" aria-pressed="false">
            हिन्दी
          </button>
          <button lang="ta" aria-pressed="false">
            தமிழ்
          </button>
          <button lang="te" aria-pressed="false">
            తెలుగు
          </button>
          <button lang="kn" aria-pressed="false">
            ಕನ್ನಡ
          </button>
          <button lang="ml" aria-pressed="false">
            മലയാളം
          </button>
        </div>
        <div className="dr-search">
          <input
            id="drQ"
            type="search"
            placeholder="Search sports"
            defaultValue
            aria-label="Search sports"
          />
        </div>
        <button className="dr-inplay">
          <i className="dr-live" />
          In-play now<span>5 live</span>
        </button>

        <nav className="dr-list" aria-label="Sports">
          <button className="dr-sp" aria-current="true">
            <svg
              className="si si-all"
              style={{ "--t": "-8.972s" }}
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
            <span className="dr-nm">All sports</span>
            <span className="dr-lv">● 5</span>
            <span className="dr-n">20</span>
          </button>
          <button className="dr-sp" aria-current="false">
            <svg
              className="si si-cricket"
              style={{ "--t": "-8.972s" }}
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
            <span className="dr-nm">Cricket</span>
            <span className="dr-lv">● 3</span>
            <span className="dr-n">14</span>
          </button>
          <button className="dr-sp" aria-current="false">
            <svg
              className="si si-football"
              style={{ "--t": "-8.972s" }}
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
            <span className="dr-nm">Football</span>
            <span className="dr-lv">● 9</span>
            <span className="dr-n">62</span>
          </button>
          <button className="dr-sp" aria-current="false">
            <svg
              className="si si-tennis"
              style={{ "--t": "-8.972s" }}
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
            <span className="dr-nm">Tennis</span>
            <span className="dr-lv">● 6</span>
            <span className="dr-n">27</span>
          </button>
          <button className="dr-sp" aria-current="false">
            <svg
              className="si si-basketball"
              style={{ "--t": "-8.972s" }}
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
            <span className="dr-nm">Basketball</span>
            <span className="dr-lv">● 2</span>
            <span className="dr-n">11</span>
          </button>
          <button className="dr-sp" aria-current="false">
            <svg
              className="si si-horse"
              style={{ "--t": "-8.972s" }}
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
            <span className="dr-nm">Horse racing</span>
            <span className="dr-n">38</span>
          </button>
          <button className="dr-sp" aria-current="false">
            <svg
              className="si si-kabaddi"
              style={{ "--t": "-8.972s" }}
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
            <span className="dr-nm">Kabaddi</span>
            <span className="dr-lv">● 1</span>
            <span className="dr-n">4</span>
          </button>
        </nav>
        <div className="dr-links">
          <button>Casino</button>
          <button>Rewards</button>
          <button>Club</button>
          <button>Pinned</button>
          <button className="dr-vault">
            <svg className="vt-ic" viewBox="0 0 48 48" aria-hidden="true">
              <rect
                x={4}
                y={6}
                width={40}
                height={34}
                rx={5}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              />
              <circle
                cx={24}
                cy={23}
                r={10}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              />
              <circle cx={24} cy={23} r="2.6" fill="currentColor" />
              <path
                d="M24 13v4M24 29v4M14 23h4M30 23h4"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M10 40v3M38 40v3"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
            Fixed Vault <small>earn daily</small>
          </button>
          <button className="dr-pz">
            <svg className="pz-emblem " viewBox="0 0 64 64" aria-hidden="true">
              <defs>
                <linearGradient id="pze5g" x1={0} y1={0} x2={1} y2={1}>
                  <stop offset={0} stopColor="#FFF6D0" />
                  <stop offset=".3" stopColor="#F2C94C" />
                  <stop offset=".55" stopColor="#A8750E" />
                  <stop offset=".8" stopColor="#F7DA7F" />
                  <stop offset={1} stopColor="#8C5E0A" />
                </linearGradient>
                <radialGradient id="pze5e" cx=".5" cy=".35" r=".7">
                  <stop offset={0} stopColor="#2B1A10" />
                  <stop offset=".7" stopColor="#0D0806" />
                  <stop offset={1} stopColor="#050302" />
                </radialGradient>
                <linearGradient id="pze5d" x1={0} y1={0} x2={1} y2={1}>
                  <stop offset={0} stopColor="#FFFFFF" />
                  <stop offset=".45" stopColor="#CFEFFF" />
                  <stop offset=".7" stopColor="#8FD3F5" />
                  <stop offset={1} stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
              <circle cx={32} cy={32} r="30.5" fill="url(#pze5g)" />
              <circle cx={32} cy={32} r="28.2" fill="url(#pze5e)" />
              <circle
                cx={32}
                cy={32}
                r="26.4"
                fill="none"
                stroke="url(#pze5g)"
                strokeWidth=".7"
                strokeDasharray="1.2 1.6"
                opacity=".85"
              />
              <path
                d="M0 0C3 -2.5 7 -2.5 9 0C7 2.5 3 2.5 0 0Z"
                transform="translate(18.05515614710468 51.53308295990081) rotate(215.52338329811107) scale(.62)"
                fill="url(#pze5g)"
              />
              <path
                d="M0 0C3 -2.5 7 -2.5 9 0C7 2.5 3 2.5 0 0Z"
                transform="translate(12.478027885055027 45.9603941471332) rotate(234.43099053742822) scale(.62)"
                fill="url(#pze5g)"
              />
              <path
                d="M0 0C3 -2.5 7 -2.5 9 0C7 2.5 3 2.5 0 0Z"
                transform="translate(9.007619353058601 38.88116503116693) rotate(253.3385977767454) scale(.62)"
                fill="url(#pze5g)"
              />
              <path
                d="M0 0C3 -2.5 7 -2.5 9 0C7 2.5 3 2.5 0 0Z"
                transform="translate(45.94484385289532 51.53308295990081) rotate(-35.523383298111035) scale(.62)"
                fill="url(#pze5g)"
              />
              <path
                d="M0 0C3 -2.5 7 -2.5 9 0C7 2.5 3 2.5 0 0Z"
                transform="translate(51.52197211494497 45.9603941471332) rotate(-54.43099053742821) scale(.62)"
                fill="url(#pze5g)"
              />
              <path
                d="M0 0C3 -2.5 7 -2.5 9 0C7 2.5 3 2.5 0 0Z"
                transform="translate(54.9923806469414 38.88116503116693) rotate(-73.33859777674537) scale(.62)"
                fill="url(#pze5g)"
              />
              <path
                d="M26.5 9.2L28.3 12.4L32 8.6L35.7 12.4L37.5 9.2L36.6 14H27.4Z"
                fill="url(#pze5g)"
              />
              <circle cx={32} cy="8.3" r=".9" fill="#FFF6D0" />
              <g transform="translate(0 1)">
                <path
                  d="M20 22H28C28 22 26 18.2 28.8 16.3C30.8 15 33.2 15 35.2 16.3C38 18.2 36 22 36 22H44V30C44 30 47.8 28 49.7 30.8C51 32.8 51 35.2 49.7 37.2C47.8 40 44 38 44 38V46H36C36 46 37.6 42.3 35.2 40.8C33.2 39.6 30.8 39.6 28.8 40.8C26.4 42.3 28 46 28 46H20V38C20 38 23.7 39.6 25.2 37.2C26.4 35.2 26.4 32.8 25.2 30.8C23.7 28.4 20 30 20 30Z"
                  fill="url(#pze5g)"
                  stroke="#5E3E06"
                  strokeWidth=".8"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.5 23.5H28.6M36.3 23.5H42.5V29"
                  fill="none"
                  stroke="#FFF8DC"
                  strokeWidth={1}
                  strokeLinecap="round"
                  opacity=".8"
                />
                <path
                  d="M32 26.2L37.2 31.2L32 38.6L26.8 31.2Z"
                  fill="url(#pze5d)"
                  stroke="#3C6E8A"
                  strokeWidth=".5"
                />
                <path
                  d="M26.8 31.2H37.2M32 26.2L29.6 31.2L32 38.6L34.4 31.2Z"
                  fill="none"
                  stroke="#3C6E8A"
                  strokeWidth=".35"
                  opacity=".7"
                />
                <path
                  d="M29.6 31.2L32 26.2L34.4 31.2Z"
                  fill="#fff"
                  opacity=".7"
                />
              </g>
              <g className="pz-em-spark" fill="#FFF6D0">
                <path d="M42 17l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
                <path d="M19 44l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6z" />
              </g>
            </svg>
            <span className="dr-pz-t">
              <small>Private collection</small>
              <b>Puzzle Club</b>
            </span>
            <span className="dr-pz-w">
              <small>Win up to</small>
              <b>₹1,00,000</b>
            </span>
          </button>
          <button className="dr-tasks">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3.5" y={5} width={17} height={15} rx={2} />
              <path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4" />
            </svg>
            Daily tasks
          </button>
          <button className="dr-race">
            <span aria-hidden="true">♥♠</span>Card Race
          </button>
          <button className="dr-wheel">
            <i className="dr-wh-ic" aria-hidden="true" />
            Lucky Wheel
          </button>
          <button className="dr-skin">
            <i
              className="sk-sw"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(135deg,#FFC400 0 50%,#C8102E 50% 100%)",
              }}
            />
            Look: Exchange · change
          </button>
          <button className="dr-inbox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3.5" y={9} width={17} height="11.5" rx={1} />
              <path d="M2.5 9h19V6.5h-19zM12 6.5v14M12 6.5C10 3 6.5 3.5 7.5 6.5M12 6.5c2-3.5 5.5-3 4.5 0" />
            </svg>
            Test inbox <small>emails · demo</small>
          </button>
          <button className="dr-help">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 5.5h16v10.5H9l-5 4z" />
              <path d="M8 9.5h8M8 12.5h5" />
            </svg>
            24/7 Support chat <em className="sp-dot" data-sp-dot hidden />
          </button>
        </div>
      </aside>
    </Fragment>
  );
};

export default LeftDrawer;
