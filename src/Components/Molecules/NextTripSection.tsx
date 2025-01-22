interface NextTripSectionProps {
  image: any;
  title: string;
  description: string;
}

const NextTripSection = ({
  image,
  title,
  description,
}: NextTripSectionProps) => {
  return (
    <span className="flex  items-center gap-[21px]">
      <img src={image} alt="" />
      <span>
        <h2 className="text-[16px] font-bold text-[#5E6282] ">{title}</h2>
        <p className="text-[#5E6282] font-normal text-[16px] w-[327px]">
          {description}
        </p>
      </span>
    </span>
  );
};

export default NextTripSection;
