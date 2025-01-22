const OngoingTripCard = () => {
  return (
    <div className="bg-white w-[264px] rounded-[18px] pl-[19px] pt-[17px]">
      <div className="flex  items-center gap-x-[12px] ">
        <img src="/romeMini.svg" alt="" className="rounded-full" />
        <span>
          <p className="text-[#84829A] text-[14px] font-medium">Ongoing</p>
          <p className="text-[16px] font-normal ">Trip to rome</p>
        </span>
      </div>
      <div className="flex  items-center mt-[14px] ml-[60px]   ">
        <div>
          <p className="mb-[10px] text-[14px] font-medium">
            <span className="text-[#8A79DF]">40%</span>
            Completed
          </p>
          <img src="/gurage .svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OngoingTripCard;
