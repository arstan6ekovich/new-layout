import Welcome from "../../pages/homeSections/Welcome";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";

const LayoutSide = () => {
  
  return (
    <div className={scss.Layout}>
      <Header />
      <Welcome />
      < Footer/>
    </div>
  );
};

export default LayoutSide;
