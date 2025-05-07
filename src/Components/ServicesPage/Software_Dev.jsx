import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerButton from '../BannerBtn/BannerButton'
import banners_39 from '../../Images/banners-39.webp'
import KeyPointSection from './KeyPointSection'
import Group105518 from '../../Images/Group-105518.webp'
import c11 from '../../Images/c11.webp';
import c12 from '../../Images/c12.webp';
import c13 from '../../Images/c13.webp';
import c14 from '../../Images/c14.webp';
import c15 from '../../Images/c15.webp';
import c16 from '../../Images/c16.webp';
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
import ServicesCard from './ServicesCard'
import java1 from '../../Images/java1.webp'
import js from '../../Images/js.webp'
import c from '../../Images/c++.webp'
import python from '../../Images/python.webp'
import react1 from '../../Images/react1.webp'
import angular1 from '../../Images/angular1.webp'
import rails1 from '../../Images/rails1.webp'
import asp from '../../Images/asp.webp'
import work3 from "../../Images/exmp2.webp";
import work2 from "../../Images/larawk3.jpg";
import Meta_Component from '../Meta_Component/Meta_Component'
import FAQAccordion from "../../accordian/FAQAccordion"



const faqData = [
    {
      question: "Why choose Asvayuk Technologies as your Software Development Company in Chandigarh?",
      answer: "We have a proven track record of delivering high-quality software solutions with expert guidance from our Professional Software Consultants in Chandigarh."
    },
    {
      question: "What types of software development services do you offer?",
      answer: "We specialize in Custom Software Development in Chandigarh, Enterprise Software Solutions, Software Testing, and Software Outsourcing."
    },
    {
      question: "Do you provide offshore software development?",
      answer: "Yes, we are an experienced Offshore Software Development Company in Chandigarh, offering cost-effective solutions for global businesses."
    },
    {
      question: "How do you ensure software quality?",
      answer: "Our Software Testing Company in Chandigarh follows strict testing protocols, including automated and manual testing, to ensure high performance and security."
    },
    {
      question: "What industries do you serve?",
      answer: "We cater to industries such as healthcare, e-commerce, finance, education, and more with our advanced Software Development Services in Chandigarh."
    }
  ];
  

