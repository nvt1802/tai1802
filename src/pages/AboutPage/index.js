import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import PageWrapper from "components/PageWapper"
import "assets/css/about.css"
import avatar from 'assets/image/about/avatar.jpg'

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
              <img
                alt="avatar"
                src={avatar}
              />
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
              <span>(+84)971962464</span>
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
              <a href="tai1802.web.app">
                <i className="fa fa-home" />
                <span>tai1802.web.app</span>
              </a>
            </div>
          </div>
          <div className="follow">
            <h3>Follow</h3>
            <div className="box">
              <a href="/">
                <i className="fa fa-facebook" />
              </a>
              <a href="/">
                <i className="pif-plurkapp" />
              </a>
              <a href="/">
                <i className="fa fa-twitter" />
              </a>
              <a href="/">
                <i className="fa fa-pinterest-p" />
              </a>
              <a href="/">
                <i className="fa fa-tumblr" />
              </a>
              <a href="https://codepen.io/xichen/">
                <i className="fa fa-codepen" />
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
                <span>Front-end Web Designer</span>
                <small>Apr 2016 - Now</small>
              </li>
              <li>
                <span>Design Assistant</span>
                <small>Mar 2015 - Dec 2015</small>
              </li>
              <li>
                <span>Design Assistant (Part-time)</span>
                <small>Oct 2014 - Jul 2015</small>
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
                <span>Department of Information Management</span>
                <small>Set 2010 - Jun 2014</small>
              </li>
              <li>
                <span>Department of Data Processing</span>
                <small>Set 2007 - Jun 2010</small>
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
                <span>HTML5 &amp; PUG</span>
                <div className="skills-bar">
                  <div className="bar" />
                </div>
              </li>
              <li data-percent={96}>
                <span>CSS3 &amp; SASS</span>
                <div className="skills-bar">
                  <div className="bar" />
                </div>
              </li>
              <li data-percent={40}>
                <span>JavaScript</span>
                <div className="skills-bar">
                  <div className="bar" />
                </div>
              </li>
              <li data-percent={60}>
                <span>jQuery</span>
                <div className="skills-bar">
                  <div className="bar" />
                </div>
              </li>
              <li data-percent={33}>
                <span>NodeJS</span>
                <div className="skills-bar">
                  <div className="bar" />
                </div>
              </li>
              <li data-percent={52}>
                <span>VueJS</span>
                <div className="skills-bar">
                  <div className="bar" />
                </div>
              </li>
              <li data-percent={20}>
                <span>PHP</span>
                <div className="skills-bar">
                  <div className="bar" />
                </div>
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
                <span>Photoshop</span>
                <small />
              </li>
              <li data-percent={80}>
                <svg viewBox="0 0 100 100">
                  <circle cx={50} cy={50} r={45} />
                  <circle className="cbar" cx={50} cy={50} r={45} />
                </svg>
                <span>Illustrator</span>
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
              <li data-percent={55}>
                <svg viewBox="0 0 100 100">
                  <circle cx={50} cy={50} r={45} />
                  <circle className="cbar" cx={50} cy={50} r={45} />
                </svg>
                <span>Dreamweaver</span>
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
              <div className="draw">
                <i className="fa fa-paint-brush" />
                <span>Draw</span>
              </div>
              <div className="guitar">
                <i className="guitar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 53.858 53.858"
                  >
                    <path d="M6.901,37.275l9.621,9.62l4.185-4.184l-9.622-9.624L6.901,37.275z M11.085,36.64l6.019,6.019l-0.593,0.618l-6.059-6.003L11.085,36.64z" />
                    <path d="M36.868,26.667c-0.353-0.705-0.856-1.542-1.346-2.242l-0.366-0.523l-0.088,0.06L50.797,8.235L49.02,6.461L27.277,28.204l0.252,0.754c0.543,1.579,0.152,3.29-1.022,4.464c-1.669,1.668-4.34,1.669-6.009-0.001c-0.784-0.782-1.232-1.9-1.232-3.067c0-1.143,0.438-2.21,1.232-3.005c1.124-1.123,2.881-1.546,4.408-1.018l0.748,0.25L47.396,4.839l-1.836-1.837L29.236,19.276l0.504-0.856l-0.705-0.473c-0.6-0.375-1.231-0.742-1.753-0.872c-0.72-0.227-1.862-0.498-3.213-0.498c-2.318,0-4.399,0.822-6.015,2.377c-1.597,1.533-2.323,3.29-2.875,4.812l-0.069,0.186c-0.09,0.246-0.268,0.732-0.365,0.901c-0.359,0.105-1.264,0.299-1.836,0.366c-2.677,0.509-6.723,1.279-9.691,4.248c-1.125,1.125-3.021,3.529-3.092,7.005c0,3.62,1.996,7.452,5.934,11.39c3.979,3.979,7.791,5.997,11.329,5.997c2.581,0,4.889-1.009,7.066-3.093c2.968-2.968,3.738-7.01,4.247-9.689c0.05-0.199,0.109-0.512,0.171-0.838c0.05-0.26,0.125-0.657,0.176-0.874c0.246-0.135,0.703-0.342,1.166-0.496c1.475-0.536,3.184-1.245,4.818-2.88c3.178-3.372,2.371-7.568,1.879-9.216L36.868,26.667zM24.847,23.653c-2.265-0.469-4.627,0.241-6.185,1.86c-2.652,2.652-2.652,6.967,0,9.621c1.259,1.259,3.001,1.981,4.78,1.981c1.778,0,3.52-0.723,4.779-1.981c1.623-1.621,2.318-3.96,1.86-6.184l3.281-3.282l0.108,0.162c0.365,0.545,0.758,1.166,0.907,1.616c0.554,1.884,0.782,4.579-1.271,6.727c-1.141,1.197-2.512,1.787-3.826,2.248c-1.058,0.377-1.802,0.715-2.28,1.264l-0.095,0.123c-0.237,0.396-0.427,1.125-0.699,2.692c-0.359,2.051-1.027,5.867-3.528,8.429c-1.555,1.556-3.305,2.344-5.2,2.344c-2.856,0.001-6.192-1.793-9.645-5.185c-3.499-3.497-5.244-6.729-5.188-9.615c0-2.383,1.275-4.16,2.345-5.229c2.489-2.488,6.207-3.139,8.424-3.527c1.591-0.265,2.321-0.47,2.786-0.782l0.122-0.106c0.477-0.407,0.74-1.046,1.046-1.786l0.279-0.68c0.464-1.169,0.99-2.494,2.163-3.612c1.147-1.097,2.573-1.652,4.237-1.652c1.184,0,2.166,0.288,2.466,0.376c0.149,0.05,0.391,0.183,0.625,0.312c0.214,0.118,0.432,0.236,0.628,0.324l0.381,0.254L24.847,23.653z" />
                    <path d="M23.458,26.252c-1.04,0.075-2.044,0.525-2.757,1.238c-0.762,0.762-1.174,1.772-1.161,2.844c0.013,1.041,0.429,2.003,1.161,2.699c0.77,0.771,1.739,1.178,2.804,1.178c1.035,0,2.056-0.43,2.803-1.177c0.77-0.769,1.177-1.739,1.177-2.802c0-1.034-0.43-2.056-1.177-2.802c-0.768-0.77-1.735-1.178-2.842-1.178C23.462,26.252,23.46,26.252,23.458,26.252z M22.477,29.327c0.265-0.265,0.659-0.43,1.027-0.43c0.409,0,0.735,0.136,1.07,0.468c0.198,0.166,0.326,0.529,0.326,0.928c0,0.408-0.137,0.735-0.43,1.028c-0.521,0.518-1.489,0.546-1.993,0C21.927,30.771,21.927,29.876,22.477,29.327z" />
                    <path d="M53.605,8.544l-0.002,0c-0.109-0.623-0.848-3.106-3.078-5.336c-2.085-2.084-4.648-2.96-5.332-3.079L44.546,0l-0.491,0.491c0,0-5.991,5.991-6.301,6.3l-0.457,0.455l1.775,1.776L45.295,2.8c0.867,0.332,2.211,0.988,3.455,2.184c1.186,1.185,1.848,2.562,2.184,3.455l-6.221,6.223l1.773,1.774l7.248-7.246L53.605,8.544z" />
                  </svg>
                </i>
                <span>Guitar</span>
              </div>
              <div className="movie">
                <i className="fa fa-film" />
                <span>Movie</span>
              </div>
              <div className="music">
                <i className="fa fa-headphones" />
                <span>Music</span>
              </div>
              <div className="game">
                <i className="fa fa-gamepad" />
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
