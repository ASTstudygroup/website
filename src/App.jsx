import "./App.css";
import "./index.css";
import Footer from "./components/Footer/index";
import Scheduler from "./components/Scheduler/index";
import Panel from "./components/Panel/index";
import Hero from "./components/Hero/index";
import Intro from "./components/Intro/index";
import Timeline from "./components/Timeline/index";
import Article from "./components/Article/index";
import Blog from "./components/Blog/index";

import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import "animate.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="blog/article/*" element={<BlogPost />} />
          <Route path="/calendar" element={<Calendar />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}

class BlogPost extends Component {
  render() {
    return (
      <>
        <Article />
      </>
    );
  }
}

class Calendar extends Component {
  render() {
    return (
      <>
        <Scheduler />
      </>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <>
        <Intro />
        <Panel />
        <Timeline />
      </>
    );
  }
}
