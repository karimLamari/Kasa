import React from 'react';
import './FicheLogement.scss';
import { useParams } from 'react-router-dom';
import logements from '../../assets/data/data.json';
import DropDown from '../DropDownButton/DropDownButton';
import Tags from '../Tags/Tags';
import { FaStar } from "react-icons/fa";
import { Navigate } from 'react-router-dom';
import Slideshow from '../Slideshow/Slideshow';

const FicheLogement = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <Navigate to="/NotFound" replace />;
    }

    return (
        <div className="fiche-logement">
            <Slideshow images={logement.pictures} />

            <div className="fiche-logement__wrapper">
                <div className="fiche-logement__details">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <Tags tags={logement.tags} />
                </div>

                <div className="fiche-logement__host">
                    <div className="fiche-logement__host__info">
                        <p>{logement.host.name}</p>
                        <img
                            src={logement.host.picture}
                            alt={logement.host.name}
                            className="fiche-logement__host__image"
                        />
                    </div>
                    <div className="fiche-logement__host__rate">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                                key={i}
                                color={i < parseInt(logement.rating) ? "#FF6060" : "#E3E3E3"}
                                size={24}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="fiche-logement__dropdowns">
                <DropDown title="Description" content={logement.description} />
                <DropDown
                    title="Équipements"
                    content={
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
};

export default FicheLogement;
