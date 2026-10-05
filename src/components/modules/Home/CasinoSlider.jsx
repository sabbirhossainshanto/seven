const CasinoSlider = () => {
  return (
    <section className="cbx" aria-label="Casino games">
      <div className="cbx-head">
        <h2>Casino</h2>
        <small>Live tables · Indian classics · Instant wins</small>
        <span className="sp" />
        <button className="cbx-all">View all →</button>
        <button className="cbx-nav" aria-label="Scroll left">
          ‹
        </button>
        <button className="cbx-nav" aria-label="Scroll right">
          ›
        </button>
      </div>
      <div className="cbx-track" id="c3bTrack">
        <button
          className="cbx-t"
          style={{ "--h": "#e63946" }}
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
                <ellipse cx="-5.5" cy={-2} rx="1.25" ry={1} fill="#C1121F" />
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
                <ellipse cx="-5.5" cy={-2} rx="1.25" ry={1} fill="#C1121F" />
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
              <ellipse cx={40} cy={36} rx={32} ry={13} fill="url(#rlwood)" />
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
                <path d="M-14 6-16-6-7 0 0-10 7 0 16-6 14 6Z" fill="#8A5A12" />
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
          aria-label="Blackjack"
        >
          <img
            src="/casino3d/blackjack.webp"
            alt=""
            width={440}
            height={500}
            loading="lazy"
            decoding="async"
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
          aria-label="Poker"
        >
          <img
            src="/casino3d/poker.webp"
            alt=""
            width={440}
            height={500}
            loading="lazy"
            decoding="async"
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
          aria-label="Slots"
        >
          <img
            src="/casino3d/slots.webp"
            alt=""
            width={440}
            height={500}
            loading="lazy"
            decoding="async"
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
              <circle cx="63.8" cy="11.8" r="1.3" fill="#fff" opacity=".8" />
            </svg>
          </span>
          <span className="cbx-l">
            <b>Slots</b>
          </span>
        </button>
        <button
          className="cbx-t"
          style={{ "--h": "#06d6a0" }}
          aria-label="Sic Bo"
        >
          <img
            src="/casino3d/sicbo.webp"
            alt=""
            width={440}
            height={500}
            loading="lazy"
            decoding="async"
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
                <ellipse cx="-5.5" cy={-2} rx="1.25" ry={1} fill="#C1121F" />
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
                <ellipse cx="-5.5" cy={-2} rx="1.25" ry={1} fill="#C1121F" />
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
                <ellipse cx="-5.5" cy={-2} rx="1.25" ry={1} fill="#C1121F" />
                <ellipse cx="-4.5" cy={5} rx="1.25" ry={1} fill="#C1121F" />
                <ellipse cx={3} cy="1.5" rx="1.25" ry={1} fill="#C1121F" />
                <ellipse cx={5} cy={4} rx="1.25" ry={1} fill="#C1121F" />
                <ellipse cx={7} cy="6.5" rx="1.25" ry={1} fill="#C1121F" />
              </g>
              <path d="M14 42Q14 6 40 6T66 42" fill="#BFE9FF" opacity=".16" />
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
          aria-label="Lottery"
        >
          <img
            src="/casino3d/lottery.webp"
            alt=""
            width={440}
            height={500}
            loading="lazy"
            decoding="async"
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
                <path d="M-16-4h32" stroke="#E2B04A" strokeDasharray="2 2" />
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
              <circle cx={31} cy="34.5" r="3.9000000000000004" fill="#fff" />
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
          aria-label="Card Race"
        >
          <img
            src="/casino3d/race.webp"
            alt=""
            width={440}
            height={500}
            loading="lazy"
            decoding="async"
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
  );
};

export default CasinoSlider;
