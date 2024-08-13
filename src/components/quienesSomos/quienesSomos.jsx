import './quienesSomos.css';
import  {InstagramEmbed} from 'react-social-media-embed';

const QuienesSomos = () => {
    return (
        <>
            <div className="quienesSomos-Container">
                <h1><span className="TitleQuienesSomos-Content fw-bold col-12">¿QUIENES </span><span className="TitleQuienesSomos2-Content fw-bold">SOMOS?</span></h1>
                <div className="sec2QuienesSomos-Container">
                    < div className='iframeQuienesSomos'>
                        < InstagramEmbed url="https://www.instagram.com/p/C8pyoc3xAWc/" />
                    </div>
                        <hr className='custom-divider' />
                        <p className='pQuienesSomos col-6 fw-bold'>BZ es un emprendimiento joven dedicado a mejorar la calidad de estudio de estudiantes e instituciones, hacemos envios a domicilio de fotocopias e impresiones en el día y de forma super económica! Estamos trabajando en una biblioteca virtual en la cual todos van a poder acceder a apuntes de distintas cátedras de distintas facultades, universidad y terciarios de la ciudad de santa fe.
                        Con este grupo de trabajo pensamos que la unión hace a la fuerza y estamos dispuestos a revolucionar la industria del estudio.
                        </p>
                    </div>
                </div>
            </>
            )
}

            export default QuienesSomos;
