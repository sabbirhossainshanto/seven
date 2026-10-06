const TermsAndCondition = ({ onBack, onClose }) => {
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
        <b>Terms &amp; conditions</b>
        <button onClick={onClose} className="m-x ac-x" aria-label="Close">
          ×
        </button>
      </div>
      <article className="ac-doc">
        <ul>
          <li>You must be 18+ and allowed to bet where you live.</li>
          <li>
            One account per person. Duplicate or fake accounts are closed and
            bonuses removed.
          </li>
          <li>
            Keep your password secret. You are responsible for bets made from
            your account.
          </li>
          <li>
            Bonus money must be played through before it becomes cash. Each
            bonus shows its own rules.
          </li>
          <li>
            Withdrawals go only to accounts in your own name. We may ask for ID
            (KYC) before paying.
          </li>
          <li>
            We may void bets placed on clear errors, or by cheating or
            collusion.
          </li>
          <li>
            We may change these terms. We will tell you about important changes.
          </li>
        </ul>
      </article>
    </aside>
  );
};

export default TermsAndCondition;
