import React, { useRef } from 'react';
import './Home.css';
import x_logo from '../assets/x_logo.png';

const Home = () => {
  // const nameRef = useRef(null);
  // const collegeRef = useRef(null);

  // Function to check if the X app (formerly Twitter) is installed
  const isAppInstalled = (scheme) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = scheme;
    document.body.appendChild(iframe);
    setTimeout(() => document.body.removeChild(iframe), 2000);
  };

  // Handle submitting the tweet
  const handleTweetSubmit = () => {
    // if (!nameRef.current.value || !collegeRef.current.value) {
    //   alert('Please fill in all the fields');
    //   return;
    // }

    // const name = nameRef.current.value;
    // const college = collegeRef.current.value;
    const tweet = `URGENT! @PMOIndia @RahulGandhi @DharmendraPradhan @MHRD_GoI @AICTE_INDIA Revise M.Tech stipends to ₹18,000-20,000/month. Align with NEP 2020 for sustainable research & innovation in India #Increase.MtechStipend #EducationReform`;

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    const twitterAppUrl = `twitter://intent/tweet?text=${encodeURIComponent(tweet)}`;

    // Function to open the app or web based on availability
    const openTwitterAppOrWeb = () => {
      // Try to open the X app first
      isAppInstalled(twitterAppUrl);

      // If the app isn't installed, fallback to opening the web version
      setTimeout(() => {
        window.open(twitterUrl, '_blank');
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
      {/* <div className="form">
        <label htmlFor="name">Name</label>
        <input
          required
          ref={nameRef}
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
        <label htmlFor="college">College</label>
        <input
          required
          ref={collegeRef}
          type="text"
          id="college"
          name="college"
          placeholder="Enter your college"
        />
      </div> */}
      <p className="info-text">
        <p>
        Join the movement for a brighter future in research and innovation—click the support button below to spread the word and amplify the call for better M.Tech stipends across India!
        <strong>#Increase  #IncreaseMTechStipend #EducationReform #SupportInnovation</strong>
        </p>
      </p>
      <button onClick={handleTweetSubmit} className="submit-button">
        Support
      </button>
    </div>
  );
};

export default Home;
