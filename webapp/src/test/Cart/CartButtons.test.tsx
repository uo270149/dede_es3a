import { render } from "@testing-library/react";
import CartButtons from "../../components/Cart/CartButons";

test("Carrito vacio", async () => {
    const { getByText } = render(<CartButtons/>);

    expect(getByText("Precio total sin gastos de Envio:")).toBeInTheDocument();
    expect(getByText("Loggeate para Finalizar Compra")).toBeInTheDocument();
    //expect(getByText("Precio")).toBeInTheDocument();
});

/***
test('Se ve el producto añadido', async () => {
    const products: Product[] = [{name:'Adidas Equipment Support 93', precio:35.99}];

    const { container, getByText } = render(<Cart/>);

    const buttonCart = container.querySelector('.buttonCart')!;
    fireEvent.click(buttonCart, {});

    expect(getByText(products[0].name)).toBeInTheDocument();
    expect(getByText(products[0].precio)).toBeInTheDocument();
    expect(getByText("Precio total sin gastos de Envio: 35.99")).toBeInTheDocument();
    expect(getByText("ARTICULOS EN EL CARRITO")).toBeInTheDocument();
});
*/