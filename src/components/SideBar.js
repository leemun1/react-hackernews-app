import React from 'react';

import Button from './Button';
import '../styles/SideBar.css';

const SideBar = ({ side }) => {
  if (side === "left") {
    return (
      <div className="SideBar--left">
        <div className="Brand">
          <span>HN</span>
        </div>
        <div className="Nav">
          <div className="Nav__header">header</div>
          <div className="Nav__list">list</div>
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