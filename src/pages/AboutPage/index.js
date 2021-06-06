import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import PageWrapper from "components/PageWapper"
import "assets/css/about.css"
import avatar from "assets/image/about/avatar.jpg"
import {
  Movie as MovieIcon,
  MusicNote as MusicNoteIcon,
  SportsEsports as SportsEsportsIcon,
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons"
import { LinearProgress } from "@material-ui/core"

const AboutPage = () => {
  const { t } = useTranslation("404")

  useEffect(() => {
    document.title = t("about:title")
  })

  return (
    <PageWrapper>
      <div className="resume">
        <div className="base">
          <div className="profile">
            <div className="photo">
              <img alt="avatar" src={avatar} />
            </div>
            <div className="info">
              <h4 className="name">Nguyen Van Tai</h4>
              <small className="job">Front-end Developer</small>
            </div>
          </div>
          <div className="about">
            <h3>About me</h3>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <div className="call">
              <i className="fa fa-phone" />
              <span>(+84) 971962464</span>
            </div>
            <div className="address">
              <i className="fa fa-map-marker" />
              <span>Da Nang, Viet Nam</span>
            </div>
            <div className="email">
              <i className="fa fa-envelope" />
              <span>tainguyen6600@gmail.com</span>
            </div>
            <div className="website">
              <a href="https://tai1802.web.app">
                <i className="fa fa-home" />
                <span>tai1802.web.app</span>
              </a>
            </div>
          </div>
          <div className="follow">
            <h3>Follow</h3>
            <div className="box">
              <a href="https://facebook.com/tai1802" target="blank">
                <i>
                  <FacebookIcon />
                </i>
              </a>
              <a href="https://github.com/nvt1802" target="blank">
                <i>
                  <GitHubIcon />
                </i>
              </a>
              <a href="https://www.instagram.com/nvt1802" target="blank">
                <i>
                  <InstagramIcon />
                </i>
              </a>
              <a href="https://twitter.com/TiNguynVn5" target="blank">
                <i>
                  <TwitterIcon />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="func">
          <div className="work">
            <h3>
              <i className="fa fa-briefcase" />
              Work Exrerience
            </h3>
            <ul>
              <li>
                <div>FPT SOFTWARE</div>
                <div>Project: Smart-Edu</div>
                <small>May 2020 - May 2021</small>
              </li>
              <li>
                <div>FPT SOFTWARE</div>
                <div>Project: Debt collection management website</div>
                <small>Feb 2020 - Apr 2020</small>
              </li>
              <li>
                <div>FPT SOFTWARE</div>
                <div>Project: KSI-P02</div>
                <small>Sep 2019 - Jan 2020</small>
              </li>
              <li>
                <div>FPT SOFTWARE</div>
                <div>Project: TST</div>
                <small>Jul 2019 - Aug 2019</small>
              </li>
            </ul>
          </div>
          <div className="edu">
            <h3>
              <i className="fa fa-graduation-cap" />
              Education
            </h3>
            <ul>
              <li>
                <span>Hue University of Sciences</span>
                <small>Sep 2015 - May 2019</small>
              </li>
              <li>
                <span>Phan Dang Luu High school</span>
                <small>Sep 2014 - May 2015</small>
              </li>
              <li>
                <span>Huong Thuy High school</span>
                <small>Sep 2012 - May 2014</small>
              </li>
            </ul>
          </div>
          <div className="skills-prog">
            <h3>
              <i className="fa fa-code" />
              Programming Skills
            </h3>
            <ul>
              <li data-percent={92}>
                <span>Java Core</span>
                <LinearProgress
                  className="skills-bar"
                  variant="determinate"
                  value={90}
                />
              </li>
              <li data-percent={92}>
                <span>Java Spring</span>
                <LinearProgress
                  className="skills-bar"
                  variant="determinate"
                  value={85}
                />
              </li>
              <li data-percent={92}>
                <span>Css & Bootstrap 4</span>
                <LinearProgress
                  className="skills-bar"
                  variant="determinate"
                  value={80}
                />
              </li>
              <li data-percent={92}>
                <span>JavaScript</span>
                <LinearProgress
                  className="skills-bar"
                  variant="determinate"
                  value={82}
                />
              </li>
              <li data-percent={92}>
                <span>ReactJs</span>
                <LinearProgress
                  className="skills-bar"
                  variant="determinate"
                  value={85}
                />
              </li>
            </ul>
          </div>
          <div className="skills-soft">
            <h3>
              <i className="fa fa-th-list" />
              Software Skills
            </h3>
            <ul>
              <li data-percent={94}>
                <svg viewBox="0 0 100 100">
                  <circle cx={50} cy={50} r={45} />
                  <circle className="cbar" cx={50} cy={50} r={45} />
                </svg>
                <span>VS Code</span>
                <small />
              </li>
              <li data-percent={80}>
                <svg viewBox="0 0 100 100">
                  <circle cx={50} cy={50} r={45} />
                  <circle className="cbar" cx={50} cy={50} r={45} />
                </svg>
                <span>Eclipse</span>
                <small />
              </li>
              <li data-percent={89}>
                <svg viewBox="0 0 100 100">
                  <circle cx={50} cy={50} r={45} />
                  <circle className="cbar" cx={50} cy={50} r={45} />
                </svg>
                <span>Sublime Text</span>
                <small />
              </li>
            </ul>
          </div>
          <div className="interests">
            <h3>
              <i className="fa fa-star" />
              Interests
            </h3>
            <div className="interests-items">
              <div className="movie">
                <MovieIcon fontSize="large" color="primary" />
                <span>Movie</span>
              </div>
              <div className="music">
                <MusicNoteIcon fontSize="large" color="primary" />
                <span>Music</span>
              </div>
              <div className="game">
                <SportsEsportsIcon fontSize="large" color="primary" />
                <span>Game</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default AboutPage
