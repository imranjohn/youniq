import React, { useState, useEffect } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { useTranslation, withTranslation } from 'react-i18next';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const ArtDetail = (props) => {

    const [products, setProducts] = useState([]);
    const [artImage, setArtImage] = useState(null);
    const [artLength, setArtLength] = useState(null);
    const [artWidth, setArtWidth] = useState(null);
    const [mainImage, setMainImage] = useState('/img/b1.jpeg');
    const [productPrice, setProductPrice] = useState(null);
    const [priceFactor, setPriceFactor] = useState(0);
    const [productDetail, setProductDetail] = useState({});
    const [isLoader, setIsLoader] = useState(true);
    useEffect(() => {

        fetch(process.env.REACT_APP_BASE_URL+"data/product/" + props.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts(result);
                    setArtImage(result[0].imageUrl);
                    setArtLength(result[0].maxHeight);
                    setArtWidth(result[0].maxWidth);
                    setProductPrice(result[0].priceFrom);
                    setPriceFactor(result[0].priceFactor);

                    var heightWidt = parseInt(result[0].maxHeight) + parseInt(result[0].maxWidth);
                    var finalPrice = parseInt(heightWidt) * parseInt(result[0].priceFactor);
                    setProductPrice(finalPrice);
                    setProductDetail(result[0]);
                    setIsLoader(false);
                },

                (error) => {
                    // this.setState({
                    //     isLoaded: true,
                    //     error
                    // });
                }
            )

    }, []);

    const onClickImage = (imageUrl, length, width, product,currentobj) => {
        setArtImage(imageUrl);
        setArtLength(length);
        setArtWidth(width);
        setProductDetail(product)
       
 
     

       

        
for (let i = 0; i < document.getElementsByClassName("for-box-border").length; i++) {
    document.getElementsByClassName("for-box-border")[i].classList.remove("active");
   
  }
      
        
        var element = document.getElementById(currentobj);
        element.classList.add("active"); 

    }

    const onChangeLenght = (event) => {

        setArtLength(event.target.value);

        var heightWidt = parseInt(event.target.value) + parseInt(artWidth);
        console.log(heightWidt, priceFactor);
        var finalPrice = parseInt(heightWidt) * parseInt(priceFactor);
        setProductPrice(finalPrice);
        //alert(event.target.value);
    }

    const onChangeWidth = (event) => {
        //alert(event.target.value);
        setArtWidth(event.target.value);

        var heightWidt = parseInt(event.target.value) + parseInt(artLength);
        var finalPrice = parseInt(heightWidt) * parseInt(priceFactor);
        setProductPrice(finalPrice);
    }

    const onClickMainImage = (imageUrl) => {
        setMainImage(imageUrl);
    }

    const { t, i18n } = useTranslation();
    const [currentLanguageVersion, setCurrentLanguageVersion] = useState('English Version');
    const [lng, setLng] = useState('en');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        if (lng == 'en') {
            setCurrentLanguageVersion('Germen Version');
            setLng('ger');
        } else {
            setCurrentLanguageVersion('English Version');
            setLng('en');
        }
    }


    return (
        <React.Fragment>
            <section className="main">
                <div className="container-fluid">
                    <Header />
                    <div class="container">
                        <div class="row ">
                            <div class="col-md-12 for-first-heading-speacing">
                                <div class="for-first-heading">
                                    <h1>{t('Make it Youniq')}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container for-padding">
                        <div className="row">
                            <div className="col-md-12 d-flex for-display">
                                <div className="col-md-7 for-img-74">
                                    <div className="simple-gallery">
                                        <img className="maxi" src={artImage} height={artLength} width={artWidth} />
                                    </div>
                                    <div className="mySlides" style={{ display: 'block' }}>
                                        <img src={mainImage} style={{ width: '100%', borderRadius: '10px' }} />
                                    </div>

                                </div>
                                <div className="col-md-5 for-inner-padding">
                                    <div className="col-5-heading">
                                        <h1 className="heading-h1">{t('Stelle deinen Style zusammen')}</h1>
                                        <p className="pera-p">{t('Wähle den Style, der dir am besten gefällt. Teste aus, wie er in der Umgebung aussieht.')}</p>
                                        <h6 className="heading-h6">{t('Style-Beispiele')}</h6>
                                    </div>
                                    <div className="for-img-slider">
                                        <ul className="for-slider-ul">
                                            <div className="mini">
                                                {isLoader ? <Loader /> : products.map((product, index) => {
                                                    var    newvariable="select"+index;
                                                    return (
                                                        <li key={index} className="for-slider-li d-inline for-border ">
                                                            <img  onClick={() => onClickImage(product.imageUrl, product.maxHeight, product.maxWidth, product,newvariable)} className="for-box-border" id={newvariable} src={product.imageUrl} />
                                                        </li>
                                                    )
                                                })}

                                            </div>
                                        </ul>
                                    </div>
                                    <div className="col-5-heading">
                                        <h6 className="heading-h6">{t('Umgebung')}</h6>
                                    </div>
                                    <div className="for-img-slider">
                                        <ul className="for-slider-ul">
                                            <li className="for-icon d-inline for-css">
                                                {/* <a href="#"><i className="fa fa-plus imgAdd" /></a> */}
                                            </li>
                                            <li className="for-slider-li d-inline for-border">
                                                <img className="active demo cursor for-border-radius" src="/img/b1.jpeg" style={{ width: '19%' }} onClick={() => onClickMainImage('/img/b1.jpeg')} />
                                            </li>
                                            <li className="for-slider-lia d-inline for-border">
                                                <img className="demo cursor for-border-radius" src="/img/b2.jpg" style={{ width: '16%' }} onClick={() => onClickMainImage('/img/b2.jpg')} />
                                            </li>
                                            <li className="for-slider-lia d-inline for-border">
                                                <img className="demo cursor for-border-radius" src="/img/b3.jpg" style={{ width: '18%' }} onClick={() => onClickMainImage('/img/b3.jpg')} />
                                            </li>
                                            <li className="for-slider-li d-inline for-border">
                                                <img className="demo cursor for-border-radius" src="/img/b4.jpg" style={{ width: '18%' }} onClick={() => onClickMainImage('/img/b4.jpg')} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-5-heading">
                                        <h6 className="heading-h6">{t('Größe')}</h6>
                                    </div>
                                    {isLoader ? <Loader /> : <React.Fragment>
                                        <div className="for-grob-sec">
                                            <div className="col-for-3">
                                                <p className="for-box-p">{t('Länge')} <br />
                                                    {/* <span className="for-100"> {artLength} </span>  */}
                                                    <input type="number" value={artLength} style={{ width: '50%' }} name="length" onChange={onChangeLenght} className="for-100" />

                                                    <span className="for-cm">cm</span></p>
                                            </div>
                                            <div className="col-for-1">X</div>
                                            <div className="col-for-3">
                                                <p className="for-box-p">{t('Breite')}<br />
                                                    {/* <span className="for-100"> {artWidth} </span> */}
                                                    <input type="number" value={artWidth} style={{ width: '50%' }} name="width" onChange={onChangeWidth} className="for-100" />
                                                    <span className="for-cm">cm</span></p>
                                            </div>
                                        </div>
                                    </React.Fragment>}

                                    <div className="col-5-heading">
                                        <h6 className="heading-h6">{t('Preis')}</h6>
                                    </div>
                                    <div className="col-main-peers d-flex">
                                        {isLoader ? <Loader /> : <React.Fragment>
                                            <div className="d-flex for-col-12">
                                                <div className="col-for-peers">
                                                    <p className="for-box">{productPrice}</p>
                                                </div>
                                                <div className="col-for-peers">
                                                    <p className="for-boxab">{t('CHF')} </p>
                                                </div>
                                            </div>
                                        </React.Fragment>}

                                        <div className="for-button">
                                            <button type="button" className="btn"> <Link to={{
                                                pathname: "/make-your-youniq-2/" + props.match.params.id,
                                                state: {
                                                    artImage: artImage,
                                                    height: artLength,
                                                    width: artWidth,
                                                    productPrice: productPrice,
                                                    productId: parseInt(props.match.params.id)
                                                },
                                            }}> {t('Weiter zur Anfrage')} </Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 paddinga">
                                <div className="for-last-heading">
                                    <h2>{t('Details')}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row for-last-heading-padding paddingaba">
                            <div className="col-md-3">
                                <div className="for-last-heading">
                                    <h6>{t('Technik')}</h6>
                                    <p>{productDetail.technik}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="for-last-heading">
                                    <h6>{t('Grössen')}</h6>
                                    <p>84 x 117 bis 182 x 182 cm</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="for-last-heading">
                                    <h6>{t('Auftragsform')}</h6>
                                    <p>{productDetail.aufstragsform} </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="for-last-heading">
                                    {/* <h6>{t('Länge')}</h6>
                                    <p>175 cm</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer t={t} />
        </React.Fragment>
    )
}

export default ArtDetail;