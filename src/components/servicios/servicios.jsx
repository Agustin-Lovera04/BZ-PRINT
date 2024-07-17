import './servicios.css'
const Servicios = () => {
    return (
        <>
            <div className="servicios-Container">

                <h1><span className="TitleServicios-Content fw-bold">SERVICIOS</span></h1>

                <div className="cardsServicios-Container">

                    <div className="card" /* style="width: 18rem;" */>
                        <img src="/images/RecursoNº2.jpg" class="card-img-top card-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">APUNTES</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card" /* style="width: 18rem;" */>
                        <img src="/images/RecursoNº2.jpg" class="card-img-top card-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">LIBROS</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card" /* style="width: 18rem;" */>
                        <img src="/images/RecursoNº2.jpg" class="card-img-top card-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">FOTOS</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <h1><span className='subTitleServicios1-Content fw-bold'>¿QUE OFRECEMOS EN </span><span className='subTitleServicios2-Content fw-bold'>BZ PRINT?</span></h1>

            </div>
        </>
    )
}

export default Servicios