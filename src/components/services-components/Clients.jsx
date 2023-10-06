import React from "react";
import RaitingCard from "./RaitingCard";

const Clients = () => {
  return (
    <div className="client-div-container">
      <div className="clients-header">
        <h2 className="header-client-div">What our clients say?</h2>
        <p className="paragraph-client">
          Hear What Our Clients Have to Say About Us
        </p>
      </div>

      <div className="upper-div">
        <div>
          <RaitingCard
            stars={5}
            text={
              "I've had my nails done at Beauty-Salon-Nadia multiple times and every time I leave with gorgeous nails that last for weeks. Their nail artists are true professionals!"
            }
            imageSrc={"./images/test1.webp"}
            clientName={"EMILY HUNT"}
            position={"client-div-left"}
            rating={"5"}
          />
          <RaitingCard
            stars={4}
            text={
              "I had my makeup done for a special event and I was blown away by how amazing it looked. The makeup artist at Beauty-Salon-Nadia really knows their craft!"
            }
            imageSrc={"./images/test4.webp"}
            clientName={"JULIE ROBINSON"}
            position={"client-div-right"}
            rating={"4"}
          />
        </div>
        <div>
          <RaitingCard
            stars={5}
            text={
              "Beauty-Salon-Nadia is my go-to place for all my beauty needs. I love the relaxing atmosphere and the incredible services they offer."
            }
            imageSrc={"./images/test2.webp"}
            clientName={"MORGAN JONATHAN"}
            position={"client-div-right"}
            rating={"4"}
          />
          <RaitingCard
            stars={5}
            text={
              "I was looking for a new beauty salon and I'm so glad I found Beauty-Salon-Nadia. Their staff is exceptional and the services are top-notch!"
            }
            imageSrc={"./images/test3.webp"}
            clientName={"JAMES BROOK"}
            position={"client-div-right"}
            rating={"4"}
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
