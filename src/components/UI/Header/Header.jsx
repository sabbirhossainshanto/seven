import { useDispatch } from "react-redux";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="top">
      <div className="top-in">
        <button
          className="menu-btn"
          id="menuBtn"
          aria-label="All sports menu"
          aria-expanded="false"
          aria-controls="sportsDrawer"
        >
          <span />
          <span />
          <span />
        </button>
        <a className="brand" href="#" aria-label="SevenX home">
          <svg className="emblem" viewBox="0 0 120 48" aria-hidden="true">
            <defs>
              <linearGradient id="eg" x1={0} y1={0} x2={0} y2={1}>
                <stop offset={0} stopColor="#F3E2B3" />
                <stop offset=".45" stopColor="#C9A45C" />
                <stop offset=".55" stopColor="#B38D46" />
                <stop offset={1} stopColor="#7E5E26" />
              </linearGradient>
              <linearGradient id="shine" x1={0} y1={0} x2={1} y2={0}>
                <stop offset={0} stopColor="#fff" stopOpacity={0} />
                <stop offset=".5" stopColor="#fff" stopOpacity=".95" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
              </linearGradient>
              <g id="wingShape">
                <path d="M47 13C35 8 18 6 3 8C17 13 33 17 47 20Z" />
                <path d="M47 20C35 17.5 21 17 9 18.5C21 22 35 24 47 25.5Z" />
                <path d="M47 25.5C38 25 28 26 18 28.5C28 31 39 31 47 31Z" />
              </g>
              <path
                id="shieldShape"
                d="M60 5L73 11.5V27C73 34.5 67 40 60 43.5C53 40 47 34.5 47 27V11.5Z"
              />
              <clipPath id="emClip">
                <use href="#wingShape" />
                <use
                  href="#wingShape"
                  transform="translate(120 0) scale(-1 1)"
                />
                <use href="#shieldShape" />
              </clipPath>
            </defs>
            <g className="wing-l" fill="url(#eg)">
              <path
                className="f f1"
                d="M47 13C35 8 18 6 3 8C17 13 33 17 47 20Z"
              />
              <path
                className="f f2"
                d="M47 20C35 17.5 21 17 9 18.5C21 22 35 24 47 25.5Z"
              />
              <path
                className="f f3"
                d="M47 25.5C38 25 28 26 18 28.5C28 31 39 31 47 31Z"
              />
            </g>
            <g className="wing-r" fill="url(#eg)">
              <g transform="translate(120 0) scale(-1 1)">
                <path
                  className="f f1"
                  d="M47 13C35 8 18 6 3 8C17 13 33 17 47 20Z"
                />
                <path
                  className="f f2"
                  d="M47 20C35 17.5 21 17 9 18.5C21 22 35 24 47 25.5Z"
                />
                <path
                  className="f f3"
                  d="M47 25.5C38 25 28 26 18 28.5C28 31 39 31 47 31Z"
                />
              </g>
            </g>
            <g className="shield">
              <use
                href="#shieldShape"
                fill="#0E0D0B"
                stroke="url(#eg)"
                strokeWidth="1.5"
              />
              <path
                d="M60 8.5L70 13.5V26.6C70 32.6 65.4 37 60 40C54.6 37 50 32.6 50 26.6V13.5Z"
                fill="none"
                stroke="url(#eg)"
                strokeWidth=".5"
                opacity=".55"
              />
              <text
                x={60}
                y={31}
                textAnchor="middle"
                fontFamily="Jost,system-ui,sans-serif"
                fontWeight={500}
                fontSize={19}
                fill="url(#eg)"
              >
                7
              </text>
            </g>
            <g clipPath="url(#emClip)">
              <rect
                className="glint"
                x={-30}
                y={-10}
                width={22}
                height={70}
                fill="url(#shine)"
                transform="skewX(-20)"
              />
            </g>
          </svg>
          <span className="brand-sevi">
            <svg
              className="sevi pose-idle"
              viewBox="-10 -6 180 186"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="sv1g" x1={0} y1={0} x2="0.35" y2={1}>
                  <stop offset={0} stopColor="#FFF1C2" />
                  <stop offset=".35" stopColor="#E9C872" />
                  <stop offset=".7" stopColor="#C9A04F" />
                  <stop offset={1} stopColor="#8E6A2A" />
                </linearGradient>
                <linearGradient id="sv1w" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset={0} stopColor="#F6E6BA" />
                  <stop offset=".55" stopColor="#C9A45C" />
                  <stop offset={1} stopColor="#7E5E26" />
                </linearGradient>
                <radialGradient id="sv1e" cx=".45" cy=".4" r=".6">
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
                  fill="url(#sv1w)"
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
                  fill="url(#sv1w)"
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
                  fill="url(#sv1g)"
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
                    fill="url(#sv1w)"
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
                    fill="url(#sv1e)"
                    stroke="#3A2A10"
                    strokeWidth={2}
                  />
                  <ellipse
                    cx={98}
                    cy={53}
                    rx={8}
                    ry="9.5"
                    fill="url(#sv1e)"
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
          </span>
        </a>
        <nav className="top-nav" aria-label="Main">
          <button data-nav="home" aria-current="page">
            Sports
          </button>
          <button data-nav="inplay">In-play</button>
          <div className="nav-dd">
            <button data-nav="casino" aria-haspopup="true">
              Casino{" "}
              <i className="dd-caret" aria-hidden="true">
                ▾
              </i>
            </button>
            <div
              className="dd-panel"
              id="casinoDD"
              role="menu"
              aria-label="Casino games"
              data-ready={1}
            >
              <div className="dd-grid">
                <button className="cg-it" title="Aviator">
                  <span className="cg-ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M2.5 13l7-1.2L14 5h2l-2 6.6 5.5-.8L21 8.5h1.5l-.8 4.2.8 4.3H21l-1.5-2.3-5.5-.8 2 6.6h-2l-4.5-6.8-7-1.2z" />
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Aviator</b>
                    <small>Spribe</small>
                  </span>
                  <em className="cg-hot">Hot</em>
                </button>
                <button className="cg-it" title="Andar Bahar">
                  <span className="cg-ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <rect x="2.5" y={5} width={9} height={14} rx="1.5" />
                      <rect x="12.5" y={5} width={9} height={14} rx="1.5" />
                      <path
                        d="M7 9.5l1.5 2.5L7 14.5 5.5 12zM17 9.5l1.5 2.5-1.5 2.5-1.5-2.5z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Andar Bahar</b>
                    <small>
                      <i className="cg-live" />6 tables
                    </small>
                  </span>
                </button>
                <button className="cg-it" title="Teen Patti">
                  <span className="cg-ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect
                        x="8.5"
                        y={3}
                        width={8}
                        height="12.5"
                        rx="1.3"
                        transform="rotate(-22 12 18)"
                      />
                      <rect x={8} y={3} width={8} height="12.5" rx="1.3" />
                      <rect
                        x="7.5"
                        y={3}
                        width={8}
                        height="12.5"
                        rx="1.3"
                        transform="rotate(22 12 18)"
                      />
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Teen Patti</b>
                    <small>
                      <i className="cg-live" />
                      12 tables
                    </small>
                  </span>
                </button>
                <button className="cg-it" title="Dragon Tiger">
                  <span className="cg-ic">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect
                        x={3}
                        y={3}
                        width={18}
                        height={18}
                        rx={4}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <text
                        x={12}
                        y={16}
                        textAnchor="middle"
                        fontSize={9}
                        fontWeight={600}
                        fill="currentColor"
                        fontFamily="Jost,system-ui,sans-serif"
                      >
                        DT
                      </text>
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Dragon Tiger</b>
                    <small>
                      <i className="cg-live" />4 tables
                    </small>
                  </span>
                </button>
                <button className="cg-it" title="Roulette">
                  <span className="cg-ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <circle cx={12} cy={12} r={9} />
                      <circle cx={12} cy={12} r="4.5" />
                      <path d="M12 3v4.5M12 16.5V21M3 12h4.5M16.5 12H21M5.6 5.6l3.2 3.2M15.2 15.2l3.2 3.2M5.6 18.4l3.2-3.2M15.2 8.8l3.2-3.2" />
                      <circle cx={12} cy={12} r="1.3" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Roulette</b>
                    <small>
                      <i className="cg-live" />9 tables
                    </small>
                  </span>
                </button>
                <button className="cg-it" title="Baccarat">
                  <span className="cg-ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <circle cx={12} cy={12} r={9} />
                      <circle cx={12} cy={12} r={5} />
                      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Baccarat</b>
                    <small>
                      <i className="cg-live" />
                      14 tables
                    </small>
                  </span>
                </button>
                <button className="cg-it" title="Blackjack">
                  <span className="cg-ic">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect
                        x={3}
                        y={3}
                        width={18}
                        height={18}
                        rx={4}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <text
                        x={12}
                        y={16}
                        textAnchor="middle"
                        fontSize={9}
                        fontWeight={600}
                        fill="currentColor"
                        fontFamily="Jost,system-ui,sans-serif"
                      >
                        21
                      </text>
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Blackjack</b>
                    <small>
                      <i className="cg-live" />7 tables
                    </small>
                  </span>
                </button>
                <button className="cg-it" title="32 Cards">
                  <span className="cg-ic">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect
                        x={3}
                        y={3}
                        width={18}
                        height={18}
                        rx={4}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <text
                        x={12}
                        y={16}
                        textAnchor="middle"
                        fontSize={9}
                        fontWeight={600}
                        fill="currentColor"
                        fontFamily="Jost,system-ui,sans-serif"
                      >
                        32
                      </text>
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>32 Cards</b>
                    <small>
                      <i className="cg-live" />3 tables
                    </small>
                  </span>
                </button>
                <button className="cg-it" title="Poker">
                  <span className="cg-ic">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 3.5c3 3.8 7.5 6 7.5 9.4a3.7 3.7 0 0 1-6.3 2.6c.2 1.8.9 3.3 2.3 4.5H8.5c1.4-1.2 2.1-2.7 2.3-4.5a3.7 3.7 0 0 1-6.3-2.6c0-3.4 4.5-5.6 7.5-9.4z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Poker</b>
                    <small>
                      <i className="cg-live" />5 tables
                    </small>
                  </span>
                </button>
                <button className="cg-it" title="Lucky 7">
                  <span className="cg-ic">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect
                        x={3}
                        y={3}
                        width={18}
                        height={18}
                        rx={4}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <text
                        x={12}
                        y={16}
                        textAnchor="middle"
                        fontSize={11}
                        fontWeight={600}
                        fill="currentColor"
                        fontFamily="Jost,system-ui,sans-serif"
                      >
                        7
                      </text>
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Lucky 7</b>
                    <small>Quick game</small>
                  </span>
                </button>
                <button className="cg-it" title="Plinko">
                  <span className="cg-ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <circle cx={12} cy={5} r="1.4" />
                      <circle cx={9} cy={9} r="1.4" />
                      <circle cx={15} cy={9} r="1.4" />
                      <circle cx={6} cy={13} r="1.4" />
                      <circle cx={12} cy={13} r="1.4" />
                      <circle cx={18} cy={13} r="1.4" />
                      <path d="M3 18h18v2.5H3z" opacity=".6" />
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Plinko</b>
                    <small>Spribe</small>
                  </span>
                </button>
                <button className="cg-it" title="Mines">
                  <span className="cg-ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 4h10l4 5-9 11L3 9z" />
                      <path d="M3 9h18M9 4l3 16 3-16" />
                    </svg>
                  </span>
                  <span className="cg-tx">
                    <b>Mines</b>
                    <small>Spribe</small>
                  </span>
                </button>
              </div>
              <button className="dd-all">All casino games →</button>
            </div>
          </div>
          <button data-nav="bonus" className="nav-bonus">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3.5" y={9} width={17} height="11.5" rx={1} />
              <path d="M2.5 9h19V6.5h-19zM12 6.5v14M12 6.5C10 3 6.5 3.5 7.5 6.5M12 6.5c2-3.5 5.5-3 4.5 0" />
            </svg>
            <span>Rewards</span>
          </button>
          <button data-nav="club" className="nav-club">
            <svg className="crown" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 10H5z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            <span>Club</span>
          </button>
          <button data-nav="partners">Refer &amp; Win</button>
          <button data-nav="pinned">
            Pinned{" "}
            <span className="pin-count" hidden>
              0
            </span>
          </button>
        </nav>
        <div className="spacer" />
        <button
          className="pin-hdr"
          data-nav="pinned"
          aria-label="Pinned matches and sessions"
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
          <span className="pin-count" hidden>
            0
          </span>
        </button>
        {/* Look switch: luxury (gold) ⇄ exchange (yellow & red, Betfair-style) */}
        <button
          className="skin-btn has-locks"
          id="skinBtn"
          title="Change the site look"
          aria-label="Site look: Exchange. 2 more to unlock. Change look"
          aria-haspopup="menu"
        >
          <i
            className="sk-sw"
            aria-hidden="true"
            style={{
              background: `linear-gradient(
          135deg,
          rgb(255, 196, 0) 0px,
          rgb(255, 196, 0) 50%,
          rgb(200, 16, 46) 50%,
          rgb(200, 16, 46) 100%
        )`,
            }}
          />
          <span id="skinLbl">EXCHANGE</span>
        </button>
        <div
          id="auth-out"
          style={{ display: "flex", gap: "8px", alignItems: "center" }}
        >
          <button
            className="demo-top"
            aria-label="Try the demo — 10,000 play credits, no sign-up"
          >
            <span className="demo-top-in">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <circle
                  cx={13}
                  cy={20}
                  r="7.5"
                  fill="none"
                  stroke="url(#eg)"
                  strokeWidth="2.4"
                />
                <circle
                  cx={13}
                  cy={20}
                  r={3}
                  fill="none"
                  stroke="url(#eg)"
                  strokeWidth="1.4"
                />
                <path
                  d="M20.5 20H35M30 20v5M34 20v4"
                  fill="none"
                  stroke="url(#eg)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="demo-top-txt">Demo</span>
            </span>
          </button>
          <button
            className="btn login-btn"
            onClick={() => dispatch(setShowLoginModal(true))}
          >
            Log in
          </button>
          <button
            onClick={() => dispatch(setShowRegisterModal(true))}
            className="btn"
          >
            Register
          </button>
        </div>
        <div
          id="auth-in"
          className="hide"
          style={{ display: "flex", gap: "12px", alignItems: "center" }}
        >
          <span className="demo-chip hide" id="demoChip">
            Demo
          </span>
          {/* Claim centre: everything ready to claim, from every reward, in one place */}
          <button
            className="rw-bell"
            id="rwBell"
            aria-label="Rewards ready to claim"
            hidden
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 11h16v9H4zM3 7.5h18V11H3zM12 7.5V20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.5C10.5 4 7 4 7.2 6c.2 1.6 3 1.5 4.8 1.5ZM12 7.5c1.5-3.5 5-3.5 4.8-1.5-.2 1.6-3 1.5-4.8 1.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            <b id="rwCount" />
          </button>
          <button
            className="lvl"
            id="tierChip"
            style={{
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
              "--p": "48.5",
            }}
            data-tier="gold"
            aria-label="Gold level. 38,600 points to Platinum. Open the Club."
          >
            <span className="lvl-ring">
              <span className="gem3d" data-gem="gold" aria-hidden="true">
                <svg viewBox="-2 0 104 92">
                  <defs>
                    <clipPath id="gm4c">
                      <polygon points="4,34 30,12 70,12 96,34 50,88" />
                    </clipPath>
                    <linearGradient id="gm4s" x1={0} x2={1} y1={0} y2=".25">
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
                  <g clipPath="url(#gm4c)">
                    <rect
                      className="gem-sheen"
                      x={-60}
                      y={0}
                      width={60}
                      height={92}
                      fill="url(#gm4s)"
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
            <span className="lvl-tx">
              <b>Gold</b>
              <small>38.6K to Platinum</small>
            </span>
          </button>
          <button
            className="coin-bal"
            id="coinBal"
            aria-label="Balance in crypto — change coin"
            title="≈ 1,250.00 in site currency · tap to change coin"
          >
            <i className="cb-coin" style={{ "--cc": "#26a17b" }}>
              ₮
            </i>
            <b>14.20</b>
            <span>USDT</span>
            <em aria-hidden="true">▾</em>
          </button>
          <div className="balance" role="button" tabIndex={0}>
            <small>
              Balance<span className="exp-part"> · Exposure</span>
            </small>
            <b>
              <span id="bal">1,250.00</span>
              <span
                className="exp-part"
                style={{ color: "var(--loss)", fontSize: "13px" }}
              >
                <span id="exp">0.00</span>
              </span>
            </b>
          </div>
          {/* Cashier: Deposit / Withdraw open the cashier window from any page */}
          <div className="cash-btns">
            <button className="cz-dep" aria-label="Deposit">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 5v14M5 12h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </svg>
              <span>Deposit</span>
            </button>
            <button className="cz-wd" aria-label="Withdraw">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 18V6M7 11l5-5 5 5M5 20h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Withdraw</span>
            </button>
          </div>
          <button
            className="btn sm logout-btn"
            aria-label="Log out"
            title="Log out"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M10 16l-4-4 4-4M6 12h10" />
            </svg>
            <span>Log out</span>
          </button>
        </div>
      </div>

      <nav
        className="casino-bar"
        id="casinoBar"
        aria-label="Casino games"
        hidden
      />

      <div className="lvl-strip" id="lvlStrip" hidden />
    </header>
  );
};

export default Header;
