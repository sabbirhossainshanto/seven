const Banner = () => {
  return (
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
              <p>On your first deposit. Join with your mobile in 30 seconds.</p>
              <span className="btn hb-cta">Join now</span>
            </div>
          </div>
          <div
            className="hb-slide tone-ruby"
            role="group"
            aria-roledescription="slide"
            aria-label="2 of 5"
            data-i={1}
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
              <p>Guaranteed 1,00,000 prize pool. One free ticket every day.</p>
              <span className="btn hb-cta">Get tickets</span>
            </div>
          </div>
          <div
            className="hb-slide tone-violet"
            role="group"
            aria-roledescription="slide"
            aria-label="3 of 5"
            data-i={2}
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
              <p>Invite friends who play. Every friend brings you closer.</p>
              <span className="btn hb-cta">Refer now</span>
            </div>
          </div>
          <div
            className="hb-slide tone-ice"
            role="group"
            aria-roledescription="slide"
            aria-label="4 of 5"
            data-i={3}
            aria-hidden="true"
            inert
          >
            <div className="hb-bg" aria-hidden="true">
              <i className="hb-rays" />
              <i className="hb-floor" />
            </div>
            <div className="hb-art" aria-hidden="true">
              <div className="art-gems">
                <span className="gem3d b1" data-gem="gold" aria-hidden="true">
                  <svg viewBox="-2 0 104 92">
                    <defs>
                      <clipPath id="gm1c">
                        <polygon points="4,34 30,12 70,12 96,34 50,88" />
                      </clipPath>
                      <linearGradient id="gm1s" x1={0} x2={1} y1={0} y2=".25">
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
                      <linearGradient id="gm2s" x1={0} x2={1} y1={0} y2=".25">
                        <stop offset=".35" stopColor="#fff" stopOpacity={0} />
                        <stop offset=".5" stopColor="#fff" stopOpacity=".9" />
                        <stop offset=".65" stopColor="#fff" stopOpacity={0} />
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
                      <polygon points="15.5,52 27,34 50,88" fill="#D6F6FF" />
                      <polygon points="4,34 27,34 15.5,52" fill="#FFFFFF" />
                      <polygon points="27,34 38.5,52 50,88" fill="#93D8F2" />
                      <polygon points="38.5,52 50,34 50,88" fill="#3F9CC7" />
                      <polygon points="27,34 50,34 38.5,52" fill="#D6F6FF" />
                      <polygon points="50,34 61.5,52 50,88" fill="#D6F6FF" />
                      <polygon points="61.5,52 73,34 50,88" fill="#93D8F2" />
                      <polygon points="50,34 73,34 61.5,52" fill="#93D8F2" />
                      <polygon points="73,34 84.5,52 50,88" fill="#3F9CC7" />
                      <polygon points="84.5,52 96,34 50,88" fill="#1B5A7C" />
                      <polygon points="73,34 96,34 84.5,52" fill="#3F9CC7" />
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
                      <linearGradient id="gm3s" x1={0} x2={1} y1={0} y2=".25">
                        <stop offset=".35" stopColor="#fff" stopOpacity={0} />
                        <stop offset=".5" stopColor="#fff" stopOpacity=".9" />
                        <stop offset=".65" stopColor="#fff" stopOpacity={0} />
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
                      <polygon points="15.5,52 27,34 50,88" fill="#F3F5F8" />
                      <polygon points="4,34 27,34 15.5,52" fill="#FFFFFF" />
                      <polygon points="27,34 38.5,52 50,88" fill="#D2D8DF" />
                      <polygon points="38.5,52 50,34 50,88" fill="#9EA7B1" />
                      <polygon points="27,34 50,34 38.5,52" fill="#F3F5F8" />
                      <polygon points="50,34 61.5,52 50,88" fill="#F3F5F8" />
                      <polygon points="61.5,52 73,34 50,88" fill="#D2D8DF" />
                      <polygon points="50,34 73,34 61.5,52" fill="#D2D8DF" />
                      <polygon points="73,34 84.5,52 50,88" fill="#9EA7B1" />
                      <polygon points="84.5,52 96,34 50,88" fill="#68727D" />
                      <polygon points="73,34 96,34 84.5,52" fill="#9EA7B1" />
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
          <button aria-label="Promotion 1" data-go={0} aria-current="false" />
          <button aria-label="Promotion 2" data-go={1} aria-current="false" />
          <button aria-label="Promotion 3" data-go={2} aria-current="false" />
          <button aria-label="Promotion 4" data-go={3} aria-current="false" />
          <button aria-label="Promotion 5" data-go={4} aria-current="true" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
