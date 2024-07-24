import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgOne from "../../../assets/home/slide1.jpg";
import imgTwo from "../../../assets/home/slide2.jpg";
import imgThree from "../../../assets/home/slide3.jpg";
import imgFour from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="slider-container max-w-6xl mx-auto">
        <SectionTitle
          subHeading="From 11:00am to 10:00pm"
          heading="ORDER ONLINE"
        ></SectionTitle>
        <Slider {...settings}>
          <div className="px-2 relative">
            <img className="w-full" src={imgOne} alt="Salads" />
            <p className="text-white text-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
              Salads
            </p>
          </div>
          <div className="px-2 relative">
            <img className="w-full" src={imgTwo} alt="Soups" />
            <p className="text-white text-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
              Soups
            </p>
          </div>
          <div className="px-2 relative">
            <img className="w-full" src={imgThree} alt="Pizzas" />
            <p className="text-white text-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
              Pizzas
            </p>
          </div>
          <div className="px-2 relative">
            <img className="w-full" src={imgFour} alt="Desserts" />
            <p className="text-white text-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
              Desserts
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Category;
