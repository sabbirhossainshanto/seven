const PrivacyPolicy = ({ onBack, onClose }) => {
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
        <b>Privacy policy</b>
        <button onClick={onClose} className="m-x ac-x" aria-label="Close">
          ×
        </button>
      </div>
      <article className="ac-doc">
        <p>
          We keep your information safe and use it only to run your account.
        </p>
        <h4>What we collect</h4>
        <ul>
          <li>
            Account details: username, mobile number, email (if you add it).
          </li>
          <li>Payment details for deposits and withdrawals.</li>
          <li>ID documents when a KYC check is needed.</li>
          <li>
            Your bets, games and device information, to keep accounts safe.
          </li>
        </ul>
        <h4>Why we use it</h4>
        <ul>
          <li>To run your account and pay you.</li>
          <li>To stop fraud, fake accounts and bonus abuse.</li>
          <li>To follow the law.</li>
          <li>
            To send offers — only if you agree, and you can stop them any time.
          </li>
        </ul>
        <h4>What we never do</h4>
        <ul>
          <li>We never sell your data.</li>
          <li>
            We never show your full phone number, email or bank details to other
            players.
          </li>
        </ul>
        <h4>Your choices</h4>
        <p>
          You can ask to see, correct or delete your data by messaging support.
          Passwords are stored encrypted — our staff can never see them.
        </p>
      </article>
    </aside>
  );
};

export default PrivacyPolicy;
