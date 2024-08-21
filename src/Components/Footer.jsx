import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import data from "../json/datas.json";

function Footer() {

    const newData = [...new Set(data.map(item => (item.category)))];

    return(
        <footer>
            <div className="footer-container">
                <div className="footer-items">
                    <ul className="legal-items">
                        <li className="legal-item"><Link to="legal-notices" className="legal-link">Mentions légales</Link></li>
                        <li className="legal-item"><Link to="personal-data" className="legal-link">Données personnelles</Link></li>
                        <li className="legal-item"><Link to="accessibility" className="legal-link">Accessibilité</Link></li>
                        <li className="legal-item"><Link to="cookies" className="legal-link">Cookies</Link></li>
                    </ul>
                    <ul className="page-items">
                        <li className="page-item"><Link to="home" className="page-link">Accueil</Link></li>
                        {newData.map((cat, index) => {
                            return(
                                <li className="page-item" key={index}><Link to={`/category/:${cat}`} className="page-link">{cat}</Link></li>
                            )
                        })}
                    </ul>
                    <ul className="address-items">
                        <li className="address-item"><a className="footer-address-link" href="https://g.co/kgs/hFQfsG9">
                            <address className="footer-address">101 Cours Charlemagne <br />
                            CS 20033 <br />
                            69269 LYON CEDEX 02 <br />
                            France</address>
                        </a></li>
                        <li className="address-item"><a className="footer-tel" href="tel:0426734000">+33 (0)4 26 73 40 00</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;