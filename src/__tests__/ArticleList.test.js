import React from "react";
import { render } from "@testing-library/react";
import ArticleList from "../components/ArticleList"; // <-- make sure this path is correct

const posts = [
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
];

test("renders a <main> element", () => {
  const { container } = render(<ArticleList posts={posts} />);
  expect(container.querySelector("main")).toBeInTheDocument();
});

test("renders an Article component for each post passed as a prop", () => {
  const { container } = render(<ArticleList posts={posts} />);
  expect(container.querySelector("main").children).toHaveLength(3);
});
