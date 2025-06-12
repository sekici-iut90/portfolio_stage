import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Competences.css';
import ajoutAuto from '../assets/ajout_auto.png';
import tableau from '../assets/tableau.png';

const competencesData = [
    {
        id: 1,
        title: "Compétence 1 : Réaliser un développement d’application",
        description:
            "Mon stage au centre pénitentiaire m'a permis de mettre en pratique la compétence de réalisation d'application, évaluée par les acquis suivants : .",
        niveaux: [
            {
                niveau: "AC1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                acs: (handleImageClick) => [
                    <>
                        <p>
                            Lors de mon stage au centre pénitentiaire de Mulhouse-Lutterbach, j’ai participé à la conception et au développement d’une application de gestion des accès et autorisations, en autonomie. J’ai commencé par recueillir et analyser les besoins fonctionnels, portant notamment sur la gestion des utilisateurs, des véhicules, ainsi que des associations et entreprises partenaires qui sont utiles afin de crée l'autorisation d'accès (<strong>Figure 1</strong>).                        </p>
                        <figure className="image-container">
                            <img
                                src={ajoutAuto}
                                alt="Schéma des besoins fonctionnels"
                                className="illustration-img zoomable"
                                onClick={() => handleImageClick(ajoutAuto)}
                                style={{ cursor: 'zoom-in' }}
                            />
                            <figcaption className="image-caption">Figure 1 : Formulaire qui permet d'ajouter une autorisation</figcaption>
                        </figure>

                        <p>
                            Ces exigences ont ensuite été formalisées dans un modèle de données structuré, intégrant les différentes entités (utilisateurs, véhicules, rôles, structures…) et leurs relations, tout en respectant les contraintes métier spécifiques au contexte pénitentiaire.                        </p>
                        <div className="image-placeholder">[Insérer image modélisation des données]</div>
                        <p>
                            Techniquement, j’ai développé l’application en utilisant React et Tailwind CSS pour le frontend, combinés à Electron.js pour en faire une application desktop multiplateforme. Le backend repose sur un serveur Node.js avec Knex.js pour la gestion des requêtes SQL vers une base PostgreSQL.                        </p>
                        <div className="image-placeholder">[Insérer schéma architecture technique]</div>
                        <figure className="image-container">
                            <img
                                src={tableau}
                                alt="Schéma des besoins fonctionnels"
                                className="illustration-img zoomable"
                                onClick={() => handleImageClick(ajoutAuto)}
                                style={{ cursor: 'zoom-in' }}
                            />
                            <figcaption className="image-caption">Figure 1 : Tableau regroupant toutes les autorisations d'accès</figcaption>
                        </figure>
                        <p>
                            Cette architecture m’a permis de fournir une solution stable, sécurisée et efficace, entièrement adaptée aux besoins du centre. Ce projet m’a permis de mettre en œuvre l’ensemble du cycle de développement d’une application métier, de la phase d’analyse jusqu’à l’implémentation technique, en mobilisant mes compétences en conception de base de données et en développement full-stack.                        </p>
                    </>
                ],
            },
            {
                niveau: "Niveau 2 (A2) - Semestres 3 & 4",
                acs: [
                    "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                    "Appliquer des principes d’accessibilité et d’ergonomie",
                    "Adopter de bonnes pratiques de conception et de programmation",
                    "Vérifier et valider la qualité de l’application par les tests",
                ],
            }
        ],
    },
    // autres compétences...
];

function Competence({ competence, handleImageClick }) {
    const [openNiveauIndex, setOpenNiveauIndex] = useState(null);

    const toggleNiveau = (index) => {
        setOpenNiveauIndex(openNiveauIndex === index ? null : index);
    };

    return (
        <div className="competence-card">
            <h2 className="competence-title">{competence.title}</h2>
            {competence.description && <p className="competence-desc">{competence.description}</p>}
            {competence.niveaux.map((niveau, i) => (
                <div key={i} className="niveau-section">
                    <button
                        className="niveau-button"
                        onClick={() => toggleNiveau(i)}
                        aria-expanded={openNiveauIndex === i}
                        aria-controls={`niveau-content-${competence.id}-${i}`}
                    >
                        {niveau.niveau}
                        <span className={`arrow ${openNiveauIndex === i ? 'open' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {openNiveauIndex === i && (
                            <motion.div
                                id={`niveau-content-${competence.id}-${i}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ac-list"
                            >
                                {Array.isArray(niveau.acs)
                                    ? niveau.acs.map((ac, j) => (
                                        <div key={j} className="ac-item">
                                            <li>{ac}</li>
                                        </div>
                                    ))
                                    : <div className="ac-item">{niveau.acs(handleImageClick)}</div>}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

export default function Competences() {
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleImageClick = (src) => {
        setZoomedImage(src);
    };

    const closeImage = () => {
        setZoomedImage(null);
    };

    return (
        <div className="competences-container">
            <h1 className="page-title">Compétences du B.U.T. Informatique</h1>
            {competencesData.map((comp) => (
                <Competence key={comp.id} competence={comp} handleImageClick={handleImageClick} />
            ))}

            <AnimatePresence>
                {zoomedImage && (
                    <motion.div
                        className="image-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeImage}
                    >
                        <img src={zoomedImage} alt="Zoom" className="zoomed-img" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
