import { addTodo, findById, toggleTodo, updateTodo } from "./todoHelpers";

test("addTodo should ad the passed todo to the list", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
  ];

  const newTodo = { id: 3, name: "three", isComplete: false };

  const expected = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  // act
  const result = addTodo(startTodos, newTodo);

  // assert
  expect(result).toEqual(expected);
});

test("addTodo should not mutate the existing todo array", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
  ];

  const newTodo = { id: 3, name: "three", isComplete: false };

  const expected = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  // act
  const result = addTodo(startTodos, newTodo);

  // assert
  expect(result).not.toBe(startTodos);
});

test("findById should return the expected item from an array", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  const expected = { id: 2, name: "two", isComplete: false };

  // act
  const result = findById(2, startTodos);

  // assert
  expect(result).toEqual(expected);
});

test("toggleTodo should toggle the isComplete prop of a todo", () => {
  // arrange
  const startTodo = { id: 2, name: "two", isComplete: false };
  const expected = { id: 2, name: "two", isComplete: true };

  // act
  const result = toggleTodo(startTodo);

  // assert
  expect(result).toEqual(expected);
});

test("toggleTodo should not mutate the original todo", () => {
  // arrange
  const startTodo = { id: 2, name: "two", isComplete: false };

  // act
  const result = toggleTodo(startTodo);

  // assert
  expect(result).not.toBe(startTodo);
});

test("updateTodo should update an item by id", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  const updatedTodo = { id: 2, name: "two", isComplete: true };
  const expectedTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: true },
    { id: 3, name: "three", isComplete: false },
  ];

  // act
  const result = updateTodo(startTodos, updatedTodo);

  // assert
  expect(result).toEqual(expectedTodos);
});

test("updateTodo should not mutate the original array", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  const updatedTodo = { id: 2, name: "two", isComplete: true };

  // act
  const result = updateTodo(startTodos, updatedTodo);

  // assert
  expect(result).not.toBe(startTodos);
});
