import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import Logo from "./Logo";

const links = [
  { to: "/about", text: "About Us" },
  { to: "/create-space", text: "List Space" },
  { to: "/locations", text: "Locations" },
];

const mobileLinks = [
  { to: "/explore", text: "Explore", img: "/images/icons/explore.png" },
  { to: "/about", text: "About Us", img: "/images/icons/user.png" },
  { to: "/create-space", text: "List Space", img: "/images/icons/victor.png" },
  { to: "/locations", text: "Locations", img: "/images/icons/place.png" },
];

const Header = () => {
  const [active, setActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const handleMobileActive = (link) => {
    setActive(link);
    setShowMenu(false);
  };

  useEffect(() => {
    location.pathname === active ? setActive(location.pathname) : setActive("");
  }, [active, location.pathname]);

  return (
    <header className="bg-white py-4">
      <div className="container pt-6 pb-6 flex items-center justify-between">
        <Logo />
        <ul className="flex items-center gap-10">
          {links?.map((link) => (
            <li
              className="hidden md:block"
              onClick={() => setActive(link?.to)}
              key={link?.to}
            >
              <Link
                className={`text-base transition-all duration-200 ${
                  active === link?.to ? "text-gray-500" : "text-black"
                }`}
                to={link?.to}
              >
                {link?.text}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-5">
            <img src="/images/language.svg" alt="icon" />
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center group gap-2 border rounded-[14px] py-1 px-3 cursor-pointer "
            >
              <HiOutlineBars3 className="text-2xl group-hover:text-black/50 transition-all duration-300" />
              <FaCircleUser className="text-xl transition-all duration-300 group-hover:text-black/50" />
            </div>
          </li>
        </ul>
      </div>

      {/* menu */}
      <div
        className={`absolute  right-20 top-[85px] bg-white rounded z-50 border transition-all duration-300 hidden md:block w-[250px]  ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="space-y-5 flex flex-col py-5 px-4 border-b ">
          <Link
            className="text-black transition-all duration-300 hover:text-black/50"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-black transition-all duration-300 hover:text-black/50"
            to="/signup"
          >
            Signup
          </Link>
        </div>
        <div className="space-y-5 flex flex-col py-5 px-4 ">
          <Link
            onClick={() => setShowMenu(false)}
            className="text-black transition-all duration-300 hover:text-black/50"
          >
            Gift Card
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="text-black transition-all duration-300 hover:text-black/50"
          >
            Air BnB your home
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="text-black transition-all duration-300 hover:text-black/50"
          >
            Help center
          </Link>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`absolute left-0 right-0 top-[105px] bg-white rounded-[20px] py-5 px-5 z-50 border transition-all duration-300 block md:hidden ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex gap-5 items-center justify-between border-b pb-4">
          {mobileLinks?.map((ml) => (
            <Link
              to={ml?.to}
              onClick={() => handleMobileActive(ml?.to)}
              className="flex flex-col items-center gap-2"
              key={ml?.to}
            >
              <div>
                <img
                  className={`${active === ml?.to ? "" : "opacity-50"}`}
                  src={ml?.img}
                  alt="error"
                />
              </div>
              <h1
                to={ml?.to}
                className={`text-center whitespace-nowrap ${
                  active === ml?.to ? "text-black" : "text-black/50"
                }`}
              >
                {ml?.text}
              </h1>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center pt-4">
          <h1 className="text-black/50">
            <Link to="/login">Login</Link> <span>|</span>{" "}
            <Link to="/signup">Signup</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
