import React from "react";
import data from "../json/datas.json";
import {  useParams, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "../css/list.css";

function List() {

    const { cat } = useParams();
    const category = cat.replace(":", "");
    const artisans = data.filter(artisan => artisan.category === category) ;

    return(
        <main>
            <div className="category-container">
                <h1 className="category-title">{category}</h1>
                <div className="artisan-cards-container">
                    {artisans.map(artisan =>
                        <div className="artisan-card-container" key={artisan.id}>
                            <Link to={`/artisan/:${artisan.id}`}>
                                <div className="artisan-card">
                                    <h3 className="artisan-card-name">{artisan.name}</h3>
                                    <p className="artisan-card-txt"><strong>Note : </strong><Rating className="top-stars" initialValue={artisan.note} readonly allowFraction size={20} fillColor="#0074c7" emptyColor="#9acbee"/> </p>
                                    <p className="artisan-card-txt"><strong>Spécialité : </strong>{artisan.specialty}</p>
                                    <p className="artisan-card-txt"><strong>Localisation : </strong>{artisan.location}</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default List;