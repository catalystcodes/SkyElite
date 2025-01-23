interface SubFooterProps {
  title: string;
  subTitle: string;
  subTitle1: string;
  subTitle2: string;
  //   166
}

const SubFooter = ({
  title,
  subTitle,
  subTitle1,
  subTitle2,
}: SubFooterProps) => {
  return (
    <div>
      <p className="text-[21px] font-bold text-[#080809] mb-[35px]">{title}</p>
      <p className="text-[18px] font-medium text-[#5E6282]">{subTitle}</p>
      <p className="text-[18px] font-medium text-[#5E6282] my-[13px]">
        {subTitle1}
      </p>
      <p className="text-[18px] font-medium text-[#5E6282]">{subTitle2}</p>
    </div>
  );
};

export default SubFooter;
