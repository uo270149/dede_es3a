import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import Home from '../components/Home/Home';
import { Product } from '../shared/shareddtypes';

test('check that the home is rendering propertly', async() => {
    const products: Product[] = [{name:'Adidas Equipment Support 93', precio:35.99}];
    
    const { getByText } = render(<Home/>);
    expect(getByText(products[0].name)).toBeInTheDocument();
    expect(getByText(products[0].precio)).toBeInTheDocument();
});