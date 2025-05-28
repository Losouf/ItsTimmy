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
                        {["Site Web","Application Desktop", "Application Mobile", "Autre"].map((service, index) => (
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
  <input type="text" name="name" placeholder="Votre nom" autoComplete="name" />
  <input type="email" name="email" placeholder="Votre email" autoComplete="email" />
  <input type="tel" name="phone" placeholder="Votre téléphone" autoComplete="tel" />
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
