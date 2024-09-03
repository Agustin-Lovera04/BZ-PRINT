import './quienesSomos.css';
import { InstagramEmbed } from 'react-social-media-embed';

const QuienesSomos = () => {
    return (
        <>
            <div className="quienesSomos-Container">
                <h1 className='d-flex flex-row aling-items-right gap-1 gap-lg-3 col-12 m-2'><span className="TitleQuienesSomos-Content fw-bold ">¿QUIENES </span> <span className="TitleQuienesSomos2-Content fw-bold"> SOMOS?</span></h1>
                <div className="sec2QuienesSomos-Container">
                    <div className="iframeQuienesSomos col-12 col-lg-6" data-aos="zoom-in" data-aos-duration="1500">
                        <InstagramEmbed url="https://www.instagram.com/p/C8pyoc3xAWc/" />
                    </div>
                    <p className="pQuienesSomos col-12 col-lg-6 fw-bold">
                        BZ es un emprendimiento joven dedicado a mejorar la calidad de estudio de estudiantes e instituciones, hacemos envíos a domicilio de fotocopias e impresiones en el día y de forma super económica! Estamos trabajando en una biblioteca virtual en la cual todos van a poder acceder a apuntes de distintas cátedras de distintas facultades, universidad y terciarios de la ciudad de Santa Fe.
                        Con este grupo de trabajo pensamos que la unión hace a la fuerza y estamos dispuestos a revolucionar la industria del estudio.
                    </p>
                </div>

            </div>
        </>
    )
}

export default QuienesSomos;
