const Rules = ({ onBack, onClose }) => {
  return (
    <aside
      className="ac-panel"
      id="acPanel"
      role="dialog"
      aria-modal="true"
      aria-label="My account"
    >
      <div className="ac-sub-h">
        <button onClick={onBack} className="ac-back" aria-label="Back">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <b>Rules</b>
        <button onClick={onClose} className="m-x ac-x" aria-label="Close">
          ×
        </button>
      </div>
      <article className="ac-doc">
        <p>
          These are the main rules. Full market rules are shown on each market.
        </p>
        <h4>General</h4>
        <ul>
          <li>
            You must be 18 or older, and betting must be legal where you live.
          </li>
          <li>One account per person, mobile number and device.</li>
          <li>
            A bet is accepted only when it shows as <b>Matched</b> in My bets.
          </li>
          <li>
            If a price or result is shown by mistake (a clear error), the bet
            may be made void.
          </li>
        </ul>
        <h4>Exchange (Back &amp; Lay)</h4>
        <ul>
          <li>
            <b>Back</b> = you bet it will happen. <b>Lay</b> = you bet it will
            not happen.
          </li>
          <li>
            If your price is better than the best price on offer, your bet waits
            as <b>Unmatched</b> until someone takes it.
          </li>
          <li>
            Your liability (money held) is shown before you place a Lay bet.
          </li>
        </ul>
        <h4>Bookmaker &amp; Fancy</h4>
        <ul>
          <li>
            Bookmaker rates are per 100. Fancy bets settle on the official
            score.
          </li>
          <li>
            If a match is abandoned or shortened, bets on markets not completed
            are void and your stake is returned.
          </li>
        </ul>
        <h4>Cash out</h4>
        <ul>
          <li>
            Cash out places a bet that closes your position at the current
            price. The value changes with the market.
          </li>
        </ul>
        <h4>Casino</h4>
        <ul>
          <li>
            Casino games are run by licensed game providers. The providers
            result is final.
          </li>
        </ul>
      </article>
    </aside>
  );
};

export default Rules;
