import { Link } from "react-router-dom";
import { navlinks } from "../config/constants";

function Header() {
  return (
    <div className="sticky z-50 top-0 w-full flex justify-between items-center px-8 py-3 shadow-lg shadow-gray-100 bg-white/70 backdrop-blur-md">
      <div className="">
        <img src="/images/Group 93.png" alt="logo image" className="h-10" />
      </div>
      <div>
        {navlinks.map((link, index) => (
          <a key={index} href={link.to} className="mr-5 text-tdesc">
            {link.title}
          </a>
        ))}
      </div>
      <Link className="btn " to="/contact">
        contact us
      </Link>
    </div>
  );
}

export default Header;
