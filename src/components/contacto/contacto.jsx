import './contacto.css';
import imgWhatsapp from '/images/whatsapp.png';

const Contacto = () => {
    return (
        <>
            <div className="contacto-Container">
                <h1 className="titleContacto fw-bold col-12">CONTACTO</h1>

                <div className="mediosContacto-Container">

                    <div className="btnsContacto-Container col-12">
                        <button className='btn-contact col-lg-5 col-7'>
                            <img src={imgWhatsapp} className='imgBtnContacto' alt="" /> Envianos un WhatsApp
                        </button>
                    </div>
                    <div className="formConcto-Container col-12">
                        <form
                            action="mailto:your-email@example.com?subject=CONSULTA%20SITIO%20WEB"
                            method="post"
                            encType="text/plain"
                            className='col-lg-5 col-7'
                        >
                            <label htmlFor="NameUser" className='fw-bold text-light fs-4'>Ingrese su nombre:</label>
                            <input type="text" id="Name" name="Nombre" required placeholder='Ingrese su nombre' />

                            <label htmlFor="query" className='fw-bold text-light fs-4'>Consulta:</label>
                            <textarea id="query" name="Consulta" rows="4" required placeholder='Detalle de su consulta' />

                            <button type="submit" className="btn-contact">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacto;
