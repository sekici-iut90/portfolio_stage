import { motion } from "framer-motion";
import '../Projects.css';

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="projects-title"
            >
                Mes Projets
            </motion.h2>

            <div className="projects-grid">
                {[1, 2, 3, 4].map((id) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: id * 0.2 }}
                        viewport={{ once: true }}
                        className="project-card"
                    >
                        <h3 className="project-title">Projet #{id}</h3>
                        <p className="project-description">
                            Description de projet #{id}. Techno utilisées : React, Tailwind, Node.js.
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
