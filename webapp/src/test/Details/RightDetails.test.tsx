import React from 'react';
import { render } from "@testing-library/react";
import RightDetails from '../../components/Details/RightDetails';
import { TypeProduct } from '../../shared/shareddtypes';
import {ObjectId} from 'bson';

test('Right Details funcionando', async() => {
    const strObject : ObjectId = new ObjectId("62598df82841d14b30fbd6b1");
    const product: TypeProduct[] = [{
        _objectId: strObject,
        id: "1b",
        imagen: "https://i.imgur.com/dHfRXIu.jpg",
        nombre: "Adidas Pixar",
        precio: 119.99,
        descripcion: "Zapatilla con personajes de Pixar animacion"
    }];

    const { getByText } = render(<RightDetails product={product}/>);

    expect(getByText(product[0].nombre)).toBeInTheDocument();
    expect(getByText(product[0].precio)).toBeInTheDocument();
});