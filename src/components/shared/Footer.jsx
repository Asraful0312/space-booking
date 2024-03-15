import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="bg-[#F2F2F2] py-16">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  ">
        <div>
          <Logo />
          <p className="text-black/50 py-4">
            Coworkspaces offer a collaborative <br /> work environment for
            individuals from <br /> various professions to share and work <br />
            together.
          </p>
          <div className="flex items-center gap-7">
            <img
              className="w-[140px] cursor-pointer"
              src="/images/playstore.png"
              alt="playstore image"
            />
            <img
              className="w-[140px] cursor-pointer"
              src="/images/applestore.png"
              alt="playstore image"
            />
          </div>
        </div>
        <div className="flex justify-between lg:justify-center lg:gap-[180px] w-full">
          {/* company */}
          <div>
            <h1 className="text-black font-medium mb-6">Company</h1>
            <ul>
              <li className="mb-5">
                <Link to="/about" className="text-base text-black/50">
                  About Us
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/blog" className="text-base text-black/50">
                  Blog
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/faq" className="text-base text-black/50">
                  FAQs
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/contact" className="text-base text-black/50">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* support */}
          <div>
            <h1 className="text-black font-medium mb-6">Support</h1>
            <ul>
              <li className="mb-5">
                <Link to="/getintouch" className="text-base text-black/50">
                  Get in Touch
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/help" className="text-base text-black/50">
                  Help Center
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/chat" className="text-base text-black/50">
                  Live Chat
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/howitworks" className="text-base text-black/50">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* contact */}
        <div className="flex items-start lg:items-center  flex-col">
          <div>
            <h1 className="text-black font-medium mb-6">Contact Us</h1>
            <h1 className="text-base text-black/50 mb-5">
              Email: support@domain.com
            </h1>
            <h1 className="text-base text-black/50 mb-5">
              Phone: 1 (00) 832 2342
            </h1>
            <ul className="flex items-center gap-5">
              <li>
                <a href="">
                  <img src="/images/icons/facebook.png" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/images/icons/twitter.png" alt="twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/images/icons/linkedin.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/images/icons/youtube.png" alt="youtube" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/images/icons/instagram.png" alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
