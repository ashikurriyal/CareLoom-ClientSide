import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  //logout
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error.message));
  };

//   const location = useLocation();

  //Dark Mode
  const { theme, setTheme } = localStorage.getItem("theme") || "light";

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const links = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Contact us", path: "/contactus" },
    { title: "Help", path: "" },
    { title: "Blogs", path: "" },
  ];
  return (
    <div className="navbar">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <a key={link.path}>
                <Link
                  className="hover:bg-gradient-to-l from-yellow-green to-primary-cyan hover:text-lg hover:font-semibold hover:border-b-2 ml-3 "
                  to={link.path}
                >
                  {link.title}
                </Link>
              </a>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-[55px] h-[50px]" src="/logo1.png" alt="" />
          <Link className="text-xl lg:text-3xl font-bold lg:font-extrabold text-yellow-green">
            <span className="text-primary-cyan">Care</span>Loom
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <a key={link.path} className="text-xl">
              <Link
                className="ml-3 text-black hover:text-xl hover:font-semibold hover:border-b-2 hover:bg-gradient-to-r from-primary-cyan to-yellow-green hover:inline-block hover:text-transparent hover:bg-clip-text"
                to={link.path}
              >
                {link.title}
              </Link>
            </a>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <>
            {user?.photoURL ? (
              <div
                className="tooltip tooltip-bottom avatar dropdown dropdown-end z-10"
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="lg:w-12 w-8 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2"
                >
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52"
                >
                  <li>
                    <a onClick={handleLogOut} className="font-semibold text-sm">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div
                className="tooltip tooltip-bottom avatar dropdown dropdown-end z-10"
                data-tip={user?.name}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="lg:w-12 w-10 rounded-full ring ring-offset-base-100 ring-pink-600"
                >
                  <img
                    src="https://i.ibb.co/rb1pJ40/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg"
                    alt="Default Avatar"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52"
                >
                  <li>
                    <a onClick={handleLogOut} className="font-semibold text-sm">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">
            <button className="font-semibold text-xl btn btn-outline border-2 border-black hover:text-white hover:bg-black">
              Log In
            </button>
          </Link>
        )}
        <label className="swap swap-rotate">
          <input
            onChange={handleToggleTheme}
            type="checkbox"
            className="theme-controller"
          />
          <svg
            className="swap-off fill-current lg:w-10 lg:h-10 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-on fill-current lg:w-10 lg:h-10 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
