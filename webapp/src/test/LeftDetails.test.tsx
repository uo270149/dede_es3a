import React from 'react';
import { render } from "@testing-library/react";
import LeftDetails from '../components/Details/LeftDetails';

test('Left Details funcionando', async() => {
    const { getByText } = render(<LeftDetails/>);
    expect(getByText("De lado 1")).toBeInTheDocument();
});