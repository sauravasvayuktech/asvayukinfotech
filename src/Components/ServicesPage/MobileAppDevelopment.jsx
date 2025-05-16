import './Service.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import BannerButton from '../BannerBtn/BannerButton'
import mobileBanner from '../../Images/mobileBanner.webp';
import ServicesCard from './ServicesCard';
import c11 from '../../Images/c11.webp';
import c12 from '../../Images/c12.webp';
import c13 from '../../Images/c13.webp';
import c14 from '../../Images/c14.webp';
import c15 from '../../Images/c15.webp';
import c16 from '../../Images/c16.webp';
import Group105518 from '../../Images/mad.webp'
import KeyPointSection from './KeyPointSection';
import Experience from '../HomePage/Experience';
import html from '../../Images/fltr.webp';
import react from '../../Images/react.webp';
import objective from '../../Images/android.webp';
import kotlin from '../../Images/java.webp';
import swift from '../../Images/swift.webp';
import container from '../../Images/container.webp';
import planning from '../../Images/planning.webp';
import pen from '../../Images/pen.webp';
import development from '../../Images/development.webp';
import test from '../../Images/test.webp';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6'
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

const faqData = [
    {
      question: "Why should I choose Asvayuk Technologies for Mobile App Development Chandigarh?",
      answer:
        "Asvayuk Technologies is a trusted name in the app development industry. We are known for our skilled team of developers, user-centered designs, and timely delivery of high-performance mobile apps. Our focus is on creating apps that align with your business goals and provide a seamless user experience.",
    },
    {
      question: "What types of mobile apps do you specialize in?",
      answer:
        "We specialize in Android app development, iOS app development, cross-platform solutions, and enterprise mobile app development. Whether you need a simple app or a complex solution, we’ve got you covered.",
    },
    {
      question: "How much time does it take to develop a mobile app?",
      answer:
        "The development timeline for a mobile app varies based on the app's complexity and the features it includes. We provide a detailed project plan and work closely with you to ensure timely delivery.",
    },
    {
      question: "Can you develop apps for both Android and iOS?",
      answer:
        "Yes, we specialize in creating both Android and iOS apps, and we also offer cross-platform development to maximize your reach.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes, we provide comprehensive post-launch support to ensure your app continues to perform optimally. We also offer maintenance services to keep your app up to date with the latest features and security updates.",
    },
  ];
  

