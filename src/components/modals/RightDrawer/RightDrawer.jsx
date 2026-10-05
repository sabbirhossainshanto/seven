import { useDispatch, useSelector } from "react-redux";
import { setShowRightDrawer } from "../../../redux/features/global/globalSlice";
import useBalance from "../../../hooks/balance";
import { logout } from "../../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const RightDrawer = () => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const { getLanguage } = useLanguage();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { data } = useBalance();

  const closeRightDrawer = () => {
    dispatch(setShowRightDrawer(false));
  };

  const handleNavigate = (link) => {
    navigate(link);
    closeRightDrawer();
  };
  return (
    <div className="ac-bg open" id="acBg">
      <aside
        className="ac-panel"
        id="acPanel"
        role="dialog"
        aria-modal="true"
        aria-label="My account"
      >
        <div className="ac-head">
          <div className="ac-who">
            <b>{user}</b>
            {/* <span className="ac-id">Demo lounge · play credits</span> */}
          </div>
          <button
            onClick={() => dispatch(setShowRightDrawer(false))}
            className="m-x ac-x"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <section className="ac-bal">
          <h4>Balance information</h4>
          <div className="ac-grid">
            <div>
              <small>Balance</small>
              <b>{data?.availBalance}</b>
            </div>
            <div>
              <small>Exposure</small>
              <b className>{data?.deductedExposure}</b>
            </div>
          </div>
        </section>
        <button className="ac-help">
          <span className="sp-av">
            <svg
              className="sevi pose-wave "
              viewBox="-10 -6 180 186"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="sv47g" x1={0} y1={0} x2="0.35" y2={1}>
                  <stop offset={0} stopColor="#FFF1C2" />
                  <stop offset=".35" stopColor="#E9C872" />
                  <stop offset=".7" stopColor="#C9A04F" />
                  <stop offset={1} stopColor="#8E6A2A" />
                </linearGradient>
                <linearGradient id="sv47w" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset={0} stopColor="#F6E6BA" />
                  <stop offset=".55" stopColor="#C9A45C" />
                  <stop offset={1} stopColor="#7E5E26" />
                </linearGradient>
                <radialGradient id="sv47e" cx=".45" cy=".4" r=".6">
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
                  fill="url(#sv47w)"
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
                  fill="url(#sv47w)"
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
                  fill="url(#sv47g)"
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
                    fill="url(#sv47w)"
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
                    fill="url(#sv47e)"
                    stroke="#3A2A10"
                    strokeWidth={2}
                  />
                  <ellipse
                    cx={98}
                    cy={53}
                    rx={8}
                    ry="9.5"
                    fill="url(#sv47e)"
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
          <span>
            <b>24/7 Support chat</b>
            <small>
              Deposit, withdrawal, bonus or site issue — we reply in ~5 min
            </small>
          </span>
          <em className="sp-dot" data-sp-dot hidden />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <h5 className="ac-h"> {getLanguage(LanguageKey.STATEMENTS)}</h5>
        <nav className="ac-list">
          <button
            onClick={() => handleNavigate("/deposit-withdraw-report")}
            className="ac-row"
          >
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
              </svg>
            </span>
            <span className="ac-l">
              {" "}
              {getLanguage(LanguageKey.DEPOSIT_WITHDRAW_REPORT)}
            </span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleNavigate("/open-bets")}
            className="ac-row"
          >
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
              </svg>
            </span>
            <span className="ac-l"> {getLanguage(LanguageKey.OPEN_BETS)}</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleNavigate("/betting-profit-loss")}
            className="ac-row"
          >
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
              </svg>
            </span>
            <span className="ac-l">
              {" "}
              {getLanguage(LanguageKey.BETTING_PROFIT_AND_LOSS)}
            </span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleNavigate("/my-bank-details")}
            className="ac-row"
          >
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
              </svg>
            </span>
            <span className="ac-l">
              {" "}
              {getLanguage(LanguageKey.MY_BANK_DETAILS)}
            </span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleNavigate("/bonus-statement")}
            className="ac-row"
          >
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
              </svg>
            </span>
            <span className="ac-l">
              {" "}
              {getLanguage(LanguageKey.BONUS_STATEMENT)}
            </span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleNavigate("/affiliate")}
            className="ac-row"
          >
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
              </svg>
            </span>
            <span className="ac-l"> {getLanguage(LanguageKey.AFFILIATE)}</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleNavigate("/promotions")}
            className="ac-row"
          >
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
              </svg>
            </span>
            <span className="ac-l">
              {" "}
              {getLanguage(LanguageKey.PROMOTION_AND_BONUSES)}
            </span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleNavigate("/lossback-bonus")}
            className="ac-row"
          >
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
              </svg>
            </span>
            <span className="ac-l">
              {" "}
              {getLanguage(LanguageKey.LOSSBACK_BONUS)}
            </span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          {closePopupForForever && (
            <button
              onClick={() => handleNavigate("/app-only-bonus")}
              className="ac-row"
            >
              <span className="ac-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx={12} cy={12} r={3} />
                  <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
                </svg>
              </span>
              <span className="ac-l">
                {" "}
                {getLanguage(LanguageKey.APP_ONLY_BONUS)}
              </span>
              <span className="ac-ch">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          )}
        </nav>
        <h5 className="ac-h">Account settings</h5>
        <nav className="ac-list">
          <button className="ac-row">
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r="8.5" />
                <path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.2 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.2-3.8-8.5s1.2-6.1 3.8-8.5z" />
              </svg>
            </span>
            <span className="ac-l">Language</span>
            <em className="ac-bd">English</em>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button className="ac-row">
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2.5v3M12 18.5v3M4.2 7l2.6 1.5M17.2 15.5l2.6 1.5M4.2 17l2.6-1.5M17.2 8.5l2.6-1.5" />
              </svg>
            </span>
            <span className="ac-l">Stake settings</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button className="ac-row">
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r="8.5" />
                <path d="M12 3.5a8.5 8.5 0 0 0 0 17z" fill="currentColor" />
              </svg>
            </span>
            <span className="ac-l">Site look</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </nav>
        <h5 className="ac-h">Android app</h5>
        <nav className="ac-list">
          <button className="ac-row">
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 4v10M8 10l4 4 4-4M5 17v2.5h14V17" />
              </svg>
            </span>
            <span className="ac-l">Download app</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </nav>
        <h5 className="ac-h">Legal &amp; compliance</h5>
        <nav className="ac-list">
          <button className="ac-row">
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x={5} y="3.5" width={14} height={17} rx={2} />
                <path d="M9 3.5V6h6V3.5M9 11h6M9 15h4" />
              </svg>
            </span>
            <span className="ac-l">Rules</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button className="ac-row">
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 3.5h8L20.5 8v8L16 20.5H8L3.5 16V8z" />
                <path d="M9 12h6" />
              </svg>
            </span>
            <span className="ac-l">Exclusion policy</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button className="ac-row">
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" />
              </svg>
            </span>
            <span className="ac-l">Responsible gambling</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button className="ac-row">
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x={5} y="10.5" width={14} height={10} rx={2} />
                <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
              </svg>
            </span>
            <span className="ac-l">Privacy policy</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button className="ac-row">
            <span className="ac-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 3.5h8l4 4v13H6z" />
                <path d="M14 3.5v4h4M9 13h6M9 16.5h6" />
              </svg>
            </span>
            <span className="ac-l">Terms &amp; conditions</span>
            <span className="ac-ch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </nav>
        <button
          onClick={() => {
            dispatch(logout());
            dispatch(setShowRightDrawer(false));
            navigate("/");
          }}
          className="ac-out"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M10 16l-4-4 4-4M6 12h10" />
          </svg>
          <span>Log out</span>
        </button>
        <p className="ac-fine">18+ only · Play responsibly · SevenX</p>
      </aside>
    </div>
  );
};

export default RightDrawer;
