import React, { useState } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import { useTranslation, withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AboutUs = () => {


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
    
    setTimeout(function(){ 
      var element = document.getElementById("link3");
  element.classList.add("active"); }, 200);
    return (
        <React.Fragment>
            <section className="container-fluid w1">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="centertext">
                                <h1>{t('Your Unique Piece of Art:')}</h1>
                                <h2>
                                    {t('Youniq.Art besteht aus einem')} <br />
                                    <span className="colored-green">{t('Team von Kunsthistoriker innen')}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid s2">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="centertext2">
                  <h1>{t('Was')}</h1>
                </div>
              </div>
              <div className="col-md 7">
                <div className="pera">
                  <p>«{t("aboutus_paragraph_1")}</p>
                  <div className="ankr"><Link to={'/how-it-works'} >{t('aboutus_link_1')}</Link></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid s2">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="centertext2">
                  <h2>{t('Warum')}</h2>
                </div>
              </div>
              <div className="col-md 7">
                <div className="pera">
                  <p>{t('aboutus_paragraph_2')} </p>
                  <div className="ankr"><Link to={'/find-your-style'}>{t('aboutus_link_2')} </Link></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid s3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="centertext2">
                  <h2>{t('Adressen')}</h2>
                </div>
              </div>
              <div className="col-md 7">
                <div className="pera2">
                  <p><span className="spntext"> Zürich </span>
                    Winterthurerstrasse 52
                    8006 Zürich
                    <br />
                    +41 43 810 03 49
                  </p>
                  <p><span className="spntext"> London</span>
                    <br />
                    41 Marsham Court <br />
                    SW1 P4JT London <br />
                    +44 20 45 77 01 29
                  </p>
                  <p><span className="spntext">New York
                    </span>
                    <br />
                    216 East 5th Street <br />
                    10003 New York, NY <br />
                    +1 929 59 09 121
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
            <Footer t={t} />
        </React.Fragment>
    );
}

export default AboutUs;