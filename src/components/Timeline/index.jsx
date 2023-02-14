import React, { Component } from "react";
import TimelineItem from "../TimelineItem/index";
import TrackVisibility from "react-on-screen";
import Hello from "./page/test.md";

export default class index extends Component {
  history = [
    {
      id: 1,
      title: "Introducting to spatial statistics",
      time: "2023/02/14",
      href: "/blog/introduction-to-kriging",
      paragraph: "kriging, spatial, IDE, R",
    },
  ];

  handleHover = (event) => {
    console.log(event.target)
  }

  ref = React.createRef();
  componentDidMount() {

  }
  render() {
    const history = this.history;
    const ref = this.ref;
    return (
      <div className="grid grid-cols-4">
        <div className="m-32 col-span-2">
          <h3 className="lg:text-4xl text-gray-700 font-bold mb-6 -ml-3">
            Our Life
          </h3>

          <ol className="border-l-2 border-pink-400">
            {history.map((h) => {
              return (
                <li key={h.id}>
                  <div className="md:flex flex-start">
                    <div className="bg-white pt-4 pb-4 w-6 h-6 flex items-center justify-center z-10 -ml-3">
                      <p className="text-pink-400/100">{h.time}</p>
                    </div>
                    <div className="ml-8 w-[40%]">
                      <TrackVisibility>
                        {({ isVisible }) =>
                          isVisible ? (
                            <TimelineItem
                              addClasses="animate__animated animate__fadeInRight"
                              {...h}
                            ></TimelineItem>
                          ) : (
                            <TimelineItem
                              addClasses="animate__animated animate__fadeOutRight"
                              {...h}
                            ></TimelineItem>
                          )
                        }
                      </TrackVisibility>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="col-span-2 hidden lg:block overflow-hidden">
          <div className="min-h-screen py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
            <div className="relative w-full px-6 py-12 bg-white z-0">
              <div ref={ref} className="prose md:prose-stone">
                <Hello/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
