import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import App from "./App"


test("User is in index route(/), then render login component", () => {
  window.history.pushState({}, "", "/");
  render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
  
  expect(screen.getByTestId("login-div")).toBeInTheDocument();
});

test("User is in /home route, then render home compoenent", () => {
  window.history.pushState({}, "", "/home");
  render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );

  expect(screen.getByTestId("home-div")).toBeInTheDocument();
})