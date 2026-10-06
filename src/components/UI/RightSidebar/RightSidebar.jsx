import { useSelector } from "react-redux";
import Empty from "./Empty";
import BetSlip from "./BetSlip";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const RightSidebar = () => {
  const { getLanguage } = useLanguage();
  const { placeBetValues } = useSelector((state) => state.event);
  return (
    <aside className="right">
      <div className="slip" id="slip-desktop">
        <div className="bs-tabs" role="tablist">
          <button role="tab" aria-selected="true">
            {getLanguage(LanguageKey.BET_SLIP)} <span className="cnt">0</span>
          </button>
          <button role="tab" aria-selected="false">
            {getLanguage(LanguageKey.OPEN_BETS)} <span className="cnt">0</span>
          </button>
        </div>
        {!placeBetValues && <Empty />}
        {placeBetValues && <BetSlip />}
      </div>
    </aside>
  );
};

export default RightSidebar;
