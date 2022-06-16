import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../components/App";

it("renders logo", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByTestId("surreal-estate-logo");
  expect(linkElement).toBeInTheDocument();
});
