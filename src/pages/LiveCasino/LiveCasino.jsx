// const LiveCasino = () => {
//   const { data } = useGetIndex({
//     type: "wolf_casino",
//     category: "live_casino",
//     provider: "all",
//   });

//   if (!data) {
//     return null;
//   }
//   return <CasinoGames data={data} />;
// };

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./LiveCasino.css";
import useLiveCasinoLobby from "../../hooks/liveCasinoLobby";
import {
  setSelectedCategory,
  setShowLoginModal,
} from "../../redux/features/global/globalSlice";

const LiveCasino = () => {
  const { token, bonusToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { selectedCategory } = useSelector((state) => state.global);
  const { data } = useLiveCasinoLobby("LIVE_CASINO");
  const categories = data && Object.keys(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    setSearchQuery("");
    dispatch(setSelectedCategory(category));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredGames =
    data && selectedCategory && selectedCategory !== "ALL"
      ? { [selectedCategory]: data[selectedCategory] }
      : data;

  const getFilteredGamesByName = (games) =>
    games &&
    games?.filter((game) =>
      game?.game_name?.toLowerCase().includes(searchQuery),
    );

  const handleNavigate = (game) => {
    if (token) {
      if (bonusToken) {
        return setError("Bonus wallet is available only on sports.");
      }

      navigate(`/casino/${game?.game_name.replace(/ /g, "")}/${game?.game_id}`);
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  useEffect(() => {
    if (error) {
      return toast.error(error);
    }
  }, [error]);

  return (
    <>
      <div className="lscf-wrapper">
        {/*  */}
        <div onClick={() => navigate(-1)} className="lscf-header">
          <div className="lscf-header-inner">
            <div className="lscf-header-bg">
              <button className="lscf-back-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                >
                  <path
                    d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                    fill="var(--bg-active-primary)"
                  ></path>
                </svg>
              </button>
              <div className="lscf-title-wrap">
                <div className="lscf-title-inner">
                  <div className="lscf-title-truncate">
                    <span>casino</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <main className="lscf-main">
          <div className="lscf-main-inner">
            <div className="lscf-search-section">
              <div className="lscf-search-relative">
                <div className="lscf-search-icon">
                  <svg
                    fill="#999"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                  </svg>
                </div>
                <div className="lscf-search-input-wrap">
                  <input
                    value={searchQuery}
                    onChange={handleSearchChange}
                    id="default-search"
                    className="lscf-search-input"
                    placeholder="Search Games (Atleast 3 chars.....)"
                    autoComplete="off"
                    type="search"
                  />
                </div>
              </div>
              <div className="lscf-categories-scroll">
                <div className="lscf-categories-row">
                  <button
                    onClick={() => handleCategoryClick("ALL")}
                    className={`lscf-category-btn ${
                      selectedCategory === "ALL" ? "active" : ""
                    }`}
                    type="button"
                  >
                    <span>All</span>
                  </button>
                  {categories?.map((category) => (
                    <button
                      onClick={() => handleCategoryClick(category)}
                      key={category}
                      className={`lscf-category-btn ${
                        selectedCategory === category ? "active" : ""
                      }`}
                      type="button"
                    >
                      <span>{category}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="lscf-games-outer">
              <div className="lscf-games-bg">
                <div className="lscf-games-padding">
                  <div className="lscf-games-list">
                    {data &&
                      Object.entries(filteredGames)?.map(
                        ([category, games], idx) => {
                          const filteredByName = getFilteredGamesByName(games); // Filter games by name

                          // If no games match the search, show a message
                          if (filteredByName.length === 0) return null;
                          return (
                            <div key={idx} className="lscf-category-group">
                              <div className="lscf-category-group-header">
                                <div className="lscf-category-group-row">
                                  <div className="lscf-category-group-title-wrap">
                                    <div className="lscf-category-group-title-inner">
                                      <span className="lscf-category-group-title">
                                        {category}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="lscf-game-scroll">
                                  {filteredByName?.map((game, i) => (
                                    <div
                                      onClick={() => handleNavigate(game)}
                                      key={i}
                                      className="lscf-game-item"
                                    >
                                      <div className="lscf-game-thumb">
                                        <img
                                          src={game?.url_thumb}
                                          alt="Auto-Roulette"
                                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                                          title="Auto-Roulette"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        },
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LiveCasino;
