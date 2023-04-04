import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Children from "../../UserAction/Children";

describe("Test 'Username' after change", () => {
  test("should ", async () => {
    const mockSet = jest.fn();

    render(<Children setChildFood={mockSet} />);

    userEvent.click(screen.getByRole("button"));

    expect(mockSet).toBeCalledWith("children");
  });
});
