import home from './Home.module.css'
import Photo from '../../assets/DSC_6610.JPG'
import Linkedin from '../../assets/images/linkedin.png'
import React from 'react';

function Home() {
  return (
    <div className={home.main}>
      <div className={home.content}>
        <img className={home.image} src={Photo} alt='me' />
        <div>
          <h1>Jérémy CHAMBON</h1>
          <h2>Développeur frontend - junior</h2>
          <div className={home.logo}>
            Mon linkedin:<a href='https://www.linkedin.com/in/jeremy-chambon-7a8780106/'><img className={home.linkedin}src={Linkedin} alt='Linkedinlogo'></img></a>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7078848724138897408" height="766" width="504" frameborder="0" allowfullscreen="" title="Post intégré"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
