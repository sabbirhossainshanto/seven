const MyBets = () => {
  return (
    <section className="market mybets fold open" id="mybets">
      <button className="fold-bar" aria-expanded="true">
        <h3>My bets</h3>
        <span className="mb-cnt">0</span>
        <span className="fold-sum">No bets on this event yet</span>
        <svg className="fold-chev" viewBox="0 0 20 20">
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
      <div className="fold-wrap">
        <div className="fold-body">
          <p className="mb-empty">
            Bets you place on this event appear here, with the profit or loss on
            each outcome shown under every selection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyBets;
