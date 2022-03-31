import { Button } from "components/atoms/button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
	it("should render correctly", () => {
		render(<Button>Join Meeting</Button>);
		const button = screen.getByRole("button", { name: /Join Meeting/i });
		expect(button).toBeInTheDocument();
	});
});
