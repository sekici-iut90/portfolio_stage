import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import justiceLogo from '../assets/logo-justice.png.PNG';
import "../stages.css";

export default function StagePage() {
    const [selectedCard, setSelectedCard] = useState(null);

    const featureDetails = {
        "Gestion des utilisateurs": {
            description: (
                <>
                    <p>Ce module a été conçu pour offrir au système CDESA une gestion centralisée et sécurisée des habilitations du personnel pénitentiaire. Il permet la création et la supervision des profils utilisateurs avec un contrôle granulaire des accès.</p>

                    <h4>Fonctionnalités clés :</h4>
                    <ul>
                        <li>Double système d'habilitation (permanent/temporaire)</li>
                        <li>Attribution des droits par zone sécurisée (sas, quartiers, zones techniques)</li>
                        <li>Workflow de validation hiérarchique</li>
                        <li>Journalisation complète des modifications</li>
                    </ul>

                    <h4>Implémentation technique :</h4>
                    <ul>
                        <li>TypeScript avec validation Zod des entrées</li>
                        <li>PostgreSQL pour le stockage des historiques</li>
                        <li>Chiffrement des données sensibles</li>
                        <li>Mécanisme de révocation instantanée</li>
                    </ul>
                </>
            )
        },
        "Gestion des autorisations d'accès": {
            description: (
                <>
                    <p>Système complet de gestion des circulations dans l'établissement, incluant la nouveauté de la gestion véhicule/personne.</p>

                    <h4>Processus innovant :</h4>
                    <ol>
                        <li>Saisie de la demande (plateforme ou formulaire papier scanné)</li>
                        <li>Vérification automatique des antécédents</li>
                        <li>Validation par le service sécurité</li>
                        <li>Génération du badge avec QR code dynamique</li>
                    </ol>

                    <h4>Module véhicules :</h4>
                    <ul>
                        <li>Fiche véhicule liée au conducteur habilité</li>
                        <li>Contrôle technique et assurance à jour</li>
                        <li>Génération de l'autorisation spécifique</li>
                        <li>Intégration avec le registre des entrées</li>
                    </ul>
                </>
            )
        },
        "Reporting et traçabilité": {
            description: (
                <>
                    <p>Outil de production des rapports réglementaires et de suivi des activités.</p>

                    <h4>Fonctionnalités :</h4>
                    <ul>
                        <li>Génération automatique des documents officiels</li>
                        <li>Historique inaltérable des mouvements</li>
                        <li>Tableaux de bord personnalisables</li>
                        <li>Export aux formats PDF, Excel et CSV</li>
                    </ul>

                    <h4>Conformité :</h4>
                    <ul>
                        <li>Respect du standard ANSSI</li>
                        <li>Horodatage certifié</li>
                        <li>Archivage sécurisé 10 ans</li>
                    </ul>
                </>
            )
        },
        "Architecture technique": {
            description: (
                <>
                    <p>Refonte complète de l'infrastructure pour une solution robuste et maintenable.</p>

                    <h4>Migration réussie :</h4>
                    <ul>
                        <li>De SQLite à PostgreSQL avec transfert sécurisé des données</li>
                        <li>Modernisation du stack technique (TypeScript, Knex.js)</li>
                        <li>API REST sécurisée</li>
                        <li>Documentation Swagger complète</li>
                    </ul>

                    <h4>Sécurité renforcée :</h4>
                    <ul>
                        <li>Chiffrement AES-256 des données sensibles</li>
                        <li>Journalisation des accès</li>
                        <li>Sauvegardes automatiques</li>
                        <li>Protection contre les injections SQL</li>
                    </ul>
                </>
            )
        }
    };

    return (
        <section className="stage-section">
            <div className="container" id="stage-content">
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
                    <p className="paragraph">
                        Durant mon stage au sein de l'administration pénitentiaire, j'ai conçu et développé une nouvelle version complète
                        du système de gestion des accès (CDESA). J'ai entièrement repensé l'application avec une stack moderne
                        (PostgreSQL, TypeScript, Knex.js) tout en ajoutant un module innovant de gestion véhicule/personne.
                    </p>



                    <div className="features-grid">
                        {[
                            {
                                title: "Gestion des utilisateurs",
                                features: [
                                    "Profils permanents/temporaires",
                                    "Droits par zone sécurisée",
                                    "Workflow de validation",
                                    "Journal des modifications"
                                ]
                            },
                            {
                                title: "Gestion des autorisations d'accès",
                                features: [
                                    "Nouveau module véhicules",
                                    "Badges avec QR code",
                                    "Processus complet",
                                    "Intégration registre"
                                ]
                            },
                            {
                                title: "Reporting et traçabilité",
                                features: [
                                    "Rapports réglementaires",
                                    "Historique des mouvements",
                                    "Tableaux de bord",
                                    "Export multi-formats"
                                ]
                            },
                            {
                                title: "Architecture technique",
                                features: [
                                    "Migration SQLite → PostgreSQL",
                                    "API REST sécurisée",
                                    "Documentation Swagger",
                                    "Sauvegardes automatiques"
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
                                    <h2>{selectedCard} – Détails</h2>
                                    <div className="modal-body">
                                        {featureDetails[selectedCard]?.description}
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
                            Développement de A à Z incluant : analyse des besoins, conception technique,
                            développement full-stack, documentation utilisateur et technique, formation
                            des personnels et mise en production.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}