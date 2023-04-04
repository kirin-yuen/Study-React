import { render, screen } from "@testing-library/react";
import ByLabelText from "../../QueriesApi/ByLabelText";

test("should query all element", async () => {
  render(<ByLabelText />);

  screen.getByLabelText("Username");
  screen.getByLabelText("Password");
  screen.getByLabelText("Sex");
  screen.getByLabelText("Fav");
  screen.getByLabelText("food");
  screen.getByLabelText("Address", { selector: "input" });
});