function MobileAppDevelopment() {
    
    return (
        <>
         <Meta_Component
        title="Mobile App Development Chandigarh | Asvayuk Technologies"
        description="Mobile App Development Chandigarh by Asvayuk Technologies – delivering custom Android & iOS apps with expert solutions for businesses"
        canonical="https://asvayuktech.com/mobile-app-development-chandigarh"
       />
            <main>

                <section className="performance_card1 pb-5">
                    <div className="container">
                        <div className="col-12">
                            <div className="row ">
                                <div className="col-lg-6 col-md-6 col-12 pt-3">
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Technology</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Mobile App Development</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div className="peformance_section_top-heading mt-3">
                                        <h2>
                                            <Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Mobile App Development Chandigarh</Link> 
                                        </h2>
                                        <p>
                                        In the fast-evolving digital landscape, mobile applications have become essential tools for businesses to enhance customer engagement and improve operational efficiency.
                                        Whether you require a native Android or iOS app, having a reliable mobile app development company can make a world of difference. <b>Asvayuk Technologies Private Ltd.</b> ,
                                        a top <i><u><Link to="https://maps.app.goo.gl/9F1yq767vCJtZM2q7">mobile app development company in Chandigarh</Link></u></i>, offers comprehensive <b>app development services</b> that cater to the diverse needs of businesses.
                                        Our team of experienced developers specializes in creating custom mobile apps that align perfectly with your business goals and deliver outstanding performance.
                                        </p>
                                        <BannerButton btnTitle='Free Consultation' url='/contact-us' />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="peformance_card1_right-sec">
                                        <img src={mobileBanner} alt='Mobile app development chandigarh'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-section pt-2 pb-2">
                    <Container>
                        <div className="main-bg">
                        <div className="tool-heading pt-5 pb-2">
                            <h2 className="conclusion_title mb-2">
                            Best Mobile App Development Company in Chandigarh - Asvayuk Technologies
                            </h2>
                            <div>
                            <p className="text-white lh-md fs-6 pt-3 text-center pb-2">
                                At Asvayuk Technologies Private Ltd., we are dedicated to providing top-tier mobile app development Chandigarh services.
                                With a skilled team of developers, extensive industry knowledge, and a customer-first approach,
                                we are the<Link to="https://maps.app.goo.gl/9F1yq767vCJtZM2q7">Best Mobile App Development Company in Chandigarh</Link>.
                                Whether you need an Android, iOS, or cross-platform app, we ensure that your app stands out in today’s competitive market.
                            </p>
                            </div>
                        </div>
                        </div>
                    </Container>
                </section>

                <section className="performance_card2">
                    <div className="container">
                        <div className="col-12">
                            <div className="peformance_card2_heading text-center">
                                <h2>Our Mobile App Development Services in Chandigarh</h2>
                                <p className="mt-3">At Asvayuk Technologies, we provide end-to-end mobile app development services Chandigarh that cater to all types of businesses. Here’s a brief overview of our expertise:</p>
                            </div>
                            <div className="performance_card2_inner-sec mt-5">
                                <div className="row">
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c11} altText='Mobile app development service chandigarh' cardHeading='Android App Development' cardParaGraph={<>As a trusted <i>Android Application Developer in Chandigarh</i>,we deliver scalable, robust, and feature-rich apps using the latest technologies for high performance and a seamless user experience across devices.</>} />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c12} altText='Best Mobile App Development Company In Chandigarh' cardHeading='iOS App Development' cardParaGraph={<>Our <i>skilled iOS app developers in Chandigarh we </i>create customized, high-performance apps optimized for Apple devices, ensuring seamless functionality, speed, and exceptional design.</>}/>
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c13} altText='mobile App Developers in Chandigarh' cardHeading='Cross-Platform Mobile Apps' cardParaGraph={<>We specialize in developing cross-platform mobile applications for Android and iOS, ensuring a wider audience reach with seamless functionality, high performance, and consistent design.</>} />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c14} altText='mobile app development companies in Chandigarh' cardHeading='React Native App Development' cardParaGraph='Enhance app performance with consistent user experiences across platforms using React Native, supported by Asvayuk Technologies.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c15} altText="Chandigarh's Leading Mobile App Development Company" cardHeading='Flutter App Development' cardParaGraph='Leveraging Flutter, Google’s UI toolkit, Asvayuk Technologies creates visually stunning, natively compiled applications for mobile and web platforms.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c16} altText="Chandigarh's Most Trusted Mobile App Development Company" cardHeading='Hybrid App Development' cardParaGraph='Integrating web technologies efficiency with native app performance Asvayuk Technologies offers robust hybrid app development solutions.' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <KeyPointSection keyHeading={<>Why Asvayuk Technologies is the Best Choice for Mobile App Development Chandigarh</>}
                    keyPara={<>When it comes to mobile app development Chandigarh, Asvayuk Technologies is renowned for providing solutions that are innovative, reliable, and user-centric. We are proud to be recognized as Chandigarh’s Leading Mobile App Development Company, delivering high-quality mobile apps that enhance user engagement and drive business growth. Our approach revolves around understanding your unique business requirements, designing tailored solutions, and ensuring that your app provides an exceptional experience for users.</>}
                    hideKeyPoints={true}
                    url="/contact-us" btnTitle="Request Consultation"
                    Group105518={Group105518} 
                    altTags={{
                        Group105518: "Mobile app development chandigarh"
                    }}
                    />

                <Experience expTitle={<>Why Choose <span style={{color : '#249f81'}}>Asvayuk Technologies</span> for Mobile App Development?</>}
                    ExpPara={<>As Chandigarh's Most Trusted <b>Mobile App Development Company</b>, we stand out for our commitment to delivering apps that are not only innovative but also functional and cost-effective. Here's why you should choose Asvayuk Technologies :</>}
                    point1='Skilled Developers' pointPara1={<>Our team of experienced mobile app developers is proficient in the latest technologies and frameworks, ensuring apps meet global standards.</>}
                    point2='Great Solutions' pointPara2={<>We understand every business is unique, so we craft customized mobile app solutions tailored to your needs for tangible results.</>}
                    point3='On-Time Delivery' pointPara3={<>We respect your deadlines and ensure on-time delivery with high performance, seamless functionality, and uncompromised quality.</>}
                    point4='Competitive Pricing' pointPara4={<>Our services are priced competitively to ensure you get the best value for your investment in mobile app development.</>}
                    altTags={{
                        group1: "Software Development Company in Chandigarh",
                        group2: "reliable app development company in Chandigarh",
                        group3: "mobile app development companies in Chandigarh",
                        group4: "Chandigarh's Leading Mobile App Development Company",
                        mockups: "Chandigarh's Most Trusted Mobile App Development Company",
                        whiteLogo: "Mobile app development chandigarh"
                    }}
                />

                <section className="saas-technology">
                    <div className="container">
                        <div className="px-5 mx-5">
                            <div className="saas-technology-heading text-center">
                                <h2>Our Arsenal of Powerful Tech Stack To Fuel Your Mobile App</h2>
                            </div>
                            <div className="row pt-5 text-center">
                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={html} alt='Mobile app development service chandigarh'/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>Flutter</h5>
                                    </div>
                                </div>

                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={react} alt='Software Development Company in Chandigarh'/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>React Native</h5>
                                    </div>
                                </div>

                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={objective} alt="Chandigarh's Most Trusted Mobile App Development Company"/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>Android</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5 text-center justify-content-center">
                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={kotlin} alt="Chandigarh's Leading Mobile App Development Company"/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>Java</h5>
                                    </div>
                                </div>

                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={swift} alt='mobile app development companies in Chandigarh'/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>Swift</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-section">
                <Container className='process_container'>
                    <Row className="d-flex flex-column text-center">
                        <div className="main-bg w-100">
                            <div className="inside-main py-5">
                                <h1>Our Development Process</h1>
                                <div className="work-para mt-2">
                                    <p>
                                    At Asvayuk Technologies, we follow a structured and transparent development process to ensure the delivery of high-quality apps.
                                    </p>
                                </div>

                                <Row className="curly-img curley-img mt-5">
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={container} alt="reliable app development company in Chandigarh" />
                                            <h6 className="mt-4">Requirement Analysis</h6>
                                            <p className="text-light">We take time to understand<br/>your specific requirements, business objectives, and target audience. This helps us design the perfect app strategy.</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={planning} alt="mobile app development companies in Chandigarh" />
                                            <h6 className="mt-4">Design & Prototyping</h6>
                                            <p className="text-light">Our designers craft intuitive and engaging designs. We create wireframes and prototypes to give you an idea of how the final app will function.</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={pen} alt="Chandigarh's Leading Mobile App Development Company" />
                                            <h6 className="mt-4">Development</h6>
                                            <p className="text-light">Using cutting-edge technologies, our development team brings your app to life, ensuring it is optimized for speed, security, and scalability.</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={development} alt="Chandigarh's Most Trusted Mobile App Development Company" />
                                            <h6 className="mt-4">Quality Assurance & Testing</h6>
                                            <p className="text-light">Our rigorous testing procedures help ensure that your app is bug-free and functions as expected on all devices and platforms.</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={test} alt="app development industry in Chandigarh" />
                                            <h6 className="mt-4">Launch & Post-Launch Support</h6>
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
                                <Link to="/case-studies" className="">
                                    View All Case Studies <span className='chevronicon'><FaChevronRight /></span>
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
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={CoffeeLogo} alt="Chandigarh's Most Trusted Mobile App Development Company" className='slider_bg3_logo' />
                                            </div>
                                            <div className="fullCaseStudy_textContent py-3">
                                                <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                    FASHION BUSINESS.</h2>
                                                <div className="subfullCaseStudy d-flex gap-3 py-3">
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
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                        <div className="fullCaseStudy_img">
                                            <img src={caseStu4} alt="app development industry in Chandigarh" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='slider_bg1 slider_bg'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={moonLight} alt="Android Application Developer in Chandigarh" />
                                            </div>
                                            <div className="fullCaseStudy_textContent py-3">
                                                <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                    FASHION BUSINESS.</h2>
                                                <div className="subfullCaseStudy d-flex gap-3 py-3">
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
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                        <div className="fullCaseStudy_img">
                                            <img src={caseStu2} alt="Software Development Company in Chandigarh" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='slider_bg2 slider_bg'>
                                <div className="row">
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
                                            <div className="fullCaseStudy_textContent py-3">
                                                <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                    FASHION BUSINESS.</h2>
                                                <div className="subfullCaseStudy d-flex gap-3 py-3">
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
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                        <div className="fullCaseStudy_img">
                                            <img src={caseStu3} alt="skilled iOS app developers in Chandigarh" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='slider_bg4 slider_bg'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={kriLogo} alt="Mobile app development service chandigarh" className='slider_bg3_logo' />
                                            </div>
                                            <div className="fullCaseStudy_textContent py-3">
                                                <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                    FASHION BUSINESS.</h2>
                                                <div className="subfullCaseStudy d-flex gap-3 py-3">
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
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                        <div className="fullCaseStudy_img">
                                            <img src={caseStu5} alt="Best Mobile App Development Company In Chandigarh" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='slider_bg5 slider_bg'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={kreLogo} alt="Chandigarh's Most Trusted Mobile App Development Company" className='slider_bg3_logo' />
                                            </div>
                                            <div className="fullCaseStudy_textContent py-3">
                                                <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                    FASHION BUSINESS.</h2>
                                                <div className="subfullCaseStudy d-flex gap-3 py-3">
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
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                        <div className="fullCaseStudy_img">
                                            <img src={caseStu6} alt="Chandigarh's Leading Mobile App Development Company" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Container>
                </section>
            </section>

            <FAQAccordion title="FAQs on Mobile App Development" faqs={faqData} />
            </main>
        </>
    )
}

export default MobileAppDevelopment
