import './servicios.css'
import imgCard from '/images/RecursoNº2.jpg'
import imgLapiceras from '/images/LAPICERAS.jpg'
import imgCuadernillo from '/images/Cuadernillo.jpg'
import imgApuntes from '/images/Apuntes.jpg'

const Servicios = () => {
    return (
        <>
            <div className="servicios-Container">
                <div className="sec1Servicios-Container col-12">
                    <span className="TitleServicios-Content fw-bold">SERVICIOS</span>
                </div>


                <div className="cardsServicios-Container col-12">
                    <div className="pServicios-Container col-12">
                <p className='pServicios fw-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in quo animi, eos suscipit tenetur rem nobis consequatur porro inventore facere facilis error est perspiciatis magni ipsam! Ea, quas iure.</p>
                    </div>
                    <div className="card">
                    <img src={imgCard} class=" card-img" alt="..." />
                        <div className="card__content">
                            <p className="card__title">IMPRESIONES</p>
                            <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>


                    <div className="card">
                    <img src={imgCuadernillo} class="card-img" alt="..." />
                        <div className="card__content">
                            <p className="card__title">CUADERNILLOS</p>
                            <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    
                    <div className="card">
                    <img src={imgApuntes} class="card-img" alt="..." />
                        <div className="card__content">
                            <p className="card__title">APUNTES</p>
                            <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>

                    <div className="card">
                    <img src={imgLapiceras} class="card-img" alt="..." />
                        <div className="card__content">
                            <p className="card__title">ART. LIBRERIA</p>
                            <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Servicios