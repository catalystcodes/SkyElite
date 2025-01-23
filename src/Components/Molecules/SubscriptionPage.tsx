const SubscriptionPage = () => {
  const imageStyle = {
    width: "1470px",
    height: "407px",
    backgroundImage: "url(/bg7.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginLeft: "48px",
    paddingTop: "81px",
  };
  return (
    <div>
      <div style={imageStyle}>
        <p className="text-[#5E6282] text-center  font-semibold text-[33px] w-[859px] ml-[400px] mb-[78px]">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <form action="" className="flex items-center gap-x-[25px] ml-[490px]">
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
      </div>
      <img
        src="/telegramIcon.svg"
        alt=""
        className="absolute top-[3910px] right-[150px]  "
      />
      <img
        src="/bg8.svg"
        className="absolute top-[4250px] right-[70px]  "
        alt=""
      />
    </div>
  );
};

export default SubscriptionPage;
