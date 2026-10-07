import { useSelector } from "react-redux";
import Empty from "./Empty";
import BetSlip from "./BetSlip";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";
import OpenBets from "./OpenBets";
import { Fragment, useState } from "react";

const RightSidebar = () => {
  const [tab, setTab] = useState(1);
  const { getLanguage } = useLanguage();
  const { placeBetValues } = useSelector((state) => state.event);
  return (
    <aside className="right">
      <div className="slip" id="slip-desktop">
        <div className="bs-tabs" role="tablist">
          <button
            onClick={() => setTab(1)}
            role="tab"
            aria-selected={tab === 1}
          >
            {getLanguage(LanguageKey.BET_SLIP)}
          </button>
          <button
            onClick={() => setTab(2)}
            role="tab"
            aria-selected={tab === 2}
          >
            {getLanguage(LanguageKey.OPEN_BETS)}
            {/* <span className="cnt">0</span> */}
          </button>
        </div>
        {tab === 1 && (
          <Fragment>
            {!placeBetValues && <Empty />}
            {placeBetValues && <BetSlip />}
          </Fragment>
        )}
        {tab === 2 && <OpenBets />}
      </div>
    </aside>
  );
};

export default RightSidebar;
