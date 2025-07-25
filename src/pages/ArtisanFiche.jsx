import { useEffect, useState } from "react";
import { fetchFromServer } from "../api/apiConfig";
import { useParams } from "react-router-dom";

const ArtisanFiche = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const data = await fetchFromServer(`/artisans/${id}`);
        setArtisan(data);
      } catch (error) {
        console.error("Erreur fetch artisan :", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisan();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!artisan) return <p>Aucun artisan trouvé.</p>;

  return (
    <section>
      <h1>Fiche de l'artisan</h1>
      <div className="artisan_fiche">
        <div className="card mx-auto" style={{ width: "22rem" }}>
          <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="artisan" />
          <div className="card-body">
            <h5 className="card-title">{artisan.nom}</h5>
          </div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Spécialité :</strong> {artisan.specialite}</li>
            <li className="list-group-item"><strong>Ville :</strong> {artisan.ville}</li>
            <li className="list-group-item"><strong>A Propos :</strong> {artisan.about}</li>
            <li className="list-group-item"><strong>Note :</strong> {artisan.note}</li>            
            <li className="list-group-item">
              <h5>Formulaire de Contact</h5>
              <div className="mb-3">
                <label htmlFor="FormControlInput1" className="form-label">Nom</label>
                <input type="text" className="form-control" id="FormControlInput1" placeholder="Votre nom ..." />
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlInput2" className="form-label">Email address</label>
                <input type="email" className="form-control" id="FormControlInput2" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlInput3" className="form-label">Objet</label>
                <input type="text" className="form-control" id="FormControlInput3" />
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlTextarea" className="form-label">Message</label>
                <textarea className="form-control" id="FormControlTextarea" rows="3"></textarea>
              </div>
            </li>
            <li className="list-group-item"> <strong>Email :</strong> {artisan.email }</li>
            <li className="list-group-item"><strong>Site web :</strong> <a href={artisan.site_web} target="_blank" rel="noopener noreferrer">{artisan.site_web || "Non renseigné"}</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ArtisanFiche;
