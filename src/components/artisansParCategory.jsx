import { useEffect, useState } from "react";
import { fetchFromServer } from "../api/apiConfig";
import { useParams, Link } from "react-router-dom";
import StarRating from "../components/noteEtoiles";
import '../styles/SCSS/components/artisansParCategory.scss';

const ArtisansParCategory = () => {

    const {id} = useParams();
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(null);
    const [category, setCategory] = useState(true)


    {/* Appel du Serveur */}
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
            <h1 className="text-center fw-bold p-2">Artisans de la catégorie {category ? category.nom : "..."}</h1>
            <div className="">
                {artisans.length === 0 ? (
                    <p>Aucun artisans trouvé.</p>
                ) : (
                 <div className="row">
                    {artisans.map((artisan) => (
                        <div className="col-md-4 p-4" key={artisan.id_artisan}>
                            <Link to={`/artisans/${artisan.id_artisan}`} className="text-decoration-none text-dark">
                            <div className="card h-100 text-center">
                                <div className="card-header  text-white">
                                    <h5 className="card-title mb-0"> {artisan.nom} </h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fs-6">
                                        <strong className="px-3">Spécialité :</strong> {artisan.specialite}
                                    </p>
                                    <p className="card-text fs-6">
                                        <strong className="px-3">Ville :</strong> {artisan.ville}
                                    </p>
                                    <p className="card-text fs-6">
                                        <strong className="px-3">A propos :</strong> 
                                    </p>
                                    <p className=" text-center">
                                        {artisan.about}
                                    </p>
                                    <p className="card-text fs-6">
                                        <strong className="px-3">Note :</strong> <StarRating rating={artisan.note} />
                                    </p>                                         
                                </div>
                                <div className="card-footer text-white ">
                                    <p className="card-text">
                                        <strong className="text-white">Contact :</strong> {artisan.email}
                                    </p>
                                    <p className="card-text">
                                       <strong className="text-white">Site web :</strong> {artisan.site_web || "Non fourni"}
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
};

export default ArtisansParCategory;