import './servicios.css'
import imgCard from '/images/RecursoNº2.jpg'

const Servicios = () => {
    return (
        <>
            <div className="servicios-Container">
                <div className="sec1Servicios-Container col-12 col-xl-6">
                <span className="TitleServicios-Content fw-bold">SERVICIOS</span>
                <p className='pServicios fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in quo animi, eos suscipit tenetur rem nobis consequatur porro inventore facere facilis error est perspiciatis magni ipsam! Ea, quas iure.</p>
                </div>


                <div className="cardsServicios-Container col-12 col-xl-6">
                    <div className="card">
                    <img src={imgCard} class=" card-img" alt="..." />
                        <div className="card__content">
                            <p className="card__title">Card Title</p>
                            <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>


                    <div className="card">
                    <img src={imgCard} class="card-img" alt="..." />
                        <div className="card__content">
                            <p className="card__title">Card Title</p>
                            <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>

                    <div className="card">
                    <img src={imgCard} class="card-img" alt="..." />
                        <div className="card__content">
                            <p className="card__title">Card Title</p>
                            <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    <div className="card">
                    <img src={imgCard} class="card-img" alt="..." />
                        <div className="card__content">
                            <p className="card__title">Card Title</p>
                            <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Servicios