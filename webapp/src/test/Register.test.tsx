import { render } from "@testing-library/react";
import Register from '../components/Login/Register';

test("Vista registro correcta", async () => {
    const { getByText } = render(<Register />);

    expect(getByText("Registro")).toBeInTheDocument();
});