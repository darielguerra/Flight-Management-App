import { LinkedInIcon } from '../../assets/svg-icons/LinkedInIcon';
import { GithubIcon } from '../../assets/svg-icons/GithubIcon';
import { Footer } from '../../components/global-components/footers/Footer';
import './About.css';

export const About = () => {   

    return (
      <div className="about-page">
        <div className="about-card">
          {/*<div className="about-card-inside"></div>*/}
          <div className="about-title"><p>About this Site</p></div>
            <div className="about-info">
              <p><bold>Zenith Airlines</bold> is a fictional airlines created to 
                showcase a Flight Management App where the user can 
                add, edit, and remove flights, pilots, and airports.  
                The site was developed using React for the front end, 
                Express.js and Node.js. for the back end, and MongoDB 
                for the database.  This site was created by 
                <bold> Dariel Guerra</bold>.
              </p>
            </div>
          <div className="link-icons">
            <a  className="linkedin-anchor"href="https://www.linkedin.com/in/darielguerra" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a className=".github-anchor " href="https://github.com/darielguerra/Flight-Management-App" target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
          </div>   
        </div>
        <div className="under-construction"><p>Site is still being developed</p></div>
        < Footer />
      </div> 
    );
}