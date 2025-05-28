import React from 'react';
import './Services.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const offers = [
  {
    title: 'Essentielle',
    subtitle: 'Offrez à votre activité une vitrine claire et accessible dès maintenant.',
    price: '€',
    features: [
      { label: 'Site vitrine', included: true },
      { label: 'Développement sur mesure', included: true },
      { label: 'Responsive', included: true },
      { label: 'Design personnalisé', included: true },
      { label: 'Référencement SEO', included: true },
      { label: 'Assistance technique', included: true },
      { label: 'Interface administrateur', included: false },
      { label: 'Multi-langue', included: false },
      { label: 'Analytics et suivi', included: false }
    ],
  },
  {
    title: 'Professionnel',
    subtitle: 'Un site complet et élégant pour inspirer confiance à vos clients.',
    price: '€€',
    features: [
      { label: 'Site vitrine', included: true },
      { label: 'Développement sur mesure', included: true },
      { label: 'Responsive', included: true },
      { label: 'Design personnalisé', included: true },
      { label: 'Référencement SEO', included: true },
      { label: 'Assistance technique', included: true },
      { label: 'Interface administrateur', included: false },
      { label: 'Multi-langue', included: true },
      { label: 'Analytics et suivi', included: false }
    ],
  },  
  {
    title: 'Premium',
    subtitle: 'Un site sur-mesure, évolutif et optimisé pour booster votre business.',
    price: '€€€',
    features: [
      { label: 'Site vitrine', included: true },
      { label: 'Développement sur mesure', included: true },
      { label: 'Responsive', included: true },
      { label: 'Design personnalisé', included: true },
      { label: 'Référencement SEO', included: true },
      { label: 'Assistance technique', included: true },
      { label: 'Interface administrateur', included: true },
      { label: 'Multi-langue', included: true },
      { label: 'Analytics et suivi', included: true }
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
                  {offer.features.map((feature, j) => (
                    <li key={j} className={feature.included ? 'included' : 'excluded'}>
                      <FontAwesomeIcon icon={feature.included ? faCheck : faTimes} className="feature-icon" />
                      <span>{feature.label}</span>
                    </li>
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
