import { render, screen } from "@testing-library/react";
import Login from "./login";
import { BrowserRouter } from "react-router-dom";

describe("Login component tests", () => {
  let container: HTMLDivElement

  beforeEach(() => {
    const element = render(<BrowserRouter>
        <Login/>
    </BrowserRouter>);
  })

  it("Has input lables", () => {
    const userNameText = screen.getByText(/User name/)
    const passwordText = screen.getByText(/Password/)

    expect(userNameText).toBeInTheDocument();
    expect(passwordText).toBeInTheDocument();
  })

  it("Has input elements rendered", () => {
    const userNameInpEle = screen.getByTestId("username-input");
    const passwordInpEle = screen.getByTestId("password-input");

    expect(userNameInpEle).toBeInTheDocument();
    expect(passwordInpEle).toBeInTheDocument();
  })
})
