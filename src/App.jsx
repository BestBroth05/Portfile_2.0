import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload, faPaperPlane, faCode, faServer, faVials, faGear, faBrain, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import ParticleBackground from './Components/Background';
function App() {

  return (
    <>
    {/* Background Stars */}
    <ParticleBackground></ParticleBackground>
      {/* Header */}
      <header id='header'>
        <p>Hi &#128075; I am</p>
        <h1 className='maintext'>Brayan Olivares</h1>
        <p>Full Stack developer, passionate about frontend development.</p>
        <a href="/src/assets/docs/Brayan_Olivares_CV.pdf" download='Brayan_Olivares_CV.pdf'><button className='buttons' type='submit'>Download CV <FontAwesomeIcon icon={faDownload} /></button></a>
        <a href="mailto:olivaresbrayan0510@gmail.com?"><button className='buttons'>Contact me <FontAwesomeIcon icon={faPaperPlane} /></button></a>
        <br />
        <div className='headerMedia'>
          <a href="https://linkedin.com/in/brayan-guillermo-olivares-peña-865a74277"><FontAwesomeIcon icon={faLinkedinIn} style={{color: "#ffff",}}/></a>
          <a href="https://github.com/BestBroth05"><FontAwesomeIcon icon={faGithubAlt} style={{color: "#ffff",}}/></a>
          <a href="mailto:olivaresbrayan0510@gmail.com?"><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffff",}} /></a>
          <div><hr className='line' /></div>
        </div>
      </header>
      {/* Body */}
      <body>
        {/* About me */}
        <div>
          <img src="/src/assets/img/me.jpg" alt="" />
          <p>Whoami</p>
          <h2>About me</h2>
          <p>I love creating websites that provide a unique and satisfying user experience. You can see some of my projects in the projects section.</p>
          <p>I am a self-taught person, responsible and committed to my work. I am constantly learning new technologies and tools to improve my skills. Below, you can see my skills and technologies I use.</p>
          <p>Feel free to contact me if you have any questions.</p>
        </div>
        {/* Knowledge */}
        <div>
          <div>
          <FontAwesomeIcon icon={faCode} size='2xl' style={{color: "#624da3",}} />
          <h3>Frontend</h3>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Bootstrap</p>
          <p>JavaScript</p>
          <p>PHP</p>
          <p>ReactJS</p>
          <p>Flutter</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faServer} size='2xl' style={{color: "#624da3",}} />
            <h3>Backend</h3>
            <p>Java</p>
            <p>NodeJS</p>
            <p>Express</p>
            <p>SQL</p>
            <p>AWS</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faVials} size='2xl' style={{color: "#624da3",}} />
            <h3>Testing</h3>
            <p>Jest</p>
            <p>Selenium</p>
            <p>React Testing Library</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} size='2xl' style={{color: "#624da3",}} />
            <h3>Tools</h3>
            <p>GitHub</p>
            <p>GitLab</p>
            <p>Postman</p>
            <p>Scrum</p>
            <p>Networking and Virtual Collaboration</p>
            <p>User Stories</p>
            <p>VSCode</p>
            <p>Adobe Illustrator</p>
            <p>Adobe Premiere</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBrain} size='2xl' style={{color: "#624da3",}} />
            <h3>Other Knowledge</h3>
            <p>OpenCV</p>
            <p>Arduino</p>
            <p>Unity</p>
            <p>.NET</p>
            <p>Suite Office</p>
            <p>Python</p>
          </div>
        </div>
        {/* Projects */}
        <div>
          <p>Some of my Projects</p>
          <h2>My Projects</h2>
          <div>
            <img src="/src/assets/img/tindog.png" alt="tindog" />
            <h3>TinDog</h3>
            <div>
              <p>This is a WebSite for your dogs or even cats meet new and interesting dogs nearby.</p>
            </div>
            <div>
              <a href="https://github.com/BestBroth05/TinDog"><button><FontAwesomeIcon icon={faGithubAlt} /></button></a>
              <a href="https://bestbroth05.github.io/TinDog/"><button type='submit'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></a>
            </div>
            <div>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </body>
      {/* Footer */}
      <footer>

      </footer>
    </>
  )
}

export default App
