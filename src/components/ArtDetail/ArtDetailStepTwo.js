import React, { useState, useEffect } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { useTranslation, withTranslation } from 'react-i18next';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { Link, useHistory } from 'react-router-dom';

const ArtDetailStepTwo = (props) => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const [artImage, setArtImage] = useState(null);
    const [artLength, setArtLength] = useState(null);
    const [artWidth, setArtWidth] = useState(null);
    const [mainImage, setMainImage] = useState('/img/b1.jpeg');
    const [productPrice, setProductPrice] = useState(null);
    const [priceFactor, setPriceFactor] = useState(0);
    const [productDetail, setProductDetail] = useState({});
    const [customImage, setCustomImage] = useState('/img/ii.svg');
    const [useCustomImage, setUseCustomImage] = useState(false);
    const [wouldLikeToBeSurprised, setWouldLikeToBeSurprised] = useState(false);
    const [comments, setComments] = useState("");
    const [frameType, setFrameType] = useState("frame1");
 //   const [useCustomImage, setUseCustomImage] = useState(false);
    useEffect(() => {
        // console.log("===========");
        // console.log(productData);
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
                },

                (error) => {
                    // this.setState({
                    //     isLoaded: true,
                    //     error
                    // });
                }
            )

    }, []);

    const onClickImage = (imageUrl, length, width, product) => {
        setArtImage(imageUrl);
        setArtLength(length);
        setArtWidth(width);
        setProductDetail(product)
    }

    const handleOnChangeComment = (event) => {
        setComments(event.target.value);
    }

    const handleOnChangeCheckBox = (event) => {
        if(event.target.name === 'useCustomImage'){
            setUseCustomImage(!useCustomImage);
        }

        if(event.target.name === 'wouldLikeToBeSurprised'){
            setWouldLikeToBeSurprised(!wouldLikeToBeSurprised);
        }
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

    const getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                console.log(baseURL);
                resolve(baseURL);
            };
            console.log(fileInfo);
        });
    };


    const handleChangeImage = (e) => {

        console.log(e.target.files[0]);


        var file = e.target.files[0];

        getBase64(file)
            .then(result => {
                console.log(result);
                setCustomImage(result);
                setUseCustomImage(true);
                // file["base64"] = result;
                // console.log("File Is", file);
                // setCustomImage(result)
                // this.setState({
                //   base64URL: result,
                //   file
                // });
            })
            .catch(err => {
                console.log(err);
            });

        // this.setState({
        //   file: e.target.files[0]
        // });



        // console.log(URL.createObjectURL(event.target.files[0]));
        // setCustomImage(URL.createObjectURL(event.target.files[0]));
    }

    const { t, i18n } = useTranslation();
    console.log(i18n);
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

    const productData = props.location.state;

    return (
        <React.Fragment>
            <section className="container-fluid w1">
                <Header />
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="theory">
                                <h1>{t('Make it Youniq')}</h1>
                            </div>
                            <div className="sticky-price"><sup>Preis</sup><h3>2815<sub>CHF</sub></h3></div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid w2">
                <section className="container">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-9">
                            <div className="arrow">
                               <a onClick={() => history.goBack()}> <i className="fa fa-angle-left" />
                                <h1 >{t('Zurück')} </h1></a>
                            </div>
                            <div className="theory2">
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid w3">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form">
                                <div className="textmrg">
                                    <h1>{t('Sende uns eine unverbindliche Anfrage')}</h1>
                                    <h2>{t('Style Biespiele')}</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="img1">
                                            <ul>
                                                {products.map((product, index) => {

                                                    return (
                                                        <li key={index}   className={productData.artImage == product.imageUrl ? '' : ''}>

                                                           <a href="javascript:;" ><img  style={{ width: '50px' }} src={product.imageUrl} /></a> 

                                                        </li>
                                                    )
                                                })}
                                                {/* <li className="active"><a href="#"><img src="/img/01.jpg" /></a></li>
                                                <li><a href="#"><img src="/img/02.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="/img/03.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="/img/04.jpg" alt="" /></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="textmrg2">
                                            <h2>{t('Gewünschte Größe')}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="textmrg2">
                                            <div className="lange">
                                                <h1>{t('Länge')}</h1>
                                                <h3><input type="number" placeholder="0"></input><span className="i">〡</span>  cm</h3>
                                                {/* <h3>{productData.height}  <</h3> */}
                                            </div>
                                            <h4>x</h4>
                                            <div className="lange">
                                                <h1>{t('Breite')}</h1>
                                                <h3><input type="number" placeholder="0"></input><span className="i">〡</span>  cm</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="textmrg2">
                                            <h2>{t('Gewünschtes Motiv')} </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 for-paddingab">
                                        <div className="textmrg3">
                                            <section>
                                                <form action method="POST" encType="multipart/form-data">
                                                    <div className="container for-inner-paddingab">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <div className="preview-zone hidden">
                                                                        <div className="box box-solid">
                                                                            <div className="box-header with-border">
                                                                                <div className="box-tools pull-right">
                                                                                </div>
                                                                            </div>
                                                                            <div className="box-body" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropzone-wrapper">
                                                                        <div className="dropzone-desc">
                                                                            <i className="glyphicon glyphicon-download-alt" />
                                                                            <div className="ii">
                                                                                <img src={customImage} />
                                                                            </div>
                                                                            <p>{t('Vorlage hier ablegen')}</p>
                                                                        </div>
                                                                        <input type="file" name="img_logo" className="dropzone" onChange={handleChangeImage} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="col-md-7 for-center d-flex">
                                        <div className="textmrg3">
                                            <input type="checkbox" id="vehicle1" name="useCustomImage" checked={useCustomImage} onChange={handleOnChangeCheckBox}  className="cbox" />
                                            <label htmlFor="vehicle1"><span className="agb">{t('Motiv aus dem hochgeladenen Bild')}</span></label>
                                            <br />
                                            <input type="checkbox" id="vehicle2" name="wouldLikeToBeSurprised" onChange={handleOnChangeCheckBox} checked={wouldLikeToBeSurprised} className="cbox" />
                                            <label htmlFor="vehicle1"><span className="agb">{t('Ich möchte überrascht werden')}</span></label>
                                            <br/>
                                            <input type="checkbox" id="vehicle3" name="newcheck"  className="cbox" />
                                            <label htmlFor="vehicle1"><span className="agb">{t('Das Motiv aus dem')}</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="textmrg2">
                                            <h2>{t('Rahmenart wählen')}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="textmrg4">
                                            <div className={frameType == 'frame1' ? 'box1 active' : 'box1'}>
                                                <div onClick={() => setFrameType('frame1')} className="lbox1" />
                                            </div>
                                            <div className={frameType == 'frame2' ? 'box1 active' : 'box1'}>
                                                <div onClick={() => setFrameType('frame2')} className="lbox1" />
                                            </div>
                                            <div className={frameType == 'frame3' ? 'box1 active' : 'box1'}>
                                                <div onClick={() => setFrameType('frame3')} className="lbox2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" />
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="textmrg2">
                                            <h2>{t('Beschreibe, was du gerne hättest')}</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="textmrg6">
                                          
                                                <textarea name="comments" onChange={handleOnChangeComment} id="text" cols={30} rows={10}  placeholder={t('Deine Wünsche')} className="form4" value={comments} />
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="textmrg7">
                                            <div className="ankr">
                                            <Link to={{
                                                 pathname: "/make-your-youniq-3/"+props.match.params.id,
                                                 state: {
                                                  ...productData,
                                                  comments: comments,
                                                  wouldLikeToBeSurprised: wouldLikeToBeSurprised,
                                                  useCustomImage: useCustomImage,
                                                  customImage: customImage,
                                                  frameType: frameType
                                                 },
                                            }}> {t('Weiter')} </Link>
                                                {/* <a href="#"></a> */}
                                                
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid theory3">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                </section>
            </section>
            <Footer t={t} />
        </React.Fragment>
    )
}

export default ArtDetailStepTwo;