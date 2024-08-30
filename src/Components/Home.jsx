import React from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

import "../assets/css/home.css";
import data from "../assets/json/datas.json";


function Home() {

    const isTop = data.filter(i => i.top === true)

    return(
        <main>
            <div className="stages">
                <h1 className="h1-title">Comment trouver mon artisan ?</h1>
                <div className="stages-container">
                    <div className="stage">
                        <p className="stage-title">Étape 1 :</p>
                        <p className="stage-text">Choisir la catégorie d'artisanat dans le menu</p>
                    </div>
                    <div className="stage">
                        <p className="stage-title">Étape 2 :</p>
                        <p className="stage-text">Choisir un artisan</p>
                    </div>
                    <div className="stage">
                        <p className="stage-title">Étape 3 :</p>
                        <p className="stage-text">Contacter l'artisan via le formulaire de contact</p>
                    </div>
                    <div className="stage">
                        <p className="stage-title">Étape 4 :</p>
                        <p className="stage-text">Une réponse vous sera apportée sous 48 heures</p>
                </div>
            </div>
            </div>
            <div className="tops">
                <h2 className="h2-title">Artisans du mois</h2>
                    <div className="artisan-cards-container">
                        {isTop.map((top) => (
                                <div className="artisan-card-container" key={top.id}>
                                    <Link to={`/artisan/:${top.id}`}>
                                        <div className="artisan-card">
                                            <h3 className="artisan-card-name">{top.name}</h3>
                                            <p className="artisan-card-txt"><strong>Note : </strong><Rating className="top-stars" initialValue={top.note} readonly allowFraction size={25} fillColor="#0074c7" emptyColor="#9acbee"/></p>
                                            <p className="artisan-card-txt"><strong>Spécialité : </strong>{top.specialty}</p>
                                            <p className="artisan-card-txt"><strong>Localisation : </strong>{top.location}</p>
                                        </div>
                                    </Link>
                                </div>
                        ))}
                    </div>
            </div>
        </main>
    )
}

export default Home;