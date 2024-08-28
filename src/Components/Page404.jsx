import React from "react";
import Logo404 from "../img/404.jpg";
import { Link } from "react-router-dom";
import "../css/404.css";

function Page404() {

    return (
        <main>
            <div className="page404-container">
                <h1 className="page404-title">Erreur 404</h1>
                <img src={Logo404} alt="Femme avec clé réparant un ordinateur" className="page404-img" />
                <p className="page404-txt">La page que vous recherchez n'existe pas.</p>
                <div className="page404-btn-container">
                <Link className="page404-btn-link" to="/"><button className="page404-btn">Retour vers l'accueil</button></Link>
                </div>
            </div>
        </main>
    )
} 

export default Page404;