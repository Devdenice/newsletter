import MobileIllustration from "./assets/images/illustration-sign-up-mobile.svg";
import DesktopIllustration from "./assets/images/illustration-sign-up-desktop.svg";
import IconList from "./assets/images/icon-list.svg";
import { useState } from "react";
import Confirmation from "./components/Confirmation";

function App() {
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(
      inputValue
    );
    setIsValid(inputValue === "" || isValidEmail);
  };

  const handleSubscribe = () => {
    if (isValid) {
      setShowConfirmation(true);
      setIsSubscribed(true);
    }
  };

  const handleDismiss = () => {
    setShowConfirmation(false);
    setIsSubscribed(false);
  };

  return (
    <>
      <div className="lg:bg-[#242742] mobile:bg-[#fff] lg:p-10 lg:h-screen mobile:h-full flex items-center justify-center">
        <div className="font-sans lg:flex bg-[#fff] lg:p-5 lg:rounded-3xl lg:items-center lg:w-8/12 ">
          <div className="lg:hidden mobile:block">
            <img className="mobile:w-full" src={MobileIllustration} alt="" />
          </div>
          <div className="mobile:hidden lg:block lg:order-2 ">
            <img className="lg:w-full" src={DesktopIllustration} alt="" />
          </div>
          <div className="mobile:w-11/12  mx-auto lg:order-1 lg:mx-5 lg:w-8/12 ">
            <h1 className="mobile:text-3xl lg:text-[50px] font-bold mobile:my-0 lg:my-0 mobile:mt-8  text-[#242742]">
              Stay Updated!
            </h1>
            <p className="text-[16px] mobile:mb-4 text-[#36384e]  lg:mt-5 mobile:mt-5">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className="text-base flex items-start mb-2 text-[#36384e]">
              <img className="mr-3" src={IconList} alt="" />
              <div>Products discovery and building what matters</div>
            </div>
            <div className="text-base flex items-start mb-2 text-[#36384e]">
              <img className="mr-3" src={IconList} alt="" />
              <div>Measuring to ensure updates are a success</div>
            </div>
            <div className="text-base flex items-start text-[#36384e]">
              <img className="mr-3" src={IconList} alt="" />
              <div>And much more!</div>
            </div>
            <div className="flex flex-col mobile:mt-10 lg:mt-7 lg:w-11/12">
              <div className="flex items-center justify-between lg:mb-1">
                <label
                  className="text-[#242742] font-semibold text-sm mb-2 lg:mb-0"
                  htmlFor="email"
                >
                  Email address
                </label>
                {!isValid && (
                  <p className=" text-[#ff6257] text-sm ">
                    Valid email required.
                  </p>
                )}
              </div>
              <input
                className={`peer border-[1px] rounded-md py-2.5 pl-4 focus:outline-none ${
                  isValid
                    ? "border-[#9294a0]"
                    : "focus:outline-none border-[#ff6257] bg-[#ef81793d]"
                }`}
                placeholder="email@company.com"
                name="email"
                id="email"
                type="email"
                onChange={handleInputChange}
              />
              {/* {!isValid && (
                <p className="mt-2 text-[#ff6257] text-sm ">
                  Valid email required.
                </p>
              )} */}
            </div>
            <div className="mt-5 mobile:pb-10 lg:pb-0 lg:w-11/12">
              <button
                type="submit"
                onClick={handleSubscribe}
                disabled={!isValid}
                className="rounded-md bg-[#242742] text-[#ffffff] text-base font-bold py-2.5 w-full hover:bg-gradient-to-r from-[#f84d5e] to-[#ff6257] hover:shadow-xl   hover:shadow-[#f84d5e]/50"
              >
                Subscribe to my monthly newsletter
              </button>
            </div>
          </div>
        </div>
        {isSubscribed && isValid && showConfirmation && (
          <span className="lg:absolute lg:w-full lg:h-full mobile:absolute mobile:h-screen mobile:flex mobile:top-0 ">
            <Confirmation handleDismiss={handleDismiss} />
          </span>
        )}
      </div>

      {/* <Confirmation /> */}
      {/* {isSubscribed && isValid && <Confirmation />} */}
    </>
  );
}

export default App;
