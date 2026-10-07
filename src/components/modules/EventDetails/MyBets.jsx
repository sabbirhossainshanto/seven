import useLanguage from "../../../hooks/use-language";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useSBCashOut from "../../../hooks/sb_cashout";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import toast from "react-hot-toast";
import { LanguageKey } from "../../../const";
import { useState } from "react";

const MyBets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getLanguage } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { eventId, eventTypeId } = useParams();
  const {
    data: myBets,
    refetch: refetchCurrentBets,
    isSuccess,
  } = useCurrentBets(eventId);

  const { mutate: cashOut } = useSBCashOut();
  const { data: eventData } = useGetEventDetailsQuery(
    { eventTypeId, eventId },

    {
      pollingInterval: 1000,
      skip: !pathname.includes("/game-details"),
    },
  );

  const orderedBets = [
    ...myBets.filter((bet) => bet.betType === "Back"),
    ...myBets.filter((bet) => bet.betType === "Lay"),
  ];
  const navigateGameList = (item) => {
    navigate(`/event-details/${item?.eventTypeId}/${item?.eventId}`);
  };

  const sportsBook = eventData?.sportsbook?.Result;

  const sports =
    sportsBook &&
    sportsBook?.MarketGroups?.filter(
      (group) =>
        group?.Name !== "Bet Builder" &&
        group?.Name !== "Fast Markets" &&
        group?.Name !== "Player Specials",
    );

  const handleCashOut = ({ betHistory, sportsBook, price, cashout_value }) => {
    let item;
    sports?.forEach((group) => {
      group?.Items?.forEach((data) => {
        if (betHistory?.marketId == data?.Id) {
          item = data;
        }
      });
    });

    const column = item?.Items?.find(
      (col) => col?.Id === betHistory?.selectionId,
    );

    const payload = {
      price,
      cashout_value,
      back: true,
      side: 0,
      selectionId: column?.Id,
      btype: "SPORTSBOOK",
      placeName: column?.Name,
      eventTypeId: sportsBook?.EventTypeId,
      betDelay: sportsBook?.betDelay,
      marketId: item?.Id,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
      isBettable: sportsBook?.isBettable,
      isWeak: sportsBook?.isWeak,
      marketName: item?.Name,
      eventId: sportsBook?.eventId,
      betId: betHistory?.betId,
    };

    cashOut(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetchCurrentBets();
          toast.success(data?.result?.message);
        } else {
          toast.error(data?.error);
        }
      },
    });
  };

  return (
    <section
      className={`market mybets fold ${isOpen ? "open" : ""} `}
      id="mybets"
    >
      <button
        className="fold-bar"
        aria-expanded="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{getLanguage(LanguageKey.MY_BETS)}</h3>
        <span className="mb-cnt">{myBets?.length}</span>
        {myBets?.length === 0 ? (
          <span className="fold-sum">No bets on this event yet</span>
        ) : (
          <span className="fold-sum"></span>
        )}

        <svg className="fold-chev" viewBox="0 0 20 20">
          <path
            d="M5 8l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {myBets?.length === 0 && orderedBets?.length === 0 && isSuccess && (
        <div className="fold-wrap">
          <div className="fold-body">
            <p className="mb-empty">
              Bets you place on this event appear here, with the profit or loss
              on each outcome shown under every selection.
            </p>
          </div>
        </div>
      )}
      {myBets?.length > 0 &&
        orderedBets?.length > 0 &&
        orderedBets?.map((bet, i) => {
          let column;
          sports?.forEach((group) => {
            group?.Items?.forEach((data) => {
              if (bet?.marketId == data?.Id) {
                column = data?.Items?.find(
                  (col) => col?.Id === bet?.selectionId,
                );
              }
            });
          });

          const price = (
            0.92 * bet?.amount * (bet?.userRate / column?.Price) -
            bet?.amount
          )?.toFixed(2);

          return (
            <div
              onClick={() => navigateGameList(bet)}
              key={i}
              className="fold-wrap"
            >
              <div className="fold-body">
                <div className="mb-head">
                  <span></span>
                  <span>Selection</span>
                  <span>Odds</span>
                  <span>Stake</span>
                </div>
                <div
                  className={`mb-row ${bet?.betType === "Back" ? "bk" : "ly"}  `}
                >
                  <span className="mb-side">{bet?.betType}</span>
                  <div className="mb-sel">
                    <b> {bet?.eventName}</b>
                    <small>
                      {bet?.marketName} · {bet?.placeDate}
                    </small>
                  </div>

                  <div className="mb-odds">
                    <b>{bet?.userRate}</b>
                    {bet?.cashout && eventId && eventTypeId && column && (
                      <button
                        onClick={() =>
                          handleCashOut({
                            betHistory: bet,
                            sportsBook,
                            price: column?.Price,
                            cashout_value: price,
                          })
                        }
                        type="button"
                        className="btn_box "
                        style={{
                          width: "auto",
                          backgroundColor: "#f3f3f3ff",
                          display: "flex",
                          alignItems: "center",
                          cursor: `pointer`,
                          justifyContent: "center",
                          gap: "0px 2px",
                          borderRadius: "2px",
                          padding: "3px 5px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "10px",
                            color: "black",
                          }}
                        >
                          {getLanguage(LanguageKey.CASHOUT)}
                        </span>
                        {price && (
                          <span
                            style={{
                              color: "black",
                              fontSize: "10px",
                            }}
                          >
                            :
                          </span>
                        )}

                        {price && (
                          <span
                            style={{
                              color: `${price > 0 ? "green" : "red"}`,
                              fontSize: "10px",
                            }}
                          >
                            {price}
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                  <div className="mb-pl">
                    <b className="up">{bet?.amount}</b>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default MyBets;
