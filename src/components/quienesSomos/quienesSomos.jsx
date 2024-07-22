import './quienesSomos.css';
import  {InstagramEmbed} from 'react-social-media-embed';

const QuienesSomos = () => {
    return (
        <>
            <div className="quienesSomos-Container">
                <h1><span className="TitleQuienesSomos-Content fw-bold col-12">¿QUIENES </span><span className="TitleQuienesSomos2-Content fw-bold">SOMOS?</span></h1>
                <div className="sec2QuienesSomos-Container">
                    < div className='iframeQuienesSomos'>
                        < InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" />
                    </div>
                        <hr className='custom-divider' />
                        <p className='pQuienesSomos col-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sunt optio deleniti porro doloribus unde magni ex! Ullam itaque sit quibusdam amet quae at quas ipsa laboriosam obcaecati, fugiat harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos dolores eos id praesentium molestias recusandae eius voluptatum itaque eaque? Consequatur omnis excepturi maiores quidem doloremque! Qui placeat consequatur dolorem.
                        </p>
                    </div>
                </div>
            </>
            )
}

            export default QuienesSomos;
