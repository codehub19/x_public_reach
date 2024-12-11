import React, { useRef } from 'react';
import './Home.css';
import x_logo from '../assets/x_logo.png';

const Home = () => {
  const isAppInstalled = (scheme) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = scheme;
    document.body.appendChild(iframe);
    setTimeout(() => document.body.removeChild(iframe), 2000);
  };

  // Handle submitting the tweet
  const handleTweetSubmit1 = () => {
    const tweet1 = `URGENT!
    @EduMinOfIndia Revise MTech stipend to ₹18,000-20,000/Month. Align with NEP 2020 for sustainable research & innovation in India.
    @dpradhanbjp @OfficeDp @AICTE_INDIA @mhrd_innovation @ugc_india @PMOIndia
    #IncreaseMTechStipend #MoE 
    #EducationReform #GATE`;

    const twitterUrl_1 = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet1)}`;
    const twitterAppUrl_1 = `twitter://intent/tweet?text=${encodeURIComponent(tweet1)}`;

    const openTwitterAppOrWeb = () => {
      isAppInstalled(twitterAppUrl_1);
      setTimeout(() => {
        window.open(twitterUrl_1, '_blank');
      }, 1500); // Wait 1.5 seconds for the app to open
    };

    openTwitterAppOrWeb();
  };



  const handleTweetSubmit2 = () => {

    const tweet2 = `#IncreaseMTechStipend #Stipend #IIT
    @rashtrapatibhvn @VPIndia @SWAYAMMHRD @ncteDelhi @RahulGandhi @narendramodi @DrSukantaBJP @somnathnow @abhayjere @DoT_India @DrRPNishank @Drsubhassarkar @mamidala90 @MamtaRAgarwal1 @rksoni_aicte @ms_aicte @IKS_Media @UnivofDelhi @NITIAayog`

    const twitterUrl_2 = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet2)}`;
    const twitterAppUrl_2 = `twitter://intent/tweet?text=${encodeURIComponent(tweet2)}`;

    const openTwitterAppOrWeb = () => {
      isAppInstalled(twitterAppUrl_2);
      setTimeout(() => {
        window.open(twitterUrl_2, '_blank');
      }, 1500); // Wait 1.5 seconds for the app to open
    };

    openTwitterAppOrWeb();
  };

  return (
    <div className="home">
      <img width={'30px'} src={x_logo} alt="X Logo" />
      <div className="support">
        <h2>#INCREASE.MTECH.STIPEND</h2>
      </div>
      <p className="info-text">
        <p>
        Join the movement for a brighter future in research and innovation—<strong>click the post buttons below</strong>to spread the word and amplify the call for better M.Tech stipends across India!
        <strong>#Increase  #IncreaseMTechStipend #EducationReform #SupportInnovation</strong>
        </p>
      </p>
      <button onClick={handleTweetSubmit1}   className="submit-button">
        Post-1
      </button>
      <button onClick={handleTweetSubmit2}   className="submit-button">
        Post-2
      </button>
    </div>
  );
};

export default Home;
