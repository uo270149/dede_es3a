import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import Footer from '../components/Fragments/Footer';

test('check that the footer is rendering propertly', async() => {
    const { getByText } = render(<Footer/>);
    expect(getByText("@DeDe_es3A")).toBeInTheDocument();

});