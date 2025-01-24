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
      <span className="flex justify-center ">
        <DestinationCard backgroundImage={"/italy.svg"} />{" "}
        <DestinationCard backgroundImage={"/londonImage.svg"} />{" "}
        <div className="relative">
          <DestinationCard backgroundImage={"/euro.svg"} />
          <img
            src="bg5.svg"
            alt=""
            className="absolute right-6 top-40 z-[-1]"
          />
        </div>
      </span>
    </div>
  );
};

export default DestinationSec;
