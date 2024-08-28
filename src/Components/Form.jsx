import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../json/datas.json";
import "../css/form.css"


function Form() {

    const { id } = useParams();
    const artisanId = id.replace(":", "");
    const artisans = data.filter(artisan => artisan.id === artisanId);

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    };

    const handleSubmit = (e) => {
        if (formData !== '') {
            e.preventDefault();
            alert("Votre message à bien été envoyé à l'adresse " + artisans.map((artisan) => artisan.email));
            e.target.reset();
        } else {
            alert("Votre message n'a pas pu être délivré")
        };
    }

    return(
        <form className="contact-form" method="POST" onSubmit={handleSubmit}>
            <div className="form-inputs">
                <label htmlFor="name" className="form-label">Nom : </label>
                <input id="name" type="text" className="form-input" value={formData.username} onChange={handleChange}  required/>
            </div>
            <div className="form-inputs">
                <label htmlFor="object" className="form-label">Objet : </label>
                <input id="object" type="text" className="form-input" value={formData.object} onChange={handleChange} required />
            </div>
            <div className="form-textarea-container">
                <label htmlFor="message" className="form-label">Message : </label>
                <textarea id="message"  className="form-textarea" value={formData.message} onChange={handleChange} required ></textarea>
            </div>
            <div className="form-submit">
                <button className="form-submit-btn" type="submit">Envoyer</button>
            </div>
        </form>
    )
}

export default Form;