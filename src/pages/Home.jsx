import { InnerIcons } from "../components";

const Home = () => {
  return (
    <>
      <div className="home-page-jumba">
        <div className="home-page-inside-jumba">
          <div className="jumba-left">
            <div>
              <h1>Welcome to Beauty-Salon-Nadia!</h1>
            </div>
            <div className="jumba-left-p">
              We are a full-service beauty salon dedicated to making you look
              and feel your best. At Beauty-Salon-Nadia, our experienced
              stylists and aestheticians are passionate about helping you
              achieve your beauty goals.
            </div>
            <div className="btn-all-services-div">
              <a className="anchor-all-services">
                <span className="span-all-services">View All Services</span>
              </a>
            </div>
          </div>
          <div className="jumba-right">
            <div className="jumba-right-image-div">
              <img
                className="jumba-right-image"
                width={480}
                height={480}
                src="./public/images/main.webp"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <InnerIcons />
    </>
  );
};

export default Home;
