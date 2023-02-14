import TrackVisibility from "react-on-screen";
import Banner from "../Banner/index";

import React, { Component } from "react";

export default class Panel extends Component {
  ref1 = React.createRef();
  ref2 = React.createRef();

  handleBackward = () => {
    this.ref2.current.classList.remove("!hidden");
    this.ref2.current.classList.add("animate__backInRight");
    this.ref1.current.classList.add("animate__backOutRight");
    this.ref1.current.classList.add("!hidden");
    //this.ref.current.classList.add("animate__backInLeft");
    // this.ref.current.classList.remove("animate__backInLeft");
  };
  handleForward = () => {
    this.ref1.current.classList.add("animate__backOutLeft");
  };
  render() {
    return (
      <div className=" bg-gradient-to-r from-purple-300 to-pink-300 pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid ">
          <div className="py-24">
            <h1 className="text-center text-5xl font-bold align-middle">
              怎麼加入我們
            </h1>
          </div>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                ref={this.ref1}
                className={
                  isVisible
                    ? "animate__animated animate__backInRight relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
                    : "animate__animated relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
                }
              >
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    交大統計 Study Group
                    <br />
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    One team, one vision, endless possibilities
                    <br />
                    活動時間: 每周六下午 16:00 ~ 18:00
                    <br />
                    活動地點: None
                    <br />
                    每個學期 16 個禮拜
                    <br />
                    <br />

                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a
                      href="https://docs.google.com/forms/d/1b1PgDSGQlwg2XJCn2BilN_S8Zif6rlFX_89tuDttIL8/edit?ts=63ea0e45"
                      className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      target="_blank"
                    >
                      Join us
                    </a>
                    <a
                      href="calendar"
                      className="text-base font-semibold leading-7 text-white"
                    >
                      Scheduler <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="relative mt-16 h-80 lg:mt-8">
                  <Banner></Banner>
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    );
  }
}
