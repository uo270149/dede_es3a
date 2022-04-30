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

    const deLado1 = screen.getByAltText("De lado 1");
    expect(deLado1).toBeInTheDocument();
    const diagonalFrente = screen.getByAltText("Diagonal de frente");
    expect(diagonalFrente).toBeInTheDocument();
    const deLado2 = screen.getByAltText("De lado 2");
    expect(deLado2).toBeInTheDocument();
    const deArriba = screen.getByAltText("De arriba");
    expect(deArriba).toBeInTheDocument();
    const deAtras = screen.getByAltText("De atras");
    expect(deAtras).toBeInTheDocument();
    const deAbajo = screen.getByAltText("Abajo");
    expect(deAbajo).toBeInTheDocument();
});