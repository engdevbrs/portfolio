import me from '../static/img/me.png'
import irodum from '../static/img/irodum.png'
import experis from '../static/img/experis.jpg'
import nttdata from '../static/img/nttdata.png'


const About = () => {

  const scrollIntoContact = () =>{
    document.getElementById("contact-info").scrollIntoView();
  }

  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src={me} title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Software developer with over 3 years of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} a Chilean fullstack developer with 3 years of expierience using different types of languages and frameworks,
                   always delivering a high quality product to the client. 
                  In my last 3 years I've been working in multidisciplinary teams using agile methodologies and kanban methodology.
                </p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" style={{ cursor: 'pointer' }} onClick={() => scrollIntoContact()}>
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2022</span>
                <h6>Diploma</h6>
                <p>Javascript Fundamentals</p>
              </li>
              <li>
                <span>2021</span>
                <h6>Certificate</h6>
                <p>Application of Agile methodologies</p><br/>
                <p>Frontend Development Techniques for Software Applications</p><br/>
                <p>Backend Development Techniques for Software Applications</p>
              </li>
              <li>
                <span>2020</span>
                <h6>Engineer's degree</h6>
                <p>Computer Science & Engineering</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>{`I'm`} a Software Developer With a solid background in web development and a passion for creating user-friendly and visually appealing websites.</p>
              <p>{`I'm`} confident in my ability to contribute to successfully results.</p>
              <div className="skill-lt">
                <h6>Javascript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="Proficient" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Springboot</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "75%" }}>
                    <span data-toggle="tooltip" title="Competent" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>AWS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="Competent" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Nodejs</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="Competent" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>CI/CD</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "75%" }}>
                    <span data-toggle="tooltip" title="Competent" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src={irodum} width='70%' title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Fullstack Developer</h6>
                  <label>Irodum SpA | Remote | Feb 2023 - Aug 2023</label>
                  <div className="rb-time">Full Time</div>
                  <p>I have developed my own start up at national level in Chile, whose objective is to create a
                    marketplace for trades workers such as carpenters, welders, gas fitters, who need casual jobs
                    requested by customers who need to solve a problem urgently or quickly. I created the whole
                    system, backend services, database, apis consumption in the frontend, even the UI/UX design.</p>
                    <p className='m-2'><strong>Technologies</strong></p>
                    <ul>
                      <li>AWS, Cloudfront, RDS, EC2</li>
                      <li>Reactjs, Axios, HTML, Bootstrap</li>
                      <li>Nodejs, Expressjs, Multer</li>
                    </ul>
                    <p>The deployment for the backend is with EC2 and the frontend is with Cloudfront.</p>
                    <p>The version control is using Git.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src={experis} style={{ borderRadius: '150px' }} width='70%' title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Fullstack Developer</h6>
                  <label>Experis | Remote | May 2022 - Feb 2023</label>
                  <div className="rb-time">Full Time</div>
                  <p>In this job I worked with kanban methodology, my main task was to maintain the proper
                    functioning of rest services, as well as creating new services to implement new requirements
                    for nurseries and kindergartens throughout chile. On the other hand, I had to ensure the
                    correct visualization of the data received in the frontend in an efficient, fast and consistent
                    way.</p>
                    <p className='m-2'><strong>Technologies</strong></p>
                    <ul>
                      <li>Java 1.8, Spring and MVC dependencies.</li>
                      <li>MySql.</li>
                      <li>Javascript, HTML, CSS, JQuery</li>
                    </ul>
                    <p>The deployment was with jenkins, tomcat and artifactory.</p>
                    <p>The version control was with Github.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src={nttdata} style={{ borderRadius: '150px' }} width='70%' title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Fullstack Developer</h6>
                  <label>NTTDATA | Remote | Jun 2021 - May 2022</label>
                  <div className="rb-time">Full Time</div>
                  <p>In this job i used agile methodologies in 5-day high performance sprint. I worked for a banking
                  company, my role in this job was helping the bank's executives to create a loan reporting
                  system to approve or disapprove a loan, as well as keeping track of debts through an
                  automated system that generated monthly downloads of all loans approved, rejected or paid.
                  My role was to create some responsive design modal on the client side, consume some API's
                  created by my coworkers, as well as creating new REST services and making some unit testing
                  with Mockito.</p>
                  <p className='m-2'><strong>Technologies</strong></p>
                    <ul>
                      <li>Java 1.8, Spring and MVC dependencies</li>
                      <li>Sql</li>
                      <li>Angularjs</li>
                      <li>Javascript, HTML, CSS, JQuery</li>
                    </ul>
                    <p>I used atlassian tools such as: Jira, Bamboo, Bitbucket, Confluence.</p>
                    <p>The deployment was with Bamboo and sonarqube for quality control.</p>
                    <p>The version control was with Github.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
