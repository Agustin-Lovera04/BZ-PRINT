import './quienesSomos.css';

const QuienesSomos = () => {
    return (
        <>
            <div className="quienesSomos-Container">
                <h1><span className="TitleQuienesSomos-Content fw-bold col-12">¿QUIENES </span><span className="TitleQuienesSomos2-Content fw-bold">SOMOS?</span></h1>
                <div className="sec2QuienesSomos-Container">
                    <iframe src="https://www.instagram.com/p/C8pyoc3xAWc/" width="280" height="505" frameborder="0" scrolling="no" allowtransparency="true" className='iframeQuienesSomos col-6'></iframe>
                    <hr className='custom-divider'/>
                    <p className='pQuienesSomos col-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sunt optio deleniti porro doloribus unde magni ex! Ullam itaque sit quibusdam amet quae at quas ipsa laboriosam obcaecati, fugiat harum.</p>
                </div>
            </div>
        </>
    )
}

export default QuienesSomos;
