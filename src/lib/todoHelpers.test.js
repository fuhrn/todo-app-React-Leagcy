import { addTodo, findById, toggleTodo, updateTodo, removeTodo, filterTodos } from "./todoHelpers";

// add Todo
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

// findById()
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

// toggle Todo
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

// update Todo
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


// remove Todo
test("removeTodo should remove an item by id", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  const targetId = 2

  const expectedTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  // act
  const result = removeTodo(startTodos, targetId);

  // assert
  expect(result).toEqual(expectedTodos);
});

test("removeTodo should not mutate the original array", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  const targetId = 2;

  const expectedTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  // act
  const result = removeTodo(startTodos, targetId);

  // assert
  expect(result).not.toBe(startTodos);
});


// Filter Todos
test("filterTodos should return all items for the root route", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  // act
  const result = filterTodos(startTodos, '/');

  // assert
  expect(result).toEqual(startTodos);
});

test("filterTodos should return only completed items for the complete route", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: true },
    { id: 3, name: "three", isComplete: false },
  ];

  const expected = [
    {id: 2, name: 'two', isComplete: true}
  ]

  // act
  const result = filterTodos(startTodos, "/complete");

  // assert
  expect(result).toEqual(expected);
});

test("filterTodos should return only incompleted items for the active route", () => {
  // arrange
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: true },
    { id: 3, name: "three", isComplete: false },
  ];

  const expected = [
    { id: 1, name: "one", isComplete: false },
    { id: 3, name: "three", isComplete: false },
  ];

  // act
  const result = filterTodos(startTodos, "/active");

  // assert
  expect(result).toEqual(expected);
});