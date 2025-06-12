import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Competences.css';
import ajoutAuto from '../assets/ajout_auto.png';
import tableau from '../assets/tableau.png';
import pdf from '../assets/pdf.png'
import code from '../assets/CODE.png'
import code1 from '../assets/code2.png'

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
                        <figure className="image-container">
                            <img
                                src={tableau}
                                alt="Schéma des besoins fonctionnels"
                                className="illustration-img zoomable"
                                onClick={() => handleImageClick(tableau)}
                                style={{ cursor: 'zoom-in' }}
                            />
                            <figcaption className="image-caption">Figure 2 : Tableau regroupant toutes les autorisations d'accès</figcaption>
                        </figure>

                        <p>En ce qui concerne la <strong>Figure 2</strong>, ’ai conçu et développé une interface de gestion des autorisations permettant de visualiser de manière claire et organisée les différentes demandes d’accès. Chaque ligne du tableau récapitule les informations essentielles telles que l’identité du demandeur, le type d’autorisation (temporaire ou permanente), l’organisme concerné, le motif, les dates de début et de fin, ainsi que le statut actuel de l’autorisation. Cette interface facilite la recherche et le suivi des autorisations grâce à un champ de recherche intégré. Ce tableau constitue un outil central pour le pilotage opérationnel des accès, garantissant une traçabilité précise et une gestion efficace des droits.</p>
                        <p>
                            Cette architecture m’a permis de fournir une solution stable, sécurisée et efficace, entièrement adaptée aux besoins du centre. Ce projet m’a permis de mettre en œuvre l’ensemble du cycle de développement d’une application métier, de la phase d’analyse jusqu’à l’implémentation technique, en mobilisant mes compétences en conception de base de données et en développement full-stack.                        </p>
                    </>

                ],
            },
            {
                niveau: "    AC2 : Appliquer des principes d’accessibilité et d’ergonomie",
                acs: (handleImageClick) => [
                    <>
                        <p>Côté développement, j’ai implémenté plusieurs fonctionnalités visant à rendre l’interface plus intuitive et pratique pour les utilisateurs. Tout d’abord, j’ai intégré une barre de recherche dynamique qui filtre les données en temps réel, comme illustré à la <strong>Figure 2</strong>.
                        </p>
                            <p>Cette fonctionnalité permet de retrouver rapidement des éléments spécifiques dans les listes, ce qui facilite grandement la navigation et la gestion des informations.

                                J’ai également ajouté un bouton permettant de copier facilement des informations dans le presse-papier. </p>
                        <p>Cette option simplifie le travail des utilisateurs en leur évitant des manipulations fastidieuses, notamment lorsqu’ils doivent retranscrire des données dans d’autres documents ou applications.
                        </p>
                            <p>Enfin, afin de réduire le risque d’erreurs lors de la validation des autorisations, j’ai développé une fonctionnalité qui permet de visualiser directement le PDF de l’autorisation d’accès avant son envoi, comme présenté à la <strong>Figure 4</strong>. Cette prévisualisation offre un dernier contrôle visuel aux utilisateurs, leur assurant que toutes les informations sont correctes avant la finalisation du processus.</p>
                        <figure className="image-container">
                            <img
                                src={pdf}
                                alt="Schéma des besoins fonctionnels"
                                className="illustration-img zoomable"
                                onClick={() => handleImageClick(pdf)}
                                style={{ cursor: 'zoom-in' }}
                            />
                            <figcaption className="image-caption">Figure 4 : La visualisation du pdf d'autorisation d'accès</figcaption>
                        </figure>


                    </>
                ]

            },
            {
                niveau: "AC3 : Adopter de bonnes pratiques de conception et de programmation",
                acs: (handleImageClick) => [
                    <>
                        <figure className="image-container">
                            <img
                                src={code}
                                alt="Schéma des besoins fonctionnels"
                                className="illustration-img zoomable"
                                onClick={() => handleImageClick(code)}
                                style={{ cursor: 'zoom-in' }}
                            />
                            <figcaption className="image-caption">Figure 5 : extrait de code pour la gestion des autorisations validées côté main process </figcaption>
                        </figure>
                        <figure className="image-container">
                            <img
                                src={code1}
                                alt="Schéma des besoins fonctionnels"
                                className="illustration-img zoomable"
                                onClick={() => handleImageClick(code1)}
                                style={{ cursor: 'zoom-in' }}
                            />
                            <figcaption className="image-caption">Figure 6 : Fonction de récupération des autorisations validées (pour l'administrateur)</figcaption>
                        </figure>
                    <p>Pendant mon stage, j’ai veillé à appliquer plusieurs bonnes pratiques, tant au niveau de la conception que du développement. </p>
                    <p>En conception, j’ai participé à la modélisation des structures de données pour assurer leur cohérence et faciliter leur manipulation dans l’application. Par exemple, dans la gestion des autorisations, j’ai organisé les relations entre utilisateurs, services, structures et entités associées (personnes, entreprises, associations) de manière claire et optimisée comme illustré à la <strong> Figure 5</strong>, afin d’éviter des jointures complexes inutiles et de simplifier les requêtes.
                    </p>
                        <p>Au niveau du développement, j’ai structuré le code pour séparer clairement la logique métier de la communication entre backend et frontend. La fonction dédiée aux requêtes SQL, détaillée à la <strong>Figure 6</strong>, est distincte du handler ipcMain.handle qui sert d’interface IPC. Cette séparation améliore la lisibilité du code, facilite la maintenance, et permet de réutiliser les fonctions métier facilement.</p>
                        <p>Grâce à ce stage, j’ai renforcé mes compétences en architecture logicielle, en organisation du code et en programmation propre, tout en découvrant l’importance de penser la maintenabilité et la sécurité dès la conception.</p>



                    </>
                ]

            },
            {
                niveau: "       AC4 : Vérifier et valider la qualité de l’application par les tests",
                acs: [
                    "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                    "Appliquer des principes d’accessibilité et d’ergonomie",
                    "Adopter de bonnes pratiques de conception et de programmation",
                    "Vérifier et valider la qualité de l’application par les tests",
                ],
            }
        ],
    },
    {id: 1,
    title: "Compétence 4 :  Gérer des données de l’information",
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
            niveau: "    AC2 : Assurer la confidentialité des données (intégrité et sécurité)",
            acs: [
                "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                "Appliquer des principes d’accessibilité et d’ergonomie",
                "Adopter de bonnes pratiques de conception et de programmation",
                "Vérifier et valider la qualité de l’application par les tests",
            ],
        },
        {
            niveau: " AC4 : Manipuler des données hétérogènes",
            acs: [
                "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                "Appliquer des principes d’accessibilité et d’ergonomie",
                "Adopter de bonnes pratiques de conception et de programmation",
                "Vérifier et valider la qualité de l’application par les tests",
            ],
        }
],
},];

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
