import IconList from "../assets/images/icon-success.svg";

const Confirmation = ({ handleDismiss }) => {
  return (
    <>
      <div className="bg-[#242742]  w-full h-full mobile:h-full lg:flex lg:items-center">
        <div className="bg-white lg:w-3/12 mobile:w-full p-7 mx-auto lg:rounded-3xl mobile:rounded-none ">
          <div className="mobile:mt-32 lg:mt-0">
            <img className="w-2/12 mb-5" src={IconList} alt="" />
            <h1 className="text-3xl font-bold text-[#242742] mb-5">
              Thanks for subscribing!
            </h1>
            <p className="text-xs ">
              A confirmation emai has been sent to <b> example@email.com.</b>
              Please open it and click the button inside to confirm your
              subscription.
            </p>
            <div className="lg:mt-5 border-2-black w-full lg:pb-0 mobile:mt-80  ">
              <button
                type="submit"
                onClick={handleDismiss}
                className="rounded-md bg-[#242742] text-[#ffffff] text-sm font-bold py-2.5 w-full hover:bg-gradient-to-r from-[#f84d5e] to-[#ff6257] hover:shadow-xl   hover:shadow-[#f84d5e]/50"
              >
                Dismiss Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
