import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useGroupQuery } from "../../../hooks/group";
import { filterLiveVirtual } from "../../../utils/filter-live-virtual";
import EventCard from "./EventCard";

const Group = () => {
  const { group } = useSelector((state) => state.global);

  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    },
  );

  const [liveVirtualInPlay, setLiveVirtualInPlay] = useState([]);
  const [liveVirtualUpcoming, setLiveVirtualUpcoming] = useState([]);

  const groupedUpcoming = filterLiveVirtual(
    liveVirtualUpcoming,
    group,
    data,
    0,
  );
  const groupedInPlay = filterLiveVirtual(liveVirtualInPlay, group, data, 1);
  return (
    <Fragment>
      <EventCard
        data={data}
        filterData={groupedInPlay}
        title="IN_PLAY"
        setLiveVirtual={setLiveVirtualInPlay}
      />
      {groupedInPlay?.length === 0 && (
        <div className="flex items-center pl-5 bg-white py-3 rounded-sm font-[500]">
          No inplay event available right now!
        </div>
      )}{" "}
      <EventCard
        margin={true}
        data={data}
        filterData={groupedUpcoming}
        title="UPCOMING"
        setLiveVirtual={setLiveVirtualUpcoming}
      />
      {groupedUpcoming?.length === 0 && (
        <div className="flex items-center pl-5 bg-white py-3 rounded-sm font-[500]">
          No upcoming event available right now!
        </div>
      )}{" "}
    </Fragment>
  );
};

export default Group;
