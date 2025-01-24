import BestFlight from "./BestFlight";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className="mb-[156px]">
      <span className="flex justify-center items-center mb-[65px] mr-[56px]">
        <span className="flex-grow">
          <p className="text-center text-lg font-semibold text-[#5E6282]">
            CATEGORY
          </p>
          <h2 className="text-center text-deepBlue font-bold text-[50px]  header">
            We Offer The Best Services
          </h2>
        </span>

        <img src="/bg4.svg" alt="22" />
      </span>
      <span className="flex justify-around items-center flex-wrap pr-40 pl-40">
        <CategoryCard
          header="Calculated Weather"
          description="Built Wicket longer admire do barton vanity itself do in it."
          image="/satalite.svg"
        />{" "}
        <BestFlight
          header="Best Flights"
          description="Engrossed listening. Park gate sell they west hard for the."
          image="/bestFlight.svg"
        />{" "}
        <CategoryCard
          header="Local Events"
          description="Barton vanity itself do in it. Prefer to men it engrossed listening. "
          image="/mic.svg"
        />
        <CategoryCard
          header="Customization"
          description="We deliver outsourced
		  aviation services for
		  military customers"
          image="/settingIco.svg"
        />
      </span>
    </section>
  );
};

export default Category;
