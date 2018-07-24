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
          <title>Kathrine Gibson </title>

          {/* META DATA */}
          <meta
            name="description"
            content="I am a computer science student passionate about creative problem solving."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* CSS Stuff */}
          <link href="/static/index.css" rel="stylesheet" />
        </head>
        <body>
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
                  <a href="#portfolio" className="menuButton button fromCenter">
                    portfolio
                  </a>
                  <span />
                  <a href="#contact" className="menuButton button fromLeft">
                    contact
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
              <div className="stickyMcSticky">
                <div className="otherMainMenu">
                  <a href="#about" className="menuButton button fromRight">
                    about
                  </a>
                  <span />
                  <a href="#portfolio" className="menuButton button fromCenter">
                    portfolio
                  </a>
                  <span />
                  <a href="#contact" className="menuButton button fromLeft">
                    contact
                  </a>
                </div>
              </div>
              <div className="header">about me</div>
              <Line
                x1={75}
                x2={250}
                y1={5}
                y2={5}
                stroke={{ color: "rgb(58, 58, 58)" }}
                strokeWidth={3}
              />
              <div className="aboutDescription">
                <div className="descriptionTagline">
                  Hello, my name is Kathrine Gibson.
                  <br />I'm a student who is passionate about using technology
                  to expand my creative process.
                </div>
                <div className="descriptionWords" width="200">
                  <p>
                    I have three goals in life (thus far): find a job that
                    allows me to explore my passions while applying my hard work
                    ethic and innate curiosity to improve my skill set as a
                    programmer, complete a full length Ironman and finally, to
                    build and live in a treehouse.
                  </p>
                  <br />
                  <p>
                    Front end developing is my cup of tea, but I'm not afraid of
                    back end development to bring ideas to fruition. Beyond
                    programming until my eyeballs fall out, I spend my free time
                    training for triathlons, sneaking in as much time outside as
                    possible, and practicing my social skills.
                  </p>
                </div>
              </div>
              <div className="selfPicture">
                <div class="image-cropper">
                  <img
                    className="profileImg"
                    src="/static/profile.jpg"
                    class="rounded"
                  />
                </div>
              </div>
              <a href="/resume" className="fancyPage">
                {" "}
                current resume
              </a>
            </section>
          </ScrollableAnchor>

          <ScrollableAnchor id={"portfolio"}>
            <section
              data-id="portfolio"
              class="fullpageSection"
              data-viewport-min-height="100"
            >
              <div className="header">my portfolio </div>
              <Line
                x1={75}
                x2={250}
                y1={5}
                y2={5}
                stroke={{ color: "rgb(58, 58, 58)" }}
                strokeWidth={3}
              />
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

          <ScrollableAnchor id={"contact"}>
            <section
              data-id="contact"
              class="fullpageSection"
              data-viewport-min-height="100"
            >
              <div className="header"> contact me </div>
              <Line
                x1={75}
                x2={250}
                y1={5}
                y2={5}
                stroke={{ color: "rgb(58, 58, 58)" }}
                strokeWidth={3}
              />
              <div className="contactWords">
                <a href="mailto:kathrinemgibson@gmail.com" className="email">
                  kathrinemgibson@gmail.com
                </a>
                <div className="contactProfiles">
                  <ul className="contact">
                    <li className="contactli">
                      <a
                        href="https://github.com/k-gibson/"
                        target="_blank"
                        onClick="ga('send', 'event', 'external page', 'visit', this.href);"
                      >
                        <img
                          src="./static/img/logos/logo-github.svg"
                          width="40"
                          height="40"
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
                          width="40"
                          height="40"
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
                          width="40"
                          height="40"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollableAnchor>
        </body>
      </div>
    );
  }
}
