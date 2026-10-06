const ExclusionPolicy = ({ onBack, onClose }) => {
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
        <b>Exclusion policy</b>
        <button onClick={onClose} className="m-x ac-x" aria-label="Close">
          ×
        </button>
      </div>
      <article className="ac-doc">
        <p>
          If you want a break from betting, we will help — no questions asked.
        </p>
        <h4>Take a break</h4>
        <p>
          Pause your account for 24 hours, 7 days or up to 6 weeks. You cant log
          in or bet during the break, and offers stop too.
        </p>
        <h4>Self-exclusion</h4>
        <p>
          Close your account for 6 months, 1 year, 5 years or for good. During
          this time we will not open a new account for you, and we stop all
          marketing.
        </p>
        <h4>How to ask</h4>
        <p>
          Message our support team from your account and say which option you
          want. It starts right away and cant be undone early.
        </p>
        <h4>Your money</h4>
        <p>
          Your cash balance stays yours. You can still withdraw it. Bonus money
          is removed.
        </p>
      </article>
    </aside>
  );
};

export default ExclusionPolicy;
