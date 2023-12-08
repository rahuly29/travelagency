import React, { useState, useRef, useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./testimonial.css"


const Testimonial = () => {

    const [currentProfile, setCurrentProfile] = useState('Alex');

    const slides = [
        { id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo.svg', profile: 'Abigbi' },
        { id: 2, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo1.svg', profile: 'Vanya' },
        { id: 3, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo2.svg', profile: 'Ksenya' },
        { id: 4, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo3.svg', profile: 'Chan' },
        { id: 5, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo4.svg', profile: 'Dmitry' },
        { id: 6, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo5.svg', profile: 'Alex' },
        { id: 7, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo6.svg', profile: 'Alena' },
        { id: 8, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo7.svg', profile: 'Viktoria' },
        { id: 9, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo8.svg', profile: 'Pavel' },
        { id: 10, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo9.svg', profile: 'Angel' },
        { id: 11, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit voluptates rerum esse nesciunt magnam, quos voluptatem , dolore quis', image: '/assets/images/photo10.svg', profile: 'Tony' },
    ];



    const splideRef = useRef(null);

    useEffect(() => {
        const splideInstance = splideRef.current?.splide;

        if (splideInstance) {
            const handleSlideChange = () => {
                // const newIndex = event.detail.newIndex;
                const profiles = ['Arigbi','Vanya','Ksenya','Chan','Dmitry','Alex', 'Alena', 'Viktoria', 'Pavel', 'Angel', 'Tony'];
                const newIndex = splideInstance.index !== undefined ? splideInstance.index : 0;
                setCurrentProfile(profiles[newIndex]);
            };

            splideInstance.on('moved', handleSlideChange);
        }
    }, [splideRef]);


    const goToPrevSlide = () => {
        if (splideRef.current && splideRef.current.splide) {
            splideRef.current.splide.go('-');
        }
    };


    const goToNextSlide = () => {
        if (splideRef.current && splideRef.current.splide) {
            splideRef.current.splide.go('+');
        }
    };

    console.log(splideRef);



    
    return (

        <section id='testimonial'>
            <h2 className='text-center testimonial-main-heading '>Our happy client</h2>

            <div className="splide mt-5 px-3" >
                <Splide
                    ref={splideRef}
                    options={{
                        perPage: 4,
                        perMove:1,
                        gap: "2rem",
                        arrows: false,
                        pagination: true,
                        focus: 'center',
                        start: 5,
                        breakpoints: {
                            320: {
                                perPage: 1,
                                focus:0,
                            },
                            430:{
                                perPage:1,
                                focus:0,
                            }
                        }
                    }}
                    aria-labelledby=""
                // onMoved={handleSlideChange}
                >
        
                    {slides.map((slide, index) => (
                        <SplideSlide key={slide.id}>
                            <div className={`p-2 ${currentProfile === slide.profile ? 'testimonial-border rounded-4' : ''}`}>
                                <div className='position-relative d-flex flex-column justify-content-center align-items-center p-2'>
                                    <p className='testimonial-para rounded-4 p-3 mb-auto'>{slide.content}</p>
                                    <img src="/assets/images/Polygon 1.svg" alt="" className='position-absolute bottom-0'/>
                                </div>
                                <div className='d-flex justify-content-center align-items-center mt-5'>
                                    <img src={slide.image} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                   
                </Splide>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-5  w-100 position-absolute z-1 visible'>
                    <div className='text-start'>
                    <span
                        className=" d-inline-block text-start"
                        onClick={goToPrevSlide}
                    >
                        <img className='inline-block' src="/assets/icons/leftarrow.svg" alt="" />
                    </span>
                    </div>
                    <div className='text-center w-50'>
                    <h2 className="d-inline-block profile-name">{currentProfile}</h2>
                    </div>
                    <span
                        className="d-inline-block"
                        onClick={goToNextSlide}
                    >
                        <img className='inline-block' src="/assets/icons/rightarrow.svg" alt="" />
                    </span>
                </div>
            
        </section>
    );
}

export default Testimonial;
