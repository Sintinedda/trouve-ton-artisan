import React from "react";
import "../css/artisan.css";
import { Link, useParams } from "react-router-dom";
import data from "../json/datas.json";
import { Rating } from "react-simple-star-rating";

function Artisan() {

    const { id } = useParams();
    const artisanId = id.replace(":", "");
    const artisans = data.filter(artisan => artisan.id === artisanId);

    return(
        <main>
            {artisans.map(artisan =>
                <div className="artisan-container">
                    <h1 className="artisan-name">{artisan.name}</h1>
                    <div className="artisan-info">
                        <p className="artisan-info-txt"><strong>Note : </strong><Rating className="top-stars" initialValue={artisan.note} readonly allowFraction size={20} fillColor="#0074c7" emptyColor="#f1f8fc"/> </p>
                        <p className="artisan-info-txt"><strong>Spécialité : </strong>{artisan.specialty}</p>
                        <p className="artisan-info-txt"><strong>Localisation : </strong>{artisan.location}</p>
                        <p className="artisan-info-txt"><strong>À propos : </strong>{artisan.about}</p>
                    </div>
                    <div className="artisan-contact">
                        <div className="artisan-contact-form">
                            
                        </div>
                        <div className="artisan-contact-website">
                          <p className="artisan-website"><strong>Site web : </strong><Link className="artisan-website-link" to={artisan.website}>{artisan.website.replace('https://', "")}</Link></p>  
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Artisan;
