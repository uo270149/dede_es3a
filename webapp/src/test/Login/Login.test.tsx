import React from 'react';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Login from '../../components/Login/Login';


test('Vista Login POD funcionando', async() => {

    render(<BrowserRouter><Login/></BrowserRouter>);

});