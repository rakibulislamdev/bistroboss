
import SectionTitle from "../SectionTitle/SectionTitle"
import MenuItems from "../../Pages/Shared/MenuItems/MenuItems"
import useMenu from "../../Hooks/useMenu"


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")

  return (
    <section>
        <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Check it out"
        >
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
            {
                popular.map(item => <MenuItems key={item._id} item={item}>
                </MenuItems>)
            }
        </div>
    </section>
  )
}

export default PopularMenu