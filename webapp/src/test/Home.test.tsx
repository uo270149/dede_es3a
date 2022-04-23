import React from 'react';
import { render } from "@testing-library/react";
import Home from '../components/Home/Shoes';
import { ListProduct, TypeProduct } from '../shared/shareddtypes';
import ShoesView from '../components/Home/Shoes';

test('check that the home is rendering propertly', async() => {
    const products: TypeProduct[] = [{
        _objectId: ObjectId;
        id: string;
        nombre: string;
        precio: number;
        descripcion: string;
        imagen: string;
    }];
    
    const { getByText } = render(<ShoesView parsed={products}/);
    expect(getByText(products[0].name)).toBeInTheDocument();
    expect(getByText(products[0].precio)).toBeInTheDocument();
});

test('Lista de Home rendering', async() => {
    const listProducts: ListProduct[] = [{img:'https://i.imgur.com/VwtfVgU.jpg', title:'Zapatillas Baby Yoda', author: '@rollelflex_graphy726'}];
    
    const { getByText } = render();
    expect(getByText(listProducts[0].img)).toBeInTheDocument();
    expect(getByText(listProducts[0].title)).toBeInTheDocument();
})