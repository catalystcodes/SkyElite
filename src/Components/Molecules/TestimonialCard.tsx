interface TestimonialCardProps {
  testimonial: string;
  name: string;
  location: string;
}

const TestimonialCard = ({
  testimonial,
  name,
  location,
}: TestimonialCardProps) => {
  return (
    <div className="w-[504px] h-[245px] rounded-[10px] bg-white pt-[26px] pl-[34px] shadow-md ease-in duration-300">
      <p className="text-[16px] leading-[32px] font-medium text-[#5E6282] w-[402px]">
        {testimonial}
      </p>
      <p className="mt-[34px] mb-[5px] text-[18px] font-semibold text-[#5E6282] ">
        {name}
      </p>
      <p className="text-[14px] font-medium text-[#5E6282] "> {location}</p>
    </div>
  );
};

export default TestimonialCard;
