import { useDispatch, useSelector } from "react-redux";
import Unauthorized from "./Unauthorized";
import AuthIn from "./AuthIn";
import {
  setGroup,
  setShowLeftDrawer,
} from "../../../redux/features/global/globalSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const Header = () => {
  const { getLanguage } = useLanguage();
  const { token } = useSelector((state) => state.auth);
  const { group } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="top">
      <div className="top-in">
        <button
          onClick={() => dispatch(setShowLeftDrawer(true))}
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
        <Link className="brand" to="/" aria-label="SevenX home">
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
        </Link>
        <nav className="top-nav" aria-label="Main">
          <button
            onClick={() => {
              navigate("/");
              dispatch(setGroup(0));
            }}
            data-nav="home"
            aria-current={
              location.pathname === "/" && group === 0 ? "page" : ""
            }
          >
            {getLanguage(LanguageKey.IN_PLAY)}
          </button>

          <div className="nav-dd">
            <button
              onClick={() => navigate("/live-casino")}
              data-nav="casino"
              aria-haspopup="true"
            >
              {getLanguage(LanguageKey.CASINO)}
            </button>
          </div>
        </nav>
        <div className="spacer" />
        {token ? <AuthIn /> : <Unauthorized />}
      </div>
    </header>
  );
};

export default Header;
