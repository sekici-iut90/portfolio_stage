import '../Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Sugdenaz</div>
                <div className="navbar-links">
                    <a href="/" className="navbar-link">Accueil</a>
                    <a href="/entreprise" className="navbar-link">Entreprise</a>
                    <a href="/stage" className="navbar-link">Stage</a>
                    <a href="/projets" className="navbar-link">Projets</a>
                </div>
            </div>
        </nav>
    );
}
