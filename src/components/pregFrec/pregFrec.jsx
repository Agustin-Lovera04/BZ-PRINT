import './pregFrec.css'

const PreguntasFrecuentes = () => {
    return (
        <>
            <div className="pregFrec-Container">
                <h1 className="titlePregFrec fw-bold col-12">PREGUNTAS FRECUENTES</h1>

                <div className="pregBoxs-Container col-12">
                    <div className="faq-box col-12" data-aos="fade-right" data-aos-duration="1500">
                        <div className="faq-item">
                            <h3 className="question">¿Hacen envios a toda la ciudad y alrededores?</h3>
                            <p className="answer">Si, hacemos envios a toda la ciudad con cadeteria propia.
                            </p>
                        </div>
                    </div>
                    <div className="faq-box col-12" data-aos="fade-left" data-aos-duration="1500">
                        <div className="faq-item b-r">
                            <h3 className="question">¿Realizan envios en el día?</h3>
                            <p className="answer">Si, tomamos los pedidos y los entregamos el día y fecha que el cliente quiera, incluído envios en el momento.
                            </p>
                        </div>
                    </div>
                    <div className="faq-box col-12" data-aos="fade-right" data-aos-duration="1500">
                        <div className="faq-item">
                            <h3 className="question">¿Realizan anillados, abrochados etc?</h3>
                            <p className="answer">Realizamos todo lo que se necesita para que puedas estudiar de la mejor forma y como siempre súper económico !
                            </p>
                        </div>
                    </div>
                    <div className="faq-box col-12" data-aos="fade-left" data-aos-duration="1500">
                        <div className="faq-item b-r">
                            <h3 className="question">¿Trabajan solo con instituciones?</h3>
                            <p className="answer">No, trabajamos a todo el público instituciones, estudiantes y demas</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PreguntasFrecuentes