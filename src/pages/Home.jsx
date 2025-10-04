import Logements from '../components/Logements/Logements.jsx';
import Banner from '../components/Banner/Banner.jsx';
import bannerAccueil from '../assets/images/accueil.png';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Banner 
                image={bannerAccueil}
                text="Chez vous, partout et ailleurs"
            /> 
            <Logements/>
        </div>
    );
};

export default Home;