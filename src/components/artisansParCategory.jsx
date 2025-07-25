import { useEffect, useState } from "react";
import { fetchFromServer } from "../api/apiConfig";
import { useParams } from "react-router-dom";

const ArtisansParCategory = () => {
    const {id} = useParams();
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(null);
    const [category, setCategory] = useState(true)

    useEffect(() => {
        const fetchArtisans = async () => {
            try {
                const data = await fetchFromServer(`/categories/${id}/artisans`);
                setArtisans(data);

                const categoryData = await fetchFromServer(`/categories/${id}`);
                setCategory(categoryData);

            } catch(error) {
                console.error("Erreur fetch artisans :", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArtisans();
    }, [id]);

    if (loading) {return <p>Chargement ....</p>};

    return (
        <section>
            <h1>Artisans de la catégorie {category ? category.nom : "..."}</h1>
            <div className="card text-center m-2">
                {artisans.length === 0 ? (
                    <p>Aucun artisans trouvé.</p>
                ) : (
                 <div className="row">
                    {artisans.map((artisan) => (
                        <div className="col-md-4 mb-4" key={artisan.id_artisan}>
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
                        </div>
                    ))}
                 </div>   
                )}
            </div>
        </section>
    );
};

export default ArtisansParCategory;