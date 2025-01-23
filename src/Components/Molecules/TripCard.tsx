import OngoingTripCard from "./OngoingTripCard";

const TripCard = () => {
  return (
    <div className="bg-white pt-[13px] pl-[25px] pr-[25px] rounded-[26px] mb-[207px]">
      <img src="/tripImage.svg" alt="" />
      <div>
        <p className="text-[16px] font-normal mt-[26px] mb-[5px]">
          Trip To Greece
        </p>
        <p className="text-[#84829A] font-medium text-[16px]">
          14-29 June | by Robbin joseph
        </p>
        <span className="flex items-center gap-x-[16px] mt-[21px] mb-[30px]">
          <img src="/LEAF.svg" alt="" />
          <img src="/map icon.svg" alt="" />
          <img src="/send.svg" alt="" />
        </span>
        <span className=" flex items-center gap-x-[15px] pb-[38px]">
          <img src="/building 1.svg" alt="" />
          <p className="flex-grow-[1] text-[#84829A] font-medium text-[16px] ">
            24 people going
          </p>
          <img src="fav.svg" alt="" />
        </span>
      </div>
      <div className="absolute bottom-[-2065px] right-[153px]">
        <OngoingTripCard />
      </div>
      <div className="absolute bottom-[-2165px] right-[90px] z-[-1]">
        <img src="/bg6.svg" alt="" />
      </div>
    </div>
  );
};

export default TripCard;
