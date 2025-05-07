import { Link, useLocation } from "react-router-dom";
import "./Service.css";
import "../../App.css";
import check from "../../Images/check.webp";
import { FaChevronRight } from "react-icons/fa";

function KeyPointSection({ 
    keyHeading, 
    keyPara, 
    keyPoint1, 
    keyPoint2, 
    keyPoint3, 
    keyPoint4, 
    keyPoint5, 
    url, 
    btnTitle, 
    Group105518, 
    hideKeyPoints,
    altTags = {} // ✅ Dynamic alt tags
}) {
    const location = useLocation();
    const checkShow = ["/performance"];

    return (
        <section className="low-code-sec-tool">
            <div className="container">
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tool-heading">
                                <h2>{keyHeading}</h2>
                                <p className="mt-4">{keyPara}</p>
                            </div>

                            <div className="toll-check-items d-flex gap-3">
                                {!hideKeyPoints && (
                                    <ul className="list-unstyled py-2">
                                        {[keyPoint1, keyPoint2, keyPoint3, keyPoint4, keyPoint5].map((point, index) => (
                                            point && (
                                                <li key={index} className="d-flex gap-1 py-1">
                                                    {!checkShow.includes(location.pathname) && (
                                                        <span>
                                                            <img 
                                                                src={check} 
                                                                alt={!hideKeyPoints ? altTags[`check${index + 1}`] || "" : ""} 
                                                            />
                                                        </span>
                                                    )}
                                                    <span>{point}</span>
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="heroBtn">
                                <Link to={url} className="d-flex align-items-center justify-content-between">
                                    <div className="btnText px-3 py-3 text-light">
                                        <span>{btnTitle}</span>
                                    </div>
                                    <div className="btn_icon px-4 py-2">
                                        <FaChevronRight />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 text-end">
                            <div className="tool-img">
                                <img 
                                    src={Group105518} 
                                    alt={altTags?.Group105518 || ""} 
                                    className="img-fluid mt-5" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KeyPointSection;
