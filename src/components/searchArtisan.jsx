import { fetchFromServer } from "../api/apiConfig";

const { useState, useEffect } = require("react");
const { useLocation, Link } = require("react-router-dom");

const SearchArtisans = () => {
    const [resultats, setResultats] = useState([]);
    const [loading, setLoading] = useState(null);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get('query');

  {/* Appel du Serveur*/}
    useEffect(() => {
        const recherche = async () => {
            try {
                const data = await fetchFromServer(`/artisans/specialite?specialite=${query}`);
                setResultats(data);
            } catch(error) {
                console.error("Erreur lors de la recherche :", error.message);
                setResultats([]);
            } finally {
                setLoading(false);
            }
        };

        if(query) {
            recherche();
        }
    }, [query]);
    
    if (loading) return <p>Chargement des résultats...</p>;

    return (
        <section>
            <h1 className="text-center fw-bold p-3 m-3"> Résultat pour : {query}</h1>
            {resultats.length === 0 ? (
                <p>Aucun artisan trouvé pour cette recherche.</p>
            ) : (
                <div className="row m-5 lg-d-flex justify-content-center">
                    {resultats.map(artisan => (
                        <div key={artisan.id_artisan} className="col-md-4 mb-4">
                            <Link to={`/artisans/${artisan.id_artisan}`} className="text-decoration-none text-dark">
                                <div className="card text-center m-5">
                                    <div className="card-header bg-primary text-white">
                                        <h5 className="card-title p-3 fs-4"> {artisan.nom} </h5>
                                    </div>
                                    <div className="card-body p-4">
                                        <p><strong>Ville :</strong> {artisan.ville} </p>
                                        <p><strong>Spécialtié :</strong> {artisan.specialite} </p>
                                        <p><strong>Note : </strong> {artisan.note} </p>
                                    </div>                                                                 
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
};

export default SearchArtisans;