import { render } from "@testing-library/react";
import FormLogIn from '../../components/Login/FormLogIn';

test("Vista registro correcta", async () => {
    const { getByText } = render(<FormLogIn />);

    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Identificate")).toBeInTheDocument();
    expect(getByText("¿No tienes una cuenta? Regístrate aqui")).toBeInTheDocument();
})