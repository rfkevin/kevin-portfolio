import React from "react";
import { studies } from "./data.js";
import "./study.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Study = () => {
  return (
    <section id="study">
      <h5> school career </h5>
      <h2> My Degree </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container studi_container"
      >
        {Object.entries(studies)?.map(([id, data]) => (
          <SwiperSlide className="studi_item" key={id}>
            <div className="studi_item-image">
              <img src={data.image} alt="shcool logo" />
            </div>
            <div className="doc">
              <h3>{data.title}</h3>
              <small className="text-light"> {data.parcours}</small>
              <p> Date : {data.date}</p>
              <p> Establishment : {data.university}</p>
            </div>
            {data.validate && (
              <div className="studi_item-cta">
                <a
                  href={data.certificate}
                  download={data.title + " certificate Rk"}
                  className="btn"
                >
                  download certificate
                </a>
                <a
                  href={data.transcript}
                  download={data.title + " transcript Rk"}
                  className="btn btn-primary"
                >
                  download transcript
                </a>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Study;
