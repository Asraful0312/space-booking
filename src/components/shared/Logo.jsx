import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img className="h-6" src="/images/Logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
