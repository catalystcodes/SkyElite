import FindOutMore from "../Atoms/FindOutMore";
import PlayDemo from "../Atoms/PlayDemo";

const Hero = () => {
  return (
    <div className="flex justify-center ml-[170px] mr-[69px] mb-[240px] ">
      <img src="//bg1.svg" alt="" className="absolute top-0 left-0" />
      <img src="/bg2.svg" alt="" className="absolute top-0 right-0 " />
      <img src="/bg9.svg" alt="" className="absolute top-[4500px] right-0 " />
      <div className="mt-[82px]">
        <p className="font-bold text-sm text-deepBrown">
          BEST DESTINATION AROUND THE WORLD
        </p>
        <h1 className="text-deepBlue font-bold text-[84px] header mt-[24px] mb-[30px] leading-[89px] ">
          Travel, enjoy and live a new and full life
        </h1>
        <img
          src="/scar.svg"
          alt=""
          className="absolute top-[190px] left-[390px] "
        />
        <p className="text-[#5E6282] text-base w-96 mb-[34px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center gap-x-[44px]  ">
          <FindOutMore />
          <PlayDemo />
        </div>
      </div>
      <img src="/Traveller1.svg" alt="" className="z-0" />
    </div>
  );
};

export default Hero;
