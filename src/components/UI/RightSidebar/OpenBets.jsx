import { Fragment } from "react";
import useLanguage from "../../../hooks/use-language";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useSBCashOut from "../../../hooks/sb_cashout";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import toast from "react-hot-toast";
import { LanguageKey } from "../../../const";

const OpenBets = () => {
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
    <Fragment>
      {myBets?.length > 0 && orderedBets?.length > 0 && (
        <h5 className="bs-oh">
          Matched <span>{myBets?.length}</span>
        </h5>
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
              className={`bs-ob ${bet?.betType === "Back" ? "b" : "l"}`}
            >
              <span className="bs-sd">{bet?.betType}</span>
              <div>
                <small>
                  <button className="bs-evl">{bet?.eventName}</button> ·{" "}
                  {bet?.marketName}
                </small>
              </div>
              <div className="r">
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
              <div className="r">
                <b className="up">{bet?.amount}</b>
              </div>
            </div>
          );
        })}

      {myBets?.length === 0 && orderedBets?.length === 0 && isSuccess && (
        <div className="empty">
          <div className="empty-mark">◆</div>You have no open bets.
        </div>
      )}
    </Fragment>
  );
};

export default OpenBets;
