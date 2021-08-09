import React , { useState } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import HowItWorksText from './HowItWorksText';
import Testimonials from '../../containners/Testimonials';
import Instructions from './Instructions';
import Portfolio from './Portfolio';
import { useTranslation, withTranslation } from 'react-i18next';

const HowItWorks = () => {
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
        var element = document.getElementById("link2");
    element.classList.add("active"); }, 200);
    
    return (
        <React.Fragment>
            <section className="main">
                <div className="container-fluid">
                    <Header/>
                    <HowItWorksText />
                </div>
                <Instructions />
                <Portfolio /> 
            </section>
            <Footer  t={t}/>
        </React.Fragment>
    )
}


export default HowItWorks;