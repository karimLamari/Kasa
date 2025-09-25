import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import bannerApropos from '../assets/images/apropos.png';
import DropDownButton from '../components/DropDownButton/DropDownButton';
import Footer from '../components/Footer/Footer';
import './Apropos.scss';

const Apropos = () => {
    return (
        <div className="apropos">
            <Header/>
            <Banner
                image={bannerApropos}
                text=""
            />
            <DropDownButton 
  title="Fiabilité"
  content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
/>
                        <DropDownButton 
  title="Respect"
  content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
/>
            <DropDownButton 
  title="Service"
  content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
/>
            <DropDownButton 
  title="Sécurité"
  content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
/>
            <Footer/>
        </div>
    );
};

export default Apropos;