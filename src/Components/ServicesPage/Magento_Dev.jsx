import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerButton from '../BannerBtn/BannerButton'
import Group_900 from '../../Images/Group-900.webp'
import KeyPointSection from './KeyPointSection'
import Group105518 from '../../Images/Group-105518.webp'
import Magento_service_card from './Magento_service_card'
import service1 from '../../Images/services1.webp'
import service2 from '../../Images/services2.webp'
import service3 from '../../Images/services3.webp'
import service4 from '../../Images/services4.webp'
import service5 from '../../Images/services5.webp'
import service6 from '../../Images/services6.webp'
import Experience from '../HomePage/Experience'
import container from '../../Images/container.webp'
import planning from '../../Images/planning.webp'
import pen from '../../Images/pen.webp'
import development from '../../Images/development.webp'
import test from '../../Images/test.webp'
import launch from '../../Images/launch.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { FaArrowRightLong } from 'react-icons/fa6'
import CoffeeLogo from '../../Images/49thcoffee_logo.webp'
import caseStu4 from '../../Images/caseStu4.webp'
import moonLight from '../../Images/moonlight_logo.webp';
import caseStu2 from '../../Images/caseStu2.webp';
import caseStu3 from '../../Images/caseStu3.webp';
import kriLogo from '../../Images/kri_logo.webp';
import kreLogo from '../../Images/kre.webp';
import caseStu5 from '../../Images/caseStu5.webp';
import caseStu6 from '../../Images/caseStu6.webp';
import Meta_Component from '../Meta_Component/Meta_Component'
import FAQAccordion from "../../accordian/FAQAccordion.jsx";
import ServicesCard from "./ServicesCard";

const faqData = [
    {
      question: "Why choose Asvayuk Technologies for Magento development services?",
      answer: "Asvayuk Technologies is recognized as one of the top Magento development companies in Chandigarh and Mohali. Our team of expert developers delivers tailored solutions to meet the specific needs of your business, with a focus on scalability, security, and performance."
    },
    {
      question: "What is the cost of Magento development in Chandigarh?",
      answer: "The cost of Magento development depends on several factors, including the complexity of the project, customizations required, and the features you want to implement. At Asvayuk Technologies, we offer competitive pricing for website development services in Chandigarh while ensuring high-quality results."
    },
    {
      question: "How much time does it take to develop a Magento eCommerce website?",
      answer: "The time required for developing a Magento website varies depending on the scope and complexity of the project. On average, a basic Magento website can take around 4-6 weeks, while more complex projects may take longer. Our team works efficiently to deliver projects on time while maintaining high standards."
    },
    {
      question: "Can Asvayuk Technologies handle Magento migration?",
      answer: "Yes, we specialize in Magento migration services, ensuring that your data and functionality are transferred smoothly from other platforms to Magento. Our developers ensure that the migration process is seamless and does not affect your website’s performance or security."
    },
    {
      question: "What are the benefits of Magento for eCommerce businesses?",
      answer: "Magento offers numerous benefits for eCommerce businesses, including flexibility, scalability, SEO-friendliness, and a wide range of customization options. With Magento, businesses can build feature-rich and highly scalable online stores that can grow with their needs."
    }
  ];
  


