import React from "react";
import LinearProgress from '@mui/material/LinearProgress';





const Skills = () => {

    return(
        <>
            <div className="skills container">

<div className="section-title">
  <h2>Skills</h2>
</div>

<div className="row skills-content"  >

  <div className="col-lg-6">

    <div className="progress" >
      <span className="skill">HTML <i className="val">100%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={100}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">CSS <i className="val">90%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={90}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">Bootstrap <i className="val">95%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={95}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">JavaScript <i className="val">75%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={75}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">Jquery <i className="val">95%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={95}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">Bootstrap <i className="val">95%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={95}></LinearProgress>
    </div>

  </div>

  <div className="col-lg-6">

    <div className="progress">
      <span className="skill">React <i className="val">95%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={95}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">React-bootstrap <i className="val">95%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={95}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">Material UI <i className="val">95%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={95}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">Bootstrap <i className="val">95%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={95}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">Bootstrap <i className="val">95%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={95}></LinearProgress>
    </div>

    <div className="progress">
      <span className="skill">Bootstrap <i className="val">95%</i></span>
      <LinearProgress className="progress-bar" variant="determinate" value={95}></LinearProgress>
    </div>

   

  </div>

</div>

</div>
        </>
    );
}
export default Skills;