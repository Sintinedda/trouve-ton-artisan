import React from "react";
import "../css/home.css";
import data from "../json/datas.json";
import { Rating } from "react-simple-star-rating";


function Home() {

    const isTop = data.filter(i => i.top === true)

    return(
        <main>
            <div className="stages">
                <h1 className="title">Comment trouver mon artisan ?</h1>
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
            <div className="tops">
                <h2 className="title">Artisans du mois</h2>
                    <div className="top-container">
                        {isTop.map((top) => (
                                <div className="top">
                                    <h3 className="top-title">{top.name}</h3>
                                    <p className="top-txt"><strong>Note : </strong><Rating className="top-stars" initialValue={top.note} readonly allowFraction size={20} fillColor="#f1f8fc" emptyColor="#384050"/> </p>
                                    <p className="top-txt"><strong>Spécialité : </strong>{top.specialty}</p>
                                    <p className="top-txt"><strong>Localisation : </strong>{top.location}</p>
                                </div>
                        ))}
                    </div>
            </div>
        </main>
    )
}

export default Home;