
import img2 from "../assets/images/image 11.jpg";
import img3 from "../assets/images/image 15 (1).jpg";
import img4 from "../assets/images/image 11 (1).jpg";
import img5 from "../assets/images/image 18.jpg";
import img6 from "../assets/images/image 22.jpg";
import img7 from "../assets/images/image 20.jpg";
import img8 from "../assets/images/image 17.jpg";



export const Gallery = () => {
  return (
    <div className="p-3 text-center text-secondary space-y-9">
      <div className=" ">
        <h1 className="text-4xl font-satisfy ">OUR GALLERY</h1>
        <p className="text-lg font-dancing text-white">
          A perfect love is when a couple fall in love for many times and always
          with the same person
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-5 gap-4 h-screen">
        <div className=" row-span-2  ">
          <img
            src={img3}
            alt={`Pre-wedding`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="  ">
            <img
            src={img2}
            alt={`Pre-wedding`}
            className="rounded-lg object-cover w-full h-full"
          /></div>
        <div className="  ">
            <img
            src={img4}
            alt={`Pre-wedding`}
            className="rounded-lg object-cover w-full h-full "
          />
        </div>
        <div className=" col-span-2  ">
            <img
            src={img6}
            alt={`Pre-wedding`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="  ">
            <img
            src={img5}
            alt={`Pre-wedding`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className=" row-span-2 ">
            <img
            src={img7}
            alt={`Pre-wedding`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="  ">
            <img
            src={img8}
            alt={`Pre-wedding`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
       
      </div>
    </div>
  );
};
