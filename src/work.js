import React from "react";

const Work = () => {
  return (
    <div className="work">
      <div className="title">
        <h1>WORK</h1>
        <div className="underline"></div>
      </div>
      <div className="workDetails">
        <div className="work-1">
          <h3>JavaScript</h3>
          <hr></hr>
          <p>
            Experienced in building UI using Vanilla Javascript and it's Library
            React. Created Web component using JavaScript Framework VueJs.
            Implemented ES6 techniques. Worked with Rest API and consumed data
            to Application.
          </p>
        </div>
        <div className="work-2">
          <h3>React</h3>
          <hr></hr>
          <p>
            Built React components using hooks, useEffect. Implemented JSX to
            React Application. Experienced in using tools like Parcel to
            transcepile JSX code to React Code. Implemented Bable, Prettier,
            EsLint to make code accesible to all browser and apply react hooks
            rule.
          </p>
        </div>
        <div className="work-3">
          <h3>Tooling</h3>
          <hr></hr>
          <p>
            Worked with Webpack to bundle Application Code. Implemented
            Prettier, EsLint , Bable to Application to make code look cleaner,
            secure and accesible to all browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
