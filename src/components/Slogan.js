import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Slogan.css';

const Slogan = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='slogan-container'>
            <h1 className="slogan-title" data-aos="fade-in">SMÁIR EN KNÁIR</h1>
            <p className='slogan-text' data-aos="fade-in">Smákranar veita sérhæfða þjónustu á sviði lyftingatækni þar sem leitast er við að uppfylla þarfir og væntingar viðskiptavina á sem hagkvæmastan hátt.</p>
            <p className='slogan-text' data-aos="fade-in">Smákranar er fjölskyldufyrirtæki sem var stofnaðu 2003 og hægt og sígandi hafa umsvif þess aukist.  Í dag starfa 5 starfsmenn hjá Smákrönum ehf.</p>
            <p className='slogan-text' data-aos="fade-in">Smákranar hafa tekið þátt í nokkrum af stærstu byggingaframkvæmdum á Íslandi frá því þeir voru stofnaðir árið 2003</p>
        </div>
    );
};

export default Slogan;