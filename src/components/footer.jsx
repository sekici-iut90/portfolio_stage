import '../footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <motion.div
                        className="footer-brand"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="footer-logo-wrapper">
                            <div className="footer-logo">
                                Sugdenaz Ekici
                                <div className="logo-underline"></div>
                            </div>
                            <div className="code-badge">
                                <span className="code-bracket">{'<'}</span>
                                <span className="code-tag">Developer</span>
                                <span className="code-bracket">{'/>'}</span>
                            </div>
                        </div>
                        <p className="footer-tagline">
                            <span className="tagline-highlight">Mon objectif ?</span> Apprendre, créer, progresser
                            <span className="typing-cursor">|</span>
                            <br/>
                            <span className="commit-message">un commit à la fois.</span>
                        </p>
                    </motion.div>

                    <div className="footer-links">
                        <div className="links-group">
                            <h3 className="links-title">Navigation</h3>
                            <a href="/" className="footer-link">Accueil</a>
                            <a href="/entreprise" className="footer-link">Entreprise</a>
                            <a href="/stage" className="footer-link">Stage</a>
                            <a href="/competence" className="footer-link">Compétence</a>
                        </div>

                        <div className="links-group">
                            <h3 className="links-title">Contact</h3>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:sugdekici@gmail.com" className="footer-link">sugdekici@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <a href="tel:+33768155000" className="footer-link">+33 7 68 15 50 00</a>
                            </div>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/sugdenaz-ekici-4a2695303/" className="social-icon" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/sekici-iut90" className="social-icon" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sugdenaz Ekici | Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}