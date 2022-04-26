import { act, fireEvent, render } from "@testing-library/react";
import Register from '../../components/Login/Register';
import { User } from "../../shared/shareddtypes";
import * as api from '../../api/api';
import { createTrue } from "typescript";

/*** 
jest.mock('../api/api');

test('Vista registro correcta', async () => {
  jest.spyOn(api,'addUser').mockImplementation((user:User):Promise<boolean> => Promise.resolve(createTrue))
  await act(async () => {    
    const {container, getByText} = render(<Register />)  
    const inputName = container.querySelector('input[name="username"]')!;
    const inputPassword = container.querySelector('input[name="password"]')!;
    fireEvent.change(inputName, { target: { value: "client1" } });
    fireEvent.change(inputPassword, { target: { value: "pass1" } });
    const button = getByText("Registro");
    fireEvent.click(button);
  });
})

test('Vista registro fallo', async () => {
    jest.spyOn(api,'addUser').mockImplementation((user:User):Promise<boolean> => Promise.resolve(createTrue))
    await act(async () => {    
      const {container, getByText} = render(<Register/>)  
      const inputName = container.querySelector('input[name="username"]')!;
      const inputPassword = container.querySelector('input[name="password"]')!;
      fireEvent.change(inputName, { target: { value: "client1" } });
      fireEvent.change(inputPassword, { target: { value: "pass1" } });
      const button = getByText("Registro");
      fireEvent.click(button);
    })
})
*/

test("Vista registro correcta", async () => {
    const { getByText } = render(<Register />);

    expect(getByText("Registro")).toBeInTheDocument();
    expect(getByText("Username")).toBeInTheDocument();
    expect(getByText("Password")).toBeInTheDocument();
    expect(getByText("Check Password")).toBeInTheDocument();
    expect(getByText("Registrarse")).toBeInTheDocument();
})
