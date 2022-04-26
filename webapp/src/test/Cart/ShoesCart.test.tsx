import { render } from "@testing-library/react";
import ShoesCart from "../../components/Cart/ShoesCart";

test("Carrito vacio", async () => {
    const { getByText } = render(<ShoesCart/>);

    expect(getByText("ARTICULOS EN EL CARRITO")).toBeInTheDocument();
    expect(getByText("Loggeate para Finalizar Compra")).toBeInTheDocument();
    //expect(getByText("Precio")).toBeInTheDocument();
});