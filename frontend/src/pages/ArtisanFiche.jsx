import { useEffect, useState } from "react";
import { fetchFromServer } from "../api/apiConfig";
import { useParams } from "react-router-dom";
import StarRating from "../components/noteEtoiles";
import LogoEntreprise from '../assets/logo/logo2.png';
import '../styles/SCSS/pages/artisanFiche.scss';

const ArtisanFiche = () => {


  /* Partie front -> API - Artisan*/

  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  /* Appel du Serveur*/
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



   /* Partie front -> API - Formulaire*/

    const [formData, setFormData] = useState({
      nom: "",
      email: "",
      objet: "",
      message: "",
    });

    const handleChange = (e) => {
      const { name, value} = e.target;
      setFormData({...formData, [name]: value});
    };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetchFromServer('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.error) {
      throw new Error(response.message || "Erreur lors de l'envoi");
    }

    alert("✅ Message envoyé !");
    setFormData({ nom: "", email: "", objet: "", message: "" });

  } catch (err) {
    console.error("Erreur :", err.message);
    alert(`❌ Une erreur est survenue : ${err.message}`);
  }
};




    
  if (loading) {return <p>Chargement...</p>};
  if (!artisan) {return <p>Aucun artisan trouvé.</p>};

  return (

    <section>
      <h1 className="text-center fw-bold p-2">Fiche de l'artisan</h1>
      <div className="artisan_fiche">

        <div className="card mx-auto my-3 " style={{ width: "22rem" }}>

              {/*Partie header de la card*/}
          <div className="card-header">
            <img src={LogoEntreprise} class="card-img-top" alt="logo de l'entreprise"></img>
            <h5 className="card-title text-white text-center fs-3 py-3 ">{artisan.nom}</h5>
          </div>

              {/*Partie body de la card*/}
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item  text-center"><strong>Spécialité :</strong> {artisan.specialite}</li>
              <li className="list-group-item  text-center"><strong>Ville :</strong> {artisan.ville}</li>
              <li className="list-group-item text-center"><strong>A Propos :</strong>
              <p>{artisan.about}
                </p></li>
              <li className="list-group-item text-center"><strong>Note :</strong><StarRating rating={artisan.note} /></li>            
              
              {/*Partie Formulaire de la card*/}
              <li className="list-group-item">
                <h5 className="text-center text-white">Formulaire de Contact</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="FormControlInput1" className="form-label">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        id="FormControlInput1"
                        name="nom"
                        placeholder="Votre nom ..."
                        value={formData.nom}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="FormControlInput2" className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="FormControlInput2"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="FormControlInput3" className="form-label">Objet</label>
                      <input
                        type="text"
                        className="form-control"
                        id="FormControlInput3"
                        name="objet"
                        value={formData.objet}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="FormControlTextarea" className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        id="FormControlTextarea"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Envoyer</button>
                  </form>

              </li>

              <li className="list-group-item"><strong>Site web :</strong> <a href={artisan.site_web} target="_blank" rel="noopener noreferrer">{artisan.site_web || "Non renseigné"}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanFiche;
