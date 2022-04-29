import React from 'react';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import ProfileViewer from '../../components/Login/ProfileViewer';


test('Vista Profiler funcionando', async() => {

    render(<BrowserRouter><ProfileViewer/></BrowserRouter>);

    expect(screen.getByText("Logout")).toBeInTheDocument();
    //expect(screen.getByText("Continuar con su compra ")).toBeInTheDocument();
});