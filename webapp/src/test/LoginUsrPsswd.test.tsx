import { render, screen } from "@testing-library/react";
import LoginUsrPsswd from "../components/Login/LoginUsrPsswd";

test("LogIn correcto", async () => {
  render(<LoginUsrPsswd />);

  expect(screen.getByText("Loggeate!")).toBeInTheDocument();
  expect(screen.getByText("Username")).toBeInTheDocument();
  expect(screen.getByText("Password")).toBeInTheDocument();
  expect(screen.getByText("LOGIN")).toBeInTheDocument();
  expect(screen.getByText("¿No tienes una cuenta? Regístrate aqui")).toBeInTheDocument();
});