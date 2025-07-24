import { useEffect, useState } from "react";
import "../styles/SCSS/pages/home.scss";

const Home = () => {
  const [topArtisans, setTopArtisans] = useState([]);

  async function fetchTopArtisans() {
    try {
      const response = await fetch("http://localhost:5000/artisans/top");

      if (!response.ok) {
        throw new Error("Erreur réseau");
      }

      const data = await response.json();
      setTopArtisans(data);
    } catch (error) {
      console.error("Erreur fetch top artisans:", error);
    }
  }

  useEffect(() => {
    fetchTopArtisans();
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

            <div className="carousel-inner">
              {topArtisans.map((artisans, index) => (
                <div
                  key={artisans.id_artisan}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="artisan-card p-3">
                    <h3>{artisans.nom}</h3>
                    <p>
                      <strong>Note :</strong> {artisans.note}
                    </p>
                    <p>
                      <strong>Spécialité :</strong> {artisans.specialite}
                    </p>
                    <p>
                      <strong>Ville :</strong> {artisans.ville}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
