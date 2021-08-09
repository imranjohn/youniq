import React, { useState, useEffect } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { useTranslation, withTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const ArtDetailStepThree = (props) => {
    const history = useHistory();
    const [orderSucceed, setOrderSucceed] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm();

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

    const onSubmit = (data) => {
     
        setIsSubmit(true);
         var order = {...data, ...props.location.state};
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'                                                    
            },
            body: JSON.stringify({
                "acceptedAgbs":true,
                "address": order.address1+ ' '+ order.address2,
                "comments": order.comments,
                "country":order.country,
                "email":order.email,
                "frameType":order.frameType,
                "height":order.height,
                "name":order.name,
                "phone":order.phone,
                "postalCode":order.address2,
                "customImage": order.customImage,
                "productId":order.productId,
                "surname":order.surname,
                "useCustomImage":order.useCustomImage,
                "width":order.height,
                "wouldLikeToBeSurprised":order.wouldLikeToBeSurprised
              })
        };

    
        fetch(process.env.REACT_APP_BASE_URL+'action/order', requestOptions)
            .then(response => {
                if(response.status == 200){
                    setOrderSucceed(true);
                    reset();
                    setIsSubmit(false);
                }
              
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
            
            });
    }; // your form submit function which will invoke after successful validation




    console.log("-----------------------");
    console.log(props);
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
                                <i className="fa fa-angle-left" />
                                <h1 onClick={() => history.goBack()}>{t('Zurück')}</h1>
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
                            <div className="form contact-height">
                          
                           {orderSucceed ? <p className="alert alert-success" > Order has been completed</p> : ''} 
                      
                                <h1>{t('kontaktangaben')}</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="inner-form">
                                        <input className="form1"
                                            placeholder={t('Vorname')}
                                            {...register("name", {
                                                required: true,
                                                maxLength: 20,
                                                pattern: /^[A-Za-z]+$/i
                                            })}
                                        />
                                        {errors.name && <p className="alert alert-danger">This field is required</p>}
                                        {errors?.name?.type === "maxLength" && (
                                            <p className="alert alert-danger"> Name cannot exceed 20 characters</p>
                                        )}
                                        {errors?.name?.type === "pattern" && (
                                            <p className="alert alert-danger">Alphabetical characters only</p>
                                        )}

                                        <input className="form1"
                                            placeholder={t('Nach name')}
                                            {...register("surname", {
                                                required: true,
                                                maxLength: 20,
                                                pattern: /^[A-Za-z]+$/i
                                            })}
                                        />
                                        {errors.name && <p className="alert alert-danger">This field is required</p>}
                                        {errors?.name?.type === "maxLength" && (
                                            <p className="alert alert-danger">Surname cannot exceed 20 characters</p>
                                        )}
                                        {errors?.name?.type === "pattern" && (
                                            <p className="alert alert-danger">Alphabetical characters only</p>
                                        )}

                                        <input
                                            id="email"
                                            placeholder={t('E-Mail')}
                                            className="form1"
                                            {...register("email", {
                                                required: "required",
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: "Entered value does not match email format"
                                                }
                                            })}
                                            type="email"
                                        />
                                        {errors.email && <p className="alert alert-danger">{errors.email.message}</p>}

                                        <input
                                            id="phone"
                                            className="form1"
                                            placeholder={t('Telefonnummer')}
                                            {...register("phone", {
                                                required: "required",
                                                minLength: 6, maxLength: 12
                                            })}
                                            type="tel"
                                        />
                                        {errors.phone && <p className="alert alert-danger">{errors.phone.message}</p>}

                                        <input
                                            id="address1"
                                            placeholder={t('Strasse / Hausnummer')}
                                            className="form1"
                                            {...register("address1", {
                                                required: "required",
                                            })}
                                            type="text"
                                        />
                                        {errors.address1 && <p className="alert alert-danger">{errors.address1.message}</p>}
                                        <input
                                            id="address2"
                                            placeholder={'PLZ / Stadt'}
                                            className="form1"
                                            {...register("address2", {
                                                required: "required",
                                            })}
                                            type="text"
                                        />
                                        {errors.address2 && <p className="alert alert-danger">{errors.address2.message}</p>}

                                        <input
                                            id="country"
                                            placeholder={t('Land')}
                                            className="form1"
                                            {...register("country", {
                                                required: "required",
                                            })}
                                            type="text"
                                        />
                                        {errors.country && <p className="alert alert-danger">{errors.country.message}</p>} 
                                        <br />
                                        <input type="checkbox" className="form1"
                                            {...register("termsAndCondition", {
                                                required: "required",
                                            })} className="cbox" />
                                        <label for="vehicle1">{t('lch')} <a href="" class="agb">AGBs</a></label><br />
                                        {errors.termsAndCondition && <p className="alert alert-danger">Terms And Condition is required</p>} 
                                        {/* <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Nachname" required className="form5" />
                                    <input type="text" pattern="[A-Za-z0-9.@ ]{3,}" placeholder="  E-Mail" name="wasi" required className="form3" />
                                    <input type="text"  placeholder="  Telefonnummer" required className="form2" />
                                    <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Strasse / Hausnummer" required className="form6" />
                                    <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  PLZ / Stadt" required className="form4" />
                                    <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Land" required className="form4" />
                                    <br />
                                    <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" className="cbox" />
                                    <label htmlFor="vehicle1">lch akzeptiere die <span className="agb">AGBs</span></label><br /> */}
                                        <div className="ankr">{isSubmit ? <React.Fragment><i className="fa fa-spinner fa-spin"></i>Loading </React.Fragment> : <input type={'submit'} value={t('Anfrage abschicken')} />}</div>
                                    </div>
                                </form>
                            </div>
                            <div className="art-detail-chf-right">
                              <sub>{t('Preis')}</sub>
                              <h1>{props.location.state.productPrice}<span></span>CHF</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid theory3 theory-again">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                </section>
            </section>
            <Footer t={t} />

        </React.Fragment>
    );
}

export default ArtDetailStepThree;