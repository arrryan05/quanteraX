import React from "react";
import Image from "next/image";
import "./page.scss";
import GreenBtn from "../../../../components/Green-btn/page";
import Img from "./assets/Group4.png";

export default function V2() {
  return (
    <div id="container">
      <div className="v2-left">
        <h1 className="mainheading">
          Smarter <br /> <span style={{ color: "green" }}>insights</span>
          <br /> leads to better decisions
        </h1>
        <p>Vistualise Complex Data Simply</p>

        <div className="heading">Try Free for 45 days</div>
        <div className="bottom">
          <div className="search">
            <input
              type="text"
              placeholder="Email"
              name="email"
              //   value={data.email}
              //   onChange={handleChange}
            />

            <div className="btn">
              <GreenBtn
                /*onClick={display} className="custom-btn"*/ buttonText="Get Free Premium Report!"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="v2-right">
        <div className="v2-image-container">
          <Image src={Img} alt="" />
        </div>
      </div>
    </div>
  );
}
