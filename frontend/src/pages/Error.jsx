import {NavLink } from "react-router-dom";
import Erreur404 from '../assets/error-404.png';
import '../styles/SCSS/pages/error.scss';

const Error = () => {
    return (
        <>
                    <div className="img-error p-3 m-3">
                    <img className="img-404" src={Erreur404} alt="erreur 404" width={350} height={300} />
                    </div>

                    <article className="text-error text-center">
                    <h2>Oops, la page que vous cherchez n'existe pas !</h2>
                    <p>On dirait que la page que vous cherchez a pris une pause café, ou qu'elle n'existe tout simplement pas.</p>
                    <p>Mais ne vous inquiétez pas, nous avons de nombreux artisans à découvrir !</p>
                    <div className="error-link">
                    <NavLink to="/" >Retour à l'acceuil</NavLink>
                    </div>
                    
                    <p>Besoin d'aide pour trouver ce que vous cherchez ? Nous sommes là pour vous guider.</p>
                    </article>
        </>
    )
}

export default Error ;