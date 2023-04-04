import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "../../UserAction/Async";

jest.mock("../../UserAction/Children", () => {
  return ({ setChildFood }) => {
    return (
      <div
        onClick={() => {
          setChildFood("Mock Set Success");
        }}
      >
        Mock Children
      </div>
    );
  };
});

describe("Test 'Username' after change", () => {
  test("should ", async () => {
    render(<Async />);

    act(() => {
      userEvent.click(screen.getByText("Mock Children"));
    });

    const mockDiv = await screen.findByText("Mock Set Success");

    expect(mockDiv).toBeInTheDocument();
    screen.debug();
  });
});
