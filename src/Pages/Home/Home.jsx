import { Helmet } from "react-helmet-async";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Bistro Boss - Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu/>
      <Featured/>
      <Testimonials/>
    </section>
  );
};

export default Home;
