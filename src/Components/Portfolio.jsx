import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.jsx"; // pour les effets hover

const projects = [
  {
    id: 1,
    title: "Fresh Food",
    img: "/img/portfolio/fresh-food.jpg",
    desc: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec PHP et MySQL",
    url: "https://freshfood.com",
  },
  {
    id: 2,
    title: "Restaurant Akira",
    img: "/img/portfolio/restaurant-japonais.jpg",
    desc: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec WordPress",
    url: "https://www.akira93.fr/"
  },
  {
    id: 3,
    title: "Espace bien-être",
    img: "/img/portfolio/espace-bien-etre.jpg",
    desc: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec LARAVEL",
    url: "https://www.lebienetre.fr/"
  },
  {
    id: 4,
    title: "SEO",
    img: "/img/portfolio/seo.jpg",
    desc: "Amélioration du référencement d’un site e-commerce",
    tech: "Utilisation des outils SEO",
    url: "https://www.seobserver.com/"
  },
  {
    id: 5,
    title: "Création d'une API",
    img: "/img/portfolio/coder.jpg",
    desc: "Création d'une API RESTFUL publique",
    tech: "PHP - SYMFONY",
    url: "https://publicapi.dev/"
  },
  {
    id: 6,
    title: "Maquette d’un site web",
    img: "/img/portfolio/screens.jpg",
    desc: "Création du prototype d’un site",
    tech: "Réalisé avec FIGMA",
    url: "https://figma.com"
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section py-4 text-center">
      {/* Titre */}
      <div className="container">
        <h2 className="fw-bold">Portfolio</h2>
        <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
        <hr className="border-primary underline mx-auto mb-5" />

        {/* Grille des projets */}
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.id}>
              <div className="card portfolio-card h-100 shadow-sm border-0">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                  <a
                    href={project.url}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le site
                  </a>
                </div>
                <div className="card-footer bg-white border-0 text-muted small">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
