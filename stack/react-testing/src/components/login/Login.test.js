import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "J" },
    }),
  },
}));

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText("username");
  expect(userInputEl).toBeInTheDocument();
});

test("Password input hould be rendered", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText("password");
  expect(passwordInputEl).toBeInTheDocument();
});

test("Button should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText("username");
  expect(userInputEl.value).toBe("");
});

test("username input should change", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText("username");
  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText("password");
  const testValue = "test";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("Password input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText("password");
  expect(userInputEl.value).toBe("");
});

test("loading should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent("Please wait");
});

test("button shsould be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("error message should not be visible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("button shsould not be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText("username");
  const passwordInputEl = screen.getByPlaceholderText("password");

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

test("loading should be rendered when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText("username");
  const passwordInputEl = screen.getByPlaceholderText("password");

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent("Please wait");
});

test("loading data from BE", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText("username");
  const passwordInputEl = screen.getByPlaceholderText("password");

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const userItem = await screen.findByText("J");

  expect(userItem).toBeInTheDocument();
});
