import { useContext, useEffect, useState } from "react";
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

  const [drawerOpen, setDrawerOpen] = useState(false);

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
        {/* {user ? (
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
        )} */}

        {/* New */}
        {user ? (
          <>
            {user?.photoURL ? (
              <div
                className="tooltip tooltip-bottom avatar dropdown-end z-10"
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="lg:w-12 w-8 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2"
                  onClick={() => setDrawerOpen(!drawerOpen)} // Toggle drawer on avatar click
                >
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </div>
            ) : (
              <div
                className="tooltip tooltip-bottom avatar dropdown-end z-10"
                data-tip={user?.name}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="lg:w-12 w-10 rounded-full ring ring-offset-base-100 ring-pink-600"
                  onClick={() => setDrawerOpen(!drawerOpen)} // Toggle drawer on avatar click
                >
                  <img
                    src="https://i.ibb.co/rb1pJ40/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg"
                    alt="Default Avatar"
                  />
                </div>
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

        {/* Drawer component */}
        <div
          id="drawer-navigation"
          className={`fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } bg-white dark:bg-gray-800`} // Opens from the right
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>
          <button
            type="button"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setDrawerOpen(false)} // Close the drawer
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span
                    onClick={handleLogOut}
                    className="flex-1 ms-3 whitespace-nowrap"
                  >
                    Sign Out
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

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
