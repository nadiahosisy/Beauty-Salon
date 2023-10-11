import React from "react";

const Customers = () => {
  return (
    <div className="main-div-customers">
      <div className="left-main-div-ratings">
        <div className="left-ratings-div">
          <div className="heading-title-ratings-div">
            <h4 className="heading-title-left">4.8</h4>
          </div>
          <div>
            <h6 className="heading-stars-ratings-left">★★★★★</h6>
          </div>
          <div className="ratings-div">2,394 Ratings</div>
          <div className="ratings-div">Google Reviews</div>
        </div>
        <div>
          <div>
            <h4 className="heading-title-left">A+</h4>
          </div>
          <div>
            <h6 className="heading-stars-ratings-left">★★★★★</h6>
          </div>
          <div className="ratings-div">125 Reviews</div>
          <div className="ratings-div">BBB Rating</div>
        </div>
      </div>
      <div className="container-div-customers">
        <div className="text-customrs-div">Hear from Our Happy Customers</div>
        <div>John Simpson</div>
        <div>
          I love coming to Beauty-Salon-Nadia! The staff is so friendly and
          talented, and I always leave feeling refreshed and beautiful.
        </div>
      </div>
    </div>
  );
};

export default Customers;
