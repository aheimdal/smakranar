import React from 'react';
import Slider from 'react-slick';
import '../css/Splash.css';
import slide1 from '../assets/images/main_0.jpg'; // replace with your actual images
import slide2 from '../assets/images/main_1.jpg';
import slide3 from '../assets/images/main_2.jpg';
import slide4 from '../assets/images/main_3.jpg';

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
    };

    return (
        <Slider {...settings} className="slideshow">
            <div className="slide">
                <img src={slide1} alt="Slide 1" className="slide-image" />
                <div className="slide-overlay"></div>
            </div>
            <div className="slide">
                <img src={slide2} alt="Slide 2" className="slide-image" />
                <div className="slide-overlay"></div>
            </div>
            <div className="slide">
                <img src={slide3} alt="Slide 3" className="slide-image" />
                <div className="slide-overlay"></div>
            </div>
            <div className="slide">
                <img src={slide4} alt="Slide 4" className="slide-image" />
                <div className="slide-overlay"></div>
            </div>
        </Slider>
    );
};

export default Slideshow;
