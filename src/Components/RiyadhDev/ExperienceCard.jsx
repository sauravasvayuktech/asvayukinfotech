import { Col } from "react-bootstrap";

const ExperienceCard = ({ image, title, description, features }) => {
  return (
    <>
      <Col lg={4}>
        <div className="experienceCard-wrapper" data-aos="zoom-in">
          <div className="experienceBanner-Area">
            <div className="experienceBanner-Area1">
              <div className="experienceBannerArea1-Content">
                <div className="smallExperienceImage">
                  <img src={image} alt={title} className="w-50" />
                </div>
                <h4>{title}</h4>
              </div>
            </div>
            <div className="experienceBanner-Area2 text-start">
              <p>{description}</p>
              <ul className="ps-4">
                {features.map((feature, index) => (
                  <li key={index} className="pb-2">
                    <p className="mb-0">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ExperienceCard;
