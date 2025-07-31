import Slider from "react-slick";

interface sliderProps {
  name: string;
  message: string;
  timestamp: string;
}

const sliderData: sliderProps[] = [
  {
    name: "Mr Ologunagba Olajide",
    message: "Congratulations! Wishing you a blessed marriage.",
    timestamp: "2025-07-29T15:42:00",
  },
  {
    name: "Mrs Adebayo Esther",
    message: "May your union be filled with love and laughter.",
    timestamp: "2025-07-29T16:00:00",
  },
  // You can add more wishes here
];

export const WishesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container text-secondary">
      <Slider {...settings}>
        {sliderData.map((data, index) => (
          <div key={index} className="w-full h-40 p-4">
            <div className="bg-primary rounded-tl-none rounded-4xl w-full h-full p-3">
              <h1 className="text-xl font-spicy">{data.name}</h1>
              <p className="text-lg font-dancing">{data.message}</p>
              <p className="text-lg  italic mb-1">
                {new Date(data.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
