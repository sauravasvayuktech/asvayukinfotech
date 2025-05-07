import './Service.css'
import { useState } from 'react'
import { Breadcrumb, Container, Row ,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerButton from '../BannerBtn/BannerButton'
import EnterprisesBanner from '../../Images/EnterprisesBanner.webp'
import adobe from '../../Images/adobe.webp'
import liferay from '../../Images/liferay.webp'
import siteonly from '../../Images/siteonly.webp'
import B2b from '../../Images/B2b.webp'
import eCommerce from '../../Images/eCommerce.webp'
import CustomerPortals from '../../Images/Customer-portals.webp'
import Emp from '../../Images/Employee.webp'
import SupplierVendor from '../../Images/Supplier-Vendor.webp'
import IntranetPortals from '../../Images/Intranet-Portals.webp'
import Extranet from '../../Images/Extranet.webp'
import Banking from '../../Images/Banking.webp'
import { IoCheckmark } from 'react-icons/io5'
import container from '../../Images/container.webp';
import planning from '../../Images/planning.webp';
import pen from '../../Images/pen.webp';
import development from '../../Images/development.webp';
import test from '../../Images/test.webp';
import Meta_Component from '../Meta_Component/Meta_Component'
import Experience from '../HomePage/Experience';
import FAQAccordion from "../../accordian/FAQAccordion.jsx";
import Solutions5 from '../../Images/Solutions5.webp';
import Solutions6 from '../../Images/Solutions6.webp';

const faqData = [
    {
      question: "Why choose Asvayuk Technologies Private Ltd. for Web Portal Development in Chandigarh?",
      answer: "We have a proven track record of delivering high-quality portals with advanced features, SEO optimization, and secure infrastructure tailored to business needs. Our web portal development Chandigarh services ensure high-end functionality."
    },
    {
      question: "How much does it cost to develop a Web Portal?",
      answer: "The cost depends on the complexity, features, and design requirements of the portal. Contact us for a customized quote."
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes, we provide ongoing support and maintenance to ensure your portal remains secure and up to date."
    },
    {
      question: "Can you develop a classified website for my business?",
      answer: "Absolutely! We specialize in classified website development in Chandigarh and can build a robust platform for your needs."
    },
    {
      question: "How long does it take to develop a Web Portal?",
      answer: "The development timeline varies based on project complexity, but typically ranges from a few weeks to months."
    }
  ];

  

function EnterprisePortalDevelopment() {
    const [activeTab, setActiveTab] = useState('B2B');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <Meta_Component
                title="Web Portal Development Chandigarh | Asvayuk Technologies"
                description="Get expert web portal development Chandigarh services with Asvayuk Technologies. Custom, secure, and SEO-friendly portals for businesses. Contact us today!"
                canonical="https://asvayuktech.com/web-portal-development-chandigarh"
            />
            <main>

                <section className="banner-en">
                    <Container>
                        <Row className="align-items-center">
                            <div className="col-lg-6">
                                <div className="banner_textInfo-en pt-3">
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Technology</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Enterprise Portal Development</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <h1><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Web Portal Development Chandigarh</Link></h1>
                                    <p className="py-3">In today's digital era, having a robust and user-friendly web portal is essential for businesses looking to enhance their online presence.
                                     <b> Asvayuk Technologies Private Ltd</b>, a leading <b>web portal development company in Chandigarh</b>, specializes in creating dynamic and highly functional portals tailored to meet diverse business needs.
                                     Whether you need a classified website, an eCommerce platform, or a corporate portal, we provide customized solutions that drive engagement and success.</p>
                                <div className='pb-4'>
                                    <BannerButton btnTitle='Free Consultation' url='/contact-us' />
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bannerImg">
                                    <img src={EnterprisesBanner} alt="web portal development Chandigarh" width="100%" height="100%" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="below-banner">
                    <Container>
                        <Row>
                            <div className="col-lg-12">
                                <div className="digital-ex text-center">
                                    <div className="digi-head">
                                        <h2 className="fw-semibold">Open a Combined Digital Experience for Success in B2B and B2C</h2>
                                    </div>
                                    <p className="mt-4 text-center">In today's fast-paced business environment, fragmented information and isolated processes can impede productivity and customer satisfaction. An enterprise portal development in Chandigarh serves as a centralized web platform, providing unified access to crucial information, applications, and functionalities. At Asvayuk Technologies, we specialize in developing customized portals Development in Panchkula that seamlessly integrate with existing enterprise systems such as CRM, ERP, and HR, offering a cohesive user experience tailored to distinct roles and requirements. Essentially, our enterprise portals act as digital nerve centers, linking your digital ecosystem to enhance collaboration, accessibility, and business agility.
                                    </p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="cards-section">
                    <div className="customer-ex text-center pb-5">
                        <h2>Transforming Digital and Customer Experiences</h2>
                        <p className="pt-2">Our custom-built enterprise portals empower B2B and B2C businesses to:</p>
                    </div>
                    <Container>
                        <Row>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4 ">Enhanced Productivity</h5>
                                    <p>Simplify workflows, role-specific access to information, and automate tasks to empower employees to focus on high-impact activities.
                                        Improved Customer Experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Improved Customer Experience</h5>
                                    <p>Provide self-service portals for customers, enabling 24/7 access to account details, knowledge bases, and support resources.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Real-time Collaboration</h5>
                                    <p>Facilitate seamless communication and collaboration across departments and teams to enhance productivity and innovation.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Data-Driven Decision-Making</h5>
                                    <p>Integrate analytics dashboards and reporting tools to support informed decision-making and business strategy.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Increased Visibility and Control</h5>
                                    <p>Centralize oversight of business processes and user activities to ensure transparency and efficiency.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Personalized Dashboards</h5>
                                    <p>Tailor dashboards for B2B users to track order statuses, and for B2C customers to view personalized product recommendations and loyalty program updates.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Content Management</h5>
                                    <p>Deliver targeted content based on customer behavior and preferences, enhancing engagement and satisfaction through Enterprise Portal Development in Mohali
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Comprehensive Analytics Dashboard</h5>
                                    <p>Gain valuable insights into user behavior and content performance through robust analytics. Analyze customer journeys, identify areas for improvement, and optimize both B2B and B2C portal experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Security Features</h5>
                                    <p>Implement robust security measures to safeguard sensitive B2B and B2C customer data within your enterprise portal, ensuring trust and compliance.</p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="choice-section">
                    <Container>
                        <div className="choice text-center pb-5 px-5 text-center">
                            <h2>The Advantage of Option: Sitecore, Liferay, and AEM Solutions</h2>
                            <p className="pt-2">Asvayuk Technologies offers unparalleled expertise in developing enterprise portals on
                                three
                                of
                                the industry's most powerful platforms:</p>
                        </div>
                    </Container>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <img className="img-fluid pb-2" src={adobe} />
                                <p>Leverage AEM's robust content management capabilities and personalization features to deliver
                                    exceptional customer experience
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <img className="img-fluid pb-2" src={liferay} />
                                <p>Benefit from Liferay's open-source flexibility and scalability to build secure and scalable
                                    enterprise portals.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <img className="img-fluid pb-2" src={siteonly} />
                                <p className="mt-2">Utilize Sitecore's powerful experience management tools to create engaging and
                                    interactive user
                                    interfaces.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Experience expTitle={<>Why Choose Our Web Portal Development Services in Chandigarh?</>}
                    ExpPara={<>At <b>Asvayuk Technologies Private Ltd</b>, we take pride in delivering top-notch <b>website portal services</b> designed to offer seamless user experiences. Our team of expert web developers for website portal development in Chandigarh leverages the latest technologies to build responsive and scalable portals that align with your business goals</>}
                    point1='Custom Web Portal Development' pointPara1={<>Tailored solutions to meet your specific requirements.</>}
                    point2='User-Friendly Interface' pointPara2={<>Intuitive navigation for better engagement.</>}
                    point3='Secure & Scalable Architecture' pointPara3={<>High-end security measures for safe transactions.</>}
                    point4='SEO-Optimized Portals' pointPara4={<>Built to rank higher in search engines.</>} />

                            {/* <!-- Empowering  --> */}
                            <section className="Empowering_demo">
                                         <div className="container magentoCon">
                                             <div className="Empowering_demo_title text-center pb-2 pb-md-5">
                                                 <h1 className="fw-semibold pt-5">Expert Web Portal Development in Chandigarh <br/> for Scalable Business Solutions
                                                 </h1>
                                             </div>
                                             <div className="row">
                                                 <div className="col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0 justify-center">
                                                     <div className="bg_demo_empowering rounded-4 p-4">
                                                         <div className="row align-items-center">
                                                             <div className="col-8">
                                                                 <div className="Empowering_content text-white">
                                                                    <h5>Website Development in Panchkula and Mohali</h5>
                                                                     <p className="text-white py-1">Apart from Chandigarh, we extend our website development services in Panchkula and Mohali,
                                                                      ensuring businesses in the Tricity region have access to cutting-edge web solutions. Whether you need website development
                                                                      in Mohali or custom portal solutions in Panchkula, our team is ready to assist.
                                                                      Our web portal development Chandigarh services cater to businesses of all sizes.</p>
                                                                 </div>
                                                             </div>
                                                             <div className="col-4">
                                                                 <div className="solution_img">
                                                                     <img src={Solutions5} alt="WEB PORTAL DEVELOPMENT COMPANY IN CHANDIGARH" className="img-fluid" />
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                                 <div className="col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0 justify-center">
                                                     <div className="bg_demo_empowering rounded-4 p-4">
                                                         <div className="row align-items-center">
                                                             <div className="col-8">
                                                                 <div className="Empowering_content text-white">
                                                                     <Link to="/web-portal-development-chandigarh"><h5>Get the Best Web Portal Development Services Today!</h5></Link>
                                                                     <p className="text-white py-1">If you're looking for a web designing company in Chandigarh that excels in website development provider Chandigarh, look no further than 
                                                                        <b><i><u><Link to={"https://maps.app.goo.gl/cpxwrvwmx5cdUScg7"}></Link> Asvayuk Technologies Private Ltd</u></i></b> .
                                                                        We offer end-to-end web portal development services in Chandigarh, helping businesses thrive in the digital world. Contact us today to get started!</p>
                                                                 </div>
                                                             </div>
                                                             <div className="col-4">
                                                                 <div className="solution_img">
                                                                     <img src={Solutions6} alt="Web portal development services in chandigarh" className="img-fluid" />
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>


                <section className="tabs-section">
                    <div className="container">
                        <div className="row">
                            <div className="choice d-flex justify-content-center flex-column">
                                <h2 className="fw-semibold">Beyond the Basics: A Multifaceted Approach to<br />Web Portal
                                    Development</h2>
                                <p className="pt-2">We understand that every business has unique needs. Asvayuk Technologies offers a comprehensive approach to web portal development in Chandigarh, encompassing various portal types:
                                </p>
                            </div>
                            <div className="tabs">
                                <div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'B2B' ? 'active' : ''}`}
                                                id="home-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="B2B"
                                                aria-selected={activeTab === 'B2B'}
                                                onClick={() => handleTabClick('B2B')}
                                            >
                                                B2B Portal
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'ecomm' ? 'active' : ''}`}
                                                id="profile-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="ecomm"
                                                aria-selected={activeTab === 'ecomm'}
                                                onClick={() => handleTabClick('ecomm')}
                                            >
                                                E-commerce Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'custp' ? 'active' : ''}`}
                                                id="customer-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="custp"
                                                aria-selected={activeTab === 'custp'}
                                                onClick={() => handleTabClick('custp')}
                                            >
                                                Customer Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'employeee' ? 'active' : ''}`}
                                                id="employee-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="employeee"
                                                aria-selected={activeTab === 'employeee'}
                                                onClick={() => handleTabClick('employeee')}
                                            >
                                                Employee Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'suppli-ven' ? 'active' : ''}`}
                                                id="supplier-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="suppli-ven"
                                                aria-selected={activeTab === 'suppli-ven'}
                                                onClick={() => handleTabClick('suppli-ven')}
                                            >
                                                Supplier and Vendor Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'intranet' ? 'active' : ''}`}
                                                id="intranet-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="intranet"
                                                aria-selected={activeTab === 'intranet'}
                                                onClick={() => handleTabClick('intranet')}
                                            >
                                                Intranet Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'extranet' ? 'active' : ''}`}
                                                id="extranet-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="extranet"
                                                aria-selected={activeTab === 'extranet'}
                                                onClick={() => handleTabClick('extranet')}
                                            >
                                                Extranet and Partner Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'banking' ? 'active' : ''}`}
                                                id="banking-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="banking"
                                                aria-selected={activeTab === 'banking'}
                                                onClick={() => handleTabClick('banking')}
                                            >
                                                Banking and Insurance Portals
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={`tab-pane fade ${activeTab === 'B2B' ? 'show active' : ''}`} id="B2B" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>B2B portals</h1>
                                                    <p className="mt-4">Streamline communication and collaboration with partners,
                                                        vendors,<br /> and suppliers.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure document sharing and collaboration tools for
                                                                    proposals,<br />
                                                                    contracts, and project documents.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Real-time inventory visibility and order tracking for vendors
                                                                    and<br />
                                                                    suppliers.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Online forums and discussion boards for fostering
                                                                    communication<br />
                                                                    and knowledge sharing.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Collaborative project management tools for joint ventures and<br />
                                                                    projects.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Vendor onboarding and management functionalities.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={B2b} alt="website portal services" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'ecomm' ? 'show active' : ''}`} id="ecomm" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>E-commerce Portals</h1>
                                                    <p className="mt-4">Enhance your B2B or B2C online store with integrated
                                                        functionalities
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure and user-friendly online storefront with product catalogs
                                                                    and<br />search functionalities.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Personalized shopping experiences with customer account <br />
                                                                    management and order history.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Shopping cart functionality with secure payment gateways.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Order tracking and fulfillment management tools.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Real-time inventory management and stock updates.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Content management system for managing product descriptions, <br />
                                                                    marketing materials, and promotions.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={eCommerce} alt="Best web portal agency in chandigarh" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'custp' ? 'show active' : ''}`} id="custp" role="tabpanel" aria-labelledby="customer-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Customer Portals</h1>
                                                    <p className="mt-4">Empower customers with self-service options, account management,
                                                        <br /> and knowledge bases.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure self-service portal for tasks like account management,
                                                                    order
                                                                    <br /> tracking, and service requests.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Online knowledge base with FAQs, troubleshooting guides, and <br />
                                                                    product manuals.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Secure document download center for invoices, receipts, and other
                                                                    <br /> account-related documents.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Live chat or ticketing system for customer support inquiries.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Personalized dashboards displaying relevant account information
                                                                    <br />
                                                                    and order history.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={CustomerPortals} alt="Web developers for website portal development in chandigarh" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'employeee' ? 'show active' : ''}`} id="employeee" role="tabpanel" aria-labelledby="employee-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Employee Portals</h1>
                                                    <p className="mt-4">Centralize HR resources, company announcements, and internal
                                                        <br />
                                                        communication tools.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure access to company policies, employee handbooks, and <br />
                                                                    benefits information.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Internal directory for employee contact information.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Company news and announcements feed.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Internal communication tools like forums, message boards, and
                                                                    <br />
                                                                    polls.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Self-service HR functionalities like timesheet management, leave
                                                                    <br />
                                                                    requests, and payroll information access.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Training and development resources with document libraries and
                                                                    <br />
                                                                    online courses.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={Emp} alt="web designing company in chandigarh" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'suppli-ven' ? 'show active' : ''}`} id="suppli-ven" role="tabpanel" aria-labelledby="supplier-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Supplier and Vendor <br /> Portals</h1>
                                                    <p className="mt-4">Streamline procurement processes and improve vendor
                                                        collaboration.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure portal for submitting bids and proposals electronically.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Online portal for receiving purchase orders and managing
                                                                    invoices.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Real-time order tracking and status updates.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Collaboration tools for communication and exchange of documents
                                                                    <br />
                                                                    related to purchase orders.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Performance feedback and evaluation mechanisms for vendors.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={SupplierVendor} alt="website development provider chandigarh" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'intranet' ? 'show active' : ''}`} id="intranet" role="tabpanel" aria-labelledby="intranet-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Intranet Portals</h1>
                                                    <p className="mt-4">Facilitate internal communication, knowledge sharing, and
                                                        document
                                                        <br /> management.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure platform for company-wide announcements and news <br />
                                                                    updates.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Internal discussion boards and forums for employee engagement
                                                                    <br />
                                                                    and knowledge sharing.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Document management system for centralized storage, access, and
                                                                    <br />
                                                                    version control of company documents.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Internal social networking features for fostering employee <br />
                                                                    collaboration and building connections.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Company calendar and event management tools.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={IntranetPortals} alt="Classified Website Development in Chandigarh" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'extranet' ? 'show active' : ''}`} id="extranet" role="tabpanel" aria-labelledby="extranet-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Extranet and Partner <br /> Portals</h1>
                                                    <p className="mt-4">Securely collaborate with external partners and manage joint
                                                        projects.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure access for authorized external partners to collaborate
                                                                    <br /> on
                                                                    projects.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Secure document sharing and co-editing functionalities.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Project management tools for tracking progress, deadlines, and
                                                                    <br />
                                                                    tasks.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Communication tools like instant messaging and online meetings
                                                                    for
                                                                    <br /> real-time collaboration.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Joint reporting and analytics dashboards for shared project <br />
                                                                    insights.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={Extranet} alt="Responsive web development chandigarh" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'banking' ? 'show active' : ''}`} id="banking" role="tabpanel" aria-labelledby="banking-tab">
                                            <div className="b2b-main d-flex mt-5">
                                                <div className="b2b-left">
                                                    <h1>Banking and Insurance Portals</h1>
                                                    <p className="mt-4">Provide secure access to customer accounts, financial
                                                        information,
                                                        and <br /> self-service options.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure login for online banking or insurance policy management.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Account dashboards displaying account balances, transaction <br />
                                                                    history, and policy details.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Bill payment and fund transfer functionalities.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Secure online forms for submitting claims, requesting policy
                                                                    changes,
                                                                    <br /> or contacting customer support.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Personalized financial management tools and budgeting resources.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={Banking} alt="website development in panchkula and mohali" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
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
                                <h1>Our Web Portal Development Process</h1>
                                <div className="work-para mt-2">
                                    <p>
                                    At Asvayuk Technologies, we follow a structured and transparent development process to ensure the delivery of high-quality apps.
                                    </p>
                                </div>

                                <Row className="curly-img curley-img mt-5">
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={container} alt="website developement in mohali" />
                                            <h6 className="mt-4">Requirement Analysis</h6>
                                            <p className="text-light">We take time to understand<br/>your specific requirements, business objectives, and target audience. This helps us design the perfect app strategy.</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={planning} alt="WEB PORTAL DEVELOPMENT COMPANY IN CHANDIGARH<" />
                                            <h6 className="mt-4">Design & Development</h6>
                                            <p className="text-light">Our designers craft intuitive and engaging designs. We create wireframes and prototypes to give you an idea of how the final app will function.</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={pen} alt="Web portal development services in chandigarh" />
                                            <h6 className="mt-4">Testing & Deployment</h6>
                                            <p className="text-light">Using cutting-edge technologies, our development team brings your app to life, ensuring it is optimized for speed, security, and scalability.</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={development} alt="Web developers for website portal development in chandigarh" />
                                            <h6 className="mt-4">Quality Assurance & Testing</h6>
                                            <p className="text-light">Our rigorous testing procedures help ensure that your app is bug-free and functions as expected on all devices and platforms.</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} lg={2}>
                                        <div className="work-images">
                                            <img src={test} alt="Responsive web development chandigarh" />
                                            <h6 className="mt-4">Maintenance & Support</h6>
                                            <p className="text-light">Our team of mobile testing experts performs testing and debugging to ensure a reliable and optimal functioning app.</p>
                                        </div>
                                    </Col>
                                   
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            

                <section className="supercharge-section pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="choice pb-5">
                                <h2 className="fw-semibold w-100">Supercharge Your Business with Asvayuk Technologies's Web Portal Development</h2>
                                <p className="pt-2">In today's digital landscape, a robust enterprise portal isn't a luxury; it's a
                                    necessity. However, choosing the right development partner is crucial. Here's why Asvayuk Technologies stands out:</p>
                                <ul>
                                    <li><span className="fw-bold">Multi-Platform Expertise:</span> We offer development on leading
                                        platforms like
                                        Liferay and Sitecore to fit your specific needs.</li>
                                    <li><span className="fw-bold">Scalable Solutions:</span> Our portals are built to scale with
                                        your business and
                                        evolving
                                        requirements.</li>
                                    <li><span className="fw-bold">Security-Focused Development:</span> We prioritize the security
                                        and integrity of
                                        your
                                        sensitive
                                        data.</li>
                                    <li><span className="fw-bold">Data-Driven Approach:</span> We leverage data insights to optimize
                                        your portal's
                                        performance and
                                        user experience</li>
                                    <li><span className="fw-bold">Experienced Team:</span> Our team of skilled developers and
                                        strategists ensures a
                                        successful
                                        project execution.</li>
                                    <li><span className="fw-bold">UI/UX Design:</span> Our design team creates intuitive and
                                        user-friendly
                                        interfaces
                                        that ensure a
                                        seamless user experience for all stakeholders, maximizing portal adoption and
                                        engagement.
                                    </li>
                                    <li><span className="fw-bold">Post-Launch Support:</span> We are your trusted partner, providing
                                        ongoing support
                                        and
                                        maintenance
                                        to keep your portal running smoothly. We are ready to address any questions or future
                                        needs
                                        you have, ensuring your portal thrives and continues to deliver exceptional value.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <FAQAccordion title="FAQs on Web Portal Development" faqs={faqData} />
            </main>
        </>
    )
}

export default EnterprisePortalDevelopment
