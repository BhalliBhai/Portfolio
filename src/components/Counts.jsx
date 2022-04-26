import React from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const Counts = () =>{
    return(
        <>
                <div className="counts container">

<div className="row">

  <div className="col-lg-3 col-md-6">
    <div className="count-box">
      <SentimentSatisfiedAltIcon className="count-icon"></SentimentSatisfiedAltIcon>
      <span className="purecounter">232</span>
      <p>Happy Clients</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
    <div className="count-box">
    <ArticleOutlinedIcon className="count-icon"></ArticleOutlinedIcon>
      <span className="purecounter">521</span>
      <p>Projects</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
    <div className="count-box">
      <HeadsetMicIcon className="count-icon"></HeadsetMicIcon>
      <span  className="purecounter">1463</span>
      <p>Hours Of Support</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
    <div className="count-box">
      <WorkspacePremiumIcon className="count-icon"></WorkspacePremiumIcon>
      <span className="purecounter">24</span>
      <p>Awards</p>
    </div>
  </div>

</div>

</div>
        </>
    );
}
export default Counts;