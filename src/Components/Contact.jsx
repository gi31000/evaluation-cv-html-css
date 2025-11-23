import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <main className="container">
      <section>
        <h2 className="fw-bold py-4">Contact</h2>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de conctact.
          <hr className="border border-primary border-3 opacity-75" />
          <section className="container my-5">
            <div className="row shadow p-4 bg-white rounded">
              <div className="col-md-6">
                <h3 className="fw-bold">Formulaire de contact</h3>
                <hr className="border border-primary border-2 opacity-75" />
                <form>
                  <div className="mb-3">
                    <input
                      type="name"
                       className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                       className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Votre adresse email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="telephone"
                       className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="subject"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Sujet"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="11"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <a href="#about" className="btn btn-primary mt-3">
                    Envoyer
                  </a>
                </form>
              </div>
              <div className="col-md-6">
                <h3 className="fw-bold">Mes coordonnées</h3>
                <hr className="border border-primary border-2 opacity-75" />
                <div className="mt-4 mb-4 text-left">
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
                <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84763.20327152012!2d4.768430793836241!3d45.769102787584654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaf4f2c8f7cd%3A0xa4d2ddd7bba0dd38!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
              </div>
            </div>
          </section>
        </p>
        
      </section>
    </main>
  );
};

export default Contact;
