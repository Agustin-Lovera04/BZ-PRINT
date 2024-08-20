import './envios.css'
import EnviosIMG from '/images/EnvioFlash.png'
const Envios = () => {
    return (
        <>
            <div className="envios-Container">
                <h1 className='titleEnvios-Content fw-bold col-12'>ENVIOS</h1>

                <div className="envios-Content col-12">
                    <div className="pEnvios col-12 col-lg-6">
                        <p className='fw-bold text-light p-Envios-Container'>
                            REALIZAMOS ENVIOS A <span className="pRTA-Envios">TODA LA CIUDAD</span><hr />
                            <span className='pPregunta-Envios'>¿ CUANDO ?<br /></span> LOS DIAS <span className="pRTA-Envios">LUNES Y VIERNES</span><hr />
                            <span className="pPregunta-Envios">¿ HORARIOS ? <br /></span>
                            <span className="pRTA-Envios"> 10:00hs a 13:00hs</span><br /><span className="pRTA-Envios">15:00hs a 18:00hs</span>
                        </p>
                    </div>
                    <div className="vertical-divider-Envios col-1"></div>
                    <div className="imgEnvios-Container col-12 col-lg-6">
                        <img src={EnviosIMG} alt="" className='imgEnvios'/>
                        <p className='subTitleEnvios fw-bold'>ENVIOS AL INSTANTE<br />
                        <p className="pACLARACION-Envios fw-bold">(*REQUIERE COSTO ADICIONAL)</p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Envios