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
                <section className="aboutDescription">
                  <div className="descriptionTagline">
                    Hello, my name is Kathrine Gibson.
                    <br />I'm a computer science student from Colorado.
                  </div>
                  <div className="descriptionWords">
                    <p>I also like treehouses, triathlons, and art museums</p>
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
                </section>
                <div className="picture">
                  <img
                    className="profileImage"
                    src="./static/profile.png"
                    alt="profile image"
                  />
                </div>
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
                </div>
                <div className="currentResume">sdhkjfks</div>
              </section>
            </ScrollableAnchor>

            <ScrollableAnchor id={"portfolio"}>
              <section
                data-id="portfolio"
                class="fullpageSection"
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
                <section className="projectSection column left">
                  <nav class="projectNav">
                    <ul className="projects">
                      <li className="projectLinks">
                        <a href="#PlanterBox">PlanterBox</a>
                      </li>
                      <li className="projectLinks">
                        <a href="#SpaceRace">Space Race</a>
                      </li>
                    </ul>
                  </nav>
                </section>
                <div className="projectList column right">
                  <nav>
                    <ul>
                      <li>
                        <ScrollableAnchor id={"PlanterBox"}>
                          <div
                            className="singularProject"
                            data-viewport-min-height="100"
                          >
                            PlanterBox
                            <img
                              src="/static/img/project-header/PlanterBoxDemoPicture.jpg"
                              alt=""
                            />
                            <div
                              className="PlanterBox"
                              data-viewport-min-height="100"
                            />
                          </div>
                        </ScrollableAnchor>
                      </li>
                      <li>
                        <ScrollableAnchor id={"SpaceRace"}>
                          <div
                            className="singularProject"
                            data-viewport-min-height="100"
                          >
                            Space Race
                            <img
                              src="/static/img/project-header/SpaceRaceDemoPicture.jpg"
                              alt=""
                            />
                            <div
                              className="SpaceRace"
                              data-viewport-min-height="100"
                            />
                          </div>
                        </ScrollableAnchor>
                      </li>
                    </ul>
                  </nav>
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
