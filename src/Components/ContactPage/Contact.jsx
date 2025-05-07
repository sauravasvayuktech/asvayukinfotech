import { Breadcrumb, Container, Nav, Row, Tab } from "react-bootstrap"
import { Form, Link } from "react-router-dom"
import './Contact.css'
import amritsar from '../../Images/amritsar.webp';
import dubai from '../../Images/dubai.webp';
import canada from '../../Images/canadaimg.webp';
import Mumbai from '../../Images/bang.webp';
import contactImg from '../../Images/contact_img.webp';
import Meta_Component from "../Meta_Component/Meta_Component";

function Contact() {
    return (
        <>

            <Meta_Component
                title="Contact Asvayuk Technologies - Get in Touch with Our Experts"
                description="Contact Asvayuk Technologies for top-tier web development and digital marketing services. We're ready to assist with your inquiries and projects"
                canonical="https://asvayuktech.com/contact-us" />

            <main>

                <section className="main_class">
                    <Container className="container">
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="main_content py-4">
                            <h1 className="text-center heading">Collaborating to Find Solutions</h1>
                            <p className="text-center mt-3 para">Reach out to us to discuss how we can work together to innovate and change digital ecosystems.</p>
                        </div>

                        <div className="location_contact col-12 pt-5">
                            <Row>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 cities text-center">
                                    <div className="city-img">
                                        <img src={amritsar} alt="Contact Best IT Company in Chandigarh"/>
                                    </div>
                                    <div className="img_content py-5 rounded-4 ">
                                        <div className="img_name mt-3">
                                            <h3>India</h3>
                                            <span>Chandigarh</span>
                                        </div>
                                        <div className="info mt-3">
                                            <a href="mailto:info@asvayuktech.com">info@asvayuktech.com</a><br />
                                            <a href="tel:+91-90410-65990">+91-90410-65990</a><br /> &nbsp;
                                        </div>
                                        <Link to={"https://maps.app.goo.gl/4HYCGEiryydf54xdA"} target='_blank'>
                                            <button className="btn_loc">View Location</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 cities text-center">
                                    <div className="city-img">
                                        <img src={canada} alt="Best Software Development Consultation in Chandigarh"/>
                                    </div>
                                    <div className="img_content py-5 rounded-4 ">
                                        <div className="img_name mt-3">
                                            <h3>Canada</h3>
                                            <span>Canada</span>
                                        </div>
                                        <div className="info mt-3">
                                            <a href="mailto:canada@asvayuktech.com">canada@asvayuktech.com</a><br />
                                            <a href="tel:+1-613-583-4275">+1 (613) 583-4275</a><br /> &nbsp;
                                        </div>
                                        <Link to={"https://maps.app.goo.gl/oAMtDXT9D6Xc4MYq7"} target='_blank'>
                                            <button className="btn_loc">View Location</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 cities text-center">
                                    <div className="city-img">
                                        <img src={Mumbai} alt="Hire Expert Shopify Developers in Chandigarh"/>
                                    </div>
                                    <div className="img_content py-5 rounded-4 ">
                                        <div className="img_name mt-3">
                                            <h3>Mumbai</h3>
                                            <span>Mumbai</span>
                                        </div>
                                        <div className="info mt-3">
                                            <a href="mailto:mumbai@asvayuktech.com">mumbai@asvayuktech.com</a><br />
                                            {/* <a href="tel:+91-90410-65990">+91-90410-65990</a><br /> &nbsp; */}
                                            <a href="tel:+91 90410 65990">+91-90410 65990</a><br /> &nbsp;
                                        </div>
                                        <Link to={"https://maps.app.goo.gl/tSpBT45db7BvRm2f7"} target='_blank'>
                                            <button className="btn_loc">View Location</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 cities text-center">
                                    <div className="city-img">
                                        <img src={dubai} alt="Contact Asvayuk Technologies for Custom Software"/>
                                    </div>
                                    <div className="img_content py-5 rounded-4 ">
                                        <div className="img_name mt-3">
                                            <h3>Dubai</h3>
                                            <span>Dubai</span>
                                        </div>
                                        <div className="info mt-3">
                                            <a href="mailto:dubai@asvayuktech.com">dubai@asvayuktech.com</a><br />
                                            {/* <a href="tel:+971-90410-65990">+971-90410-65990</a><br /> &nbsp; */}
                                            <a href="tel:+971 56 927 8990">+971 56 927 8990</a><br /> &nbsp;
                                        </div>
                                        <Link to={"https://maps.app.goo.gl/A6gWMfVuYWzL7mBF9"} target='_blank'>
                                            <button className="btn_loc">View Location</button>
                                        </Link>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </section>

                <section className="global_section">
                    <div className="global_section_content text-center">
                        <h2>Worldwide Reach, Local Presence</h2>
                        <p className="mt-2 mt-lg-1 mt-md-2">With our worldwide presence, we can better meet your needs. Explore our offices around the globe and <br /> connect with us at a location convenient for you</p>
                    </div>
                </section>

                <section className="form_parent">
                    <div className="container p-0">
                        <div className="contact_form">
                            <div className="row">
                                <div className="col-lg-5 contact_form_img">
                                    <img src={contactImg} alt="Book a Free Consultation – Web Development Mohali"/>
                                </div>
                                <div className="col-lg-7 contact_form_content">
                                    <h4 className="pt-3 pt-lg-0 pt-md-0">Do you have a question, a project proposal, or simply wish to connect?</h4>
                                    <p>Fill out the form below, and our experts will connect with you shortly.</p>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="Company">
                                        <div>
                                            <Nav variant="pills" className="d-flex gap-2">
                                                <Nav.Item className="contactForm">
                                                    <Nav.Link eventKey="Company">Company</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="contactForm">
                                                    <Nav.Link eventKey="Individual">Individual</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>

                                        <Tab.Content>
                                            <Tab.Pane eventKey="Company">
                                                <div className="contact_form_info">
                                                    {/* <Form>
                                                    <div className="row pt-0 pt-lg-4 pt-md-3 pb-0 pb-lg-3 pb-md-3">
                                                        <div className="form-group col-lg-6 pt-4 pt-lg-0 pt-md-0">
                                                            <input type="text" className="form-control" id="inputName"
                                                                placeholder="Enter your full name" />
                                                        </div>
                                                        <div className="form-group col-lg-6 pt-4 pt-lg-0 pt-md-0">
                                                            <input type="email" className="form-control" id="inputEmail"
                                                                placeholder="Enter your email" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-0 pt-lg-2 pt-md-3 pb-0 pb-lg-3 pb-md-3">
                                                        <div className="form-group col-lg-6 pt-4 pt-lg-0 pt-md-0">
                                                            <input type="text" className="form-control" id="inputName"
                                                                placeholder="Moible Number" />
                                                        </div>
                                                        <div className="form-group col-lg-6 pt-4 pt-lg-0 pt-md-0">
                                                            <select className="w-100 h-100">
                                                                <option value="UI UX Design">UI UX Design</option>
                                                                <option value="Mobile App Development">Mobile App Development</option>
                                                                <option value="Social Media Marketing">Social Media Marketing</option>
                                                                <option value="Search Engine Optimization">Search Engine Optimization</option>
                                                                <option value="Website Development">Website Development</option>
                                                                <option value="WooCommerce">WooCommerce</option>
                                                                <option value="Ecommerce Development">Ecommerce Development</option>
                                                                <option value="Block Chain Development">Block Chain Development</option>
                                                                <option value="Magento Development">Magento Development</option>
                                                                <option value="React Native Development">React Native Development</option>
                                                                <option value="Saas Development">Saas Development</option>
                                                                <option value="Shopify Development">Shopify Development</option>
                                                                <option value="Pay Per Click">Pay Per Click</option>
                                                                <option value="Software Development">Software Development</option>
                                                                <option value="Laravel Development">Laravel Development</option>
                                                                <option value="AR/VR Development">AR/VR Development</option>
                                                                <option value="Other">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-row message-group w-100 pt-2 pb-0 pb-lg-4 pb-md-4">
                                                        <div className="form-group col-lg-12 py-3 py-lg-0 py-md-0">
                                                            <textarea className="form-control" id="inputMessage" rows="5"
                                                                placeholder="Enter your message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-12 ">
                                                            <button type="submit" className="submit_btn">Send Message</button>
                                                        </div>
                                                    </div>
                                                </Form> */}
                                                    <iframe id='iframeForm' width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" className=' rounded-3' style={{ background: 'transparent' }} allowfullscreen></iframe>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Individual">
                                                <div className="contact_form_info">
                                                    <iframe id='iframeForm' width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" className=' rounded-3' style={{ background: 'transparent' }} allowfullscreen></iframe>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Contact
