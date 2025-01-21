interface CategoryCardProps {
  header: string;
  description: string;
  image: any;
}

const CategoryCard = ({ header, description, image }: CategoryCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-[36px] w-[267px] h-[314px] pr-[43px] pl-[44px] hover:bg-white ease-in duration-300  pt-[42px]">
      <img src={image} alt="category-image" />
      <h1 className="text-center font-semibold text-[18px] mt-[29px] mb-[15px]">
        {header}
      </h1>
      <p className="text-center font-medium text-[16px] "> {description}</p>
    </div>
  );
};

export default CategoryCard;
