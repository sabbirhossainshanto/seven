/* eslint-disable react/no-unknown-property */
const MobileBottomTab = () => {
  return (
    <nav className="tabbar" aria-label="Main">
      <button data-nav="home" aria-current="page" onclick="go('home')">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx={12} cy={12} r={9} />
          <path d="M12 3c3 3 3 15 0 18M3 12h18" />
        </svg>
        Sports
      </button>
      <button data-nav="casino" onclick="go('casino')">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x={4} y={4} width={16} height={16} rx={3} />
          <circle cx={9} cy={9} r="1.3" fill="currentColor" />
          <circle cx={15} cy={15} r="1.3" fill="currentColor" />
          <circle cx={12} cy={12} r="1.3" fill="currentColor" />
        </svg>
        Casino
      </button>
      <button data-nav="bonus" className="tab-bonus" onclick="go('bonus')">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        >
          <rect x="3.5" y={9} width={17} height="11.5" rx={1} />
          <path d="M2.5 9h19V6.5h-19zM12 6.5v14M12 6.5C10 3 6.5 3.5 7.5 6.5M12 6.5c2-3.5 5.5-3 4.5 0" />
        </svg>
        Rewards
      </button>
      <button data-nav="club" className="tab-club" onclick="go('club')">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 10H5z" />
        </svg>
        Club
      </button>
      <button data-nav="wallet" onclick="go('wallet')">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x={3} y={6} width={18} height={13} rx={2} />
          <path d="M16 12h5M3 10h18" />
        </svg>
        Wallet
      </button>
      <button data-nav="partners" onclick="go('partners')">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx={9} cy={8} r="3.2" />
          <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
          <circle cx={17} cy={9} r="2.4" />
          <path d="M16 13.6c2.8.1 5 2 5 4.9" />
        </svg>
        Refer
      </button>
    </nav>
  );
};

export default MobileBottomTab;
