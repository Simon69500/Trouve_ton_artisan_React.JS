import { useEffect, useState } from "react";
import { fetchFromServer } from "../api/apiConfig";
import { Link } from "react-router-dom";

const ArtisanCard = () => {

    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchArtisans = async () => {
            try {
                const data = await fetchFromServer(`/artisans`);
                setArtisans(data);

            } catch(error) {
                console.error("Erreur fetch artisans :", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArtisans();
    }, []);

    if (loading) {return <p>Chargement ....</p>};

    return (
        <section>
            <h1>Liste des artisans</h1>
            <div className="card text-center m-2">
                {artisans.length === 0 ? (
                    <p>Aucun artisans trouvé.</p>
                ) : (
                 <div className="row">
                    {artisans.map((artisan) => (
                        <div className="col-md-4 mb-4" key={artisan.id_artisan}>
                            <Link to={`/artisans/${artisan.id_artisan}`} className="text-decoration-none text-dark">
                            <div className="card h-100 text-center">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="card-title mb-0"> {artisan.nom} </h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        <strong>Spécialité :</strong> {artisan.specialite}
                                    </p>
                                    <p className="card-text">
                                        <strong>Ville :</strong> {artisan.ville}
                                    </p>
                                    <p className="card-text">
                                        <strong>A propos :</strong> {artisan.about}
                                    </p>
                                    <p className="card-text">
                                        <strong>Note :</strong> {artisan.note}
                                    </p>                                         
                                </div>
                                <div className="card-footer text-muted">
                                    <p className="card-text">
                                        Contact : {artisan.email}
                                    </p>
                                    <p className="card-text">
                                        Site web :{artisan.site_web || "Non fourni"}
                                    </p>                                                                            
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                 </div>   
                )}
            </div>
        </section>
    );
}

export default ArtisanCard ;