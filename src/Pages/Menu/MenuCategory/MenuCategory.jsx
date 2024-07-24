/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, img, subTitle}) => {
    

  return (
    <section>
        {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mb-20 mt-24">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-primary border-0 border-b-4 text-white">Read More</button></Link>
    </section>
  );
};

export default MenuCategory;
