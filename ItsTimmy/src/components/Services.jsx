import React from 'react';
import './Services.css';

const offers = [
  {
    title: 'Base',
    subtitle: 'Pour les petits bugets mais les grand projets',
    price: '€',
    features: [
      'Maquettage',
      'Développement',
      'Déploiement',
      'Contrat de maintenance',
    ],
  },
  {
    title: 'Base',
    subtitle: 'Pour les bugets moyens et les grand projets',
    price: '€€',
    features: [
      'Maquettage',
      'Développement',
      'Déploiement',
      'Contrat de maintenance',
    ],
  },  
  {
    title: 'Base',
    subtitle: 'Pour les grands bugets et les grand projets',
    price: '€€€',
    features: [
      'Maquettage',
      'Développement',
      'Déploiement',
      'Contrat de maintenance',
    ],
  },
];

const Services = () => {
  return (
    <section className="services-section" id='Services'>
        <h2 className="services-title">Nos Services - Web</h2>
        <div className="services-container">
            {offers.map((offer, i) => (
            <div className="card" key={i}>
                <h3 className="card-title">{offer.title}</h3>
                <p className="card-subtitle">{offer.subtitle}</p>
                <div className="card-price">
                    <span>{offer.price}</span>
                </div>
                
                <ul className="card-features">
                    {offer.features.map((f, j) => (
                        <li key={j}>{f}</li>
                    ))}
                </ul>

                <button className="card-btn">Faire un devis</button>
            </div>
            ))}
        </div>
    </section>
  );
};

export default Services;
