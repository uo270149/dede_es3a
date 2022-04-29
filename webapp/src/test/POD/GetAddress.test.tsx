import React from 'react';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import GetAddressPod from '../../components/POD/GetAddressPod';


test('GetAddres funcionando', async() => {

    render(<BrowserRouter><GetAddressPod webId={''}/></BrowserRouter>);
});