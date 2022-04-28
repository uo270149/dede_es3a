import React from 'react';
import { screen, render } from "@testing-library/react";
import ListRequests from '../../components/Requests/ListRequests';

test('List Requests vacía funcionando', async() => {
    const { getByText } = render(<ListRequests/>);

    expect(getByText("No hay pedidos disponibles")).toBeInTheDocument();
});