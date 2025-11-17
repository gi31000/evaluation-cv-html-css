import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row text-center text-md-center">
          <div className="col-md-4 mb-3">
            <h5>John Doe</h5>
            <ul className="list-unstyled">
              <li>40 Rue Laure Diebold</li>
              <li>69009 Lyon, France</li>
              <li>
                <a
                  href="tel:1020304050"
                  className="text-white text-decoration-none"
                >
                  10 20 30 40 50
                </a>
              </li>
              <li>
                <a
                  href="mailto:john.doe@gmail.com"
                  className="text-white text-decoration-none"
                >
                  john.doe@gmail.com
                </a>
              </li>
              <li>
                <div>
                  <i className="bi bi-twitter me-2"></i>
                  <i className="bi bi-facebook me-2"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Me contacter
                </a>
              </li>
              <li>
                <a href="/mentions" className="text-white text-decoration-none">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://freshfood.com"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fresh food
                </a>
              </li>
              <li>
                <a
                  href="https://www.akira93.fr/"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Restaurant Akira
                </a>
              </li>
              <li>
                <a
                  href="https://www.lebienetre.fr/"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Espace bien-être
                </a>
              </li>
              <li>
                <a
                  href="https://www.seobserver.com/"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  href="https://publicapi.dev/"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Création d'une API
                </a>
              </li>
              <li>
                <a
                  href="https://figma.com"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maquette d'un site
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
