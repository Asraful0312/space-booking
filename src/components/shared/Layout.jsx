import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <section>
      {pathname !== "/signup" &&
        pathname !== "/login" &&
        pathname !== "/create-space" && <Header />}
      <div>{children}</div>
      {pathname !== "/signup" &&
        pathname !== "/login" &&
        pathname !== "/reserve" &&
        pathname !== "/history" &&
        pathname !== "/create-space" && <Footer />}
    </section>
  );
};

export default Layout;
