import NextTripSection from "./NextTripSection";
import TripCard from "./TripCard";

const PaymentSection = () => {
  return (
    <div className="ml-[170px] mb-[207px]">
      <div className="flex  justify-between pr-[255px]">
        <div>
          <p className=" text-lg font-semibold text-[#5E6282] ">
            Easy and Fast
          </p>
          <h2 className=" text-deepBlue font-bold text-[50px] w-[511px]  mb-[31px]  header">
            Book your next trip in 3 easy steps
          </h2>
          <div className="flex flex-col gap-y-[48px]">
            <NextTripSection
              description="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. "
              title="Choose Destination"
              image={"/chooseDestinationImage.svg"}
            />

            <NextTripSection
              description="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. "
              title="Make Payment"
              image={"/makePayment .svg"}
            />
            <NextTripSection
              description="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. "
              title="Reach Airport on Selected Date"
              image={"/airport.svg"}
            />
          </div>
        </div>
        <div className="mt-[58px]">
          <TripCard />
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;

//
