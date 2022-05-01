import React from 'react';
import { render } from "@testing-library/react";
import TableSizes from '../../components/Details/TableSizes';

test('Table Sizes funcionando', async() => {
    const { getByText } = render(<TableSizes/>);

    expect(getByText("US - Hombre")).toBeInTheDocument();
    expect(getByText("US - Mujer")).toBeInTheDocument();
    expect(getByText("UK")).toBeInTheDocument();
    expect(getByText("CM")).toBeInTheDocument();
    expect(getByText("EU")).toBeInTheDocument();
});