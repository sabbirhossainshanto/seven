import { useDispatch, useSelector } from "react-redux";
import useLanguage from "../../../hooks/use-language";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useRef, useState } from "react";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowChangePasswordModal,
  setShowForgotPasswordModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { LanguageKey } from "../../../const";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const Login = () => {
  const ref = useRef();
  const { getLanguage } = useLanguage();
  const { closePopupForForever } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const closeLoginModal = () => {
    dispatch(setShowLoginModal(false));
  };

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
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
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        localStorage.setItem("changePassword", true);
        dispatch(setShowChangePasswordModal(true));
      }
      if (!result?.result?.changePassword && token && user) {
        closeLoginModal();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
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
        closeLoginModal();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };

  useCloseModalClickOutside(ref, () => closeLoginModal());
  return (
    <div className="modal-bg open" id="loginbg">
      <div
        className="modal auth"
        role="dialog"
        aria-labelledby="mtitle"
        ref={ref}
      >
        <aside className="auth-banner" aria-hidden="true">
          <div className="ab-art">
            <i className="hb-rays" />
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
          <div className="ab-txt">
            <small>New players</small>
            <b>100% welcome bonus</b>
            <span>up to 10,000 on your first deposit</span>
            <ul>
              <li>Daily Jackpot every 24 hours</li>
              <li>Daily streak rewards</li>
              <li>Crypto &amp; UPI deposits</li>
            </ul>
          </div>
        </aside>
        <div className="auth-main">
          <button
            onClick={closeLoginModal}
            type="button"
            className="m-x"
            aria-label="Close"
          >
            ×
          </button>
          <h2 id="mtitle">Log in or join</h2>
          <p id="msub">
            Log in with your username or mobile. New here? Create an ID in 1
            click.
          </p>

          {/* Step 1: choose how */}
          <div id="authStart">
            {Settings?.whatsapplink && Settings.registration_whatsapp && (
              <button
                type="button"
                onClick={() => getWhatsAppId(Settings?.whatsapplink)}
                className="quick-btn"
                id="quickBtn"
              >
                <span className="qb-bolt" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M13.5 2 4.5 13.5h6L9.5 22l9-11.5h-6z" />
                  </svg>
                </span>
                <span className="qb-t">
                  <small>{getLanguage(LanguageKey.GET_WHATSAPP_ID)}</small>
                </span>
                <span className="qb-go" aria-hidden="true">
                  →
                </span>
              </button>
            )}

            <div className="auth-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                id="tabLogin"
                aria-selected="true"
              >
                {getLanguage(LanguageKey.LOGIN)}
              </button>
              <button
                onClick={() => {
                  dispatch(setShowRegisterModal(true));
                  closeLoginModal();
                }}
                type="button"
                role="tab"
                id="tabSignup"
                aria-selected="false"
              >
                {getLanguage(LanguageKey.REGISTER)}
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} id="amLogin">
              <div className="field">
                <label htmlFor="loginId">Username or mobile number</label>
                <input
                  {...register("username", { required: true })}
                  id="loginId"
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck="false"
                  placeholder="e.g. rahul77 or 98765 43210"
                />
              </div>
              <div className="field">
                <label htmlFor="lp">Password</label>
                <div className="pw">
                  <input
                    {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    id="lp"
                    autoComplete="current-password"
                    placeholder="Your password"
                  />
                  <button
                    type="button"
                    className={`eye ${showPassword ? "on" : ""}`}
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={`Show password `}
                    aria-pressed="false"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        className="lid"
                        d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"
                      />
                      <circle className="iris" cx={12} cy={12} r="3.2" />
                      <path className="slash" d="M4 4l16 16" />
                    </svg>
                  </button>
                </div>
              </div>
              <button type="submit" className="btn full" id="loginBtn">
                {getLanguage(LanguageKey.LOGIN)}
              </button>
              {Settings.demo_login && (
                <button
                  type="button"
                  onClick={loginWithDemo}
                  style={{ marginTop: "5px" }}
                  className="btn full "
                  id="loginBtn"
                >
                  {getLanguage(LanguageKey.DEMO_LOGIN)}
                </button>
              )}

              {Settings.apk_link && (
                <button
                  type="button"
                  onClick={handleDownload}
                  style={{ marginTop: "5px" }}
                  className="btn full "
                  id="loginBtn"
                >
                  {getLanguage(LanguageKey.DOWNLOAD_APK)}
                </button>
              )}

              <div className="auth-links">
                <button
                  type="button"
                  onClick={() => dispatch(setShowForgotPasswordModal(true))}
                  className="link"
                >
                  {getLanguage(LanguageKey.FORGOT_PASSWORD)}?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
