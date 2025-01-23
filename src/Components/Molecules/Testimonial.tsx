import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="ml-[170px] flex gap-x-[87px]">
      <div>
        <p className=" text-lg font-semibold text-[#5E6282]">Testimonials</p>
        <h2 className="  text-deepBlue font-bold text-[50px] w-[511px] mb-[82px]  header">
          What People Say About Us.
        </h2>
        <img src="/dots.svg" alt="" />
      </div>
      <div>
        <div className="">
          <TestimonialCard
            testimonial="“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”"
            location="Lahore, Pakistan"
            name="Mike taylor"
          />
        </div>
        <div className="absolute top-[2575px] left-[830px]  z-[-1]">
          <TestimonialCard
            testimonial="On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
            location="CEO of Red Button"
            name="Chris Thomas"
          />
        </div>
        <img
          src="/avatar.svg"
          alt=""
          className="absolute left-[730px] top-[2450px] "
        />
      </div>
      <div className="ml-[66px]"></div>
      <img src="/arrowUpAndDown.svg" alt="" className="mt-[16.5px]" />
    </div>
  );
};

export default Testimonial;
