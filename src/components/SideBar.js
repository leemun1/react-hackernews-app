import React from 'react';

import Button from './Button';

const SideBar = ({ side }) => {
  if (side === "left") {
    return (
      <div className="SideBar--left">
        <div className="Brand">
          <span>HN</span>
        </div>
        <div className="Nav">
          <div className="Nav__header">Topics</div>
          <div className="Nav__list">
            <ul>
              <li>
                <a href="/">
                  <span role="img" aria-label="Development">🚀</span>
                  <span>Development</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span role="img" aria-label="Data Science">📊</span>
                  <span>Data Science</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span role="img" aria-label="Blockchain">🔗</span>
                  <span>Blockchain</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span role="img" aria-label="Mobile">📱</span>
                  <span>Mobile</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span role="img" aria-label="Design">🎨</span>
                  <span>Design</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span role="img" aria-label="Social">🍻</span>
                  <span>Social</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span role="img" aria-label="Open Source">🕹️</span>
                  <span>Open Source</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span role="img" aria-label="All Topics">📦</span>
                  <span>All Topics</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="SideBar--right">
        <div className="SideBar__content">
          <h3>Get High on categorized Show HN submissions.</h3>
          <p>We know the struggle. A lot of great stuff on Hacker News gets lost in the /shownew limbo.</p>
          <p>Get the weekly top Show HN picks in your inbox!</p>
          <input
            type="email"
            placeholder="Your e-mail"
          />
          <Button>Subscribe</Button>
          <p>Brought to you by <a href="https://github.com/leemun1">@leemun1</a></p>
        </div>
      </div>

    )
  }
}

export default SideBar;