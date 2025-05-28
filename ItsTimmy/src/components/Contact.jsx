import React, { useState } from "react";
import "./Contact.css";

const services = [
  "Site vitrine",
  "Application mobile",
  "E-commerce",
  "Application sur mesure",
  "Autre"
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section className="contact-section" id='Contact'>
        <h2>Contactez-nous</h2>

        <div className="contact-form">
            <form>
                <div className="service-select">
                    <h3>Quel service souhaitez-vous ?</h3>
                    <div className="service-options">
                        {["Site vitrine", "Application mobile", "E-commerce", "Application sur mesure", "Autre"].map((service, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`service-button ${selectedService === service ? 'active' : ''}`}
                            onClick={() => setSelectedService(service)}>
                            {service}
                        </button>
                        ))}
                    </div>
                </div>

                <div className="form-row">
                    <input type="text" placeholder="Votre nom" />
                    <input type="email" placeholder="Votre email" />
                    <input type="tel" placeholder="Votre téléphone" />
                </div>
                <input type="text" placeholder="Sujet du mail" />
                <textarea placeholder="Votre message" />

                <button type="submit">Envoyer</button>
            </form>
        </div>
    </section>
  );
};

export default Contact;
