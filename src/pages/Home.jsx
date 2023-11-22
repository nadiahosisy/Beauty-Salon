import {
  Customers,
  FeaturesAndBenefits,
  InnerIcons,
  ServicesHomePage,
  Clients,
} from "../components";
import { Link } from "react-router-dom";

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
              {/* Use Link to navigate to the "Services" component */}
              <Link to="/Services" className="anchor-all-services">
                <span className="span-all-services">View All Services</span>
              </Link>
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
              <div className="flame-1"></div>
              <div className="flame-2"></div>
              <div className="flame-3"></div>
            </div>
          </div>
        </div>
      </div>
      <InnerIcons />
      <Customers />
      <ServicesHomePage />
      <FeaturesAndBenefits />
      <div className="home-clients-div">
        <Clients
          h2={"Client Testimonials"}
          p={"Hear What Our Clients Have to Say About Us"}
        />
      </div>
    </>
  );
};

export default Home;
