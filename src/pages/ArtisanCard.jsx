const ArtisanCard = () => {
    return (
        <>
        <section className="artisan_card">
            <div class="card text-center m-2">
                <div class="card-header">
                    <h5 class="card-title">Nom de l'artisan</h5>
                </div>
                <div class="card-body">
                    <p class="card-text"><strong>Spécialitée : </strong> With supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><strong>Ville : </strong> With supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><strong>Note : </strong> With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer text-body-secondary">
                    <a href="#" class="btn btn-primary">En savoir plus</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default ArtisanCard ;