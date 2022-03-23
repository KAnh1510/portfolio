import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp__container">
        <div className="exp__fronend">
          <h3>Fronend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <div>
                  <h4>HTML</h4>
                </div>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exp__backend">
          <h3>Backend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>Ndde JS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
