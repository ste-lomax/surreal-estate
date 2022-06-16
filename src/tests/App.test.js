import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

it("renders logo", () => {
  render(<App />);
  const linkElement = screen.getByTestId("surreal-estate-logo");
  expect(linkElement).toBeInTheDocument();
});
