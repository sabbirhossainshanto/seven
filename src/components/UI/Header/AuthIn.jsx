import { useDispatch, useSelector } from "react-redux";
import useBalance from "../../../hooks/balance";
import { setShowRightDrawer } from "../../../redux/features/global/globalSlice";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const AuthIn = () => {
  const { getLanguage } = useLanguage();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useBalance();
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      id="auth-in"
      className
      style={{ display: "flex", gap: "12px", alignItems: "center" }}
    >
      <span className="demo-chip" id="demoChip">
        {user}
      </span>

      <div
        className="balance"
        role="button"
        tabIndex={0}
        aria-label="My account — balance, statements and settings"
      >
        <small>
          {getLanguage(LanguageKey.BALANCE)}
          <span className="exp-part">
            {" "}
            · {getLanguage(LanguageKey.EXPOSURE)}
          </span>
        </small>
        <b>
          <span id="bal">{data?.availBalance}</span>{" "}
          <span
            className="exp-part"
            style={{ color: "var(--loss)", fontSize: "13px" }}
          >
            <span id="exp">{data?.deductedExposure}</span>
          </span>
        </b>
      </div>
      {/* Cashier: Deposit / Withdraw open the cashier window from any page */}
      <div className="cash-btns">
        <button
          onClick={() => navigate("/deposit")}
          className="cz-dep"
          aria-label="Deposit — plus 5% extra cash"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 5v14M5 12h14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
          <span>{getLanguage(LanguageKey.DEPOSIT)}</span>
        </button>
        <button
          onClick={() => navigate("/withdraw")}
          className="cz-wd"
          aria-label="Withdraw"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 18V6M7 11l5-5 5 5M5 20h14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{getLanguage(LanguageKey.WITHDRAW)}</span>
        </button>
      </div>
      {/* My account: opens the right-side panel (statements, bank details, settings, log out) */}
      <button
        onClick={() => dispatch(setShowRightDrawer(true))}
        className="acct-btn"
        id="acctBtn"
        aria-label="My account"
        title="My account"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx={12} cy="8.5" r={4} />
          <path d="M4.5 20.5c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />
        </svg>
      </button>
    </div>
  );
};

export default AuthIn;
