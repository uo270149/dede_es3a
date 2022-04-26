import React from 'react';
import { render } from "@testing-library/react";
import Us from '../../components/Developers/Us';

test('About Us funcionando', async() => {
    const { getByText } = render(<Us/>);

    expect(getByText("Andrea Auñón Antúnez")).toBeInTheDocument();
    expect(getByText("uo277876@uniovi.es")).toBeInTheDocument();
    
    expect(getByText("Javier Lopez de Juan")).toBeInTheDocument();
    expect(getByText("uo271447@uniovi.es")).toBeInTheDocument();
    
    expect(getByText("Alejandro Del Gallego Moro")).toBeInTheDocument();
    expect(getByText("uo271411@uniovi.es")).toBeInTheDocument();
});