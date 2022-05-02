import { render } from "@testing-library/react";
import ErrorPod from "../../components/Login/ErrorPod";

test("Vista error POD correcta", async () => {
    const { getByText } = render(<ErrorPod />);

    expect(getByText('" NO TODOS LOS DATOS DEL POD HAN SIDO PROPORCIONADO CAMBIELOS O USE OTRO POD"')).toBeInTheDocument();
    expect(getByText("Aceptar")).toBeInTheDocument();
})