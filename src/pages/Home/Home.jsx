import { useSelector } from "react-redux";
import Banner from "../../components/modules/Home/Banner";
// import CasinoSlider from "../../components/modules/Home/CasinoSlider";
import Group from "../../components/modules/Home/Group";
import InPlay from "../../components/modules/Home/InPlay";
import SportsTab from "../../components/modules/Home/SportsTab";
import useBannerImage from "../../hooks/banner.hook";
import HorseGreyhound from "../../components/modules/Home/HorseGreyhound";

const Home = () => {
  const { data: bannerImage } = useBannerImage();
  const { group } = useSelector((state) => state.global);
  return (
    <main id="main">
      <SportsTab />
      {!group && bannerImage?.banner?.length > 0 && (
        <Banner bannerImage={bannerImage?.banner} />
      )}

      {/* {!group && <CasinoSlider />} */}
      {(group == 7 || group == 4339) && <HorseGreyhound />}

      {group !== 7 && group !== 4339 && group !== 0 && <Group />}
      {group == 0 && <InPlay />}

      <div style={{ height: "16px" }} />
    </main>
  );
};

export default Home;
