import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Children from "../../UserAction/Children";
import { log, getNumber } from "../../utils";

// 1、完整 mock 模块
jest.mock("../../utils", () => {
  return {
    ...jest.requireActual("../../utils"),
    log: jest.fn(),
    // getNumber: jest.fn(),
  };
});

describe("Test jest mock function", () => {
  test("should not have a mock function", async () => {
    const notMockSet = () => {
      console.log("not mock function");
    };

    render(<Children setChildFood={notMockSet} />);

    userEvent.click(screen.getByRole("button"));
  });

  test("should have a mock function", async () => {
    const mockSet = jest.fn(() => {
      const str = "mock set";

      return str;
    });

    render(<Children setChildFood={mockSet} />);

    userEvent.click(screen.getByRole("button"));

    expect(mockSet).toBeCalled();
    expect(mockSet()).toBe("mock set");
  });

  test("should mock return value", async () => {
    render(<Children setChildFood={() => {}} />);

    // getNumber.mockReturnValue(undefined);
    userEvent.click(screen.getByRole("button"));

    // expect(getNumber).toBeCalledWith(17);
    expect(log).toBeCalledWith(17);
  });
});
