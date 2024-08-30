import React from "react";
import { Link } from "react-router-dom";

import Logo404 from "../assets/img/404.jpg";
import "../assets/css/404.css";

function Page404() {

    return (
        <main>
            <div className="page404-container">
                <h1 className="page404-title">Erreur 404</h1>
                <img src={Logo404} alt="Femme avec clé réparant un ordinateur" className="page404-img" />
                <p className="page404-txt">La page que vous recherchez n'existe pas.</p>
                <div className="page404-backhome-container">
                    <div className="page404-backhome">
                        <Link className="page404-backhome-link" to="/">
                            <p className="page404-backhome-txt">Retour vers l'accueil</p>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
} 

export default Page404;