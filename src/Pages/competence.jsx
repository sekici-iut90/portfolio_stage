import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Competences.css'; // Assure-toi que le chemin est correct

const competencesData = [
    {
        id: 1,
        title: "Compétence 1 : Réaliser un développement d’application",
        description:
            "Mon stage au centre pénitentiaire m'a permis de mettre en pratique la compétence de réalisation d'application, évaluée par les acquis suivants : .",
        niveaux: [
            {
                niveau: "AC1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                acs: [
                    "Lors de mon stage au centre pénitentiaire de Mulhouse-Lutterbach, j’ai participé à la conception et au développement d’une application de gestion des accès et autorisations, en collaboration avec le service CLSI. J’ai d’abord recueilli et analysé les besoins fonctionnels et non fonctionnels, portant sur la gestion des utilisateurs, des véhicules, ainsi que des associations et entreprises liées.\n" +
                    "\n" +
                    "J’ai ensuite formalisé ces exigences dans un Modèle Logique de Données détaillé, intégrant les différentes entités et leurs relations, en veillant à respecter les contraintes métier spécifiques au contexte pénitentiaire. Ce modèle a été révisé plusieurs fois pour garantir sa pertinence et sa robustesse.\n" +
                    "\n" +
                    "Pour la partie interface, j’ai conçu des maquettes interactives avec Figma, en privilégiant une ergonomie simple et efficace, et les ai ajustées selon les retours des utilisateurs.\n" +
                    "\n" +
                    "Techniquement, j’ai développé l’application en utilisant React et Tailwind CSS pour le frontend, Electron.js pour créer une application desktop multiplateforme, et Node.js avec Knex.js pour la gestion de la base PostgreSQL au backend. Cette architecture m’a permis de fournir une solution performante, sécurisée et adaptée aux besoins du centre.\n" +
                    "\n" +
                    "Cette expérience m’a permis de mettre en pratique la traduction des spécifications en une application fonctionnelle complète, alliant rigueur dans la modélisation des données et maîtrise des technologies modernes full-stack."

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
            },
            {
                niveau: "Niveau 3 (A3) - Semestres 5 & 6",
                acs: [
                    "Choisir et implémenter les architectures adaptées",
                    "Faire évoluer une application existante",
                    "Intégrer des solutions dans un environnement de production",
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Compétence 2 : Optimiser des applications",
        description: "",
        niveaux: [
            {
                niveau: "Niveau 1 (A1) - Semestres 1 & 2",
                acs: [
                    "Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données…)",
                    "Comparer des algorithmes pour des problèmes classiques (tris simples, recherche…)",
                    "Formaliser et mettre en œuvre des outils mathématiques pour l'informatique",
                ],
            },
            {
                niveau: "Niveau 2 (A2) - Semestres 3 & 4",
                acs: [
                    "Choisir des structures de données complexes adaptées au problème",
                    "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
                    "Comprendre les enjeux et moyens de sécurisation des données et du code",
                    "Évaluer l'impact environnemental et sociétal des solutions proposées",
                ],
            },
            {
                niveau: "Niveau 3 (A3) - Semestres 5 & 6",
                acs: [
                    "Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire…)",
                    "Profiler, analyser et justifier le comportement d'un code existant",
                    "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application",
                ],
            },
        ],
    },
    // Ajoute les autres compétences ici si besoin
];

function Competence({ competence }) {
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
                            <motion.ul
                                id={`niveau-content-${competence.id}-${i}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ac-list"
                            >
                                {niveau.acs.map((ac, j) => (
                                    <li key={j}>{ac}</li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

export default function Competences() {
    return (
        <div className="competences-container">
            <h1 className="page-title">Compétences du B.U.T. Informatique</h1>
            {competencesData.map((comp) => (
                <Competence key={comp.id} competence={comp} />
            ))}
        </div>
    );
}
