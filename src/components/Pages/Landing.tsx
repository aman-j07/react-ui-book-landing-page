import "./Landing.css";
import Header from "../Header";
import victoria from "../../assets/logos/victor.png";
import instagram from "../../assets/logos/instagram.png";
import twitter from "../../assets/logos/twitter.png";
import linkedin from "../../assets/logos/linkedin.png";
import figma from "../../assets/logos/figma.png";
import webflow from "../../assets/logos/webflow.png";
import unsplash from "../../assets/logos/unsplash.png";
import pexels from "../../assets/logos/pexels.png";
import googleFonts from "../../assets/logos/google-fonts.png";
import { ArrowForward } from "@mui/icons-material";
import Footer from "../Footer";

const Landing = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="features">
        <div className="features__bg"></div>
          <div className="feature--profile">
              <div className="feature__card card">
                <img
                  className="card__logo"
                  src={victoria}
                  alt="victoria logo"
                />
                <div className="card__details">
                  <h4 className="card__head--bg">VictorFlow</h4>
                  <span className="card__content">
                    Webflow Design &<br /> Development Agency
                  </span>
                </div>
              </div>
              <div className="profile__body">
                <h2 className="profile__title">Follow Us</h2>
                <ul className="cardlist">
                  <li className="card">
                    <img
                      className="card__logo"
                      src={instagram}
                      alt="instagram logo"
                    />
                    <div className="card__details">
                      <h5 className="card__head">
                        <a className="txtlink" href='#Instagram'>Instagram <ArrowForward fontSize="small" /></a>
                      </h5>
                      <span className="card__content">
                        Join our Instagram page, We share UI/UX Design tips.
                      </span>
                    </div>
                  </li>
                  <li className="card">
                    <img
                      className="card__logo"
                      src={twitter}
                      alt="twitter logo"
                    />
                    <div className="card__details">
                      <h5 className="card__head">
                        <a className="txtlink" href='#Twitter'>Twitter <ArrowForward fontSize="small" /></a>
                      </h5>
                      <span className="card__content">
                        Join our Twitter page, We share UI/UX Design tips.
                      </span>
                    </div>
                  </li>
                  <li className="card">
                    <img
                      className="card__logo"
                      src={linkedin}
                      alt="linkedin logo"
                    />
                    <div className="card__details">
                      <h5 className="card__head">
                        <a className="txtlink" href='#LinkedIn'>LinkedIn <ArrowForward fontSize="small" /></a>
                      </h5>
                      <span className="card__content">
                        Join our LinkedIn page, We share UI/UX Design tips.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
          <div className="feature--info">
            <h2 className="feature__head">File Info</h2>
            <div className="feature__wrapper">
              <ul className="cardlist">
                <li className="card">
                  <img className="card__logo" src={figma} alt="figma logo" />
                  <div className="card__details">
                    <h5 className="card__head--bg">
                      Figma File for{" "}
                      <span className="card__highlight">FREE</span>
                    </h5>
                    <span className="card__content card__content--bg">
                      It is free to use for personal and commercial purposes.
                    </span>
                  </div>
                </li>
                <li className="card">
                  <img
                    className="card__logo"
                    src={webflow}
                    alt="webflow logo"
                  />
                  <div className="card__details">
                    <h5 className="card__head--bg">Webflow</h5>
                    <span className="card__content card__content--bg">
                      The complete design is available as a Webflow template.
                    </span>
                  </div>
                </li>
              </ul>
              <button className="btn btn--primary">Get Template $79 USD</button>
            </div>
          </div>
          <div className="feature--images">
            <h2 className="feature__head">Images</h2>
            <ul className="cardlist">
              <li className="card card card--horizontal">
                <div className="card__top">
                  <img className="card__logo" src={pexels} alt="pexels logo" />
                  <h5 className="card__head">
                    <a className="txtlink" href="#Pexels">Pexels <ArrowForward fontSize="small" /></a>
                  </h5>
                </div>
                <div className="card__details">
                  <span className="card__content card__content--sm">
                    You can check the licenses and download the images for free
                    on <a className="txtlink" href="#Pexels">Pexels</a>
                  </span>
                </div>
              </li>
              <li className="card card--horizontal">
                <div className="card__top">
                  <img
                    className="card__logo"
                    src={unsplash}
                    alt="unsplash logo"
                  />
                  <h5 className="card__head">
                    <a className="txtlink" href="#Unsplash">Unsplash <ArrowForward fontSize="small" /></a>
                  </h5>
                </div>
                <div className="card__details">
                  <span className="card__content card__content--sm">
                    You can check the licenses and download the images for free
                    on <a className="txtlink" href="#Unsplash">Unsplash</a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="feature--fonts">
            <h2 className="feature__head">Fonts</h2>
            <ul className="cardlist">
              <li className="card card--horizontal">
                <div className="card__top">
                  <img
                    className="card__logo"
                    src={googleFonts}
                    alt="google fonts logo"
                  />
                  <h5 className="card__head">
                    <a className="txtlink" href="#Cardo">Cardo <ArrowForward fontSize="small" /></a>
                  </h5>
                </div>
                <div className="card__details">
                  <span className="card__content card__content--sm">
                    Pages Book Website Template uses free licensed <a className="txtlink" href="#googlefonts">Google Fonts</a>.
                  </span>
                </div>
              </li>
              <li className="card card--horizontal">
                <div className="card__top">
                  <img
                    className="card__logo"
                    src={googleFonts}
                    alt="google fonts logo"
                  />
                  <h5 className="card__head">
                    <a className="txtlink" href="#Inter">Inter <ArrowForward fontSize="small" /></a>
                  </h5>
                </div>
                <div className="card__details">
                  <span className="card__content card__content--sm">
                    Pages Book Website Template uses free licensed <a className="txtlink" href="#googlefonts">Google Fonts</a>.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Landing;
