import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Children from "../../UserAction/Children";
import * as Utils from "../../utils";

describe("Test jest mock function", () => {
  test("should spy log function call", async () => {
    const notMockSet = () => {
      console.log("not mock function");
    };

    const mockLog = jest.spyOn(Utils, "log").mockImplementation((string) => {
      console.warn(string);
    });

    render(<Children setChildFood={notMockSet} />);

    userEvent.click(screen.getByRole("button"));

    expect(mockLog).toBeCalledWith(17);
  });

  test("should spy log function call", async () => {
    const notMockSet = () => {
      console.log("not mock function");
    };

    const mockLog = jest.spyOn(Utils, "log").mockReturnValueOnce("once");

    render(<Children setChildFood={notMockSet} />);

    userEvent.click(screen.getByRole("button"));

    expect(mockLog).toBeCalledWith(17);
    expect(Utils.log).toBeCalledWith(17);
  });
});
