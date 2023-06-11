import { render, screen } from "@testing-library/react";
import Greatings from "./Greatings";

describe("Greatings Components", () => {
  test("renders as Hello World as a text", () => {
    render(<Greatings />);
    const helloworldElement = screen.getByText("Hello World");
    expect(helloworldElement).toBeInTheDocument();
  });
});
