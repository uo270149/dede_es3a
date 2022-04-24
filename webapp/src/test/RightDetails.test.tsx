import React from 'react';
import { render } from "@testing-library/react";
import RightDetails from '../components/Details/RightDetails';
import { Product, ProductTest } from '../shared/shareddtypes';

test('Right Details funcionando', async() => {
    const products: ProductTest[] = [{
        id: "1b",
        imagen: "https://i.imgur.com/dHfRXIu.jpg",
        nombre: "Adidas Pixar",
        precio: 119.99,
        descripcion: "Zapatilla con personajes de Pixar animacion"
    }];

    const { getByText } = render(<RightDetails product={[]}/>);

   // expect(getByText(product[0].nombre)).toBeInTheDocument();
   // expect(getByText(product[0].precio)).toBeInTheDocument();
});