import './envios.css'
import EnviosIMG from '/images/EnvioFlash.png'
const Envios = () => {
    return (
        <>
            <div className="envios-Container">
                <h1 className='titleEnvios-Content fw-bold col-12'>ENVIOS</h1>

                <div className="envios-Content col-12">
                    <div className="pEnvios col-5">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus consequuntur quia explicabo porro! Minima deserunt vero pariatur? Adipisci pariatur a quia numquam ipsum, commodi nesciunt id, quos ullam minus cum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam saepe voluptate dolore esse provident. Repudiandae, culpa dignissimos tempore aperiam delectus fugit eaque quis alias quidem nesciunt minima at excepturi perspiciatis.
                        </p>
                    </div>
                    <hr className='custom-divider col-1'/>
                    <div className="imgEnvios-Container col-6">
                        <img src={EnviosIMG} alt="" className='imgEnvios'/>
                        <h2 className='subTitleEnvios fw-bold'>ENVIOS AL INSTANTE</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Envios