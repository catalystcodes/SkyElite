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
      <span>
        <DestinationCard
          backgroundImage={"/italy.svg"}
          capitalName=""
          countryName=""
          price={15.42}
          tripDays={10}
        />
      </span>
    </div>
  );
};

export default DestinationSec;
