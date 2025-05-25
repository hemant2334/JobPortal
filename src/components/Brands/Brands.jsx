
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import brand1 from "../../assets/images/brands/brand1.png";
import brand2 from "../../assets/images/brands/brand2.png";
import brand3 from "../../assets/images/brands/brand3.png";
import brand4 from "../../assets/images/brands/brand4.png";
import brand5 from "../../assets/images/brands/brand5.png";

const brands = [
  { name: "Vodafone image", image: brand1 },
  { name: "Intel image", image: brand2 },
  { name: "Tesla image", image: brand3 },
  { name: "AMD image", image: brand4 },
  { name: "Talkit image", image: brand5 },
];

const Brands = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="brands" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <p className="font-normal text-[18px] dark:text-white leading-7 text-[#202430] opacity-50 text-left mb-6">
          Companies we helped grow
        </p>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center h-16">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-10 md:h-14 object-contain dark:text-white opacity-80 hover:opacity-100 transition duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Brands;
