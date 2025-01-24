const SubscriptionPage = () => {
  const imageStyle: any = {
    // width: "1470px",
    width: "1170px",
    height: "407px",
    // backgroundImage: "url(/bg7.svg)",
    // backgroundColor: "rgba(127,127,127,0.2)",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // marginLeft: "48px",
    paddingTop: "81px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <section className="flex justify-center">
      <div style={imageStyle}>
        <img
          src="/bg10.svg"
          alt="bg-overlay2"
          className=" absolute w-full top-0 left-0 z-30"
        />
        <img
          src="/bg7.svg"
          alt="bg-overlay1"
          className="absolute w-full top-0 left-0 z-20"
        />

        <p className="text-[#5E6282]  text-center  font-semibold text-[33px] w-[859px]  mb-[78px]">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <form action="" className="flex items-center gap-x-[25px]">
          <div className="flex items-center w-[421px] h-[68px] bg-white pl-[31px] gap-x-[15px] rounded-[10px]">
            <img src="/email.svg" alt="Email" />
            <input
              type="email"
              placeholder="Your email"
              className="outline-none "
            />
          </div>

          <button
            className="bg-deepBrown text-white text-[17px] font-semibold py-[23px] px-[50px] rounded-[10px]"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        <img
          src="/telegramIcon.svg"
          alt=""
          className="absolute -top-3 -right-6 z-10"
        />
        <img
          src="/bg8.svg"
          className="absolute -bottom-14 -right-24 z-10 "
          alt=""
        />
      </div>
    </section>
  );
};

export default SubscriptionPage;
