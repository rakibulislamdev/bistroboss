import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgOne from "../../../assets/home/01.jpg";
import imgTow from "../../../assets/home/02.jpg";
import imgThree from "../../../assets/home/03.png";
import imgFour from "../../../assets/home/04.jpg";
import imgFive from "../../../assets/home/05.png";
import imgSix from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel 
    autoPlay={true}
    infiniteLoop={true}
    showStatus={false}
    >
      <div>
        <img src={imgOne} />
      </div>
      <div>
        <img src={imgTow} />
      </div>
      <div>
        <img src={imgThree} />
      </div>
      <div>
        <img src={imgFour} />
      </div>
      <div>
        <img src={imgFive} />
      </div>
      <div>
        <img src={imgSix} />
      </div>
    </Carousel>
  );
};

export default Banner;
