import { useSelector } from "react-redux";
import Banner from "../../components/modules/Home/Banner";
import CasinoSlider from "../../components/modules/Home/CasinoSlider";
import Group from "../../components/modules/Home/Group";
import InPlay from "../../components/modules/Home/InPlay";
import SportsTab from "../../components/modules/Home/SportsTab";

const Home = () => {
  const { group } = useSelector((state) => state.global);
  return (
    <main id="main">
      <SportsTab />
      {!group && <Banner />}

      {!group && <CasinoSlider />}

      {group ? <Group /> : <InPlay />}

      <div style={{ height: "16px" }} />
    </main>
  );
};

export default Home;
