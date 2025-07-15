const ArtisanFiche = () => {
    
    return (
        <div className="artisan_fiche">
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Nom de l'artisan</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Spécialitée : </strong></li>
                    <li className="list-group-item"><strong>Ville : </strong></li>
                    <li className="list-group-item"><strong>A Propos : </strong></li>
                    <li className="list-group-item">
                        <h5> Formulaire de Contact</h5>
                        <div class="mb-3">
                            <label for="FormControlInput1" class="form-label">Nom</label>
                            <input type="text" class="form-control" id="FormControlInput1" placeholder="Votre nom ..." />
                        </div>
                        <div class="mb-3">
                            <label for="FormControlInput2" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="FormControlInput2" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="FormControlInput3" class="form-label">Objet</label>
                            <input type="text" class="form-control" id="FormControlInput3" />
                        </div>                        

                        <div class="mb-3">
                            <label for="FormControlTextarea" class="form-label">Message</label>
                            <textarea class="form-control" id="FormControlTextarea" rows="3"></textarea>
                        </div>
                    </li>
                </ul>

                <div className="card-body">
                    <a href="#" className="card-link">Visitez mon site</a>
                </div>
            </div>
        </div>
    )
}

export default ArtisanFiche ;