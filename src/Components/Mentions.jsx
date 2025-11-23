import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Mentions = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Editeur du site
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h4 className="fw-bold">John Doe</h4>

            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>
              40 rue Laure Diebold
            </p>
            <p className="mb-1">
              <i className="bi bi-geo me-2"></i>
              69009 Lyon, France
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>
              <a href="tel:10 20 30 40 50">10 20 30 40 50</a>
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Hébergeur
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h4 className="fw-bold">alwaysdata</h4>
            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
            <div>
              <i class="bi bi-globe"></i>
              <a
                href="https://www.alwaysdata.com/fr/"
                className="link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.alwaysdata.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Crédit
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h4 className="fw-bold">Crédit</h4>
            <p>Ce site à été développé par John Doe, étudiant au <a
                href="https://www.centre-europeen-formation.fr/"
                className="link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Centre Européen de Formation
              </a></p>
              <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a
                href="https://pixabay.com/fr/"
                className="link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a></p>
              <p>Le favicon de ce site a été fourni par <a
                href="https://www.flaticon.com/free-icons/john-doe"
                className="link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                John doe Icons erstellt von Freepik - Flaticon
              </a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentions;
