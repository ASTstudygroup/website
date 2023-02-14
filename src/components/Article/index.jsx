import React, { Component } from "react";
import Hello from "../Timeline/page/test.md";

const filename = window.location.pathname.substring(
  window.location.pathname.lastIndexOf("/") + 1
);
const path = `../Timeline/page/${filename}.md`;

export default class Blog extends Component {
  state = {
    headings: [],
    markdown: Hello,
  };
  ref = React.createRef();
  extractHeadings = (html) => {
    const headings = [];
    let match;

    const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/g;
    while ((match = headingRegex.exec(html))) {
      const [, level, text] = match;
      headings.push({ level: parseInt(level), text });
    }

    this.setState({ headings });
  };

  buildTree = (headings) => {
    const tree = {};
    let currentLevel = 1;

    for (const heading of headings) {
      if (heading.level === currentLevel) {
        tree[heading.level] = [...(tree[heading.level] || []), heading];
      } else if (heading.level > currentLevel) {
        currentLevel = heading.level;
        tree[heading.level] = [heading];
      } else {
        while (currentLevel > heading.level) {
          currentLevel--;
        }
        tree[heading.level] = [...(tree[heading.level] || []), heading];
      }
    }

    return tree;
  };

  renderList = (headings, level = 1) => {
    return (
      <>
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#heading-${index}`}>
              <h2 id={`heading-${index}`}>{heading.text}</h2>
            </a>
            {headings[level + 1] &&
              this.renderList(headings[level + 1], level + 1)}
          </li>
        ))}
      </>
    );
  };
  async fetchMarkdown() {
    const m = import(path);
    m.then(m => {
      this.setState({markdown: m.default})
    })
  }
  componentDidMount() {
    this.fetchMarkdown();
    this.extractHeadings(this.ref.current.outerHTML);
  }
  componentDidUpdate(prevProps) {
    if (this.props.htmlString !== prevProps.htmlString) {
      this.extractHeadings(this.ref.current.outerHTML);
    }
  }

  render() {
    const ref = this.ref;
    const Markdown = this.state.markdown;
    return (
      <div className="grid grid-cols-10 bg-article-gray">
        <div className="grid col-span-3 w-auto flex">
          <div className="flex justify-center m-8 ml-16 mt-32 ">
            <div className="sticky h-fit top-20 left-0 prose">
              <ul className="list-decimal ">
                {/* {this.renderList(this.state.headings)} */}
                {this.state.headings.map((heading, index) => (
                  <li key={index} className="text-pink-500">
                    <a
                      href={`#heading-${index}`}
                      className="text-pink-500 hover:text-purple-600 no-underline hover:underline underline-offset-4"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid col-span-7 w-auto pl-32 pt-32">
          <div ref={ref} className="prose md:prose-lg lg:prose-xl">
<Markdown></Markdown>
          </div>
        </div>
      </div>
    );
  }
}
