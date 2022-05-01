import React from 'react';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';

test('Home funcionando', async() => {

    render(<BrowserRouter><Home/></BrowserRouter>);

});