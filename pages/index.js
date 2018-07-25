import Link from "next/link";
import ScrollableAnchor from "react-scrollable-anchor";
import Fade from "react-reveal/Fade";
import {
  Rectangle,
  Circle,
  Ellipse,
  Line,
  Polyline,
  CornerBox,
  Triangle
} from "react-shapes";

export default class Index extends React.Component {
  render() {
    return (
      <div className="siteMain">
        <head>
          <title>Kathrine Gibson</title>

          {/* META DATA */}
          <meta name="description" content="Personal Website" />
          <meta name="keywords" content="kathrine gibson" />
          <meta name="author" content="Kathrine Gibson" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* CSS Stuff */}
          <link href="/static/index.css" rel="stylesheet" />
        </head>
        <body>
          <div>
            <section
              data-id="main"
              class="fullpageSection"
              data-viewport-min-height="100"
            >
              <div className="starContainer">
                <img
                  className="stars"
                  src="/static/stars.png"
                  alt="Stars and constellations"
                />
              </div>
              <Fade bottom>
                <div className="directory">
                  <h1 className="title">kathrine gibson</h1>
                  <div className="mainMenu">
                    <a href="#about" className="menuButton button fromRight">
                      about
                    </a>
                    <span />
                    <a href="#resume" className="menuButton button fromCenter">
                      resume
                    </a>
                    <span />
                    <a href="#portfolio" className="menuButton button fromLeft">
                      portfolio
                    </a>
                  </div>
                </div>
              </Fade>
            </section>

            <ScrollableAnchor id={"about"}>
              <section
                data-id="about"
                class="fullpageSection"
                data-viewport-min-height="100"
              >
                {/* <div className="stickyMcSticky">
                  <div className="otherMainMenu">
                    <a href="#about" className="menuButton button fromRight">
                      about
                    </a>
                    <span />
                    <a href="#portfolio" className="menuButton button fromLeft">
                      portfolio
                    </a>
                  </div>
                </div> */}
                <div className="top">
                  <div className="header">about me</div>
                  <Line
                    x1={75}
                    x2={250}
                    y1={5}
                    y2={5}
                    stroke={{ color: "rgb(58, 58, 58)" }}
                    strokeWidth={3}
                  />
                </div>
                <section className="aboutSection">
                  <div className="aboutDescription">
                    <div className="descriptionTagline">
                      Hello, my name is Kathrine Gibson.
                      <br />I'm a computer science student at Gonzaga
                      University.
                    </div>
                    <div className="descriptionWords">
                      <p>
                        Learning new things is my favorite pastime, which is a
                        big reason as to why I chose to study computer science
                        since technology is constantly changing. Another big
                        reason is that I see technology as a way to expand my
                        creative process and can spend hours perfecting a
                        design. The best example of this is this website, which
                        is likely to continue evolving in the future as I learn
                        more about website design.
                      </p>
                      <p>
                        Besides programming, I like to research treehouses,
                        train for triathlons, meet new dogs, and go to art
                        museums.
                      </p>
                    </div>

                    <div className="contactProfiles">
                      <ul className="contact">
                        <li className="contactli">
                          <a
                            href="mailto:kathrinemgibson@gmail.com"
                            target="_blank"
                            onClick="ga('send', 'event', 'external page', 'visit', this.href);"
                          >
                            <img
                              src="./static/img/logos/logo-email.svg"
                              width="30"
                              height="30"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="contactli">
                          <a
                            href="https://github.com/k-gibson/"
                            target="_blank"
                            onClick="ga('send', 'event', 'external page', 'visit', this.href);"
                          >
                            <img
                              src="./static/img/logos/logo-github.svg"
                              width="30"
                              height="30"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="contactli">
                          <a
                            href="http://www.linkedin.com/in/kathrine-gibson"
                            target="_blank"
                            onClick="ga('send', 'event', 'external page', 'visit', this.href);"
                          >
                            <img
                              src="./static/img/logos/logo-linkedin.svg"
                              width="30"
                              height="30"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="contactli">
                          <a
                            href="https://twitter.com/kathrineFromCO"
                            target="_blank"
                            onClick="ga('send', 'event', 'external page', 'visit', this.href);"
                          >
                            <img
                              src="./static/img/logos/logo-twitter.svg"
                              width="30"
                              height="30"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="picture">
                    <img
                      className="profileImage"
                      src="./static/profile.png"
                      alt="profile image"
                    />
                  </div>
                </section>
              </section>
            </ScrollableAnchor>

            <ScrollableAnchor id={"resume"}>
              <section
                data-id="resume"
                class="resumeSection"
                data-viewport-min-height="100"
              >
                <div className="top">
                  <div className="header">my resume</div>
                  <Line
                    x1={75}
                    x2={250}
                    y1={5}
                    y2={5}
                    stroke={{ color: "rgb(58, 58, 58)" }}
                    strokeWidth={3}
                  />
                  <div>
                    <strong>
                      <a
                        className="download"
                        href="/static/Kathrine_Gibson_Resume.pdf"
                        download
                      >
                        "kathrine_gibson_resume.pdf"
                      </a>
                    </strong>
                  </div>
                </div>
                <div className="currentResume">
                  <div className="education">
                    <p style={{ textAlign: "center" }}>
                      <strong>Education</strong>
                      <hr />
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        Gonzaga University | Computer Science and Computational
                        Thinking, B.A.
                        <br />
                        Expected May 2020
                      </strong>
                      <br />
                      <br />
                      Relevant Coursework:
                      <ul>
                        <li>Computer Science I</li>
                        <li>Computer Science II</li>
                        <li>Discrete Structures</li>
                        <li>Algorithmic Art</li>
                        <li>Algorithmic and Abstract Data Structures </li>
                        <li>Object Oriented and Event Oriented Programming </li>
                        <li>Computer Graphics</li>
                      </ul>
                      <br />
                      <br />
                      <strong>
                        Evergreen High School
                        <br />
                        Graduated May 2016
                      </strong>
                      <br />
                      <br />
                      Was on the silver honor roll and gold honor roll
                      throughout high school and became passionate about
                      creative visualization from photoshop and film photography
                      courses.
                    </p>
                    <br />
                    <br />
                    <p style={{ textAlign: "center" }}>
                      <strong>Activities</strong>
                      <hr />
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        Women in Computing Club| Class Representative and
                        President
                        <br />
                        <br />
                      </strong>
                      Beyond leading bi-weekly meetings and recruiting new
                      members, I formalized the club and bring speakers to
                      campus to discuss relevant topics with the purpose of
                      informing women and under-represented students in computer
                      science of how to excel in the field.
                      <br />
                      <br />
                      <br />
                      <strong>
                        Makers and Developers Club | Member
                        <br />
                        <br />
                      </strong>
                      Led a team to begin design an app to be used by another
                      on-campus club.
                      <br />
                      <br />
                      <br />
                      <strong>
                        Pacific NW Regional ACM Programming Contest
                        <br />
                        <br />
                      </strong>
                      Was a member of three-person team which competed in
                      Division II.
                      <br />
                      <br />
                      <br />
                      <strong>Gonzaga Experiential Leadership Institute</strong>
                      <br />
                      <br />
                      Accepted into Gonzaga's Experiential Leadership program
                      for sophomores, and contributed to the creation and
                      presentation of a project that would result in a positive
                      change on campus.
                    </p>
                  </div>

                  <div className="mySkills">
                    <p style={{ textAlign: "center" }}>
                      <strong>Skills</strong>
                      <hr />
                      <br />
                    </p>
                    <div className="skillsContent">
                      <div className="skillsColumn">
                        <p>Java</p>
                        <div class="container">
                          <div class="skills java">90%</div>
                        </div>

                        <p>HTML</p>
                        <div class="container">
                          <div class="skills html">90%</div>
                        </div>
                        <p>CSS</p>
                        <div class="container">
                          <div class="skills css">90%</div>
                        </div>
                        <p> C++ </p>
                        <div class="container">
                          <div class="skills c">90%</div>
                        </div>
                      </div>
                      <div className="skillsColumn">
                        <p>Processing</p>
                        <div class="container">
                          <div class="skills pro">90%</div>
                        </div>
                        <p>Photoshop</p>
                        <div class="container">
                          <div class="skills photoshop">90%</div>
                        </div>
                        <p>Android Studio</p>
                        <div class="container">
                          <div class="skills as">90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollableAnchor>

            <ScrollableAnchor id={"portfolio"}>
              <section
                data-id="portfolio"
                class="fullPortfolio"
                data-viewport-min-height="100"
              >
                <div className="top">
                  <div className="header">my portfolio </div>
                  <Line
                    x1={75}
                    x2={250}
                    y1={5}
                    y2={5}
                    stroke={{ color: "rgb(58, 58, 58)" }}
                    strokeWidth={3}
                  />
                </div>
                <div className="projects">
                  <div class="column">
                    <div class="singleProject">
                      <img src="./static/img/project-header/planterBox.jpg" />
                      <br />
                      <strong>Planter Box</strong> <sp />An app built as a
                      summer project using Android Studio that would allow users
                      to keep track of when to water each of their plants based
                      on each plant's individual needs.
                    </div>
                    <div class="singleProject">
                      <img src="./static/img/project-header/main.jpg" />
                      <br />
                      <strong>Space Race</strong> <sp />A classroom project to
                      create a Java-based game rooted in Yahtzee fundamentals
                      using Java swing. Built in a team of three over the course
                      of half a semester.
                    </div>
                  </div>
                  <div class="column">
                    <div class="singleProject">
                      <span class="processing">
                        <img src="./static/paintedSky.gif" />{" "}
                        <img src="./static/interactiveSky.gif" />
                        <br />
                      </span>
                      <strong>Processing Projects</strong>
                      <sp /> A sample of classroom projects which relied on{" "}
                      <a href="https://processing.org/">Processing</a> in order
                      to create coded visualization as an alternative to
                      Photoshop.
                    </div>
                  </div>
                </div>
              </section>
            </ScrollableAnchor>
          </div>
          <footer>
            © 2018 Kathrine Gibson
            <span class="right">
              <a href="mailto:kathrinemgibson@gmail.com">Email</a>
              /
              <a href="https://github.com/k-gibson/">GitHub</a>
              /
              <a href="http://www.linkedin.com/in/kathrine-gibson">LinkedIn</a>
            </span>
          </footer>
        </body>
      </div>
    );
  }
}
