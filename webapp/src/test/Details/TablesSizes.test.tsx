import React from 'react';
import { render } from "@testing-library/react";
import TableSizes from '../components/Details/TableSizes';
import { TypeProduct } from '../shared/shareddtypes';
import {ObjectId} from 'bson';

test('Table Sizes funcionando', async() => {
    const { getByText } = render(<TableSizes/>);

    expect(getByText("US - Hombre")).toBeInTheDocument();
    expect(getByText("US - Mujer")).toBeInTheDocument();
    expect(getByText("UK")).toBeInTheDocument();
    expect(getByText("CM")).toBeInTheDocument();
    expect(getByText("EU")).toBeInTheDocument();
});