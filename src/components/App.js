import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import posts from "../data/posts";

function App() {
  return (
    <div className="App">
      <Header name="My Blog" />

      <About />

      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
