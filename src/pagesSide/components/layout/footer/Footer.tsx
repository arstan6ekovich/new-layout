import scss from "./Footer.module.scss";
import img from "../../../../assets/Social Icons.svg"

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav}>
            <p className={scss.py1}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <p className={scss.py2}>Made by Cruip. All right reserved</p>
          </div>
          <div className={scss.block}>
            <div className={scss.blocks}>
              <h2>Products</h2>
              <p>Web Studio</p>
              <p>DynamicBox Flex</p>
              <p>Programming Forms</p>
            </div>

            <div className={scss.blocks}>
              <h2>Resources</h2>
              <p>Nostrud exercitation</p>
              <p>Visual mockups</p>
              <p>Nostrud exercitation</p>
              <p>Visual mockups</p>
              <p>Nostrud exercitation</p>
            </div>

            <div className={scss.blocks}>
              <h2>Company</h2>
              <p>Consectetur adipiscing</p>
              <p>Labore et dolore</p>
              <p>Consectetur adipiscing</p>
              <p>Labore et dolore</p>
              <p>Consectetur adipiscing</p>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
