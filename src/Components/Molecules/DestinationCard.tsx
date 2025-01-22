interface DestinationCardProps {
  backgroundImage: any;
  countryName: string;
  capitalName: string;
  tripDays: number;
  price: number;
}

const DestinationCard = ({
  backgroundImage,
  capitalName,
  tripDays,
  price,
  countryName,
}: DestinationCardProps) => {
  return (
    <div>
      <img src={backgroundImage} alt="" className="bg-red-500" />
      <div>
        <span>
          <p>{countryName}</p>
          <p>{capitalName}</p>
        </span>
        <p>${price}k</p>
      </div>
      <span className="flex items-center">
        <img src="/Navigation.svg" alt="" />
        <p>{tripDays} Days Trip</p>
      </span>
    </div>
  );
};

export default DestinationCard;
