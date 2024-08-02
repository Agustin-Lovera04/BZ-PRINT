import user from '/images/user.png'
import "./Carousel.css";

const CarouselComponent = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">

          <div className="carousel-content">
            <div className="text-ImgSlide-Container">
              <div className="imgSlide-Container">
                <img src={user} alt="" className='imgUser-Slide' />
              </div>
                <h2 className="titleSlide">Nombre Persona</h2>
            </div>
            <p className='pSlide'><span className='comillaSlide'>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor, repudiandae consequatur, laborum ea quod accusantium sapiente et ipsa laboriosam, quae necessitatibus assumenda ad magnam harum. Eveniet enim accusamus nostrum?<span className='comillaSlide'>"</span></p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <div className="carousel-content">
            <div className="text-ImgSlide-Container">
              <div className="imgSlide-Container">
                <img src={user} alt="" className='imgUser-Slide' />
              </div>
                <h2 className="titleSlide">Nombre Persona</h2>
            </div>
            <p className='pSlide'><span className='comillaSlide'>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor, repudiandae consequatur, laborum ea quod accusantium sapiente et ipsa laboriosam, quae necessitatibus assumenda ad magnam harum. Eveniet enim accusamus nostrum?<span className='comillaSlide'>"</span></p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <div className="carousel-content">
            <div className="text-ImgSlide-Container">
              <div className="imgSlide-Container">
                <img src={user} alt="" className='imgUser-Slide' />
              </div>
                <h2 className="titleSlide">Nombre Persona</h2>
            </div>
            <p className='pSlide'><span className='comillaSlide'>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor, repudiandae consequatur, laborum ea quod accusantium sapiente et ipsa laboriosam, quae necessitatibus assumenda ad magnam harum. Eveniet enim accusamus nostrum?<span className='comillaSlide'>"</span></p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;