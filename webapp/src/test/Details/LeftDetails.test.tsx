import React from 'react';
import { screen, render } from "@testing-library/react";
import LeftDetails from '../../components/Details/LeftDetails';

test('Left Details funcionando', async() => {

    render(<LeftDetails/>);

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