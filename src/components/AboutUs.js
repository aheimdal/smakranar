import React, {useState, useEffect} from 'react';
import '../css/AboutUs.css';
import Employees from './Employees';
import yourImage from '../assets/images/splash.jpg'; // Replace with your actual image path

const AboutUs = () => {
  const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://guarded-chamber-55183.herokuapp.com/employees') // replace '/api/employees' with your actual API endpoint
            .then((response) => response.json())
            .then((data) => setEmployees(data));
    }, []);

  return (
    <>
    <div id="aboutus">
      <div className='main-container'>
        <div class="content-container">
          <img src={yourImage} />
          <div class="text-container">
            <h2>SMÁKRANAR</h2>
            <p>Fyrirækið Smákranar ehf. var stofnað 2003 þegar eigendur þess, Erlingur og Hildur sáu nýja tegund af vinnuvélum – svonefnda smákrana. Stærð þeirra gerir það að verkum að hægt er að fara með þá á afvikna staði þar sem önnur tæki komast ekki. t.d. inni í byggingum, í görðum, kjallarabyggingum, uppi á þökum háhýsa o.fl.  Afráðið var að fá til landsins fyrsta UNIC smákranann en fyrst um sinn gekk hægt að veita honum brautargengi.  En verktakar fóru að veita þessu nýja tæki athygli, sérstaklega fyrir hversu vel gekk að leysa erfið hífingarverk innandyra.</p>
            <p> Árið 2007 jukust umsvif Smárkrana þegar tveir smákranar til viðbótar bættust við í flotann. 2011 keypti fyrirtækið svo P&H krana, 25t að lyftigetu sem reynist mjög vel á stærri verkstöðum. 2013 fengu Smákranar söluumboð fyrir Ítölsku JMG rafmagnssmákranana en þeir eru á hjólum líkt og rafmagnsllyftarar nema þeir hafa lyftitölvu (SLI) sem tilgreinir nákvæmlega hvað hátt og langt hægt er að hífa byrði. Tveir kranar 2,5t og 6t að lyftigetu voru fengnir til landsins og hafa reynst frábærlega.</p>
            <p>2015 kom svo stærsti kraninn okkar til landsins en það er Liebherr LTM 1045-3.1, 45t bílkrani sem þrátt fyrir stærð sína hentar mjög vel fyrir viðskiptavini Smákrana. 2016 bættust svo tveir UNIC smákranar í flotann, UNIC 295 og UNIC 706 en hann er með 20m bómu og 3 metra jibb framlengingu.</p>
            <p>Október 2017 fengum við okkur svo glænýjan bílkrana af gerð Liebherr LTC 1045-3.1. Hann svipaður og hinn bílkraninn okkar nema með 36 metra langri bómu sem hægt er að lengja með jibbi upp í 50 metra.</p>
            <button className="btn-aboutus" href="/contactus">Hafa Samband</button>
          </div>
        </div>
      <Employees/>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
