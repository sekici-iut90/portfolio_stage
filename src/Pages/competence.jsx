import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Competences.css';
import ajoutAuto from '../assets/ajout_auto.png';
import tableau from '../assets/tableau.png';
import pdf from '../assets/pdf.png'
import code from '../assets/CODE.png'
import code1 from '../assets/code2.png'
import mld  from '../assets/mld2.png'
import user  from '../assets/utilisateur.png'
import scheam  from '../assets/schema.png'
import lo  from '../assets/logique.png'
import test  from '../assets/test.png'
import voiture  from '../assets/voiture.png'
import uti  from '../assets/uti.png'

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
                        <figure className="image-container">
                            <img
                                src={lo}
                                alt="Schéma des besoins fonctionnels"
                                className="illustration-img zoomable"
                                onClick={() => handleImageClick(lo)}
                                style={{ cursor: 'zoom-in' }}
                            />
                            <figcaption className="image-caption">Figure 3 : Architecture technique de l'application</figcaption>
                        </figure>
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
            }
        ],
    },
    {id: 2,
    title: "Compétence 4 :  Gérer des données de l’information",
    niveaux: [
    {
        niveau: "AC1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
        acs: (handleImageClick) => [
            <>
                <figure className="image-container">
                    <img
                        src={mld}
                        alt="Schéma des besoins fonctionnels"
                        className="illustration-img zoomable"
                        onClick={() => handleImageClick(mld)}
                        style={{ cursor: 'zoom-in' }}
                    />
                    <figcaption className="image-caption">Figure 8 : Modèle logique de données final de l’application de gestion des autorisations</figcaption>
                </figure>
                 <p>
                        J’ai travaillé à partir d’un brouillon de Modèle Logique de Données (MLD) existant. Après l’avoir confronté aux besoins du service et aux cas d’usage concrets, j’ai conçu un <strong>modèle complet</strong> intégrant de nouvelles entités nécessaires à la gestion des autorisations d’accès, des utilisateurs, des véhicules, des structures, ainsi que des rôles et des services.
                    </p>

                    <p>
                        Le <strong>modèle présenté en Figure 8</strong> est le résultat de cette démarche itérative. Il intègre notamment les entités <code>users</code>, <code>roles</code>, <code>services</code>, <code>structures</code>, <code>entreprises</code>, <code>vehicules</code> ou encore <code>autorisations</code>, et illustre les relations entre ces éléments. J’ai notamment :
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Refactoré certaines relations complexes (<code>ManyToMany</code>) en relations plus simples (<code>OneToMany</code>/<code>ManyToOne</code>).</li>
                       
                        <li>Ajouté des champs de traçabilité comme <code>createdAt</code>, <code>updatedAt</code>, <code>createdBy</code> et <code>updatedBy</code>.</li>
                      
                     
                    </ul>

                    <p>Ce travail m’a permis de renforcer mes compétences en modélisation de données et en optimisation de schémas relationnels, avec une approche orientée métier.</p>
                </>

                ],
    },
        {
            niveau: "    AC2 : Assurer la confidentialité des données (intégrité et sécurité)",
            acs: (handleImageClick) => [
                <>
                    <figure className="image-container">
                        <img
                            src={user}
                            alt="Interface de gestion des rôles et permissions"
                            className="illustration-img zoomable"
                            onClick={() => handleImageClick(user)}
                            style={{ cursor: 'zoom-in' }}
                        />
                        <figcaption className="image-caption">
                            Figure 9 : Interface de gestion des utilisateurs
                        </figcaption>
                    </figure>

                    <p>
                        Dans le cadre de mon stage, j’ai mis en œuvre plusieurs mécanismes visant à garantir la <strong>sécurité, la confidentialité et l’intégrité des données</strong> de l’application de gestion des autorisations d’accès (<strong>Figure 9</strong>).
                    </p>

                    <figure className="image-container">
                        <img
                            src={scheam}
                            alt="Interface de gestion des rôles et permissions"
                            className="illustration-img zoomable"
                            onClick={() => handleImageClick(scheam)}
                            style={{ cursor: 'zoom-in' }}
                        />
                        <figcaption className="image-caption">
                            Figure 10 : Exemple de logique d’autorisation implémentée
                        </figcaption>
                    </figure>

                    <p>
                        J’ai conçu une gestion fine des <strong>permissions</strong> basée sur les rôles attribués aux utilisateurs (valideur, portier, administrateur, etc.). Les <strong>données sont filtrées dynamiquement</strong> selon ces rôles. Par exemple, un portier peut consulter les autorisations, tandis qu’un utilisateur basique peut également en créer ou les modifier.
                    </p>


                    <figure className="image-container">
                        <img
                            src={test}
                            alt="champs de tracabilité"
                            className="illustration-img zoomable"
                            onClick={() => handleImageClick(test)}
                            style={{ cursor: 'zoom-in' }}
                        />
                        <figcaption className="image-caption">
                            Figure 11 : Champs de traçabilité
                        </figcaption>
                    </figure>
                    <p>
                        J’ai également ajouté des champs de <strong>traçabilité</strong> tels que <code>createdAt</code>, <code>createdBy</code>, <code>updatedAt</code> et <code>updatedBy</code>, utiles pour les audits internes et le suivi des modifications (<strong>Figure 11</strong>).
                    </p>

                </>
            ],
        },
        {
            niveau: " AC4 : Manipuler des données hétérogènes",
            acs: (handleImageClick) => [
                <>

                    <p>
                        Durant mon stage, j’ai manipulé des données hétérogènes issues de différentes entités liées aux autorisations d’accès (personnes, véhicules, rôles, services, entreprises, etc.). Ces données, stockées dans une base PostgreSQL et interrogeables via Knex.js, ont été exploitées pour alimenter des interfaces dynamiques comme des tableaux filtrables (<strong>Figure 11</strong>).
                    </p>

                    <figure className="image-container">
                        <img
                            src={voiture}
                            alt="champs de tracabilité"
                            className="illustration-img zoomable"
                            onClick={() => handleImageClick(voiture)}
                            style={{ cursor: 'zoom-in' }}
                        />
                        <figcaption className="image-caption">
                            Figure 12 : Formulaire d’ajout d’une autorisation, avec champs liés dynamiquement
                        </figcaption>
                    </figure>

                    <p>
                        J’ai conçu des formulaires React pour la saisie et la modification des données, en assurant leur validation et en reliant dynamiquement certains champs. Par exemple, la liste des véhicules est filtrée automatiquement selon l’entreprise ou l’association sélectionnée (<strong>Figure 12</strong>).
                    </p>

                    <figure className="image-container">
                        <img
                            src={uti}
                            alt="champs de tracabilité"
                            className="illustration-img zoomable"
                            onClick={() => handleImageClick(uti)}
                            style={{ cursor: 'zoom-in' }}
                        />
                        <figcaption className="image-caption">
                            Figure 13 : Exemple de requête SQL avec jointures multiples via Knex.js
                        </figcaption>
                    </figure>

                    <p>
                        J’ai mis en place des <strong>requêtes relationnelles complexes</strong> pour croiser les données de plusieurs tables. Les jointures entre utilisateurs, rôles, services et véhicules m’ont permis d’afficher des vues synthétiques et contextualisées, notamment dans la page d’historique ou les exports administratifs (<strong>Figure 13</strong>).
                    </p>


                    <p>
                        Cette manipulation de données m’a permis de comprendre comment <strong>structurer, lier et transformer</strong> les informations pour qu’elles soient utilisables aussi bien côté backend que frontend. Elle m’a également appris à <strong>gérer la cohérence des données</strong> lors des échanges entre les modules applicatifs (<strong>Figure 8</strong>).
                    </p>
                </>
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
