import React from "react";

const Clients = () => {
  return (
    <div className="client-div-container">
      <div>
        <h2 className="header-client-div">What our clients say?</h2>
        <p className="paragraph-client">
          Hear What Our Clients Have to Say About Us
        </p>
      </div>
      <div className="upper-div">
        <div className="star-raiting">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <div className="upper-div-text">
            I've had my nails done at Beauty-Salon-Nadia multiple times and
            every time I leave with gorgeous nails that last for weeks. Their
            nail artists are true professionals!
          </div>
          <div className="client-div-left">
            <img className="img-claient" src="./images/test1.webp"></img>
            <div className="name-client">EMILY HUNT</div>
          </div>
          //
        </div>
        <div className="upper-div">
          <div className="star-raiting">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <div className="upper-div-text">
              Beauty-Salon-Nadia is my go-to place for all my beauty needs. I
              love the relaxing atmosphere and the incredible services they
              offer.
            </div>
            <div className="client-div-right">
              <img className="img-claient" src="./images/test2.webp"></img>
              <div className="name-client">MORGAN JONATHAN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
