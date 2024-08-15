import './equipo.css';
import CarouselComponent from '../carousel/carousel';

const Equipo = () => {
    return (
        <div className="clientes-Container">
            <h1 className="titleClientes">NUESTRO EQUIPO</h1>
            <div className="carrousel-Container">
                <CarouselComponent />
            </div>
        </div>
    );
}

export default Equipo;
