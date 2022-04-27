import React from 'react';
import { screen, render } from "@testing-library/react";
import ListRequests from '../../components/Requests/ListRequests';

test('List de Home funcionando', async() => {
    render(<ListRequests/>);

});