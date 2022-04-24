import React from 'react';
import { render } from "@testing-library/react";
import { ProductTest, TypeProduct } from '../shared/shareddtypes';
import Shoes from '../components/Home/Shoes';
import { ObjectId } from 'mongodb';

test('check that the home is rendering propertly', async() => {
    const products: ProductTest[] = [{
        id: "1b",
        imagen: "https://i.imgur.com/dHfRXIu.jpg",
        nombre: "Adidas Pixar",
        precio: 119.99,
        descripcion: "Zapatilla con personajes de Pixar animacion"
    }];
    
    const { getByText } = render(<Shoes/>);
    expect(getByText(products[0].nombre)).toBeInTheDocument();
    expect(getByText(products[0].precio)).toBeInTheDocument();
});