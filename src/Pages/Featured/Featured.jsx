import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item text-white pt-4 relative z-10">
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 -z-10"></div>
      <SectionTitle
        heading="Check it out"
        subHeading="FROM OUR MENU"
      ></SectionTitle>
      <div className="md:flex gap-10 justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
