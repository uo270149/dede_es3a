import React from 'react';
import { render } from "@testing-library/react";
import Home from '../components/Home/Home';
import { ListProduct, Product } from '../shared/shareddtypes';

test('check that the home is rendering propertly', async() => {
    const products: Product[] = [{name:'Adidas Equipment Support 93', precio:35.99}];
    
    const { getByText } = render(<Home/>);
    expect(getByText(products[0].name)).toBeInTheDocument();
    expect(getByText(products[0].precio)).toBeInTheDocument();
});

test('Lista de Home rendering', async() => {
    const listProducts: ListProduct[] = [{img:'https://i.imgur.com/VwtfVgU.jpg', title:'Zapatillas Baby Yoda', author: '@rollelflex_graphy726'}];
    
    const { getByText } = render(<Home/>);
    expect(getByText(listProducts[0].img)).toBeInTheDocument();
    expect(getByText(listProducts[0].title)).toBeInTheDocument();
})