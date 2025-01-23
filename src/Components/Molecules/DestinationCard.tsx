interface DestinationCardProps {
  backgroundImage: any;
}

const DestinationCard = ({ backgroundImage }: DestinationCardProps) => {
  return (
    <div>
      <img src={backgroundImage} alt="" className="" />
    </div>
  );
};

export default DestinationCard;
