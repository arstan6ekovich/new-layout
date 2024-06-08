import { Outlet } from "react-router-dom";
import FooterAdmin from "./footer/Footer";
import HeaderAdmin from "./header/Header";
import scss from "./layoutAdmin.module.scss";

const LayoutAdmin = () => {
  return (
    <div className={scss.LayoutAdmin}>
      <HeaderAdmin />
      <main>
        <Outlet />
      </main>
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
