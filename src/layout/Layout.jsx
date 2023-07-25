import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center mt-10">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
