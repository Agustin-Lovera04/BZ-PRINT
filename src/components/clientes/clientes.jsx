import './clientes.css';

const Clientes = () => {
    return (
        <>
            <div className="clientes-Container">
                <h1 className="titleClientes">
                    CLIENTES
                </h1>
                <div className="carrousel-Container">

                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="1500">
                                <div className="carousel-background"></div>
                                <div className="carousel-content">
                                    <img src="path/to/your/image1.jpg" alt="Icono 1" className="icon" />
                                    <div>
                                        <h5>Título del Slide 1</h5>
                                        <p>Contenido del slide 1. Aquí puedes agregar el texto que desees.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="1500">
                                <div className="carousel-background"></div>
                                <div className="carousel-content">
                                    <img src="path/to/your/image2.jpg" alt="Icono 2" className="icon" />
                                    <div>
                                        <h5>Título del Slide 2</h5>
                                        <p>Contenido del slide 2. Aquí puedes agregar el texto que desees.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="1500">
                                <div className="carousel-background"></div>
                                <div className="carousel-content">
                                    <img src="path/to/your/image3.jpg" alt="Icono 3" className="icon" />
                                    <div>
                                        <h5>Título del Slide 3</h5>
                                        <p>Contenido del slide 3. Aquí puedes agregar el texto que desees.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Clientes;
