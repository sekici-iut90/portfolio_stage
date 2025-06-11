import { motion } from "framer-motion";
import logo from "../assets/logo-justice.png.PNG"; // change si besoin
import "../stages.css";

export default function StagePage() {
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
                        <h1 className="title">Centre pénitentiaire — Mulhouse-Lutterbach</h1>
                        <p className="subtitle">Stage de 2e année — Dématérialisation du comité d’engagement</p>
                    </div>
                    <motion.img
                        src={logo}
                        alt="Logo"
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
                        Mon stage chez Néolia a consisté à développer un logiciel de
                        dématérialisation pour les comités d’engagement de la DSIL. L'objectif
                        était d'optimiser ce processus en simplifiant les interactions et le
                        workflow. Cette mission m'a permis d'acquérir de nouveaux savoirs et
                        savoir-faire dans de nombreux domaines enseignés au sein de ma formation
                        et de découvrir les réalités du développement en entreprise, tout en
                        renforçant mon autonomie et ma rigueur.
                    </p>

                    <p className="paragraph">
                        Les Comités d'Engagement sont au cœur de la gouvernance des projets
                        chez Néolia. Ces réunions mensuelles, composées de membres clés de la
                        direction, sont l'instance décisionnelle qui détermine si un projet est
                        prêt à franchir une nouvelle étape de son cycle de vie.
                    </p>

                    <div className="tags">
                        {[
                            "Dématérialisation",
                            "Workflow",
                            "Comité d'engagement",
                            "Autonomie",
                            "Fullstack",
                            "DSIL",
                            "Excel",
                            "Mailing",
                        ].map((tag) => (
                            <span key={tag} className="tag">
                {tag}
              </span>
                        ))}
                    </div>

                    <div className="features-grid">
                        {[
                            {
                                title: "Suivi des projets",
                                features: [
                                    "Suivi de la vie des projets",
                                    "Exportation des projets",
                                    "Faciliter le suivi global",
                                ],
                            },
                            {
                                title: "Gestion du calendrier",
                                features: [
                                    "Définir les thèmes pour chaque projet",
                                    "Configurer chaque comité",
                                    "Exporter le calendrier au format Excel",
                                ],
                            },
                            {
                                title: "Génération des ordres du jour",
                                features: [
                                    "Automatiser ce processus chronophage",
                                    "Exporter au format Excel",
                                    "Envoyer par mail",
                                ],
                            },
                            {
                                title: "Relevés de décisions",
                                features: [
                                    "Saisir les décisions prises",
                                    "Exporter en Excel",
                                    "Transmettre aux acteurs concernés",
                                ],
                            },
                            {
                                title: "Gestion des documents",
                                features: [
                                    "Héberger les supports de présentation",
                                    "Faciliter leur accès aux participants",
                                ],
                            },
                        ].map((block, i) => (
                            <motion.div
                                key={i}
                                className="feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.4 + i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="feature-title">{block.title}</h3>
                                <ul className="feature-list">
                                    {block.features.map((feat, j) => (
                                        <li key={j}>{feat}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
