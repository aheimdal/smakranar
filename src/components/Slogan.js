import React, { useEffect } from 'react';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import '../css/Slogan.css';

const Slogan = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='slogan-container'>
            <h1 className="slogan-title" data-aos="fade-in">{t('SLOGAN_TITLE')}</h1>
            <p className='slogan-text' data-aos="fade-in">{t('SLOGAN_TEXT_1')}</p>
            <p className='slogan-text' data-aos="fade-in">{t('SLOGAN_TEXT_2')}</p>
            <p className='slogan-text' data-aos="fade-in">{t('SLOGAN_TEXT_3')}</p>
        </div>
    );
};

export default Slogan;