const Magento_Dev = () => {      

    return (
        <>
            <Meta_Component
                title="Best Magento Developers in Chandigarh | Asvayuk Technologies"
                description="Looking for the best Magento developers in Chandigarh? Asvayuk Technologies offers expert Magento development to build scalable, secure eCommerce stores."
                canonical="https://asvayuktech.com/best-magento-developers-in-chandigarh"
            />
            <main>
                <section className="banner-en py-5">
                    <Container>
                        <Row className="align-items-center">
                            <div className="col-lg-6">
                                <div className="banner_textInfo-en">
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Technology</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Magento Development</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <h1><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Best Magento Developers in Chandigarh</Link></h1>
                                    <p className="py-3">
                                    When it comes to developing highly efficient and scalable eCommerce websites, Magento stands out as one of the most powerful platforms.
                                    For businesses in Chandigarh and Mohali seeking to build or improve their online stores, finding the <b>Best Magento Developers in Chandigarh</b> is crucial.
                                    <b> Asvayuk Technologies Private Ltd.</b> is your trusted partner for Magento development, offering expert solutions to help businesses establish a robust digital presence.
                                    Our team of skilled professionals is well-versed in Magento’s capabilities and ready to deliver high-quality, customized Magento websites that align with your business goals.
                                    </p>

                                    <BannerButton btnTitle='Free Consultation' url='/contact-us' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bannerImg">
                                    <img src={Group_900} alt="Best Magento Developers in Chandigarh" width="100%" height="100%" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className='magento_service_card'>
                    <Container>
                        <div className="card_heading text-center">
                            <h2>Comprehensive Magento Development Services</h2>
                            <p>At Asvayuk Technologies, we understand that every business has unique requirements.
                             That’s why we offer a range of website designing services that are fully customizable to meet your specific business needs. Our expertise extends across :</p>
                        </div>
                        <div className='magento_cards'>
                            <Row className='gy-4'>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service1} altText='Magento Website Development Chandigarh' cardHeading="Magento Custom Development" cardPara="We create custom Magento themes and extensions to enhance the functionality and design of your website, making it stand out in the crowded eCommerce space." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service2} altText='Magento Web Design Chandigarh' cardHeading="Magento Migration Services" cardPara="If you are looking to migrate your website from another platform to Magento, our experts make this seamless, ensuring data integrity and minimal downtime." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service3} altText='Custom Magento Development Chandigarh' cardHeading="Magento Integration" cardPara="We integrate third-party applications and services with your Magento store to enhance functionality and provide a smoother shopping experience for your customers." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service5} altText='Commerce website development Chandigarh' cardHeading="eCommerce Development" cardPara="We ensure a swift and secure migration to Magento with our expert migration services, transferring data, performance-driven design elements and functionality seamlessly."/>
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service4} altText='Magento Web development provider in chandigarh' cardHeading="Magento Maintenance and Support" cardPara="We offer ongoing support and maintenance services to keep your Magento store running smoothly, with regular updates, security patches, and performance enhancements." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service6} altText='Magento Website comapny in chandigarh' cardHeading="Headless Development" cardPara="Future-proof your eCommerce store with headless architecture, ensuring enhanced flexibility, faster performance, seamless integrations, and a scalable online shopping experience" />
                                </Col>
                            </Row>
                        </div>

                    </Container>
                </section>



                <KeyPointSection 
                
                    keyHeading="Transform your eCommerce experience with our innovative solutions." 
                    keyPara="Explore the synergy of cutting-edge Magento solutions. Enhance your online store's performance with our expertise. Connect with us for a transformative journey in eCommerce."
                    keyPoint1="Seamless Integration with Latest Technologies"
                    keyPoint2="Tailored Solutions for Your Unique Needs"
                    keyPoint3="Proven Track Record of Successful Implementations" 
                    keyPoint4="Dedicated Support and Maintenance Services"
                    url="/contact-us"
                    btnTitle="Request Consultation"
                    Group105518={Group105518} 

                    altTags={{
                        check1: "Magento Website Development Chandigarh",
                        check2: "Magento Development Services Chandigarh",
                        check3: "Affordable Magento Development Chandigarh",
                        check4: "Magento Store Development Chandigarh",
                        check5: "Commerce website development Chandigarh",
                        Group105518: "Best Magento Developers in Chandigarh"
                    }}

                />

                <Experience 
                    expTitle='Why Choose the Best Magento Developers in Chandigarh ?'
                    ExpPara='At Asvayuk Technologies, we specialize in Magento eCommerce development, delivering customized, high-performance, and scalable solutions for businesses.'
                    point1="Certified Magento Experts"
                    pointPara1="Our developers have extensive experience in building, customizing, and optimizing Magento-based online stores."
                    point2='SEO & Mobile-Optimized Store'
                    pointPara2='We create SEO-friendly and mobile-responsive Magento websites to boost traffic and sales.'
                    point3='Global Trust, Local Impact'
                    pointPara3='Combining local insights with global expertise, we ensure seamless technological excellence.' 
                    point4='24/7 Support & Maintenance'
                    pointPara4='Our dedicated support team ensures your store runs smoothly with regular updates and security patches.'

                    altTags={{
                        group1: "Magento Web development provider in chandigarh",
                        group2: "Magento Website comapny in chandigarh",
                        group3: "Magento Web development provider in chandigarh",
                        group4: "Custom Magento Development Chandigarh",
                        mockups: "Magento Website Development Chandigarh",
                        whiteLogo: "Best Magento Developers in Chandigarh"
                    }}
                />


                <section className="bg-section">
                    <Container className='process_container'>
                        <Row className="d-flex flex-column text-center">
                            <div className="main-bg w-100">
                                <div className="inside-main py-5">
                                    <h1>Our Process of Expertise</h1>
                                    <div className="work-para mt-2">
                                        <p>
                                            Our team of expert mobile app developers plan, design, develop, test, optimize, and launch mobile apps that redefine user experiences.
                                        </p>
                                    </div>

                                    <Row className="curly-img curley-img mt-2">
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={container} alt="Magento Store Development Chandigarh" />
                                                <h6 className="mt-3">Product Design</h6>
                                                <p className="text-light ">Crafting innovative and user-centric design strategies for a captivating app experience</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={planning} alt="Commerce website development Chandigarh" />
                                                <h6 className="mt-3">Mobile App Consulting</h6>
                                                <p className="text-light">Tailored guidance and strategies to shape your app concept into a successful product.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={pen} alt="Magento Web development provider in chandigarh" />
                                                <h6 className="mt-3">UI/UX Compatibility</h6>
                                                <p className="text-light">Seamless integration of compelling design and intuitive user experiences for enhanced engagement.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={development} alt="Magento Website comapny in chandigarh" />
                                                <h6 className="mt-3">Development</h6>
                                                <p className="text-light">Utilizing cutting-edge technologies to build robust, scalable, and high-performance mobile applications.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={test} alt="Magento Website maker in mohali and chandigarh" />
                                                <h6 className="mt-3">QA & Testing</h6>
                                                <p className="text-light">Our team of mobile testing experts performs testing and debugging to ensure a reliable and optimal functioning app.</p>
                                            </div>
                                        </Col>

                                    </Row>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="caseStuides ">
                    <Container>
                        <div className="caseStuides_content pb-4">
                            <Row className='align-items-start'>
                                <Col lg={8}>
                                    <h1 className="fw-semibold">Our Case Studies</h1>
                                </Col>
                                <Col lg={4} className="text-end">
                                    <Link to="#" className="">
                                        View All Case Studies →
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <section className="fullCaseStudy">
                        <Container>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                className='studies-swiperBtn'
                            >
                                <SwiperSlide>
                                    <div className="swiper_card_1">
                                        <Row>
                                            <Col lg={6}>
                                                <div className="swiper_left_sec p-5">
                                                    <div className="swiper_left_sec_logo">
                                                        <img src={moonLight} alt='Magento Development Services Chandigarh'/>
                                                    </div>
                                                    <div className="swiper_left_sec_heading">
                                                        <p className='fw-semibold pt-4'>Revolutionizing Beauty: Cozmada's Journey to Digital Transformation</p>
                                                        <div className="swiper_left_sec_buttons d-flex gap-3 py-4">
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>UI/UX</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                        </div>

                                                        <p className="pb-4">Founded in 2020, Cozmada emerges as a
                                                            dynamic platform
                                                            aspiring to become a leading solution provider in the
                                                            realm of hair and
                                                            skincare.
                                                        </p><Link to="" className="fullCaseStudy_url">Read Full Case Study <FaArrowRightLong /></Link>
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col lg={6}>
                                                <div className="swiper_right_sec_1 d-flex justify-content-end align-items-end h-100 pe-4 ps-4">
                                                    <img src={caseStu2} alt="Magento Development Services Chandigarh" className="img-fluid" />
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>


                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper_card_2">
                                        <Row>
                                            <Col lg={6}>
                                                <div className="swiper_left_sec p-5">
                                                    <div className="swiper_left_sec_logo_49">
                                                        <img src={CoffeeLogo} alt='Affordable Magento Development Chandigarh'/>
                                                    </div>
                                                    <div className="swiper_left_sec_heading">
                                                        <p className='fw-semibold pt-4'>Revolutionizing Beauty: Cozmada's Journey to Digital Transformation</p>
                                                        <div className="swiper_left_sec_buttons d-flex gap-3 py-4">
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>UI/UX</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                        </div>

                                                        <p className="pb-4">Founded in 2020, Cozmada emerges as a
                                                            dynamic platform
                                                            aspiring to become a leading solution provider in the
                                                            realm of hair and
                                                            skincare.
                                                        </p><Link to="" className="fullCaseStudy_url">Read Full Case Study <FaArrowRightLong /></Link>
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col lg={6}>
                                                <div className="swiper_right_sec_2 d-flex justify-content-end align-items-end h-100 pe-4 ps-4">
                                                    <img src={caseStu4} alt="Magento Website Development Chandigarh" className="img-fluid" />
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>


                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper_card_3">
                                        <Row>
                                            <Col lg={6}>
                                                <div className="swiper_left_sec p-5">
                                                    <div className="swiper_left_sec_logo">
                                                        <svg aria-hidden="true" focusable="false" role="presentation" width="226" height="29" viewBox="0 0 226 29" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#5789B5" d="M76.8698.307818h-6.3411L64.8341 17.4841 59.1394.307818h-6.3718V21.8551h4.4018V6.21793l5.4484 15.63717h4.4018l5.4791-15.72951V21.8551h4.3711V.307818ZM86.5006 22.1629c4.7404 0 7.8494-2.955 7.8494-8.0033 0-5.01739-3.109-8.00323-7.8494-8.00323s-7.8493 2.98584-7.8493 8.00323c0 5.0483 3.1089 8.0033 7.8493 8.0033Zm0-3.3244c-2.2778 0-3.4475-1.9085-3.4475-4.6789 0-2.7395 1.1697-4.61723 3.4475-4.61723 2.2471 0 3.4476 1.87773 3.4476 4.61723 0 2.7704-1.2005 4.6789-3.4476 4.6789ZM106.323 0v8.24953c-.708-1.23127-2.309-2.09316-4.31-2.09316-3.8165 0-6.8947 3.10897-6.8947 8.15723 0 4.6172 2.5857 7.8493 6.7107 7.8493 2.678 0 4.063-1.4159 4.494-2.1855v1.8777h4.309V0h-4.309Zm-3.386 18.9616c-2.155 0-3.3861-1.6314-3.3861-4.5557 0-2.9243 1.2001-4.77118 3.4171-4.77118 2.093 0 3.355 1.60068 3.355 4.58648 0 3.1398-1.416 4.7404-3.386 4.7404ZM123.119 16.6838c-.308 1.4159-1.324 2.2163-3.079 2.2163-2.031 0-3.447-1.1698-3.663-3.7246h10.836v-.6772c0-5.51-2.894-8.34193-7.542-8.34193-5.048 0-7.665 3.60147-7.665 7.97253 0 4.4018 2.586 8.034 7.942 8.034 4.617 0 6.834-2.401 7.357-5.4791h-4.186Zm-3.386-7.3569c1.723 0 2.831 1.0158 3.047 3.2321h-6.28c.401-2.2163 1.509-3.2321 3.233-3.2321ZM138.211 6.46419c-2.832 0-4.278 1.84691-4.956 3.69381V6.46419h-4.463V21.8551h4.463v-5.356c0-5.3561 2.371-6.3103 5.418-6.3103h1.601V6.46419h-2.063ZM150.961 6.15637c-3.54 0-4.956 2.64724-5.479 4.09403V6.46419h-4.371V21.8551h4.371v-4.5865c0-5.6946 1.754-7.51075 3.817-7.51075 1.785 0 2.401 1.16975 2.401 3.66305v8.4342h4.432v-9.4808c0-4.34024-1.97-6.21793-5.171-6.21793Z">
                                                            </path>
                                                            <path fill="#14134A" d="M18.2536.307818H0V4.34024h6.77201V21.8551h4.70959V4.34024h6.772V.307818ZM29.1682 6.15637c-3.5399 0-4.9559 2.64724-5.4792 4.09403V0h-4.371v21.8551h4.371v-4.5865c0-5.6946 1.7546-7.51075 3.817-7.51075 1.7853 0 2.401 1.16975 2.401 3.66305v8.4342h4.4326v-9.4808c0-4.34024-1.9701-6.21793-5.1714-6.21793ZM46.8192 16.6838c-.3078 1.4159-1.3236 2.2163-3.0782 2.2163-2.0316 0-3.4476-1.1698-3.663-3.7246h10.8352v-.6772c0-5.51-2.8935-8.34193-7.5416-8.34193-5.0482 0-7.6647 3.60147-7.6647 7.97253 0 4.4018 2.5857 8.034 7.9418 8.034 4.6172 0 6.8335-2.401 7.3568-5.4791h-4.1863Zm-3.386-7.3569c1.7238 0 2.8319 1.0158 3.0474 3.2321h-6.2795c.4002-2.2163 1.5083-3.2321 3.2321-3.2321ZM162.763 14.9908h-4.618c.277 4.2479 3.294 7.1721 8.373 7.1721 4.402 0 7.695-1.97 7.695-5.9717 0-3.94-2.924-5.356-7.572-6.34101-3.478-.76955-4.556-1.66222-4.556-3.26287 0-1.66222 1.847-2.5549 3.694-2.5549 3.048 0 4.648 1.3544 4.864 4.09399h4.586C174.829 2.06238 170.704 0 165.964 0c-4.094 0-8.557 2.06238-8.557 6.49497 0 4.12473 2.77 5.87933 7.449 6.83353 3.109.708 4.586 1.2005 4.586 2.8935 0 1.4468-1.108 2.0932-2.709 2.0932-2.277 0-3.786-1.1389-3.97-3.3244ZM185.939 6.15637c-3.54 0-4.956 2.64724-5.479 4.09403V0h-4.371v21.8551h4.371v-4.5865c0-5.6946 1.755-7.51075 3.817-7.51075 1.785 0 2.401 1.16975 2.401 3.66305v8.4342h4.433v-9.4808c0-4.34024-1.97-6.21793-5.172-6.21793ZM200.327 22.1629c4.741 0 7.85-2.955 7.85-8.0033 0-5.01739-3.109-8.00323-7.85-8.00323-4.74 0-7.849 2.98584-7.849 8.00323 0 5.0483 3.109 8.0033 7.849 8.0033Zm0-3.3244c-2.278 0-3.447-1.9085-3.447-4.6789 0-2.7395 1.169-4.61723 3.447-4.61723 2.247 0 3.448 1.87773 3.448 4.61723 0 2.7704-1.201 4.6789-3.448 4.6789ZM218.335 6.15637c-1.97 0-3.571.86189-4.31 2.09316V6.46419h-4.371V28.6271h4.371v-8.6497c.462.7696 1.847 2.1855 4.525 2.1855 4.094 0 6.711-3.2321 6.711-7.8493 0-5.04826-3.078-8.15723-6.926-8.15723Zm-.893 12.80523c-2.001 0-3.417-1.6006-3.417-4.7404 0-2.9858 1.293-4.58648 3.386-4.58648 2.217 0 3.417 1.84688 3.417 4.77118s-1.231 4.5557-3.386 4.5557Z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div className="swiper_left_sec_heading">
                                                        <p className='fw-semibold pt-4'>Revolutionizing Beauty: Cozmada's Journey to Digital Transformation</p>
                                                        <div className="swiper_left_sec_buttons d-flex gap-3 py-4">
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>UI/UX</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                        </div>

                                                        <p className="pb-4">Founded in 2020, Cozmada emerges as a
                                                            dynamic platform
                                                            aspiring to become a leading solution provider in the
                                                            realm of hair and
                                                            skincare.
                                                        </p><Link to="" className="fullCaseStudy_url">Read Full Case Study <FaArrowRightLong /></Link>
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col lg={6}>
                                                <div className="swiper_right_sec_3 d-flex justify-content-end align-items-end h-100 pe-4 ps-4">
                                                    <img src={caseStu3} alt="Magento Web Design Chandigarh" className="img-fluid" />
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>


                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper_card_4">
                                        <Row>
                                            <Col lg={6}>
                                                <div className="swiper_left_sec p-5 pt-4">
                                                    <div className="swiper_left_sec_logo_49">
                                                        <img src={kriLogo} alt='Custom Magento Development Chandigarh'/>
                                                    </div>
                                                    <div className="swiper_left_sec_heading">
                                                        <p className='fw-semibold pt-4'>Revolutionizing Beauty: Cozmada's Journey to Digital Transformation</p>
                                                        <div className="swiper_left_sec_buttons d-flex gap-3 py-4">
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>UI/UX</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                        </div>

                                                        <p className="pb-4">Founded in 2020, Cozmada emerges as a
                                                            dynamic platform
                                                            aspiring to become a leading solution provider in the
                                                            realm of hair and
                                                            skincare.
                                                        </p><Link to="" className="fullCaseStudy_url">Read Full Case Study <FaArrowRightLong /></Link>
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col lg={6}>
                                                <div className="swiper_right_sec_4 d-flex justify-content-end align-items-end h-100 pe-4 ps-4">
                                                    <img src={caseStu5} alt="Affordable Magento Development Chandigarh" className="img-fluid" />
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>


                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper_card_5">
                                        <Row>
                                            <Col lg={6}>
                                                <div className="swiper_left_sec p-5 pt-4">
                                                    <div className="swiper_left_sec_logo">
                                                        <img src={kreLogo} alt='Magento Store Development Chandigarh'/>
                                                    </div>
                                                    <div className="swiper_left_sec_heading">
                                                        <p className='fw-semibold pt-4'>Revolutionizing Beauty: Cozmada's Journey to Digital Transformation</p>
                                                        <div className="swiper_left_sec_buttons d-flex gap-3 py-4">
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>UI/UX</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                                <span>E-commerce</span>
                                                            </div>
                                                        </div>

                                                        <p className="pb-4">Founded in 2020, Cozmada emerges as a
                                                            dynamic platform
                                                            aspiring to become a leading solution provider in the
                                                            realm of hair and
                                                            skincare.
                                                        </p><Link to="" className="fullCaseStudy_url">Read Full Case Study <FaArrowRightLong /></Link>
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col lg={6}>
                                                <div className="swiper_right_sec_5 d-flex justify-content-end align-items-end h-100 pe-4 ps-4">
                                                    <img src={caseStu6} alt="Custom Magento Development Chandigarh" className="img-fluid" />
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>

                                </SwiperSlide>
                            </Swiper>
                        </Container>
                    </section>
                </section>


                <section className="Industries">
                    <div className="container">
                        <div>
                            <h1 className="fw-semibold">Industries We Serve</h1>
                            <p>Staying attuned to diverse industries, we serve a wide range of sectors, providing customized
                                solutions that set new benchmarks and drive innovation..</p>
                        </div>
                        <div className="row pt-3">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">eCommerce</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">Blockchain</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">Healthtech </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">AI Bots</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-0 pt-lg-3 pt-md-3">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">Traveltech</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">Realtech</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">tecFintechh</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">Edtech</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
        <section className="performance_card2 mt-4">
          <div className="container magentoCon">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2 className='pb-2 fw-bold'> Top Magento Developers in Chandigarh <br/> Build a Scalable & High-Performance eCommerce Store</h2>
               

              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-md-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={service1}
                      cardHeading="Expert Magento Developers in Chandigarh and Mohali"
                      cardParaGraph="Finding the right team of developers is key to the success of your eCommerce website. Asvayuk Technologies offers the best Magento development services in Chandigarh, with a team of certified developers who have years of experience working with Magento’s robust features. Our team stays up-to-date with the latest trends and updates in the Magento ecosystem, ensuring that your website is equipped with the best tools to succeed in the competitive online market. As the best web development agency in Chandigarh, we are committed to delivering results that matter. We focus on building Magento websites that are not only visually appealing but also optimized for performance, user experience, and conversion."
                    />
                  </div>
                  <div className="col-md-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={service2}
                      cardHeading="Affordable Magento Development Services in Chandigarh and Mohali"
                      cardParaGraph="Asvayuk Technologies is a leading website development provider in Chandigarh that offers affordable and efficient Magento development services. Whether you're a small business just starting out or a large enterprise looking to scale, we provide solutions that fit your budget and goals. Our developers ensure that your Magento website is built with quality at its core, using the latest technologies to drive growth and increase online sales. With our best Magento developers in Chandigarh, you don’t need to compromise on quality or affordability. We help you get the most out of your investment by building a highly functional Magento eCommerce store that brings value to your business"
                    />
                  </div>
                  <div className="col-md-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={service3}
                      cardHeading="Contact Us for Magento Development Services in Chandigarh and Mohali"
                      cardParaGraph={
                        <>
                        Choosing the Best Magento Developers in Chandigarh is essential for building a successful and scalable eCommerce platform. <u><b><Link to="https://maps.app.goo.gl/awfSZHaRY4Foc5Ck8">Asvayuk Technologies Private Ltd. </Link></b></u>offers expert Magento development services in Chandigarh and Mohali, helping businesses harness the power of Magento to create outstanding online stores. Our team of certified Magento developers provides customized solutions to meet your specific needs, ensuring that your eCommerce website performs at its best. Whether you need custom development, integration, migration, or ongoing maintenance, we have the expertise to deliver exceptional results.
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            <FAQAccordion title="FAQs on Magento Development" faqs={faqData} />
        </main>
     </>
    )
}

export default Magento_Dev