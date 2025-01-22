import Category from "../Molecules/Category";
import DestinationSec from "../Molecules/DestinationSec";
import Hero from "../Molecules/Hero";
import PaymentSection from "../Molecules/PaymentSection";

const AppManager = () => {
  return (
    <div>
      <Hero />
      <Category />
      {/* <DestinationSec /> */}
      <PaymentSection />
    </div>
  );
};

export default AppManager;
