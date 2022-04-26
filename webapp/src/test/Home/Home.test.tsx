import React from 'react';
import { render } from "@testing-library/react";
import { TypeProduct } from '../shared/shareddtypes';
import Shoes from '../components/Home/Shoes';
import {ObjectId} from 'bson';

test('check that the home is rendering propertly', async() => {
    const strObject : ObjectId = new ObjectId("62598df82841d14b30fbd6b1");
    const products: TypeProduct[] = [{
        _objectId: strObject,
        id: "1b",
        imagen: "https://i.imgur.com/dHfRXIu.jpg",
        nombre: "Adidas Pixar",
        precio: 119.99,
        descripcion: "Zapatilla con personajes de Pixar animacion"
    }];
    
    const { getByText } = render(<Shoes products={products}/>);
    expect(getByText(products[0].nombre)).toBeInTheDocument();
    expect(getByText(products[0].precio)).toBeInTheDocument();
});