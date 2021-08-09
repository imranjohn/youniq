import React , { useState } from 'react';

import Footer from '../common/Footer';
import Header from '../common/Header';
import ProductTabs from './ProductTabs';
import { useTranslation, withTranslation } from 'react-i18next';

const FindYourStyle = (props) => {
    const {t, i18n} = useTranslation();
    const [currentLanguageVersion, setCurrentLanguageVersion] = useState('English Version');
    const [lng, setLng] = useState('en');
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      if(lng == 'en'){
          setCurrentLanguageVersion('Germen Version');
          setLng('ger');
      } else {
        setCurrentLanguageVersion('English Version');
        setLng('en');
      }
    }
    
    setTimeout(function(){ 
        var element = document.getElementById("link1");
    element.classList.add("active"); }, 200);
    return (
        <React.Fragment>
            <section className="wrapp1">
                <div className="container-fluid ten5">
                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                              
                                <div className="hero-section-banner-tabs">
                                    <h2>{t('Über 100 Styles')} <br /><span style={{ color: '#207d2094' }}>{t('Finde deinen. Und lass dir passende Kunst anfertigen.')}</span></h2>
                                </div>
                                <div className="round2-content"><sub>{t ('Brauchst')}</sub><h3>{t ('lass')}</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ clear: 'both' }} />
           <div className="container-fluid ten6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tabs-main">
                                <div className="site-wrapper">
                                    <section className="tabs-wrapper">
                                       <ProductTabs />
                                   
                                    </section>
                                    <footer> </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer t={t}/>
        </React.Fragment> 
    )
}

export default FindYourStyle;