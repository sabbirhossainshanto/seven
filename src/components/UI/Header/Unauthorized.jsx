import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";

const Unauthorized = () => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };

    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };
  return (
    <div
      id="auth-out"
      style={{ display: "flex", gap: "8px", alignItems: "center" }}
    >
      <button
        onClick={loginWithDemo}
        className="demo-top"
        aria-label="Try the demo — 10,000 play credits, no sign-up"
      >
        <span className="demo-top-in">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <circle
              cx={13}
              cy={20}
              r="7.5"
              fill="none"
              stroke="url(#eg)"
              strokeWidth="2.4"
            />
            <circle
              cx={13}
              cy={20}
              r={3}
              fill="none"
              stroke="url(#eg)"
              strokeWidth="1.4"
            />
            <path
              d="M20.5 20H35M30 20v5M34 20v4"
              fill="none"
              stroke="url(#eg)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          <span className="demo-top-txt">Demo</span>
        </span>
      </button>
      <button
        className="btn login-btn"
        onClick={() => dispatch(setShowLoginModal(true))}
      >
        Log in
      </button>
      <button
        onClick={() => dispatch(setShowRegisterModal(true))}
        className="btn"
      >
        Register
      </button>
    </div>
  );
};

export default Unauthorized;
