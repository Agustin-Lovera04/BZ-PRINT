import React from 'react';
import './clientes.css';
import CarouselComponent from '../carousel/carousel';

const Clientes = () => {
    return (
        <div className="clientes-Container">
            <h1 className="titleClientes">CLIENTES</h1>
            <div className="carrousel-Container">
                <CarouselComponent />
            </div>
        </div>
    );
}

export default Clientes;
