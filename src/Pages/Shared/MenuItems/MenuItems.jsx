/* eslint-disable react/prop-types */
const MenuItems = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <section className="flex gap-5">
      <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[85px]" src={image} alt="" />
      <div>
        <h3 className="text-xl capitalize">{name} ------------------</h3>
        <p className="text-[#737373] leading-6">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </section>
  );
};

export default MenuItems;
