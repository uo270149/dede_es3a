import React from 'react';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';

test('Cart funcionando', async() => {

    render(<BrowserRouter><Cart/></BrowserRouter>);

});