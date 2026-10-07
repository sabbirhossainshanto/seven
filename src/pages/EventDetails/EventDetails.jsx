import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import Bookmaker from "../../components/modules/EventDetails/Bookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";
import MatchOdds from "../../components/modules/EventDetails/MatchOdds";
import MyBets from "../../components/modules/EventDetails/MyBets";
import ScoreCardLiveTV from "../../components/modules/EventDetails/ScoreCardLiveTV";
import MatchHead from "../../components/modules/EventDetails/MatchHead";
import ToggleButtons from "../../components/modules/EventDetails/ToggleButtons";
import Premium from "../../components/modules/Home/Premium";
import HorseGreyhoundEventDetails from "../../components/modules/EventDetails/HorseGreyhoundEventDetails";

const EventDetails = () => {
  const [fancyPremiumTab, setFancyPremiumTab] = useState("");
  const { eventTypeId, eventId } = useParams();
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    },
  );

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const matchOdds = data?.result?.filter(
    (game) =>
      game.btype === "MATCH_ODDS" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );
  const bookmaker = data?.result?.filter(
    (game) =>
      game.btype === "BOOKMAKER" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );

  const tiedMatch = data?.result?.filter(
    (game) =>
      (game.btype === "MATCH_ODDS" || game.btype === "BOOKMAKER") &&
      game?.visible == true &&
      game?.name === "tied match",
  );
  const fancyData = data?.result?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );

  return (
    <main id="main">
      <MatchHead data={data} />
      <ScoreCardLiveTV data={data} />
      <MyBets />

      {matchOdds?.length > 0 && <MatchOdds data={matchOdds} />}

      {bookmaker?.length > 0 && <Bookmaker data={bookmaker} />}
      {data && (
        <ToggleButtons
          data={data}
          fancy={fancyData}
          setFancyPremiumTab={setFancyPremiumTab}
          fancyPremiumTab={fancyPremiumTab}
        />
      )}
      {data?.result?.length > 0 && fancyPremiumTab === "fancy" && (
        <Fancy data={data?.result} />
      )}
      {data?.premium &&
        data?.premium?.eventId &&
        fancyPremiumTab === "premium" && <Premium premium={data?.premium} />}
      {eventTypeId == 7 || eventTypeId == 4339 ? (
        <HorseGreyhoundEventDetails data={data?.result} />
      ) : null}
      {tiedMatch?.length > 0 && <MatchOdds data={tiedMatch} />}
      <div style={{ height: "16px" }} />
    </main>
  );
};

export default EventDetails;
