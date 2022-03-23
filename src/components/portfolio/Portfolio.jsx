import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Curency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Zing Mp3",
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Charts templates & infographics in Figma",
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crypto Curency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Curency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto Curency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "http://github.com",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container pfl__container">
        {data.map((item) => {
          return (
            <article className="pfl__item" key={item.id}>
              <div className="pfl__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="pfl__item-cta">
                <a href={item.github} className="btn">
                  Github
                </a>
                <a href={item.demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
