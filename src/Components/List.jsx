import React from "react";
import data from "../json/datas.json";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "../css/list.css"

function List() {

    const location = useLocation();
    const category = location.pathname.replace(/\W/g, '')
    
    var cat;
    if (category === 'BC3A2timent') {
        cat = 'Bâtiment';
    } else {
        cat = category;
    }

    const artisans = data.filter(artisan => artisan.category === cat) 

    return(
        <main>
            <div className="category-container">
                <h1 className="category-title">{cat}</h1>
                <div className="artisan-cards-container">
                    {artisans.map(artisan =>
                        <div className="artisan-card-container">
                            <div className="artisan-card">
                                <h3 className="artisan-card-name">{artisan.name}</h3>
                                <p className="artisan-card-txt"><strong>Note : </strong><Rating className="top-stars" initialValue={artisan.note} readonly allowFraction size={20} fillColor="#0074c7" emptyColor="#f1f8fc"/> </p>
                                <p className="artisan-card-txt"><strong>Spécialité : </strong>{artisan.specialty}</p>
                                <p className="artisan-card-txt"><strong>Localisation : </strong>{artisan.location}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default List;