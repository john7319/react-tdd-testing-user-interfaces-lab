import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
});

test("Display an image with alt text 'leaf-picture'", () => {
    render(<App />);
    const imageAlt = screen.getByAltText("leaf-picture"); 
    expect(imageAlt).toBeInTheDocument();
});

test("displays a second-level heading with the text `About me`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const secondLevelHeading = screen.getByRole("heading", {
      name: /About Me/i,
      exact: false,
      level: 1
    });
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
});


test("Render a paragraph with text 'This is my about'", () => {
    render(<App />);
    const paragraphText = screen.getByText("This is my about"); // Look for exact text content
    expect(paragraphText).toBeInTheDocument();
});

test('renders github link', () => {
  // "container" represents all the DOM elements rendered by your component
  render(<App />)
  const linkElement = screen.getByRole("link", {
    name: /Github/i
  })
  expect(linkElement).toBeInTheDocument();
});
test('renders Linkedin link', () => {
  // "container" represents all the DOM elements rendered by your component
  render(<App />)
  const linkElement1 = screen.getByRole("link", {
    name: /Linkedin/i
  })
  expect(linkElement1).toBeInTheDocument();
});