import React from "react";
import "./portfolio.css";
import { projects } from "./data.js";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        {Object.entries(projects)?.map(([id, data]) => (
          <article className="portfolio_item" key={id}>
            <div className="portfolio_item-image">
              <img src={data.image} alt="Project-image" />
            </div>
            <div className="doc">
              <h3>{data.title}</h3>
              <small className="text-light"> {data.comment}</small>
            </div>
            <div className="portfolio_item-cta">
              <a href={data.github} className="btn">
                Github
              </a>
              {data.live && (
                <a href={data.live} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
