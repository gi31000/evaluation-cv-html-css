
import React, { useState, useEffect } from "react";

const Home = () => {
  const [github, setGithub] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/github-johndoe")
      .then((res) => res.json())
      .then((data) => setGithub(data));
  }, []);
  return (
    <main>
      {/* Section hero */}
      <section
        className="hero d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          backgroundImage: "url('/img/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="hero-content">
          <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
          <p className="lead">Développeur web full stack</p>
          <button
            className="btn btn-danger mt-3"
            data-bs-toggle="modal"
            data-bs-target="#aboutModal"
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* Modale "En savoir plus" */}
      <section>
        <div
          className="modal fade"
          id="aboutModal"
          tabIndex="-1"
          aria-labelledby="aboutModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-secondary">
                <h5 className="modal-title" id="aboutModalLabel">
                  Mon profil GitHub
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="row text-center">
                  {/* Avatar */}
                  <div className="col-md-5">
                    <img
                      src="https://avatars.githubusercontent.com/u/19842736?v=4"
                      alt="Avatar"
                      className="img-fluid rounded"
                    />
                  </div>

                  {/* Infos */}
                  <div className="col-md-7 text-start mt-3 mt-md-0">
                    <p>
                      <i className="bi bi-person"></i> {github?.login}
                    </p>
                    <p>
                      <i className="bi bi-geo-alt"></i> {github?.location}
                    </p>
                    <p>
                      <i className="bi bi-card-text"></i> Passionné par le
                      développement web. Toujours en quête de nouveaux projets !
                    </p>
                    <p>
                      <i className="bi bi-github"></i> {github?.public_repos}
                    </p>
                    <p>
                      <i className="bi bi-people"></i> {github?.followers}
                    </p>
                    <p>
                      <i className="bi bi-person-plus"></i> {github?.following}
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-footer border-secondary">
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section à propos */}
      <section id="about" className="container my-5">
        <div className="row shadow p-4 bg-white rounded">
          <div className="col-md-6">
            <h3>À propos</h3>
            <img
              src="/img/john-doe-about.jpg"
              alt="John Doe"
              className="img-fluid rounded mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              necessitatibus cumque? Ipsam harum repellat ab minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              necessitatibus cumque? Ipsam harum repellat ab minima.
            </p>
          </div>

          <div className="col-md-6">
            <h3>Mes compétences</h3>
            <div className="mb-3">
              <label>HTML5 90%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="mb-3">
              <label>CSS3 80%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="mb-3">
              <label>JavaScript 70%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="mb-3">
              <label>PHP 60%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="mb-3">
              <label>React 50%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
