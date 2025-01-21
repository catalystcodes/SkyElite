interface CategoryCardProps {
  header: string;
  description: string;
  image: any;
}

const BestFlight = ({ header, description, image }: CategoryCardProps) => {
  return (
    <div className=" ">
      <div className="flex flex-col items-center rounded-[36px] w-[267px] h-[314px] pr-[43px] pl-[44px] bg-white ease-in duration-300 z-10 ">
        <img src={image} alt="category-image  " />
        <h1 className="text-center font-semibold text-[18px]  mb-[15px]">
          {header}
        </h1>
        <p className="text-center font-medium text-[16px] "> {description}</p>
      </div>
      <img
        src="/bg3.svg"
        alt=""
        className="absolute bottom-[-630px] right-[1080px] z-[-1]  "
      />
    </div>
  );
};

export default BestFlight;
