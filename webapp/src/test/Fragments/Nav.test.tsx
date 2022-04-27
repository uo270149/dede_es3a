import React from 'react';
import { screen, render } from "@testing-library/react";
import Nav from '../../components/Fragments/Nav';
import { BrowserRouter } from 'react-router-dom';

test('Nav funcionando', async() => {
    render( <BrowserRouter> <Nav></Nav></BrowserRouter> );

    const home = screen.getByTitle("Home");
    expect(home).toBeInTheDocument();
    const cart = screen.getByTitle("Cart");
    expect(cart).toBeInTheDocument();

    const mispedidos = screen.getByText("Mis pedidos");
    expect(mispedidos).toBeInTheDocument();
    const login = screen.getByTitle("Login");
    expect(login).toBeInTheDocument();
    const aboutUs = screen.getByTitle("About Us");
    expect(aboutUs).toBeInTheDocument();
});