interface CategoryCardProps {
  header: string;
  description: string;
  image: any;
}

const BestFlight = ({ header, description, image }: CategoryCardProps) => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center rounded-[36px] w-[267px] h-[314px] pr-[43px] pl-[44px] bg-white ease-in duration-300 z-20 ">
        <img src={image} alt="category-image  " />
        <h1 className="text-center font-semibold text-[18px]  mb-[15px]">
          {header}
        </h1>
        <p className="text-center font-medium text-[16px] "> {description}</p>
      </div>
      <img
        src="/bg3.svg"
        alt="dd"
        className="absolute -bottom-7 -left-7 -z-10"
      />
    </div>
  );
};

export default BestFlight;
