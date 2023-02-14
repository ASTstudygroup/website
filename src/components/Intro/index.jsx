import {
  CloudArrowUpIcon,
  UserGroupIcon,
  QueueListIcon,
} from "@heroicons/react/20/solid";
import group from "../../assets/img/group.jpg";

import React, { Component } from "react";

export default class Intro extends Component {
  features = [
    {
      name: "雲端式學習",
      description:
        "我們採用雲端學習與實體並行，雲端學習讓讀書會的學習更加靈活自由，可以在任何時間、任何地點學習，利用數字資源和教學工具實現個性化、差異化的學習，擁有更多元的學習方式，豐富讀書會的內容和活力。",
      icon: CloudArrowUpIcon,
    },
    {
      name: "團隊協作與進步",
      description:
        "團隊協作是讀書會成員間共同合作、共同進步的核心，可以通過團隊合作，互相學習、交流、分享心得，達到個人成長和團隊共同進步的目的，從而提升讀書會的學習品質和效果。",
      icon: UserGroupIcon,
    },
    {
      name: "科技與資料技術研討",
      description:
        "科技與資料研討是讀書會的主題之一，旨在通過探討各種新興科技和資料應用，分享相關經驗和心得，從而提升讀書會成員的科技和資料素養",
      icon: QueueListIcon,
    },
  ];

  render() {
    const features = this.features;
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-fixed mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Everything start from scratch
                </p>
                <blockquote className="p-4 my-4 border-l-4 border-pink-300 bg-pink-50 dark:border-pink-500 dark:bg-pink-800">
                  <p className="text-lg leading-8 text-gray-600">
                  "Great things never came from comfort zones."  <br /> - Neil Strauss
                  </p>
                </blockquote>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src={group}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    );
  }
}
