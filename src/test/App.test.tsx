import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "@/App";

const renderAt = (path: string) => {
  window.history.pushState({}, "", path);
  return render(<App />);
};

afterEach(() => {
  window.history.pushState({}, "", "/");
});

describe("App routes", () => {
  it("renders the home page heading", () => {
    renderAt("/");
    expect(
      screen.getByRole("heading", { level: 1, name: "Mahmood Sultan" }),
    ).toBeInTheDocument();
  });

  it("renders the Makerspace case study title", () => {
    renderAt("/projects/utm-makerspace");
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Why immigrant ICCIT students weren't using the UTM Makerspace",
      }),
    ).toBeInTheDocument();
  });
});
