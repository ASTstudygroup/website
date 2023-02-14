import React, { Component } from "react";

const post = [
  {
    "Machine Learning": [
      {
        date: "2023/02/14",
        title: "Nothing",
        intro: "This is an introduction to introduct your project..",
        href: "/website/#/blog/article/brief-introduction",
      },
      {
        date: "2023/02/14",
        title: "Nothing",
        intro: "This is an introduction to introduct your project..",
        href: "/website/#/blog/article/test",
      },
    ],
  },
  {
    "Majhon": [
      {
        date: "2023/02/14",
        title: "Nothing",
        intro: "This is an introduction to introduct your project..",
        href: "/website/#/blog/article/brief-introduction",
      },
      {
        date: "2023/02/14",
        title: "Nothing",
        intro: "This is an introduction to introduct your project..",
        href: "/website/#/blog/article/intro",
      },
    ],
  },
];

export default class Blog extends Component {
  render() {
    return (
      <div className="m-32">
        <div className="grid justify-center">
          {post.map((p) => {
            return (
              <>
                <h1 className="">{Object.keys(p)[0]}</h1>
                <ol className="pl-8 pt-8 mb-8 grid gap-4">
                  {p[Object.keys(p)[0]].map((d) => {
                    return (
                      <>
                        <li className="text-1">
                            <div className="flex gap-8">
                                <p>{d.date}</p>
                                <a href={d.href} className="text-pink-500 hover:text-purple-600 no-underline hover:underline underline-offset-4">{d.title}</a>
                            </div>
                        </li>
                        <li className="text-slate-400">{d.intro}</li>
                      </>
                    );
                  })}
                </ol>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
