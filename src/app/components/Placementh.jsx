import React from "react";
import "./Placementh.css";
import Marquee from "./Marquee";

export const Placementh = () => {
  return (
    <div className="main-ppl">
      <div className="top">
        <h3
          className="woorries
            "
        >
          Placement Worrries ?
        </h3>
        <h1 className="m-header-p">
          Our Dedicated Placement Team is Commited To Get You The{" "}
          <span className="orange"> Best Job</span>
        </h1>
      </div >
      <div className="main-flex">
        <div className="left">
          <div className="bottom">
            <div className="flex-">
              <div className="seperator-1">
                <div className="element">
                  <div className="icon-1">
                    <img className="icons-p" src="images/1.svg" alt="" />
                  </div>
                  <div className="text-p">
                    <p>
                      Remote Training: Learn remotely with seasoned corporate
                      trainers for optimal flexibility.
                    </p>
                  </div>
                </div>
                <div className="element">
                  <div className="icon-2">
                    <img className="icons-p" src="images/2.svg" alt="" />
                  </div>
                  <div className="text-p">
                    <p>
                      Placement Support: Receive premium placement assistance
                      until you land your first job.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="seperator2">
                <div className="element">
                  <div className="icon-2">
                    <img className="icons-p" src="images/3.svg" alt="" />
                  </div>
                  <div className="text-p">
                    <p>
                      Career Tools: Gain crucial skills with tailored CV
                      building, email drafting, and interview preparation.
                    </p>
                  </div>
                </div>
                <div className="element">
                  <div className="icon-2">
                    <img className="icons-p" src="images/4.svg" alt="" />
                  </div>
                  <div className="text-p">
                    <p>
                      Learning Access: Enjoy lifetime access to recorded
                      lectures and also live interaction with daily batches
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <Marquee />
        </div>
      </div>
    </div>
  );
};
