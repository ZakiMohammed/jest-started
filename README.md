# JEST Started

Getting started with JEST unit test framework

## Initial Setup
```
mkdir jest-started
cd jest-started

npm init
```

## Adding Dependencies
```
npm i jest -D 
npm i @types/jest -D
```

## Adding Commands
```
"scripts": {
  "test": "jest",
  "test-watch": "jest --watchAll",
  "test-verbose": "jest --verbose",
  "test-coverage": "jest --coverage",
  "test-fat": "jest --watchAll --verbose --coverage"
},
```

## Writing Unit Test
```
it('should add two numbers', () => {
  // arrange
  const expected = 30;

  // act
  const received = sum(10, 20);

  // assert
  expect(received).toBe(expected);
});
```