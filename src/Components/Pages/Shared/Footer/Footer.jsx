import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer bg-primary-cyan text-white md:px-28 md:py-24 mt-8 md:mt-16">
            <aside>
                <div className="flex items-center">
                    <img className="w-[55px] h-[50px]" src="/logo1.png" alt="" />
                    <Link className="text-3xl font-extrabold text-white"><span className="text-white">Care</span>Loom</Link>
                </div>
                <p>
                    Copyright © 2022 CareLoom
                    <br />
                    |  All Rights Reserved
                </p>
                
            </aside>
            <nav>
                <h6 className="footer-title">Product</h6>
                <a className="link link-hover">Company</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Follow us</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;