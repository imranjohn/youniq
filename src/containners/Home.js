import React, { useState } from 'react';
import Banner from '../components/common/Banner';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import { useTranslation, withTranslation } from 'react-i18next';

import HowItWorksSection from './HowItWorksSection';
import Testimonials from './Testimonials';

const Home = () => {
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
                <div className="container-fluid ten1">
                    <Header />
                    <Banner />
                </div>
            </section>
            <div style={{ clear: 'both' }} />
            <HowItWorksSection />
            <div className="divider" />
            <Testimonials t={t}/>
            <Footer t={t} />
        </React.Fragment>
    )
}

export default Home;