import { render, screen } from "@testing-library/react";
import Greatings from "./Greatings";
import { userEvent } from "@testing-library/user-event";

describe("Greatings Components", () => {
  test("renders as Hello World as a text", () => {
    render(<Greatings />);

    const helloworldElement = screen.getByText("Hello World");
    expect(helloworldElement).toBeInTheDocument();
  });

  
  test("renders good to see u if the button was Not cliked", () => {
    render(<Greatings />);
    const changeElemente = screen.getByText("good to see u", { exact: false });
    expect(changeElemente).toBeInTheDocument();
  });


test("renders Changed if the button was cliked", () => {
    render(<Greatings/>);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paraElement = screen.getByText("Changed");

    expect(paraElement).toBeInTheDocument();
  });
  test('does not render "good to see u" if the button was cliked', () => {
    render(<Greatings/>);

    const buttonElement = screen.getByRole("button");

    userEvent.click(buttonElement);

    const paraElement = screen.queryByText('good to see u',{exact: false});

    expect(paraElement).toBeNull();
  });

// (test 4 throwing some error)




});
