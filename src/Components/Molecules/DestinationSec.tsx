import DestinationCard from "./DestinationCard";

const DestinationSec = () => {
  return (
    <div>
      <p className="text-center text-lg font-semibold text-[#5E6282]">
        Top Selling
      </p>
      <h2 className="text-center text-deepBlue font-bold text-[50px] mb-[60px]  header">
        Top Destinations
      </h2>
      <span className="flex justify-around">
        <DestinationCard backgroundImage={"/italy.svg"} />{" "}
        <DestinationCard backgroundImage={"/londonImage.svg"} />{" "}
        <DestinationCard backgroundImage={"/euro.svg"} />
      </span>
      <img
        src="bg5.svg"
        alt=""
        className="absolute right-[70px] top-[2034px] z-[-1]"
      />
    </div>
  );
};

export default DestinationSec;
