import scss from "./Header.module.scss";
import logo from "../../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import image from "../../../../assets/Shape.svg";

const Header = () => {
  const nav = useNavigate();
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={scss.buttons}>
            <button className={scss.btn1}>Sign in</button>
            <button onClick={() => nav("/sigin")} className={scss.btn2}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
