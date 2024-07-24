import { useEffect, useRef, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./Testimonials.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <section>
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="What Our Clients Say"
      ></SectionTitle>

      <div className="relative">
        <div className="testimonial-container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {reviews.map((review) => (
              <div key={review._id}>
                <div className="flex flex-col items-center justify-center">
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                  <p className="text-center w-1/2 mt-5">{review.details}</p>
                  <h3 className="text-[#CD9003] text-3xl font-medium my-5">
                    {review.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
          <button
            className="button absolute top-[30%] left-[15%] text-xl text-blue-600 hover:text-gray-400 cursor-pointer"
            onClick={previous}
          >
            <FaArrowLeft />
          </button>
          <button
            className="button absolute top-[30%] -translate-y-1/2 right-[15%] text-xl text-blue-600 hover:text-gray-400 cursor-pointer"
            onClick={next}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
