import scss from "./Welcome.module.scss";
import viteo from "../../../assets/Video.svg";

import icon from "../../../assets/Icon.svg";
import icon1 from "../../../assets/Icon (1).svg";
import icon2 from "../../../assets/Icon (2).svg";
import icon3 from "../../../assets/Icon (3).svg";
import icon4 from "../../../assets/Icon (4).svg";
import icon5 from "../../../assets/Icon (5).svg";
import image from "../../../assets/Illustration.svg";
import image1 from "../../../assets/Illustration (1).svg";
import image5 from "../../../assets/Illustration (3).svg";

import img1 from "../../../assets/Avatar.svg";
import img2 from "../../../assets/Avatar (1).svg";
import img3 from "../../../assets/Avatar (2).svg";
import fil from "../../../assets/Fill 1.svg"
const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav}>
            <h1>Landing template for startups</h1>
            <p>
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
          </div>
          <div className={scss.buttons}>
            <button className={scss.btn1}>Start free trial</button>
            <button className={scss.btn2}>Learn more</button>
          </div>
          <div className={scss.bottom}>
            <img src={viteo} alt="" />
          </div>
        </div>
      </div>
      <section className={scss.section1}>
        <div className={scss.navbar}>
          <h1>The majority our customers do not understand their workflows.</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={scss.icons}>
          <div className={scss.block}>
            <img src={icon} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className={scss.block}>
            <img src={icon1} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className={scss.block}>
            <img src={icon2} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className={scss.block}>
            <img src={icon3} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className={scss.block}>
            <img src={icon4} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className={scss.block}>
            <img src={icon5} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section className={scss.section2}>
        <div className={scss.text}>
          <button>Reach goals that matter</button>
          <h1>One product, unlimited solutions</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>
        <div className={scss.welcome}>
          <h3>More speed. Less spend</h3>
          <h2>Keep projects on schedule</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h5>✅ Duis aute irure dolor in reprehenderit</h5>
          <h5>✅ Excepteur sint occaecat </h5>
          <h5>✅ Amet consectetur adipiscing elit</h5>
        </div>
        <img className={scss.image} src={image} alt="" />
        <img className={scss.image1} src={image1} alt="" />
        <div className={scss.welcome1}>
          <h3>More speed. Less spend</h3>
          <h2>Keep projects on schedule</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h5>✅ Duis aute irure dolor in reprehenderit</h5>
          <h5>✅ Excepteur sint occaecat </h5>
          <h5>✅ Amet consectetur adipiscing elit</h5>
        </div>

        <div className={scss.welcome2}>
          <h3>More speed. Less spend</h3>
          <h2>Keep projects on schedule</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h5>✅ Duis aute irure dolor in reprehenderit</h5>
          <h5>✅ Excepteur sint occaecat </h5>
          <h5>✅ Amet consectetur adipiscing elit</h5>
        </div>
        <img className={scss.image5} src={image5} alt="" />
      </section>
      <hr className={scss.hr} />

      <section className={scss.section3}>
        <div className="container">
          <div className={scss.navbars}>
            <h1>Don't take our word for it</h1>
            <p>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p>
          </div>
          <div className={scss.blocks}>
            <div className={scss.my}>
              <img src={img1} alt="" />
              <p>
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </p>
              <div className={scss.line}></div>
              <h3>Anastasia Dan / UX Board</h3>
            </div>
            <div className={scss.my}>
              <img src={img2} alt="" />
              <p>
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </p>
              <div className={scss.line}></div>
              <h3>Anastasia Dan / UX Board</h3>
            </div>
            <div className={scss.my}>
              <img src={img3} alt="" />
              <p>
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </p>
              <div className={scss.line}></div>
              <h3>Anastasia Dan / UX Board</h3>
            </div>
          </div>
          <div className={scss.poslide}>
            <div className={scss.lod}>
              <h1>Stay in the loop</h1>
              <p>Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className={scss.buttons1}>
              <input type="text" placeholder="Your best email…"/>
              <button>Subscribe</button>
            </div>
            <img className={scss.fill} src={fil} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Welcome;
