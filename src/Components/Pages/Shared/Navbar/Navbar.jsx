import { Link } from "react-router-dom";

const Navbar = () => {
    const links = [
        { title: "Home", path: "/" },
        { title: "Services", path: "/services" },
        { title: "Contact us", path: "" },
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
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links.map((link) => (
                            <a key={link.path} >
                                <Link className="hover:bg-gradient-to-l from-yellow-green to-primary-cyan hover:text-lg hover:font-semibold hover:border-b-2 ml-3 " to={link.path}>{link.title}</Link>
                            </a>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <img className="w-[55px] h-[50px]" src="/logo1.png" alt="" />
                    <Link className="text-xl lg:text-3xl font-bold lg:font-extrabold text-yellow-green"><span className="text-primary-cyan">Care</span>Loom</Link>
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
            <div className="navbar-end lg:gap-5">
                <button className="rounded-2xl border-2 border-primary-cyan  text-primary-cyan text-xl font-bold md:px-10 md:py-3">Sing Up</button>
                <button className="rounded-2xl bg-primary-cyan text-white text-xl font-bold md:px-10 md:py-3">Log In</button>
            </div>
        </div>
    );
};

export default Navbar;