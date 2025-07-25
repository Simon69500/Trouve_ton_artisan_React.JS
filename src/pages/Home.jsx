import { useEffect, useState } from "react";
import { fetchFromServer } from "../api/apiConfig";
import { Link } from "react-router-dom";
import "../styles/SCSS/pages/home.scss";

const Home = () => {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    async function getTopArtisans() {
      try {
        const data = await fetchFromServer("/artisans/top");
        console.log(data);
        setTopArtisans(data);
      } catch (err) {
        console.error("Erreur :", err);
      }
    }

    getTopArtisans();
  }, []);

  return (
    <>
      <section id="home">
        <div className="tuto p-2 m-2">
          <h1 className="title_principal">Comment trouver mon artisan ?</h1>
          <div className="etape m-2 h-100">
            <i className="bi bi-1-circle px-3 fs-1"></i>
            <p className="text_tuto m-0 w-50 h-50 p-2">
              Choisir la catégorie d'artisanat dans le menu
            </p>
          </div>
          <div className="etape m-2">
            <i className="bi bi-2-circle px-3 fs-1"></i>
            <p className="text_tuto m-0 w-50 h-50 p-2">Choisir un artisan</p>
          </div>
          <div className="etape m-2">
            <i className="bi bi-3-circle px-3 fs-1"></i>
            <p className="text_tuto m-0 w-50 h-50 p-2">
              Le contacter via le formulaire de contact
            </p>
          </div>
          <div className="etape m-2">
            <i className="bi bi-4-circle px-3 fs-1"></i>
            <p className="text_tuto m-0 w-50 h-50 p-2">
              Une réponse sera apportée sous 48h
            </p>
          </div>
        </div>

        <div className="top_artisan p-2 m-2">
          <h2 className="title_secondary">Le top 3 des artisans</h2>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              {topArtisans.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-black"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <div className="carousel-inner">
              {topArtisans.map((artisans, index) => (
                <div
                  key={artisans.id_artisan}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <Link
                    to={`/artisans/${artisans.id_artisan}`}
                    className="text-decoration-none text-dark h-100 w-100"
                  >
                    <div
                      className="artisan-card card p-3 mx-auto"
                      style={{ maxWidth: "400px" }}
                    >
                      <div className="card-header bg-primary text-white">
                        <h3 className="card-title">{artisans.nom}</h3>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          <strong>Note :</strong> {artisans.note}
                        </p>
                        <p className="card-text">
                          <strong>Spécialité :</strong> {artisans.specialite}
                        </p>
                        <p className="card-text">
                          <strong>Ville :</strong> {artisans.ville}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-black"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
