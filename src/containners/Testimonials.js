import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Testimonials = (props) => {


    return (
        <React.Fragment>
            <div className="heading-die"> <img src="images/Capture.png" />
                <h4>{props.t("Die Lieferung ist für die gesamte Schweiz gratis")}</h4> </div>
            <div className="container-fluid ten4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial">
                                <div className="heading">
                                    <h1>{props.t("Testimonials")}</h1></div>
                                <Carousel indicators={true} >
                                    <Carousel.Item key={1} >
                                        <div className="slider__contents">
                                            <div className="float1"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«{props.t("sdfd Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!")}»</p>
                                                <h6>{props.t('Fabienne 1')}</h6> </div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item key={2} >
                                        <div className="slider__contents">
                                            <div className="float2"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«{props.t("a Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!")}»</p>
                                                <h6>{props.t('Fabienne 2')}</h6> </div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item key={3} >
                                        <div className="slider__contents">
                                            <div className="float1"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«{props.t("b Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!")}»</p>
                                                <h6>{props.t('Fabienne 3')}</h6> </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item key={4} >
                                        <div className="slider__contents">
                                            <div className="float1"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«{props.t("c Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!")}»</p>
                                                <h6>{props.t('Fabienne 4')}</h6> </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item key={5} >
                                        <div className="slider__contents">
                                            <div className="float1"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«{props.t("d Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!")}»</p>
                                                <h6>{props.t('Fabienne 5')}</h6> </div>
                                        </div>
                                    </Carousel.Item>
                                    {/* {categories[keyName].map(function (product, index) {
                                            return (
                                                <Carousel.Item key={index} >

                                                    <Link to={'/make-your-youniq/' + product.productId}>  <img

                                                        src={product.image}
                                                        alt="First slide"
                                                    /></Link>
                                                    <div style={{ clear: 'both' }} /> &nbsp; &nbsp;
                                                    <div className="texting">
                                                        <h2><span>{t('Ab')} CHF  &nbsp;  </span>{product.price}</h2><Link to={'/make-your-youniq/' + product.productId}>Make it youniq</Link></div>

                                                </Carousel.Item>
                                            )
                                        })} */}

                                </Carousel>
                                {/* <div className="slider">
                                    <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                    <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                    <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                    <input type="radio" name="slider" title="slide4" className="slider__nav" />
                                    <div className="next-prev">
                                        <a className="next"><img src="images/arrowleft.png" /></a>
                                        <a className="prev"><img src="images/arrowright.png" /></a>
                                    </div>
                                    <div className="slider__inner">
                                        <div className="slider__contents">
                                            <div className="float1"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«{props.t("Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!")}»</p>
                                                <h6>{props.t('Fabienne')}</h6> </div>
                                        </div>
                                        <div className="slider__contents">
                                            <div className="float2"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«{props.t("Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!")}»</p>
                                                <h6>{props.t('Fabienne')}</h6> </div>
                                        </div>
                                        <div className="slider__contents">
                                            <div className="float3"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«{props.t("Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!")}»</p>
                                                <h6>{props.t('Fabienne')}</h6> </div>
                                        </div>
                                        <div className="slider__contents">
                                            <div className="float4"><img src="images/testim.PNG" /></div>
                                            <div className="float">
                                                <p className="slider__txt">«{props.t("Ich wusste nicht von Anfang an, was ich haben wollte, doch dank der erstklassigen Beratung habe ich nun einen wahren Eyecatcher in meinem Eingang hängen. Vielen Dank für eure Hilfe!")}»</p>
                                                <h6>{props.t('Fabienne')}</h6> </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonials;