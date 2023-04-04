import {
  act,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "../../UserAction/Async";

beforeEach(() => {
  render(<Async />);
});

describe("Test 'Username' after change", () => {
  let usernameText, usernameInput;

  beforeEach(() => {
    usernameText = "123";
    usernameInput = screen.getByLabelText(/username/i);
  });

  describe("Test fireEvent.change and userEvent.type", () => {
    // 1、使用 userEvent.type 会出现警告，保裹 act 解决
    // Warning: An update to Async inside a test was not wrapped in act(...)
    test("should input have value after use userEvent.type", async () => {
      act(() => {
        userEvent.type(usernameInput, usernameText);
      });

      expect(usernameInput).toHaveValue(usernameText);
    });

    // 2、fireEvent.change 不会出现警告
    test("should input have value after use fireEvent.change", async () => {
      fireEvent.change(usernameInput, {
        target: {
          value: usernameText,
        },
      });

      expect(usernameInput).toHaveValue(usernameText);
    });
  });
});

describe("Test 'placeholder input' after change", () => {
  describe("Test without fakeTimer", () => {
    let foodText, foodInput;

    beforeEach(() => {
      foodText = "food";
      foodInput = screen.getByPlaceholderText(foodText);

      fireEvent.change(foodInput, {
        target: {
          value: foodText,
        },
      });
    });

    test("should have value by 'fireEvent.change' with done method", (done) => {
      // type 在单元测试中，遇到遇到延时会逐个字幕输入
      // userEvent.type(foodInput, foodText);

      setTimeout(() => {
        // screen.debug();
        expect(foodInput).toHaveValue(foodText);
        done();
      }, 600);
    });

    test("should have value by 'fireEvent.change' with waitFor method", async () => {
      await waitFor(() => {
        // screen.debug();
        expect(foodInput).toHaveValue(foodText);
      });
    });

    test("should have value by 'fireEvent.change' with findBy method", async () => {
      expect(await screen.findByDisplayValue(foodText)).toBeInTheDocument();
    });
  });

  describe("Test with fakeTimer", () => {
    test("should have value by 'fireEvent.change' with fake timer", () => {
      jest.useFakeTimers();

      const foodText = "food";
      const foodInput = screen.getByPlaceholderText(foodText);

      fireEvent.change(foodInput, {
        target: {
          value: foodText,
        },
      });

      act(() => {
        jest.advanceTimersByTime(500);
        // jest.runAllTimers();
        // jest.runOnlyPendingTimers();
      });

      expect(foodInput).toHaveValue(foodText);

      jest.useRealTimers();
    });
  });
});
