import React from "react";
import "./services.css";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { services } from "./data.js";
const Services = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {Object.entries(services)?.map(([id, datas]) => (
          <article className="service" key={id}>
            <div className="service_head">
              <h3>{datas.domain}</h3>
              <small className="comment"> {datas.comment}</small>
            </div>
            <ul className="service_list">
              {Object.entries(datas.data)?.map(([key, data]) => (
                <li key={key}>
                  <BsFillBookmarkCheckFill className="service_list-icon" />
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
