import React from "react";
import "./Services.jsx";

const Services = () => {
  return (
    <main>
      <section
        className="banner d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          backgroundImage: "url('/img/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vh",
        }}
      >
      </section>
      <section>
        <h2 className="fw-bold py-4">Mon offre de Services</h2>
        <p>Voici les prestations sur lesquels je peux intervenir</p>
        <ul>
          <hr className="border border-primary border-2 opacity-75"/>
        </ul>
        <div className="container my-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i
              className="bi bi-pencil fs-1 text-primary mb-3"
              aria-hidden="true"
            ></i>
            <h4 className="card-title fw-bold">UX Design</h4>
                  <p className="card-text">
                    L'UX design est une discipline qui consiste à concevoir des
                produits (sites web, applications mobiles, logiciels, objets
                connectés, etc.) en plaçant l'utilisateur au centre des
                préoccupations. L'obectif est de rendre l'expérience utilisateur
                la plus fluide et agréable possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="bi bi-code-slash fs-1 text-primary mb-3"
            aria-hidden="true"></i>
                  <h4 className="card-title fw-bold">Développement web</h4>
                  <p className="card-text">
                    Le développement de sites web consiste à créer des sites
                internet en utilisant des langages de programmation(HTML, CSS,
                Javascript, PHP, etc.) et des frameworks (Bootstrap, React,
                Angular, etc.).
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="bi bi-search fs-1 text-primary mb-3"
            aria-hidden="true"></i>
                  <h4 className="card-title fw-bold">Référencement</h4>
                  <p className="card-text">
                    Le référencement naturel (SEO) est une technique qui consiste à
                optimiser un site web pour le faire remonter dans les résultats
                des moteurs de recherches (Google, Bing, Yahoo, etc.).
                L'obhectif est d'attirer un maximum de visiteurs qualifiés sur
                le site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
