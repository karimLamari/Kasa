import React from 'react';
import Header from '../components/Header/Header.jsx';
import Logements from '../components/Logements/Logements.jsx';

const Home = () => {
    return (
        <div>
            <Header />      
            <Logements/>
        </div>
    );
};

export default Home;