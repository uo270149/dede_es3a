import { render, screen } from "@testing-library/react";
import LoginUsrPsswd from "../components/Login/LoginUsrPsswd";

test("LogIn correcto", async () => {
  const { getByText } = render(<LoginUsrPsswd/>);

  expect(getByText("Loggeate!")).toBeInTheDocument();
  expect(getByText("Username")).toBeInTheDocument();
  expect(getByText("Password")).toBeInTheDocument();
});