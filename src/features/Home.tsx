import Icon from "../assets/Icon/Icon";
import { CustomButton } from "../component/button/CustomButton";
import frameImg from "../assets/frame.png";

export const Home = () => {
  return (
  

      <div className=" w-full h-screen overflow-x-hidden flex flex-col items-center justify-center bg-primary text-secondary">
        <div className="text-center    ">       
          <h1 className="text-2xl font-caveat">Conjugal Bliss</h1>
          <div className="relative flex w-full items-center justify-center">
            <div className="w-full ">
              <img className="h-96 w-full" src={frameImg} alt="frame" />
            </div>
            <div className="absolute  py-4 flex flex-col items-center justify-center gap-4">
              <p className="md:text-6xl text-4xl font-dancing">
                Ologunagba Olajide{" "}
              </p>
              <Icon type="ring" />
              <p className="md:text-6xl text-4xl font-dancing">
                Abidakun Alice
              </p>
            </div>
          </div>
          <h1 className="font-caveat text-xl">
            Request the honor of your presence at their wedding
          </h1>
          <p className="font-spicy">Saturday 26th of October 2029</p>
        </div>
        <div className=" p-4 rounded-xl md:w-2/5 w-full text-center flex flex-col items-center justify-center gap relative">
          <div className="light"></div>
          <p className="text-xl font-caveat"> Dear Sir / Madam </p>
          <p className="text-3xl guest-name font-dancing mb-5">
            Ologunagba Olajide
          </p>
          <div className="btn">
            <CustomButton />
          </div>
        </div>
      </div> 
  );
};
