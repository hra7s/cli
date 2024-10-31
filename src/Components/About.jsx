
// import React from 'react'
// import CarousleComp from './CarousleComp'


// const About = () => {

//   const images = [
//     'src/assets/Aboutus1.jpg',
//     'src/assets/Aboutus2.jpg'
//   ]
//   return (
//     <div>
//         <h4 className='text-center'>About Us</h4>
//         <CarousleComp className="caro" images={images} autoSlideInterval = {3000} />
//     </div>
//   )
// }

// export default About




import { Carousel } from 'react-bootstrap';



const About = () => {
    const slides = [
        {
            image: 'src/assets/Aboutus1.jpg',
            title: "Who We Are",
            description1: "What we do: provides in-depth rankings, hospital quality outcomes, and market analysis data to help improve hospital performance.",
            description2: "What we Research: Nursing homes, home health agencies, hospitals, and post-acute care organizations for CRM, market data, and technology solutions."
        },
        {
            image: 'src/assets/Aboutus2.jpg',
            title: "Our Mission",
            description1: "To deliver precise healthcare data and solutions that empower organizations to optimize their performance.",
            description2: "Focusing on excellence in healthcare outcomes, innovative market insights, and technology advancements."
        }
    ];

    return (
        <section className="about-us-carousel">
            <h2>About Us</h2>
            <Carousel>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <div className="carousel-content d-flex align-items-center justify-content-center">
                          <div className='carousel-image-wrapper'>
                            <img src={slide.image} alt={slide.title} className="carousel-image" />
                            </div>
                            <div className="carousel-text ms-3">
                                <h3>{slide.title}</h3>
                                <p>{slide.description1}</p>
                                <p>{slide.description2}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default About