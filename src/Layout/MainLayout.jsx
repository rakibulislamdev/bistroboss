import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Pages/Shared/Footer"
import Navbar from "../Pages/Shared/Navbar"

const MainLayout = () => {

  const location = useLocation()
  const isLogin = location.pathname.includes('login') || location.pathname.includes('signup')
  
  return (
    <div className="max-w-screen-xl mx-auto">
        {isLogin || <Navbar/>}
        <Outlet/>
        {isLogin || <Footer/>}
    </div>
  )
}

export default MainLayout