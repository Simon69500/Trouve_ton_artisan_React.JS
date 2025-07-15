import "../styles/SCSS/pages/home.scss";

const Home = () => {

    return (
        <>
            <section id="home">

                <div className="tuto p-2 m-2">
                    <h1 className="title_principal">Comment trouver mon artisan ?</h1>
                    <div className="etape m-2 h-100">
                        <i className="bi bi-1-circle px-3 fs-1"></i>
                        <p className="text_tuto m-0 w-50 h-50 p-2">Choisir la catégorie d'artisanat dans le menu</p>
                    </div>
                    <div className="etape m-2">
                        <i className="bi bi-2-circle px-3 fs-1"></i>
                        <p className="text_tuto m-0 w-50 h-50 p-2">Choisir un artisan</p>
                    </div>
                    <div className="etape m-2">
                        <i className="bi bi-3-circle px-3 fs-1"></i>
                        <p className="text_tuto m-0 w-50 h-50 p-2">Le contacter via le formulaire de contact</p>
                    </div>
                    <div className="etape m-2">
                        <i className="bi bi-4-circle px-3 fs-1"></i>
                        <p className="text_tuto m-0 w-50 h-50 p-2">Une réponse sera apportée sous 48h</p>
                    </div>
                </div>

                <div className="top_artisan p-2 m-2">
                    <h2 className="title_secondary">Le top 3 des artisans</h2>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            </div>
                            <div class="carousel-item">
                            </div>
                            <div class="carousel-item">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>

            </section>
        </>
    )
}

export default Home ;
