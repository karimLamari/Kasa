import React from 'react';
import Header from '../components/Header/Header.jsx';
import Logements from '../components/Logements/Logements.jsx';
import Banner from '../components/Banner/Banner.jsx';
import Footer from '../components/Footer/Footer.jsx';
import bannerAccueil from '../assets/images/accueil.png';

const Home = () => {
    return (
        <div> 
            <Banner 
                image={bannerAccueil}
                text="Chez vous, partout et ailleurs"
            /> 
            <Logements/>
        </div>
    );
};

export default Home;