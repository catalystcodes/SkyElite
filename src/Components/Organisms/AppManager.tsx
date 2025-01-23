import Category from "../Molecules/Category";
import DestinationSec from "../Molecules/DestinationSec";
import Footer from "../Molecules/Footer";
import Hero from "../Molecules/Hero";
import PaymentSection from "../Molecules/PaymentSection";
import SubscriptionPage from "../Molecules/SubscriptionPage";
import Testimonial from "../Molecules/Testimonial";
import Logo from "../Molecules/logo";

const AppManager = () => {
  return (
    <div>
      <Hero />
      <Category />
      <DestinationSec />
      <PaymentSection />
      <Testimonial />
      <Logo />
      <SubscriptionPage />
      <Footer />
      <p className="text-center mb-[79px] text-[#5E6282] font-medium text-[14px]">
        All rights reserved@jadoo.co
      </p>
    </div>
  );
};

export default AppManager;
