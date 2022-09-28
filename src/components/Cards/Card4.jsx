import React from "react";
import "./cards.scss";

import pan from "../Assets/pan.png";
import round1 from "../Assets/round1.svg";
import round2 from "../Assets/round2.svg";
import round3 from "../Assets/round3.svg";
import round4 from "../Assets/round4.svg";

const Card4 = () => {
  return (
    <div className="card4">
      <div className="varieties">
        <div>FOOD GUIDE</div>
        <div></div>
      </div>
      <div className="end">
        <div>
          <div>
            <div>
              <img src={round1} alt="" />
            </div>
            <div>VEGETABLES</div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </div>
          </div>
          <div>
            <div>
              <img src={round2} alt="" />
            </div>
            <div>FRUITS</div>
            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </div>
          </div>
        </div>
        <div>
          <img src={pan} alt="" />
        </div>
        <div>
          <div>
            <div>
              <img src={round3} alt="" />
            </div>
            <div>WHOLE GRAINS</div>
            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
          </div>
          <div>
            <div>
              <img src={round4} alt="" />
            </div>
            <div>HEALTHY PROTEIN</div>
            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
