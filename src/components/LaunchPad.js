import React from "react";
import "../styles/LaunchPad.css";

function Launchpad() {
  return (
    <section className="body">
      <section>
        <div>
          <h2>Launchpad</h2>
          <p>Participate in impulse ICOs.High rewards,low risk</p>
        </div>
        <button>Create ICO</button>
      </section>
      <div className="launchpad-nav">
        <button>All</button>
        <button>Live</button>
        <button>Upcoming</button>
        <button>Finished</button>
      </div>
      <div>
        <input type="checkbox" id="toggle-switch"></input>
      </div>
    </section>
  );
}

export default Launchpad;
