import img1 from "../assets/bg.webp";

export const Invite = () => {
  return (
    <div className="bg-amber-100 min-h-screen">
      <div className="bg-amber-100 py-6 text-center">
        <p className="font-spicy">JIDAM 2029</p>
      </div>
      <div className="p-6 w-full md:w-2/8 mx-auto">
        <div className="flex">
          <div className="border-sky-200 border-2 h-64 w-[60%]">
            <img className="w-full h-full object-cover" src={img1} alt="" />
          </div>
          <p className="w-[40%] m-auto text-3xl">Ologunagba</p>
        </div>
        <div className="flex ">
          <div className="w-[40%] m-auto">
            <p className="text-3xl">Abidakun</p>
          </div>
          <div className="border-sky-200 border-2 h-64 w-[60%]">
            <img className="w-full h-full object-cover" src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
