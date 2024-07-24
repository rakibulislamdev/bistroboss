import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertsMenuImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaMenuImg from "../../assets/menu/pizza-bg.jpg"
import saladMenuImg from "../../assets/menu/salad-bg.jpg"
import soupdMenuImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {

  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === "dessert")
  const salad = menu.filter(item => item.category === "salad")
  const pizza = menu.filter(item => item.category === "pizza")
  const soup = menu.filter(item => item.category === "soup")
  const offered = menu.filter(item => item.category === "offered")
  

  return (
    <section>
      <Helmet>
        <title>Bistro Boss - Menu</title>
      </Helmet>
     <Cover img={menuImg} title="OUR MENU" subTitle="Would you like to try a dish?"></Cover>
      <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
      {/* offered */}
     <MenuCategory items={offered}></MenuCategory>

    {/* desserts */}
    <MenuCategory items={desserts} title="desserts" img={dessertsMenuImg} subTitle="Would you like to try a dish?"></MenuCategory>
    
    {/* pizza */}
    <MenuCategory items={pizza} title="pizza" img={pizzaMenuImg} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>

    {/* salad */}
    <MenuCategory items={salad} title="salads" img={saladMenuImg} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>


    {/* soup */}
    <MenuCategory items={soup} title="soups" img={soupdMenuImg} subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>

   
    </section>
  );
};

export default Menu;
