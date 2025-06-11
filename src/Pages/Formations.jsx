import React from 'react';
import '../Formations.css'; // Fichier CSS que nous allons créer

export default function Formations() {
    const formations = [
        {
            year: "2023 - 2025",
            title: "BUT Informatique",
            place: "IUT de Mulhouse",
            description: "Parcours Réalisation d'applications : conception, développement, validation.",
        },
        {
            year: "2023",
            title: "Baccalauréat Général",
            place: "Lycée Jean Mermoz",
            description: "Spécialités : Numérique et Sciences Informatiques, Mathématiques.",
        },
    ];

    return (
        <section className="formations-section">
            <h2 className="formations-title">Mon Parcours</h2>
            <div className="formations-timeline">
                {formations.map((item, idx) => (
                    <div key={idx} className="formation-item">
                        {/* Point */}
                        <div className="timeline-point" />
                        {/* Contenu */}
                        <span className="formation-year">{item.year}</span>
                        <h3 className="formation-title">{item.title}</h3>
                        <p className="formation-place">{item.place}</p>
                        <p className="formation-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}