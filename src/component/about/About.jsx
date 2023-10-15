import React from "react";
import "./about.css";
import ME2 from "../../assets/ME2.jpg";
import { GiClassicalKnowledge, GiOpenFolder } from "react-icons/gi";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5> Get to know </h5>
      <h2> About Me </h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiClassicalKnowledge className="about_icon" />
              <h5> Experience </h5>
              <small>   6 months working </small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5> Study </h5>
              <small> Web and mobile software developer at Intech  </small>
            </article>
            <article className="about_card">
              <GiOpenFolder className="about_icon" />
              <h5> Project </h5>
              <small> 10 + achieve </small>
            </article>
          </div>
          <p>
            {" "}
            I'm a  student in  Web and mobile software developer  with a focus on the javascript and
            python, but still exploring other technologies and frameworks that
            catch my interest! If you're looking for a developer motivated and passionate, feel free to contact me
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
