import '../Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Sugdenaz</div>
                <div className="navbar-links">
                    <a href="/" className="navbar-link">Accueil</a>
                    <a href="/a-propos" className="navbar-link">Entreprise</a>
                    <a href="/formations" className="navbar-link">Stage</a>
                    <a href="/projets" className="navbar-link">Projets</a>
                </div>
            </div>
        </nav>
    );
}
