import React from "react";
import "./experience.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Experience = () => {
  return (
    <section id="experience" className="">
      <div className="">
        <div className="row">
          <div className="col-12 col-lg-4 ms-auto mt-auto">
            <div className="px-3 px-lg-0">
              <h2 className="experience-heading m-auto text-center">
                Ultimate Travel Experience
              </h2>
              <p className="experience-subtitle m-auto py-5 text-center">
                We offer a wide range of services, including flight booking,
                hotel booking, car rental, visa assistance, insurance, and tours
                and activities. We work with leading global service providers to
                ensure you have the best possible travel experience. We also
                offer customized solutions for our clients that can be adapted
                to their specific needs and budget.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="mx-2">
              <Splide
                className="h-100"
                options={{
                  perPage: 2.2,
                  gap: "10px",
                  focus: 'center',
                  arrows: false,
                  pagination: false,
                  breakpoints: {
                    320: {
                      perPage: 1.16,
                    },
                    425: {
                      perPage: 1.3,
                    }
                  },
                }}
                aria-labelledby=""
              >
                <SplideSlide className="slide mx-2">
                  <div className="h-auto  overflow-hidden">
                    <img
                      className="h-100 w-100 object-fit-cover"
                      src="/assets/images/canada.png"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide className="slide mx-2">
                  <div className="h-auto overflow-hidden">
                    <img
                      className="h-100 w-100  object-fit-cover"
                      src="/assets/images/canada.png"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide className="slide mx-2">
                  <div className="h-auto overflow-hidden ">
                    <img
                      className="h-100 w-100 object-fit-cover"
                      src="/assets/images/canada.png"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide className="slide mx-2">
                  <div className="h-auto overflow-hidden ">
                    <img
                      className="h-100 w-100 object-fit-cover"
                      src="/assets/images/canada.png"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide className="slide mx-2">
                  <div className="h-auto overflow-hidden ">
                    <img
                      className="h-100 w-100 object-fit-cover"
                      src="/assets/images/canada.png"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide className="slide mx-2">
                  <div className="h-auto  overflow-hidden">
                    <img
                      className="h-100 w-100 object-fit-cover"
                      src="/assets/images/canada.png"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                {/* {[...Array(6).keys()].map((index) => (
                  <SplideSlide key={index} className="slide mx-2">
                    <div className="h-auto overflow-hidden">
                      <img
                        className="h-100 w-100 object-fit-cover"
                        src="/assets/images/canada.png"
                        alt=""
                      />
                    </div>
                  </SplideSlide>
                ))} */}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
