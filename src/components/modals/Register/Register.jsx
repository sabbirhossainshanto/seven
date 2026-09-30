import { useDispatch } from "react-redux";
import useLanguage from "../../../hooks/use-language";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../../redux/features/auth/authApi";
import { Fragment, useEffect, useRef, useState } from "react";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { LanguageKey } from "../../../const";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { FaMobileAlt, FaRegUser } from "react-icons/fa";

const Register = () => {
  const ref = useRef();
  const [tab, setTab] = useState(
    Settings.registration_mobile ? "mobile" : "username",
  );
  const { getLanguage } = useLanguage();
  const affnook_token = localStorage.getItem("affnook_token");
  const referralCode = localStorage.getItem("referralCode");
  const closeModal = () => dispatch(setShowRegisterModal(false));

  const dispatch = useDispatch();
  const [getOTP] = useGetOtpMutation();
  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const [timer, setTimer] = useState(null);
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setTimer(60);
      setOrder({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const onSubmit = async (data) => {
    const registerData = {
      username: data?.username,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
      affnook_token: affnook_token || null,
      registration_mobile: Settings.registration_mobile,
      registration_username: Settings.registration_username,
    };

    const result = await handleRegister(registerData).unwrap();

    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      localStorage.setItem("token", token);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        closeModal();
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) return prevTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

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

  useCloseModalClickOutside(ref, closeModal);
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
            onClick={closeModal}
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
                onClick={() => {
                  closeModal();
                  dispatch(setShowLoginModal(true));
                }}
                type="button"
                role="tab"
                id="tabLogin"
                aria-selected="false"
              >
                Log in
              </button>
              <button
                type="button"
                role="tab"
                id="tabSignup"
                aria-selected="true"
              >
                Sign up
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} id="amLogin">
              {Settings.registration_mobile &&
                Settings.registration_username && (
                  <div
                    style={{
                      width: "100%",
                      background:
                        "color-mix(in srgb, var(--primary-gradient) 30%, transparent)",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <div
                        onClick={() => setTab("mobile")}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "5px",
                          width: "100%",
                          gap: "6px",
                          color: "black",
                          background:
                            tab === "mobile"
                              ? "var(--primary-gradient)"
                              : undefined,
                        }}
                      >
                        <FaMobileAlt />

                        <span>{getLanguage(LanguageKey.BY_PHONE)}</span>
                      </div>

                      <div
                        onClick={() => setTab("username")}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "5px",
                          width: "100%",
                          gap: "6px",
                          color: "black",
                          background:
                            tab === "username"
                              ? "var(--primary-gradient)"
                              : undefined,
                        }}
                      >
                        <FaRegUser />

                        <span>{getLanguage(LanguageKey.BY_USERNAME)}</span>
                      </div>
                    </div>
                  </div>
                )}
              {tab === "mobile" && Settings.registration_mobile && (
                <Fragment>
                  <div className="field">
                    <label htmlFor="lp">
                      {getLanguage(LanguageKey.MOBILE_NUMBER)}
                    </label>
                    <div className="pw">
                      <input
                        onChange={(e) => handleMobileNo(e)}
                        value={mobile}
                        id="lp"
                        autoComplete="current-password"
                        placeholder="Enter Phone Number"
                      />
                      {timer ? (
                        <button
                          style={{
                            position: "absolute",
                            right: "8px",
                            top: "8px",
                            backgroundColor: "green",
                            borderRadius: "2px",
                            color: "white",
                            fontSize: "12px",
                            padding: "4px 5px",
                          }}
                          type="button"
                          className={``}
                          onClick={() => setShowPassword((prev) => !prev)}
                          aria-label={`Show password `}
                          aria-pressed="false"
                        >
                          {getLanguage(LanguageKey.RETRY_IN)} {timer}
                        </button>
                      ) : (
                        <button
                          style={{
                            position: "absolute",
                            right: "8px",
                            top: "8px",
                            backgroundColor: "green",
                            borderRadius: "2px",
                            color: "white",
                            fontSize: "12px",
                            padding: "4px 5px",
                          }}
                          disabled={Settings.otp && mobile?.length < 10}
                          type="button"
                          onClick={handleOTP}
                          className={``}
                          aria-label={`Show password `}
                          aria-pressed="false"
                        >
                          {getLanguage(LanguageKey.GET_OTP)}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="loginId">
                      {getLanguage(LanguageKey.OTP)}
                    </label>
                    <input
                      {...register("otp", { required: true })}
                      id="loginId"
                      autoComplete="username"
                      autoCapitalize="none"
                      spellCheck="false"
                      placeholder="Enter OTP"
                    />
                  </div>
                </Fragment>
              )}

              {tab === "username" && Settings.registration_username && (
                <div className="field">
                  <label htmlFor="loginId">
                    {getLanguage(LanguageKey.USERNAME)}
                  </label>
                  <input
                    {...register("username", { required: true })}
                    id="loginId"
                    autoComplete="username"
                    autoCapitalize="none"
                    spellCheck="false"
                    placeholder="Enter Username"
                  />
                </div>
              )}

              <div className="field">
                <label htmlFor="lp">{getLanguage(LanguageKey.PASSWORD)}</label>
                <div className="pw">
                  <input
                    {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    id="lp"
                    autoComplete="current-password"
                    placeholder="Enter Password"
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
              <div className="field">
                <label htmlFor="lp">
                  {getLanguage(LanguageKey.CONFIRM_PASSWORD)}
                </label>
                <div className="pw">
                  <input
                    {...register("password", { required: true })}
                    type={showConfirmPassword ? "text" : "password"}
                    id="lp"
                    autoComplete="current-password"
                    placeholder="Enter Confirm Password"
                  />
                  <button
                    type="button"
                    className={`eye ${showConfirmPassword ? "on" : ""}`}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
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
              <div className="field">
                <label htmlFor="loginId">
                  {getLanguage(LanguageKey.REFERRAL_CODE)}
                </label>
                <input
                  readOnly={referralCode}
                  {...register("referralCode")}
                  defaultValue={referralCode}
                  id="loginId"
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck="false"
                  placeholder="Referral Code"
                />
              </div>
              <button type="submit" className="btn full" id="loginBtn">
                {getLanguage(LanguageKey.REGISTER)}{" "}
              </button>

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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
