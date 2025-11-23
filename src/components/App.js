import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";



const blog = {
  name: "My Awesome Blog",
  image: "", // leave blank to test placeholder
  about: "This is a blog about web development and React.",
  posts: [
    {
      id: 1,
      title: "Learning React",
      date: "November 19, 2025",
      preview: "React makes it painless to create interactive UIs...",
      minutesToRead: 7
    },
    {
      id: 2,
      title: "Understanding Props",
      date: "",
      preview: "Props are how components talk to each other...",
      minutesToRead: 35
    },
    {
      id: 3,
      title: "State Management Basics",
      date: "November 18, 2025",
      preview: "State is a way to store dynamic data in your app...",
      minutesToRead: 12
    }
  ]
};

function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;

    