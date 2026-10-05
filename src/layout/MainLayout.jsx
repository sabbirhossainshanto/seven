import { Outlet, useLocation } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Settings } from "../api";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";
import MobileBottomTab from "../components/UI/MobileBottomTab/MobileBottomTab";
import Login from "../components/modals/Login/Login";
import Register from "../components/modals/Register/Register";
import LeftDrawer from "../components/modals/LeftDrawer/LeftDrawer";
import RightDrawer from "../components/modals/RightDrawer/RightDrawer";
import LeftSidebar from "../components/UI/LeftSidebar/LeftSidebar";
import RightSidebar from "../components/UI/RightSidebar/RightSidebar";

const MainLayout = () => {
  const [, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const {
    group,
    showLoginModal,
    showRegisterModal,
    showLeftDrawer,
    showRightDrawer,
  } = useSelector((state) => state.global);
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, group]);

  useEffect(() => {
    const newVersion = Settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  return (
    <Fragment>
      {showLeftDrawer && <LeftDrawer />}
      {showLoginModal && <Login />}
      {showRegisterModal && <Register />}
      {showRightDrawer && <RightDrawer />}
      {Settings.metaDescription && (
        <meta name="description" content={Settings.metaDescription} />
      )}
      {Settings.metaKeywords && (
        <meta name="keywords" content={Settings.metaKeywords} />
      )}
      {Settings.gscTag && (
        <meta name="google-site-verification" content={Settings.gscTag} />
      )}
      {Settings.metaTitle && <title>{Settings.metaTitle}</title>}
      <meta name="robots" content="index, follow" />
      <Header />
      <div className="shell">
        {/* Left: sports */}
        <LeftSidebar />
        {/* Main */}
        <Outlet />
        {/* Right: bet slip (desktop) */}
        <RightSidebar />
      </div>
      <Footer />
      <MobileBottomTab />
    </Fragment>
  );
};

export default MainLayout;