const Software_Dev = () => {
    return (
        <>
            <Meta_Component
                title="Software Development Company in Chandigarh"
                description="Asvayuk Technologies Private Ltd. is a top Software Development Company in Chandigarh, offering custom, enterprise, and offshore software solutions."
                canonical="https://asvayuktech.com/software-development-company-in-chandigarh"
            />

            <main>

                <section className="banner-en">
                    <Container>
                        <Row className="align-items-center">
                            <div className="col-lg-6">
                                <div className="banner_textInfo-en">
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Technology</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Software Development</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <h1><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Software Development Company in Chandigarh</Link></h1>
                                    <p className="py-3">Asvayuk Technologies Private Ltd. is a premier Software Development Company in Chandigarh, offering cutting-edge solutions for businesses of all sizes. With a team of highly skilled Software Developers in Chandigarh, we specialize in delivering custom software development in Chandigarh, enterprise-grade applications, and robust software testing services. Our goal is to help businesses streamline operations, improve efficiency, and drive digital transformation.</p>

                                    <BannerButton btnTitle='Free Consultation' url='/contact-us' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bannerImg">
                                    <img src={banners_39} alt="Software Development Company in Chandigarh" width="100%" height="100%" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="bg-section mt-5">
                            <Container>
                                <div className="main-bg p-3">
                                <div className="tool-heading py-5">
                                    <h2 className="conclusion_title mb-2">
                                      Partner with the Leading Software Development Company in Chandigarh
                                    </h2>
                                    <div>
                                    <p className="text-white lh-lg fs-6 pt-3">
                                        If you're looking for a trusted Software Development Company in Chandigarh, Asvayuk Technologies Private Ltd. is here to help. Contact us today to discuss your project requirements and take your business to the next level.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </Container>
                        </section>

                <section className="performance_card2">
                    <div className="container">
                        <div className="col-12">
                            <div className="text-center">
                                <h2 className='fs-1 fw-semibold'>Our Software Development Services in Chandigarh</h2>
                                <p className="mt-3">Our expert team of software developers crafts tailored software solutions to meet your unique business needs. Our diverse range of software development services includes:</p>
                            </div>
                            <div className="performance_card2_inner-sec mt-5">
                                <div className="row">
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c11} cardHeading='Custom Software Development in Chandigarh' cardParaGraph='We create highly customized software solutions tailored to business needs. Whether you need CRM, ERP, or SaaS applications, our Software Developers in Chandigarh will deliver high-quality solutions that improve your business efficiency.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c12} cardHeading='Enterprise Software Solutions in Chandigarh' cardParaGraph='Our enterprise solutions are designed to handle large-scale operations. From automation to cloud-based applications, we ensure your business remains ahead in a competitive market.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c13} cardHeading=' Software Testing Company in Chandigarh' cardParaGraph='Excellence is the foundation of our development approach. Our dedicated software testing company in Chandigarh ensures that your applications are error-free, secure, and optimized for performance.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c14} cardHeading='Software Outsourcing Company Chandigarh' cardParaGraph='Looking for a reliable Software Outsourcing Company in Chandigarh? We provide offshore software development solutions that help businesses reduce costs while maintaining high quality.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c15} cardHeading='Affordable Software Development in Chandigarh' cardParaGraph='We offer cost-effective Software Development Services in Chandigarh without compromising on quality. Whether you are a startup or an enterprise, we have flexible pricing models to suit your budget.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c16} cardHeading='Web Application Development in Chandigarh' cardParaGraph='Our expert developers build scalable and secure web applications tailored to your business needs. From interactive dashboards to custom portals, we ensure seamless user experience and performance.' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                
                <section className="software-sec">
                    <Container>
                        <Row>
                            <div className="software-sec-heading text-center">
                                <h2>Our Tech Stack : The Engine Behind the Excellence</h2>
                                <p>
                                    Our software development arsenal comprises state-of-the-art tools and
                                    technologies meticulously chosen to craft high-performance,
                                    innovation-driven solutions for your business.
                                </p>
                            </div>
                            <div className="software-sec-card">
                                <Row className='gy-4'>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="software-sec-card1 rounded-4">
                                            <h3 className="text-center fw-bold">Programming Languages</h3>
                                            <div className="languages row pt-4">
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                                                    <img src={java1} alt='Top Software Development Companies in Chandigarh'/>
                                                    <h2 className="software-names pt-3">Java</h2>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                                                    <img src={js} alt='Software Developers in Chandigarh'/>
                                                    <h2 className="software-names pt-3">JavaScript</h2>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                                                    <img src={c} alt='ENTERPRISE SOFTWARE SOLUTIONS IN CHANDIGARH'/>
                                                    <h2 className="software-names pt-3">C++</h2>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                                                    <img src={python} alt='CUSTOM SOFTWARE DEVELOPMENT IN CHANDIGARH'/>
                                                    <h2 className="software-names pt-3">Python</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="software-sec-card2 rounded-4">
                                            <h3 className="text-center fw-bold">Frameworks </h3>
                                            <div className="languages row pt-4">
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                                                    <img src={react1} alt='SOFTWARE TESTING COMPANY IN CHANDIGARH'/>
                                                    <h2 className="software-names pt-3">React</h2>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                                                    <img src={angular1} alt='professional Software Consultants in Chandigarh'/>
                                                    <h2 className="software-names pt-3">Angular</h2>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                                                    <img src={rails1} alt='Top 10 Software Development Companies In Chandigarh'/>
                                                    <h2 className="software-names pt-3">
                                                        Ruby on
                                                        <br /> Rails
                                                    </h2>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                                                    <img src={asp} alt='Software Development Services Chandigarh'/>
                                                    <h2 className="software-names pt-3">ASP.NET</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="laravel-projects-section py-5">
                    <div className="container">
                    <div className="text-center Experienceg_title">
                        <h2>Leading Software Development Company in Chandigarh</h2>
                    </div>
        
                    <div className="row mt-5">
                        <div className="col-md-12">
                        <div className="project-card">
                            <div className="project-text">
                            <h3 className="project-title">
                            Custom Software for E-commerce
                            </h3>
                            <p className="project-description">
                            One of our clients, an e-commerce startup, approached us for a scalable solution to manage their growing customer base. Our Custom Software Development in Chandigarh team built an AI-powered recommendation engine that boosted sales by 35%.
                            </p>
                            </div>
                            <div className="project-image">
                            <img src={work2} alt="Offshore Software Development Chandigarh" />
                            </div>
                        </div>
                        </div>
        
                        <div className="col-md-12 mt-5">
                        <div className="project-card">
                            <div className="project-text">
                            <h3 className="project-title">
                            Enterprise Software for Healthcare
                            </h3>
                            <p className="project-description">
                            A leading hospital required an advanced patient management system. Our Enterprise Software Solutions in Chandigarh team developed a secure, cloud-based platform that streamlined operations and improved patient care.
                            </p>
                            </div>
                            <div className="project-image">
                            <img src={work3} alt="Software Outsourcing Company Chandigarh" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>


                <Experience 
                expTitle='Why Choose Asvayuk Technologies for Software Development Services in Chandigarh?' 
                ExpPara='When selecting a Software Development Company in Chandigarh, expertise, innovation, and reliability are key factors. At Asvayuk Technologies Private Ltd., we offer :' 
                point1='Custom Software Solutions' 
                pointPara1='We design tailored applications that align with your business objectives.' 
                point2='Enterprise Software Solutions in Chandigarh' 
                pointPara2='Scalable, secure, and high-performance enterprise applications.' 
                point3='Software Testing and Quality Assurance' 
                pointPara3='Ensuring bug-free and optimized software solutions.' 
                point4='Software Outsourcing & Offshore Development' 
                pointPara4='Cost-effective development services without compromising quality.' 
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
                                                <img src={container} alt="Affordable Software Development in Chandigarh" />
                                                <h6 className="mt-3">Product Design</h6>
                                                <p className="text-light ">Crafting innovative and user-centric design strategies for a captivating app experience</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={planning} alt="Top Software Development Companies in Chandigarh" />
                                                <h6 className="mt-3">Mobile App Consulting</h6>
                                                <p className="text-light">Tailored guidance and strategies to shape your app concept into a successful product.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={pen} alt="Software Developers in Chandigarh" />
                                                <h6 className="mt-3">UI/UX Compatibility</h6>
                                                <p className="text-light">Seamless integration of compelling design and intuitive user experiences for enhanced engagement.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={development} alt="ENTERPRISE SOFTWARE SOLUTIONS IN CHANDIGARH" />
                                                <h6 className="mt-3">Development</h6>
                                                <p className="text-light">Utilizing cutting-edge technologies to build robust, scalable, and high-performance mobile applications.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={test} alt="CUSTOM SOFTWARE DEVELOPMENT IN CHANDIGARH" />
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
                                    <div className="d-flex justify-content-end">
                                        <div className="casestu_button position-relative mt-4 d-flex gap-5">
                                            <div className="swiper-button-prev mt-0" />
                                            <div className="swiper-button-next mt-0" />
                                        </div>
                                    </div>
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
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                            >
                                <SwiperSlide className='slider_bg3 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={CoffeeLogo} alt="SOFTWARE TESTING COMPANY IN CHANDIGARH" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
                                                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>UI/UX</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>E-commerce</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>Shopify</span>
                                                        </div>
                                                    </div>
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu4} alt="professional Software Consultants in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg1 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={moonLight} alt="Top 10 Software Development Companies In Chandigarh" />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
                                                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>UI/UX</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>E-commerce</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>Shopify</span>
                                                        </div>
                                                    </div>
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu2} alt="Software Development Services Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg2 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <svg aria-hidden="true" focusable="false" role="presentation" width="226" height="29" viewBox="0 0 226 29" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5789B5" d="M76.8698.307818h-6.3411L64.8341 17.4841 59.1394.307818h-6.3718V21.8551h4.4018V6.21793l5.4484 15.63717h4.4018l5.4791-15.72951V21.8551h4.3711V.307818ZM86.5006 22.1629c4.7404 0 7.8494-2.955 7.8494-8.0033 0-5.01739-3.109-8.00323-7.8494-8.00323s-7.8493 2.98584-7.8493 8.00323c0 5.0483 3.1089 8.0033 7.8493 8.0033Zm0-3.3244c-2.2778 0-3.4475-1.9085-3.4475-4.6789 0-2.7395 1.1697-4.61723 3.4475-4.61723 2.2471 0 3.4476 1.87773 3.4476 4.61723 0 2.7704-1.2005 4.6789-3.4476 4.6789ZM106.323 0v8.24953c-.708-1.23127-2.309-2.09316-4.31-2.09316-3.8165 0-6.8947 3.10897-6.8947 8.15723 0 4.6172 2.5857 7.8493 6.7107 7.8493 2.678 0 4.063-1.4159 4.494-2.1855v1.8777h4.309V0h-4.309Zm-3.386 18.9616c-2.155 0-3.3861-1.6314-3.3861-4.5557 0-2.9243 1.2001-4.77118 3.4171-4.77118 2.093 0 3.355 1.60068 3.355 4.58648 0 3.1398-1.416 4.7404-3.386 4.7404ZM123.119 16.6838c-.308 1.4159-1.324 2.2163-3.079 2.2163-2.031 0-3.447-1.1698-3.663-3.7246h10.836v-.6772c0-5.51-2.894-8.34193-7.542-8.34193-5.048 0-7.665 3.60147-7.665 7.97253 0 4.4018 2.586 8.034 7.942 8.034 4.617 0 6.834-2.401 7.357-5.4791h-4.186Zm-3.386-7.3569c1.723 0 2.831 1.0158 3.047 3.2321h-6.28c.401-2.2163 1.509-3.2321 3.233-3.2321ZM138.211 6.46419c-2.832 0-4.278 1.84691-4.956 3.69381V6.46419h-4.463V21.8551h4.463v-5.356c0-5.3561 2.371-6.3103 5.418-6.3103h1.601V6.46419h-2.063ZM150.961 6.15637c-3.54 0-4.956 2.64724-5.479 4.09403V6.46419h-4.371V21.8551h4.371v-4.5865c0-5.6946 1.754-7.51075 3.817-7.51075 1.785 0 2.401 1.16975 2.401 3.66305v8.4342h4.432v-9.4808c0-4.34024-1.97-6.21793-5.171-6.21793Z">
                                                        </path>
                                                        <path fill="#14134A" d="M18.2536.307818H0V4.34024h6.77201V21.8551h4.70959V4.34024h6.772V.307818ZM29.1682 6.15637c-3.5399 0-4.9559 2.64724-5.4792 4.09403V0h-4.371v21.8551h4.371v-4.5865c0-5.6946 1.7546-7.51075 3.817-7.51075 1.7853 0 2.401 1.16975 2.401 3.66305v8.4342h4.4326v-9.4808c0-4.34024-1.9701-6.21793-5.1714-6.21793ZM46.8192 16.6838c-.3078 1.4159-1.3236 2.2163-3.0782 2.2163-2.0316 0-3.4476-1.1698-3.663-3.7246h10.8352v-.6772c0-5.51-2.8935-8.34193-7.5416-8.34193-5.0482 0-7.6647 3.60147-7.6647 7.97253 0 4.4018 2.5857 8.034 7.9418 8.034 4.6172 0 6.8335-2.401 7.3568-5.4791h-4.1863Zm-3.386-7.3569c1.7238 0 2.8319 1.0158 3.0474 3.2321h-6.2795c.4002-2.2163 1.5083-3.2321 3.2321-3.2321ZM162.763 14.9908h-4.618c.277 4.2479 3.294 7.1721 8.373 7.1721 4.402 0 7.695-1.97 7.695-5.9717 0-3.94-2.924-5.356-7.572-6.34101-3.478-.76955-4.556-1.66222-4.556-3.26287 0-1.66222 1.847-2.5549 3.694-2.5549 3.048 0 4.648 1.3544 4.864 4.09399h4.586C174.829 2.06238 170.704 0 165.964 0c-4.094 0-8.557 2.06238-8.557 6.49497 0 4.12473 2.77 5.87933 7.449 6.83353 3.109.708 4.586 1.2005 4.586 2.8935 0 1.4468-1.108 2.0932-2.709 2.0932-2.277 0-3.786-1.1389-3.97-3.3244ZM185.939 6.15637c-3.54 0-4.956 2.64724-5.479 4.09403V0h-4.371v21.8551h4.371v-4.5865c0-5.6946 1.755-7.51075 3.817-7.51075 1.785 0 2.401 1.16975 2.401 3.66305v8.4342h4.433v-9.4808c0-4.34024-1.97-6.21793-5.172-6.21793ZM200.327 22.1629c4.741 0 7.85-2.955 7.85-8.0033 0-5.01739-3.109-8.00323-7.85-8.00323-4.74 0-7.849 2.98584-7.849 8.00323 0 5.0483 3.109 8.0033 7.849 8.0033Zm0-3.3244c-2.278 0-3.447-1.9085-3.447-4.6789 0-2.7395 1.169-4.61723 3.447-4.61723 2.247 0 3.448 1.87773 3.448 4.61723 0 2.7704-1.201 4.6789-3.448 4.6789ZM218.335 6.15637c-1.97 0-3.571.86189-4.31 2.09316V6.46419h-4.371V28.6271h4.371v-8.6497c.462.7696 1.847 2.1855 4.525 2.1855 4.094 0 6.711-3.2321 6.711-7.8493 0-5.04826-3.078-8.15723-6.926-8.15723Zm-.893 12.80523c-2.001 0-3.417-1.6006-3.417-4.7404 0-2.9858 1.293-4.58648 3.386-4.58648 2.217 0 3.417 1.84688 3.417 4.77118s-1.231 4.5557-3.386 4.5557Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
                                                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>UI/UX</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>E-commerce</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>Shopify</span>
                                                        </div>
                                                    </div>
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="#" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu3} alt="Offshore Software Development Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg4 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kriLogo} alt="Software Outsourcing Company Chandigarh" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
                                                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>UI/UX</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>E-commerce</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>Shopify</span>
                                                        </div>
                                                    </div>
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="#" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu5} alt="Affordable Software Development in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg5 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kreLogo} alt="Top Software Development Companies in Chandigarh" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
                                                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>UI/UX</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>E-commerce</span>
                                                        </div>
                                                        <div className="bg-dark text-white py-1 px-2 rounded-2">
                                                            <span>Shopify</span>
                                                        </div>
                                                    </div>
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="#" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu6} alt="CUSTOM SOFTWARE DEVELOPMENT IN CHANDIGARH" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Container>
                    </section>
                </section>

                <FAQAccordion title="FAQs on Software Development" faqs={faqData} />
            </main>
        </>
    )
}

export default Software_Dev