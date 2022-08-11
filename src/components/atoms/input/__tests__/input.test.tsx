import { Input } from "components/atoms/input";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  it("should render correctly", () => {
    render(<Input />);
    const input = screen.getByRole("textbox", { name: /input/i });
    expect(input).toBeInTheDocument();
  });
  it("should focus on click", () => {
    render(<Input />);
    const input = screen.getByRole("textbox", { name: /input/i });
    fireEvent.keyDown(input, { key: "A", code: "KeyA" });
  });
  it("should type", () => {
    render(<Input />);
    const input = screen.getByRole("textbox", { name: /input/i });
    userEvent.type(input, "hello world");
    expect(input).toHaveValue("hello world");
  });
});
