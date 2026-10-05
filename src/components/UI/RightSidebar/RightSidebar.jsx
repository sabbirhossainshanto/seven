const RightSidebar = () => {
  return (
    <aside className="right">
      <div className="slip" id="slip-desktop">
        <div className="bs-tabs" role="tablist">
          <button role="tab" aria-selected="true">
            Betslip <span className="cnt">0</span>
          </button>
          <button role="tab" aria-selected="false">
            Open bets <span className="cnt">0</span>
          </button>
        </div>
        <div className="oc">
          <button className="oc-sw" role="switch" aria-checked="false">
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
  );
};

export default RightSidebar;
