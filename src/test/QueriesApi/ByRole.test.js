import { render, screen } from "@testing-library/react";
import ByRole from "../../QueriesApi/ByRole";

test("should query all element", async () => {
  render(<ByRole />);

  // 假如不加 { hidden : true } 遇到元素带上属性 aria-hidden="true", style={{ display: "none" }} style={{ opacity: 0 }} 均无法获取
  const allHiddenElement = screen.getAllByRole("heading", { level: 6 });
  expect(allHiddenElement).toHaveLength(3);

  screen.getByRole("button", { name: "option name" });
  screen.getByRole("button", { description: /NO/i });
  screen.getByRole("tab", { selected: true });
  screen.getByRole("checkbox", { checked: true });
  screen.getByRole("button", { current: true });
  screen.getByRole("button", { expanded: true });
  screen.getByRole("button", { pressed: true });

  // queryFallbacks 让后方的 dialog 也能被查到
  screen.getByRole("dialog", { queryFallbacks: true });

  // heading
  const headingElement = screen.getAllByRole("heading", { level: 2 });
  expect(headingElement).toHaveLength(2);
});
