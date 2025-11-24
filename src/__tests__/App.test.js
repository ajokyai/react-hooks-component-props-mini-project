import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child sections", () => {
  render(<App />);

  // App root
  expect(document.querySelector(".App")).toBeInTheDocument();

  // Semantic structure
  expect(screen.getByRole("banner")).toBeInTheDocument();  // header
  expect(screen.getByRole("complementary")).toBeInTheDocument(); // aside
  expect(screen.getByRole("main")).toBeInTheDocument(); // main
});
