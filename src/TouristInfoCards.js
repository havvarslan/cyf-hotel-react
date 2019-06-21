import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img
          src="https://www.frontline-collections.com/wp-content/uploads/2018/02/Glasgow-Debt-Collection.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://i2-prod.manchestereveningnews.co.uk/incoming/article6256561.ece/ALTERNATES/s810/MENAD12011201217561-1_6920363.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/visit/generic/objects/91169-640x360-101-image-640.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
