import { render, screen } from "@testing-library/react";
import SignUpView from '../components/Login/Register';
import { User } from '../shared/shareddtypes';

/***
test("Registro correcto", async () => {
    const user: User[] = [{name: 'client1', password: 'pass1' }];
    const { getByText, container } = render(<ThingToRender />);

    expect(getByText("Registro")).toBeInTheDocument();
    expect(container.querySelector("div")!.className).toContain("colorSuccess");
});
 */