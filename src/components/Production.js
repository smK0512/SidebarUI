import React from "react";
import "../components/produc_count.css";

import compresser from "../images/compresser.jpg";
import condenser  from "../images/condenser.jpg";
import e_coil from "../images/e_coil.jpg";
import exp_valve from "../images/exp_valve.jpg";
import external from "../images/external.jpg";

function Production() {
  return (
    <div className="complete">
    <div className="production-count-container">
      <h1>Production Count Page</h1>
      <div className="parts-container">
        <div className="part">
          <img src={compresser} alt="part 1" />
          <div className="caption">Part 1</div>
          <div className="robot-info">
        <div className="robot-name">Industrial Robot A</div>
        <div className="robot-status">Status: Running</div>
      </div>
      <div className="production-info">
        <div className="production-count">Total Production Count: 5000</div>
        <div className="daily-production-count">Daily Production Count: 200</div>
        <div className="hourly-production-count">Hourly Production Count: 20</div>
      </div>
        </div>
        <div className="part">
          <img src={condenser} alt="part 2" />
          <div className="caption">Part 2</div>
          <div className="robot-info">
        <div className="robot-name">Industrial Robot A</div>
        <div className="robot-status">Status: Running</div>
      </div>
      <div className="production-info">
        <div className="production-count">Total Production Count: 5000</div>
        <div className="daily-production-count">Daily Production Count: 200</div>
        <div className="hourly-production-count">Hourly Production Count: 20</div>
      </div>
        </div>
        <div className="part">
          <img src={e_coil} alt="part 3" />
          <div className="caption">Part 3</div>
          <div className="robot-info">
        <div className="robot-name">Industrial Robot A</div>
        <div className="robot-status">Status: Running</div>
      </div>
      <div className="production-info">
        <div className="production-count">Total Production Count: 5000</div>
        <div className="daily-production-count">Daily Production Count: 200</div>
        <div className="hourly-production-count">Hourly Production Count: 20</div>
      </div>
        </div>
        <div className="part">
          <img src={exp_valve} alt="part 4" />
          <div className="caption">Part 4</div>
          <div className="robot-info">
        <div className="robot-name">Industrial Robot A</div>
        <div className="robot-status">Status: Running</div>
      </div>
      <div className="production-info">
        <div className="production-count">Total Production Count: 5000</div>
        <div className="daily-production-count">Daily Production Count: 200</div>
        <div className="hourly-production-count">Hourly Production Count: 20</div>
      </div>
        </div>
        <div className="part">
          <img src={external} alt="part 5" />
          <div className="caption">Part 5</div>
          <div className="robot-info">
        <div className="robot-name">Industrial Robot A</div>
        <div className="robot-status">Status: Running</div>
      </div>
      <div className="production-info">
        <div className="production-count">Total Production Count: 5000</div>
        <div className="daily-production-count">Daily Production Count: 200</div>
        <div className="hourly-production-count">Hourly Production Count: 20</div>
      </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Production;
