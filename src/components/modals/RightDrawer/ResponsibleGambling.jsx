const ResponsibleGambling = ({ onBack, onClose }) => {
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
        <b>Responsible gambling</b>
        <button onClick={onClose} className="m-x ac-x" aria-label="Close">
          ×
        </button>
      </div>
      <article className="ac-doc">
        <p>
          Betting should be fun, never a way to make money or solve problems.
        </p>
        <h4>Stay in control</h4>
        <ul>
          <li>Only bet money you can afford to lose.</li>
          <li>Set a budget and a time limit before you start.</li>
          <li>Never chase losses.</li>
          <li>Dont bet when you are upset, tired or have been drinking.</li>
          <li>Take regular breaks.</li>
        </ul>
        <h4>Tools we give you</h4>
        <ul>
          <li>
            <b>Deposit limits</b> — daily, weekly or monthly.
          </li>
          <li>
            <b>Reality check</b> — a reminder of your time and result.
          </li>
          <li>
            <b>Take a break / self-exclusion</b> — see Exclusion policy.
          </li>
        </ul>
        <h4>Warning signs</h4>
        <ul>
          <li>Betting more than you planned, or borrowing to bet.</li>
          <li>Hiding your betting from family.</li>
          <li>Feeling anxious or angry about betting.</li>
        </ul>
        <p>
          If this sounds like you, please take a break and talk to someone you
          trust. Our support team can set limits for you at any time.
        </p>
        <p className="ac-note">
          Under 18? You are not allowed to play. We check age and may ask for
          ID.
        </p>
      </article>
    </aside>
  );
};

export default ResponsibleGambling;
