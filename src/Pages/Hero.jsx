import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../Hero.css";

const typingText = "Étudiante en BUT informatique voici mon portfolio de stage !";

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const letter = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="home" className="hero-section">
            {/* Personnages voilés décoratifs */}
            <div className="decorative-figures">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.7 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="veiled-figure left"
                />
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.7 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="veiled-figure right"
                />
            </div>

            {/* Contenu principal */}
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hero-title"
                >
                    Salut, moi c'est Sugdenaz <span className="wave">👋</span>
                </motion.h1>

                <motion.p
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="hero-subtitle"
                >
                    {typingText.split("").map((char, index, array) => (
                        <motion.span key={index} variants={letter}>
                            {char}
                            {index === array.length - 1 && (
                                <span className="blink">|</span>
                            )}
                        </motion.span>
                    ))}
                </motion.p>

                <motion.a
                    href="/projets"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="hero-button"
                >
                    Voir mes projets <ArrowRight className="arrow-icon" />
                </motion.a>
            </div>

            {/* Éléments décoratifs */}
            <div className="decorative-elements">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="floating-dot"
                        initial={{ y: 0, opacity: 0.3 }}
                        animate={{
                            y: [0, 15, 0],
                            opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>
        </section>
    );
}