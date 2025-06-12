// About.js
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import '../About.css';
import justiceLogo from '../assets/logo-justice.png.PNG';
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);

    return (
        <section
            id="entreprise"
            className="entreprise-section"
            ref={ref}
        >
            <motion.div
                className="entreprise-header"
                style={{ y, opacity }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <div>
                    <motion.h2
                        className="entreprise-title"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Centre pénitentiaire de Mulhouse-Lutterbach
                    </motion.h2>
                    <motion.p
                        className="entreprise-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        01 • Présentation
                    </motion.p>
                </div>
                <a
                    href="https://www.justice.gouv.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visiter le site du Ministère de la Justice"
                >
                    <motion.img
                        src={justiceLogo}
                        alt="Logo Ministère de la Justice"
                        className="header-logo"
                        initial={{ opacity: 0, rotate: -10 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                            rotate: { duration: 0.5 },
                        }}
                    />
                </a>

            </motion.div>

            <motion.div
                className="entreprise-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <AnimatePresence>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Le Centre pénitentiaire de Mulhouse-Lutterbach est un établissement moderne ancré dans une démarche d'amélioration continue. En tant que stagiaire développeur au sein du service informatique CLSI, j'ai eu l'opportunité de contribuer au développement d'outils internes visant à optimiser la gestion des accès et la sécurité du site.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Travailler au sein d'un environnement aussi structuré m'a permis de mettre en pratique mes compétences en développement tout en m'adaptant aux enjeux spécifiques du secteur pénitentiaire. L'écoute, la rigueur et le respect des normes (notamment RGAA et sécurité) sont au cœur de chaque projet mené.
                    </motion.p>
                </AnimatePresence>

                <motion.div
                    className="entreprise-qualities"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    {["SECURITÉ", "ACCESSIBILITÉ", "PRAGMATISME", "MAINTENANCE", "NUMÉRIQUE", "INNOVATION", "CONFIDENTIALITÉ", "EXIGENCE"].map((item, index) => (
                        <motion.span
                            key={item}
                            whileHover={{ scale: 1.1, color: "#0ea5e9" }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                delay: index * 0.05
                            }}
                            viewport={{ once: true }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.p
                    className="entreprise-more"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    02 • En savoir plus
                </motion.p>

                <div className="entreprise-blocks">
                    {[
                        {
                            number: "01",
                            text: "Une organisation au service de la sécurité, où chaque outil numérique joue un rôle clé dans l'efficacité des équipes."
                        },
                        {
                            number: "02",
                            text: "Un environnement stimulant, mêlant expertise métier, collaboration interservices et respect des contraintes techniques strictes."
                        },
                        {
                            number: "03",
                            text: "Une culture du travail fondée sur la discrétion, la rigueur, et l'engagement au service de la mission de service public."
                        }
                    ].map((block, index) => (
                        <motion.div
                            key={block.number}
                            className="block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: index * 0.15
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)"
                            }}
                        >
                            <motion.h3
                                whileInView={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                {block.number}
                            </motion.h3>
                            <p>{block.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}