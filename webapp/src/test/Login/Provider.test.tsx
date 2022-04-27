import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from "../../components/Login/Provider"


test("Provider funcionando", async () => {

    let response = await Provider.getIdentityProviders( );

    expect(response).toStrictEqual([
        {
            id: "inrupt",
            label: "Inrupt",
            image: "img/inrupt.svg",
            value: "https://inrupt.net/auth",
            registerLink: "https://inrupt.net/register",
        }
    ])
})