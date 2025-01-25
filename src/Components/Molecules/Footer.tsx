import SubFooter from "./subFooter";

const Footer = () => {
  return (
    <footer className="flex justify-around mt-[166px] mb-[84px]">
      <div>
        <p className="text-[44px] font-medium text-[#181E4B] mb-[16px]">
          Jadoo.
        </p>
        <p className="w-[207px] text-[#5E6282] text-[13px] font-medium">
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>
      <div className="flex gap-x-[72px]">
        <SubFooter
          title="Company"
          subTitle="About"
          subTitle1="Careers"
          subTitle2="Mobile"
        />
        <SubFooter
          title="Contact"
          subTitle="Help/FAQ"
          subTitle1="Press"
          subTitle2="Affilates"
        />
        <SubFooter
          title="More"
          subTitle="Airlinefees"
          subTitle1="Airline"
          subTitle2="Low fare tips"
        />
      </div>
      <div>
        <span className="flex">
          <img src="/facebook.svg" alt="" />
          <img src="/instagram .svg" alt="dddd" className="" />
          <img src="/twitter .svg" alt="" />
        </span>
        <p className="mb-[16px] mt-[26px]  text-[#5E6282] font-medium text-[20px]">
          Discover our app
        </p>
        <span className="flex gap-x-[7px]">
          <img src="/Google Play.svg" alt="" />
          <img src="/Play Store.svg" alt="" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
