import React from 'react';
import { screen, render } from "@testing-library/react";
import Nav from '../../components/Fragments/Nav';

test('Nav funcionando', async() => {
    render(<Nav/>);

    const mispedidos = screen.getByText("Mis pedidos");
    expect(mispedidos).toBeInTheDocument();
    const login = screen.getByText("Login");
    expect(login).toBeInTheDocument();
});