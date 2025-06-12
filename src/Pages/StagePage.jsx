import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import justiceLogo from '../assets/logo-justice.png.PNG';
import "../stages.css";

export default function StagePage() {
    const [selectedCard, setSelectedCard] = useState(null);

    const featureDetails = {
        "Gestion des utilisateurs": {
            description: "Système complet de gestion des habilitations pour le personnel pénitentiaire",
            technologies: ["TypeScript", "PostgreSQL", "JWT", "Bcrypt"],
            tasks: [
                "Conception du modèle de données des utilisateurs",
                "Mise en place d'un système de rôles et permissions",
                "Développement des interfaces d'administration",
                "Implémentation de l'authentification sécurisée"
            ]
        },
        "Gestion des autorisations d'accès": {
            description: "Module de gestion des accès temporaires et permanents",
            technologies: ["PDFKit", "Nodemailer", "QR Code"],
            tasks: [
                "Workflow de validation des demandes d'accès",
                "Génération automatisée des badges PDF",
                "Système de QR code pour vérification",
                "Intégration avec le registre des visiteurs"
            ]
        },
        "Reporting et traçabilité": {
            description: "Tableaux de bord et outils d'analyse pour la sécurité",
            technologies: ["Chart.js", "ExcelJS", "Cron"],
            tasks: [
                "Historique complet des mouvements",
                "Génération de rapports périodiques",
                "Alertes de sécurité configurables",
                "Export des données pour audit"
            ]
        },
        "Architecture technique": {
            description: "Refonte complète de l'infrastructure technique",
            technologies: ["Knex.js", "TypeORM", "Docker"],
            tasks: [
                "Migration des données depuis SQLite",
                "Optimisation des requêtes SQL",
                "Mise en place des migrations de base",
                "Documentation technique complète"
            ]
        }
    };

    return (
        <section className="stage-section">
            <div className="container" id="stage-content">
                {/* En-tête inchangé */}
                <motion.div
                    className="header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h1 className="title">Centre pénitentiaire</h1>
                        <p className="subtitle">Stage de 2e année — Refonte du système de gestion des accès (CDESA)</p>
                    </div>
                    <motion.img
                        src={justiceLogo}
                        alt="Logo Ministère de la Justice"
                        className="logo"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                    />
                </motion.div>

                <motion.div
                    className="content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Paragraphe et tags inchangés */}
                    <p className="paragraph">
                        Durant mon stage au sein de l'administration pénitentiaire, j'ai conçu et développé une nouvelle version complète
                        du système de gestion des accès (CDESA) pour les sites sécurisés. J'ai entièrement repensé l'application en
                        modernisant la stack technique (PostgreSQL, TypeScript, Knex.js) et en améliorant les fonctionnalités existantes
                        tout en ajoutant un module complet de gestion des véhicules.
                    </p>

                    {/* Grille des fonctionnalités avec gestion du clic */}
                    <div className="features-grid">
                        {[
                            {
                                title: "Gestion des utilisateurs",
                                features: [
                                    "Création et gestion des profils utilisateurs",
                                    "Définition des niveaux d'accès (permanent/temporaire)",
                                    "Attribution des droits par zone sécurisée",
                                    "Système d'authentification sécurisé"
                                ]
                            },
                            {
                                title: "Gestion des autorisations d'accès",
                                features: [
                                    "Enregistrement des véhicules liés aux entreprises",
                                    "Processus de validation des demandes d'accès",
                                    "Génération automatique des autorisations PDF",
                                    "Liaison avec les autorisations personnelles"
                                ]
                            },
                            {
                                title: "Reporting et traçabilité",
                                features: [
                                    "Historique complet des autorisations d'accès",
                                    "Tableau de bord administratif"
                                ]
                            },
                            {
                                title: "Architecture technique",
                                features: [
                                    "Migration de SQLite à PostgreSQL",
                                    "Refonte complète du back-end en TypeScript",
                                    "Utilisation de Knex.js pour les requêtes SQL",
                                ]
                            }
                        ].map((block, i) => (
                            <motion.div
                                key={i}
                                className="feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.4 + i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedCard(block.title)}
                            >
                                <h3 className="feature-title">{block.title}</h3>
                                <ul className="feature-list">
                                    {block.features.map((feat, j) => (
                                        <li key={j}>{feat}</li>
                                    ))}
                                </ul>
                                <div className="feature-link">Voir les détails →</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Modal des détails */}
                    <AnimatePresence>
                        {selectedCard && (
                            <motion.div
                                className="modal-overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCard(null)}
                            >
                                <motion.div
                                    className="modal-content"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 50, opacity: 0 }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="close-button"
                                        onClick={() => setSelectedCard(null)}
                                    >
                                        &times;
                                    </button>
                                    <h3>{selectedCard}</h3>
                                    <p className="modal-description">
                                        {featureDetails[selectedCard].description}
                                    </p>

                                    <div className="modal-section">
                                        <h4>Technologies utilisées</h4>
                                        <div className="tech-tags">
                                            {featureDetails[selectedCard].technologies.map(tech => (
                                                <span key={tech} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="modal-section">
                                        <h4>Tâches réalisées</h4>
                                        <ul className="task-list">
                                            {featureDetails[selectedCard].tasks.map((task, i) => (
                                                <li key={i}>{task}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        className="achievement"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="achievement-title">Réalisation complète</h3>
                        <p>
                            J'ai développé cette application de A à Z, depuis l'analyse des besoins jusqu'au déploiement,
                            en passant par la conception technique, le développement et la documentation. Le projet a été
                            intégralement livré et mis en production à la fin de mon stage.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}