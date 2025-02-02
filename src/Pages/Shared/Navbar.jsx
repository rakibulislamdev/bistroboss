import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

  const {user, logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    .then(() => {})
    .catch(error => console.log(error.message))
  }

  const navList = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/menu'>Our Menu</Link>
      </li>
      <li>
        <Link to='/order/salad'>Order Food</Link>
      </li>
      <li>
        <Link to='/secret'>Secret</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black bg-opacity-20 text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end">
          
          {
            user? <><Link onClick={handleLogout}><a className="btn">Log Out</a></Link></> : <><Link to='/login'><a className="btn">Log in</a></Link></>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
