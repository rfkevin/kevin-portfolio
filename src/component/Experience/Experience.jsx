import React from "react";
import { GiTrophyCup, GiTrophy, GiLaurelsTrophy } from "react-icons/gi";
import { developer, machinelearning } from "./data.js";
import "./experience.css";

const Experience = () => {
  const checkIcon = (experience) => {
    if (experience === "high level") {
      return <GiLaurelsTrophy />;
    }
    else if(experience === "medium level"){
      return <GiTrophy/>
    }
    else{
      return <GiTrophyCup/>
    }
  };
  return (
    <section id="experience">
      <h5> Skills I Have</h5>
      <h2> My Experience </h2>
      <div className="container experience_container">
        <div className="experience_domain1">
          <h3>Developer</h3>
          <div className="experience_content">
            {Object.entries(developer)?.map(([id, data]) => (
              <article className="experience_details" key={id}>
                <div className="icon">{checkIcon(data.experience)}</div>
                <div>
                  <h4>{data.domain}</h4>
                  <small className="text-light"> {data.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience_domain2">
          <h3>Machine Learning</h3>
          <div className="experience_content">
            {Object.entries(machinelearning)?.map(([id, data]) => (
              <article className="experience_details" key={id}>
                <div className="icon">{checkIcon(data.experience)}</div>
                <div>
                  <h4>{data.domain}</h4>
                  <small className="text-light"> {data.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
