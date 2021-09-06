import React from "react";
import Header from "../Header";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Header />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
    cleanup();
})

test("Header title renders correctly", () => {
  const headerElement = getByTestId("title");

  expect(headerElement.textContent).toBe("My Title");
});

test("counter starts at 0", () => {
  const counterElement = getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
});

test("Input contains initial value of 1", () => {
  const inputElement = getByTestId("input");
  expect(inputElement.value).toBe("1");
});

test("add button renders with +", () => {
  const addBtn = getByTestId("add_btn");
  expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with +", () => {
  const subtractBtn = getByTestId("subtract_btn");
  expect(subtractBtn.textContent).toBe("-");
});

test("Changing input value works correctly", () => {
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  expect(inputElement.value).toBe("5");
});

test("Click + button and render counter by +1", () => {
  const addBtnElement = getByTestId("add_btn");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
  fireEvent.click(addBtnElement);
  expect(counterElement.textContent).toBe("1");
});

test("Click - button and render counter by -1", () => {
  const subBtnElement = getByTestId("subtract_btn");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
  fireEvent.click(subBtnElement);
  expect(counterElement.textContent).toBe("-1");
});

test("Changing input value then clicking on add btn works correctly", () => {
  const addBtnElement = getByTestId("add_btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtnElement);
  expect(counterElement.textContent).toBe("5");
});

test("Changing input value then clicking on subtract btn works correctly", () => {
  const subBtnElement = getByTestId("subtract_btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(subBtnElement);
  expect(counterElement.textContent).toBe("-5");
});

test("Adding & subtracting leades to correct counter number", () => {
  const addBtnElement = getByTestId("add_btn");
  const subBtnElement = getByTestId("subtract_btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "15",
    },
  });

  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(subBtnElement);
  fireEvent.click(subBtnElement);

  expect(counterElement.textContent).toBe("30");
  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(subBtnElement);
  expect(counterElement.textContent).toBe("35");
});

test("Counter value of over 100 displays green & value of -100 displays red correctly", () => {
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  const addBtnElement = getByTestId("add_btn");
  const subBtnElement = getByTestId("subtract_btn");

  fireEvent.change(inputElement, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addBtnElement); //50
  expect(counterElement.className).toBe("");
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement); //150
  expect(counterElement.className).toBe("green");
  fireEvent.click(subBtnElement);
  fireEvent.click(subBtnElement);
  fireEvent.click(subBtnElement);
  fireEvent.click(subBtnElement);
  fireEvent.click(subBtnElement);
  expect(counterElement.className).toBe("red");
});
