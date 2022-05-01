import React from 'react';
import { screen, render } from "@testing-library/react";
import LeftDetails from '../../components/Details/LeftDetails';
import {ObjectId} from 'bson';
import { TypeProduct } from '../../shared/shareddtypes';
test('Left Details funcionando', async() => {
    const strObject : ObjectId = new ObjectId("62598df82841d14b30fbd6b1");
    const product: TypeProduct[] = [{
        _objectId: strObject,
        id: "1b",
        imagen: "https://i.imgur.com/dHfRXIu.jpg",
        nombre: "Adidas Pixar",
        precio: 119.99,
        descripcion: "Zapatilla con personajes de Pixar animacion"
    }];


    render(<LeftDetails product={product}/>);

    const imagen = screen.getByAltText("imagen1");
    expect(imagen).toBeInTheDocument();
});