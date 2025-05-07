import './Service.css'

function ServicesCard({ ServiceCardImg, cardHeading, cardParaGraph ,altText = '' }) {
    return (
        <>
            <main>
                <div className="performance_card2_inner-sec_card">
                    <div className="card_img-box-wrapper d-flex align-items-center gap-2">
                        <div className="car_box_img ">
                            <img src={ServiceCardImg} alt={altText} />
                        </div>
                        <div className="card_box_img_heading low-code">
                            <h4 className="mb-0 fw-bold">{cardHeading}</h4>
                        </div>
                    </div>
                    <p className="pt-3">{cardParaGraph}</p>
                </div>
            </main>
        </>
    )
}

export default ServicesCard
