import './Footer.css'
import CHD from '../../Images/CHD.webp'
import Canada from '../../Images/canada_footer_img.webp'
import Mumbai from '../../Images/mumbai_footer_img.webp'
import Dubai from '../../Images/dubai_footer_img.webp'
import Logo from '../../Images/footer-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhoneAlt, FaPinterestP, FaSkype ,FaYoutube} from 'react-icons/fa'
import { IoCall, IoLocationSharp } from 'react-icons/io5'
import React, { useState } from 'react';
import { Modal, Row } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa6'
import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi'

function Footer() {
    const location = useLocation();
    const footerShow = ['/blog']

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [hovered, setHovered] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <main>

                {!footerShow.includes(location.pathname) && (
                    <section className="readTransform">
                        <div className="container">
                            <div className="row">
                                <div className="readTransform_content text-center">
                                    <h2 className="pb-4 mb-0 fw-semibold">
                                        Are you prepared to change the direction of your growth? Let's
                                        collaborate to invent! Get in touch with us to transform your technological journey.
                                    </h2>
                                    <button className="btnHome bg-white d-inline-block text-dark px-4 fs-5 rounded-1 fw-medium border-0 outline-0" onClick={handleShow}>
                                        <p className='pt-3 text-dark fw-semibold'>
                                            Let's Discuss
                                        </p>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <div className="">
                            <div className="form">
                                <Row>
                                    <div className="contact-info d-none d-lg-block col-lg-6 px-5">
                                        <h3 className="title">Let's get in touch</h3>
                                        <p className="text">
                                            Ready to grow? Reach out to Asvayuk Technologies for software and digital marketing!
                                        </p>
                                        <div className="info">
                                            <div className="information">
                                                <FaLocationDot />
                                                <p>SCO-44, Sector 5-MDC,Panchkula,Haryana</p>
                                            </div>
                                            <div className="information">
                                                <MdMail />
                                                <p>info@asvayuktech.com</p>
                                            </div>
                                            <div className="information">
                                                <FaPhone />
                                                <p>+91 90410 65990</p>
                                            </div>
                                        </div>
                                        <div className="social-media">
                                            <p>Connect with us :</p>
                                            <div className="social-icons">
                                                <a href=" https://www.facebook.com/asvayuktechnologies/">
                                                    <FaFacebookF />
                                                </a>
                                                <a href="https://x.com/asvayuktech">
                                                    <FaXTwitter />
                                                </a>
                                                <a href="https://www.instagram.com/asvayuktechnologies/">
                                                    <FaInstagram />
                                                </a>
                                                <a href="https://www.linkedin.com/company/asvayuk-technologies/">
                                                    <FaLinkedinIn />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='contact-form col-lg-6 '>
                                        <iframe id='iframeForm' width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" className=' rounded-3' style={{ background: 'transparent' }} allowfullscreen></iframe>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <section className="location">
                    <div className="container">
                        <div className="location_title text-center">
                            <h2 className="mb-0 fw-semibold">Our Locations</h2>
                        </div>
                        <div className="row pt-5 align-items-end px-2 px-lg-0 px-lg-0">

                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0 px-1">
                                <div className="location_info rounded">
                                    <div className="row align-items-end">
                                        <div className="col-lg-4">
                                            <div>
                                                <img src={CHD} alt="Our Address" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                            <Link to={"https://maps.app.goo.gl/4HYCGEiryydf54xdA"}>
                                                <div className="loaction_content">
                                                    <h5>CHANDIGARH</h5>
                                                    <p className="text-white mb-0">SCO-44, Sector 5
                                                        Mansa Devi Complex, Panchkula, Haryana
                                                    </p>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0 px-1">
                                <div className="location_info rounded">
                                    <div className="row align-items-end">
                                        <div className="col-lg-4">
                                            <div>
                                                <img src={Canada} alt="Our location 2" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                            <div className="loaction_content">
                                                <h5>CANADA</h5>
                                                <p className="text-white mb-0">417 Durham St E, Walkerton, ON N0G 2V0 <br />Canada</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0 px-1">
                                <div className="location_info rounded">
                                    <div className="row align-items-end">
                                        <div className="col-lg-4">
                                            <div>
                                                <img src={Mumbai} alt="Our location 3" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                            <div className="loaction_content">
                                                <h5>MUMBAI</h5>
                                                <p className="text-white mb-0">NBC Complex, Sector 11, CBD Belapur, Navi Mumbai
                                                    400614, Mumbai, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0 px-1">
                                <div className="location_info rounded">
                                    <div className="row align-items-end">
                                        <div className="col-lg-4">
                                            <div>
                                                <img src={Dubai} alt="Our location 4" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                            <div className="loaction_content">
                                                <h5>DUBAI</h5>
                                                <p className="text-white mb-0">Marasi drive, Business Bay. Dubai, United Arab
                                                    Emirates 514374.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled d-flex gap-3">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/case-studies">Case Studies</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-5">
                                <div>
                                    <ul
                                        className="list-unstyled d-flex gap-3 justify-content-start justify-content-lg-end justify-content-md-end">
                                        <li>
                                            <Link to="https://www.facebook.com/asvayuktechnologies/">
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.linkedin.com/company/asvayuk-technologies/">
                                                <FaLinkedin />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.instagram.com/asvayuktechnologies/">
                                                <FaInstagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://x.com/asvayuktech">
                                                <FaXTwitter />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.youtube.com/@AsvayukTechnologies">
                                               <FaYoutube/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://in.pinterest.com/asvayuktech/">
                                                <FaPinterestP />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer_wrapper">
                                    <div className="img_logo">
                                        <Link to="/">
                                            <img src={Logo} alt="footer_logo" className="img-fluid" />
                                        </Link>
                                    </div>
                                    <div className="footer_left_sec">
                                        <p className="mb-0 text-light">For cutting-edge technological solutions anywhere in the
                                            world, Asvayuk Technologies Private Limited is your go-to partner. With a powerful combination of
                                            cutting-edge infrastructure, advanced talents, and next-generation experience, we
                                            enable enterprises.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="footer_menuinfo">
                                    <div className="footer_menu_title pb-2 mt-3 mt-md-0">
                                        <h4 className="fw-semibold">Our Services</h4>
                                    </div>
                                    <div className="footer_menu">
                                        <ul className="list-unstyled d-flex flex-column gap-2">
                                            <li>
                                                <Link to="/best-ui-ux-designers-in-chandigarh">UI/UX Design</Link>
                                            </li>
                                            <li>
                                                <Link to="/website-development-company-in-chandigarh-and-mohali">Website Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/mobile-app-development-chandigarh">Mobile App Development</Link>
                                            </li>
                                            <li>
                                                <Link to='/ecommerce-website-designing-company-chandigarh'>eCommerce Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/best-seo-services-in-chandigarh">Search Engine Optimization</Link>
                                            </li>
                                            <li>
                                                <Link to="/web-portal-development-chandigarh">Enterpise Portal Development</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="footer_menuinfo">
                                    <div className="footer_menu_title pb-2 mt-3 mt-md-0">
                                        <h4 className="fw-semibold">Quick Links</h4>
                                    </div>
                                    <div className="footer_menu">
                                        <ul className="list-unstyled d-flex flex-column gap-2">
                                            <li>
                                                <Link to="/blog">Blog</Link>
                                            </li>
                                            <li>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact-us">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/case-studies">Case Studies</Link>
                                            </li>
                                            {/* <li>
                                                <Link to="#">Press Releases</Link>
                                            </li> */}
                                            <li>
                                                <Link to="/privacy-policy">Privacy & Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer_menuinfo">
                                    <div className="footer_menu_title pb-2">
                                        <h3 className="fw-semibold">Contact Us</h3>
                                    </div>
                                    <div className="footer_menu pe-5">
                                        <ul className="list-unstyled d-flex flex-column gap-2 contact_info">
                                            <li>
                                                <Link to={"https://maps.app.goo.gl/4HYCGEiryydf54xdA"} className="d-flex gap-3">
                                                    <IoLocationSharp className='fs-3 pt-1' />
                                                    <p className="text-white mb-0"><b>Our Address :</b><br/>SCO-44, Sector 5-MDC, Panchkula, Haryana</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <span to="#" className="d-flex gap-3 align-items-center">
                                                    <FaPhoneAlt />
                                                    <p className="text-white mb-0">
                                                        <Link to="tel:+91 90410 65990">+91 90410 65990</Link>

                                                    </p>
                                                </span>
                                            </li>
                                            <li>
                                                <Link to="mailto:info@asvayuktech.com" className="d-flex gap-3 align-items-center">
                                                    <FaEnvelope />
                                                    <p className="text-white mb-0"> info@asvayuktech.com </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="//www.dmca.com/Protection/Status.aspx?ID=06d48c27-faa9-4f11-b7e9-5e0e5ccc0c99" title="DMCA.com Protection Status" className="dmca-badge" target='_blank'>
                                                    <img src="https://images.dmca.com/Badges/dmca_protected_sml_120o.png?ID=06d48c27-faa9-4f11-b7e9-5e0e5ccc0c99" alt="DMCA.com Protection Status" className='last_img_footer' />
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <section className="footer_bottom bg-light text-center py-2">
                    <p className="mb-0 fw-medium">© Copyright 2024 - Asvayuk Technologies Private Limited.</p>
                </section>

                <section className='call-icons call2'>
                    <a href="tel:+91 90410 65990" aria-label="Call Now for Consultation">
                        <div className="content">
                            <div className="pulse pulse2">
                                <IoCall />
                                {/* <BiSupport /> */}
                            </div>
                        </div>
                    </a>
                </section>


                <section
                    className="whatsapp-icon-container"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {hovered && <span className="chat-text">Chat with us</span>}
                    <a
                        href="https://wa.me/9041065990"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-icon"
                    >
                        <FaWhatsapp size={40} />
                    </a>
                </section>


            </main>
        </>
    )
}

export default Footer
