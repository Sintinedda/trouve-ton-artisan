import React from "react";
import "../css/artisan.css";
import { Link, useParams } from "react-router-dom";
import data from "../json/datas.json";
import { Rating } from "react-simple-star-rating";
import Form from "./Form";

function Artisan() {

    const { id } = useParams();
    const artisanId = id.replace(":", "");
    const artisans = data.filter(artisan => artisan.id === artisanId);

    return(
        <main>
            {artisans.map(artisan =>
                <div className="artisan-container" key={artisan.id}>
                    <h1 className="artisan-name">{artisan.name}</h1>
                    <div className="artisan-info">
                        <div className="artisan-info-item">
                            <p className="artisan-info-title">Note : </p>
                            <p className="artisan-info-txt"><Rating className="top-stars" initialValue={artisan.note} readonly allowFraction size={25} fillColor="#0074c7" emptyColor="#9acbee"/></p>
                        </div>
                        <div className="artisan-info-item">
                            <p className="artisan-info-title">Spécialité : </p>
                            <p className="artisan-info-txt">{artisan.specialty}</p>
                        </div>
                        <div className="artisan-info-item">
                            <p className="artisan-info-title">Localisation : </p>
                            <p className="artisan-info-txt">{artisan.location}</p>
                        </div>
                        <div className="artisan-info-about">
                            <p className="artisan-info-title">À propos : </p>
                            <p className="artisan-info-txt info-txt-about">{artisan.about}</p>
                        </div>
                        <div className="artisan-info-web">
                            <p className="artisan-info-title">Site web : </p>
                            <p className="artisan-info-txt info-txt-web"><Link className="artisan-website-link" to={artisan.website}>{artisan.website.replace('https://', "")}</Link></p>
                        </div>
                    </div>
                    <div className="artisan-contact">
                        <h2 className="artisan-contact-title">Formulaire de contact</h2>
                        <div className="artisan-contact-form">
                            <Form /> 
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Artisan;
