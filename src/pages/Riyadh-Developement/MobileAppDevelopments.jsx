import { Col, Container, Row } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbShoppingCartSearch } from "react-icons/tb";
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import c14 from "../../Images/c14.webp";
import c15 from "../../Images/c15.webp";
import c16 from "../../Images/c16.webp";
import Group_558 from "../../Images/Group-558.webp";
import Group_168 from "../../Images/Group-168.webp";

const MobileAppDevelopments = () => {
  return (
    <>
      <Meta_Component
        title="mobile-app-development-company-riyadh-saudi-arabia"
        description="Asvayuk Technologies, a top Website Development Company in Chandigarh & Mohali, offers custom web development, e-commerce solutions, & responsive designs."
        canonical="https://asvayuktech.com/website-development-company-in-chandigarh-and-mohali"
      />
      <main>
        {/* Banner Section */}
        <section className="riyadhBanner-wrapper">
          <Container>
            <div className="riyadhBannerContent-wrapper">
              <div className="riyadhBannerContent">
                <h1 className="fw-bold riyadhBannerContent-title" data-aos="zoom-in">
                  <span>Ecommerce</span> Development <br /> Company in Saudi
                  Arabia
                </h1>
                <p className="riyadhBannerContent-desc" data-aos="zoom-in">
                  Asvayuk is the best Ecommerce development company in Saudi
                  Arabia providing top-notch Android and iOS app development
                  services to accelerate your business success. Get in Touch!
                </p>
                <Link to="/contact-us" className="riyadhBtn" data-aos="zoom-in">
                  <div className="riyadhBtn-icons">
                    <FaArrowRight />
                  </div>
                  <div className="riyadhBtn-title">Get In Touch</div>
                </Link>
              </div>
              <Row className="riyadhRowMini-wrapper">
                <Col lg={4}>
                  <div
                    className="riyadhMiniTitle-wrapper"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <div className="titleMini-icon">
                      <TbShoppingCartSearch />
                    </div>
                    <div className="titleMini-text">
                      <small>
                        Advanced AI-Powered <br /> App Solutions
                      </small>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div
                    className="riyadhMiniTitle-wrapper afterBorder"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <div className="titleMini-icon">
                      <TbShoppingCartSearch />
                    </div>
                    <div className="titleMini-text">
                      <small>
                        Agile Development for
                        <br /> Quick Launch
                      </small>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div
                    className="riyadhMiniTitle-wrapper"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <div className="titleMini-icon">
                      <TbShoppingCartSearch />
                    </div>
                    <div className="titleMini-text">
                      <small>
                        Top-Rated App
                        <br /> Developers Worldwide
                      </small>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        {/* Trusted Section */}
        <section className="trusted-wrapper">
          <Container>
            <div className="trustedContent-wrapper">
              <h2 className="mb-4" data-aos="zoom-in-up">
                Setting a New Standard in App
                <br /> Development – Trusted by the Elite <br />
                of Saudi Arabia!
              </h2>
              <Row className="trustedContent-Row">
                <Col lg={3}>
                  <div className="trustedDiv-wrapper" data-aos="zoom-in-down">
                    <div className="trustedDiv-first">
                      <span>11+</span>
                    </div>
                    <div className="trustedDiv-second">
                      <h5>Years of Experience</h5>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="trustedDiv-wrapper" data-aos="zoom-in-down">
                    <div className="trustedDiv-first">
                      <span>25+</span>
                    </div>
                    <div className="trustedDiv-second">
                      <h5>Countries Served</h5>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="trustedDiv-wrapper" data-aos="zoom-in-down">
                    <div className="trustedDiv-first">
                      <span>250+</span>
                    </div>
                    <div className="trustedDiv-second">
                      <h5>Tech Enthusiast</h5>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="trustedDiv-wrapper" data-aos="zoom-in-down">
                    <div className="trustedDiv-first">
                      <span>1000+</span>
                    </div>
                    <div className="trustedDiv-second">
                      <h5>Products Delivered</h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="performance_card">
          <div className="container">
            <div className="col-12">
              <div className="trustedContent-wrapper pb-2 text-center">
                <h2 className="fw-bold" data-aos="zoom-in-up">
                  Our Website Development Services in Chandigarh and Mohali
                </h2>
                <p className="mt-3" data-aos="zoom-in-up">
                  At <b>Asvayuk Technologies</b>, we offer a comprehensive range
                  of website development services in Chandigarh and
                  Mohali,ensuring customized solutions for diverse business
                  needs.
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4" data-aos="zoom-in">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Website development services in chandigarh"
                      cardHeading="Custom Website Development"
                      cardParaGraph="Our custom web development services are tailored to meet your specific business requirements. Whether you need a portfolio website, a corporate site, or a custom web app, we deliver top-quality solutions."
                    />
                  </div>
                  <div className="col-lg-4 pb-4" data-aos="zoom-in">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="website designers chandigarh, mohali"
                      cardHeading="E-Commerce Website Development"
                      cardParaGraph="Unlock the power of your online store! With our e-commerce solutions, enjoy secure payments, flawless functionality, and a seamless user experience that will elevate your sales and amplify your brand!"
                    />
                  </div>
                  <div className="col-lg-4 pb-4" data-aos="zoom-in">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="website development company mohali"
                      cardHeading="Responsive Web Design"
                      cardParaGraph="As a leading web development agency in Chandigarh, we create mobile-friendly, responsive websites with seamless UX/UI, boosting engagement and enhancing your online presence."
                    />
                  </div>
                  <div className="col-lg-4 pb-4" data-aos="zoom-in">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="web development agency chandigarh"
                      cardHeading="WordPress Development"
                      cardParaGraph="We specialize in WordPress website development, offering customized themes, plugins, and scalable solutions for businesses of all sizes."
                    />
                  </div>
                  <div className="col-lg-4 pb-4" data-aos="zoom-in">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="website development provider chandigarh"
                      cardHeading="Website Redesign & Maintenance"
                      cardParaGraph="Optimize your web presence for voice search to enhance discoverability and user-friendliness in voice interactions, improving accessibility and user experience."
                    />
                  </div>
                  <div className="col-lg-4 pb-4" data-aos="zoom-in">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="best web developers of chandigarh and mohali"
                      cardHeading="Blockchain Integration"
                      cardParaGraph="Unlock blockchain security & efficiency! Asvayuk Technologies offers tailored decentralized solutions—secure, scalable, and future-ready."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="woocomerce">
          <Container>
            <Row>
              <div className="woocomerce-heading position-relative">
                <h2 data-aos="zoom-in-up">
                  <span style={{ color: "#249f81" }}>
                    {" "}
                    Leading Website Development Services
                  </span>
                  <br />
                  in Chandigarh and Mohali
                </h2>
                <div className="woocomerce-imgs d-flex justify-content-center d-none d-md-block">
                  <img
                    src={Group_558}
                    className="position-absolute woocomerce-imgs-left"
                    alt="Website development services in chandigarh"
                    data-aos="zoom-in"
                  />
                  <img
                    src={Group_168}
                    className="position-absolute woocomerce-imgs-right"
                    alt="website designers chandigarh, mohali"
                    data-aos="zoom-in"
                  />
                </div>
              </div>
              <div className="woocomerce-buttons d-flex flex-column flex-md-row justify-content-center gap-3 text-center">
                <Link to="#" data-aos="fade-right">
                  <span>
                    Responsiveness <br />
                    Web Designs
                  </span>
                </Link>
                <Link to="#" data-aos="fade-left">
                  <span>
                    Mobile Friendly &amp;
                    <br />
                    Optimized
                  </span>
                </Link>
              </div>
            </Row>
          </Container>
        </section>

        {/* Experience Section */}
        <section className="experience-wrapper">
          <Container>
            <div className="trustedContent-wrapper pt-5">
              <h2 className="pb-3" data-aos="zoom-in-up">
                Experience Innovation with the Latest
                <br />
                Technologies Powering Your App Solutions
              </h2>
              <p className="fs-6" data-aos="zoom-in-up">
                You can hire a mobile app development company that uses the
                latest technologies <br />
                to help you embark on your app development journey.
              </p>
              <Row className="experienceWrapper-Row">
                <Col lg={4}>
                  <div className="experienceCard-wrapper" data-aos="zoom-in">
                    <div className="experienceBanner-Area">
                      <div className="experienceBanner-Area1">
                        <div className="experienceBannerArea1-Content">
                          <div className="smallExperienceImage">
                            <img
                              src="https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/07/08182801/saudi_solution1.png"
                              alt=""
                              className="w-50"
                            />
                          </div>
                          <h4>Artificial Intelligence</h4>
                        </div>
                      </div>
                      <div className="experienceBanner-Area2 text-start">
                        <p>
                          AI can make your app experience much better by
                          offering personalized content, smart predictions, and
                          automated features. With AI integration, our app
                          developer company ensures your app adapts to your
                          users' changing needs, making it more user-friendly
                          and efficient.
                        </p>
                        <ul className="ps-4">
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="experienceCard-wrapper" data-aos="zoom-in">
                    <div className="experienceBanner-Area">
                      <div className="experienceBanner-Area1">
                        <div className="experienceBannerArea1-Content">
                          <div className="smallExperienceImage">
                            <img
                              src="https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/07/08182801/saudi_solution1.png"
                              alt=""
                              className="w-50"
                            />
                          </div>
                          <h4>Artificial Intelligence</h4>
                        </div>
                      </div>
                      <div className="experienceBanner-Area2 text-start">
                        <p>
                          AI can make your app experience much better by
                          offering personalized content, smart predictions, and
                          automated features. With AI integration, our app
                          developer company ensures your app adapts to your
                          users' changing needs, making it more user-friendly
                          and efficient.
                        </p>
                        <ul className="ps-4">
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="experienceCard-wrapper" data-aos="zoom-in">
                    <div className="experienceBanner-Area">
                      <div className="experienceBanner-Area1">
                        <div className="experienceBannerArea1-Content">
                          <div className="smallExperienceImage">
                            <img
                              src="https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/07/08182801/saudi_solution1.png"
                              alt=""
                              className="w-50"
                            />
                          </div>
                          <h4>Artificial Intelligence</h4>
                        </div>
                      </div>
                      <div className="experienceBanner-Area2 text-start">
                        <p>
                          AI can make your app experience much better by
                          offering personalized content, smart predictions, and
                          automated features. With AI integration, our app
                          developer company ensures your app adapts to your
                          users' changing needs, making it more user-friendly
                          and efficient.
                        </p>
                        <ul className="ps-4">
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="experienceCard-wrapper" data-aos="zoom-in">
                    <div className="experienceBanner-Area">
                      <div className="experienceBanner-Area1">
                        <div className="experienceBannerArea1-Content">
                          <div className="smallExperienceImage">
                            <img
                              src="https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/07/08182801/saudi_solution1.png"
                              alt=""
                              className="w-50"
                            />
                          </div>
                          <h4>Artificial Intelligence</h4>
                        </div>
                      </div>
                      <div className="experienceBanner-Area2 text-start">
                        <p>
                          AI can make your app experience much better by
                          offering personalized content, smart predictions, and
                          automated features. With AI integration, our app
                          developer company ensures your app adapts to your
                          users' changing needs, making it more user-friendly
                          and efficient.
                        </p>
                        <ul className="ps-4">
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="experienceCard-wrapper" data-aos="zoom-in">
                    <div className="experienceBanner-Area">
                      <div className="experienceBanner-Area1">
                        <div className="experienceBannerArea1-Content">
                          <div className="smallExperienceImage">
                            <img
                              src="https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/07/08182801/saudi_solution1.png"
                              alt=""
                              className="w-50"
                            />
                          </div>
                          <h4>Artificial Intelligence</h4>
                        </div>
                      </div>
                      <div className="experienceBanner-Area2 text-start">
                        <p>
                          AI can make your app experience much better by
                          offering personalized content, smart predictions, and
                          automated features. With AI integration, our app
                          developer company ensures your app adapts to your
                          users' changing needs, making it more user-friendly
                          and efficient.
                        </p>
                        <ul className="ps-4">
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="experienceCard-wrapper" data-aos="zoom-in">
                    <div className="experienceBanner-Area">
                      <div className="experienceBanner-Area1">
                        <div className="experienceBannerArea1-Content">
                          <div className="smallExperienceImage">
                            <img
                              src="https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/07/08182801/saudi_solution1.png"
                              alt=""
                              className="w-50"
                            />
                          </div>
                          <h4>Artificial Intelligence</h4>
                        </div>
                      </div>
                      <div className="experienceBanner-Area2 text-start">
                        <p>
                          AI can make your app experience much better by
                          offering personalized content, smart predictions, and
                          automated features. With AI integration, our app
                          developer company ensures your app adapts to your
                          users' changing needs, making it more user-friendly
                          and efficient.
                        </p>
                        <ul className="ps-4">
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                          <li className="pb-2">
                            <p className="mb-0">Predictive Analytics</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Link to="/contact-us" className="riyadhBtn text-white" data-aos="zoom-in-up">
                <div className="riyadhBtn-icons">
                  <FaArrowRight />
                </div>
                <div className="riyadhBtn-title">Get In Touch</div>
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default MobileAppDevelopments;
