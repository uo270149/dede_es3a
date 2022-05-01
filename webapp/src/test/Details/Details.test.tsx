import React from 'react';
import { render } from "@testing-library/react";
import Details from '../../components/Details/Details';
import { BrowserRouter } from 'react-router-dom';

test('Details funcionando', async() => {

    render(<BrowserRouter><Details/></BrowserRouter>);

});