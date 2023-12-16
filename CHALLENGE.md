# CHALLENGE :: CALLBACKS

## Project setup

### git

- Create remote repo with name `Javascript-callbacks`
- Copy provided project to your local Client Side folder
- Init git in your local repo.
- Define ignored files and directories.
- Create branch `feat/challenge-1`

### npm

- Init npm
- Define project as `"type": "module"`
- Install:
  - `prettier`
  - `jest`
- Define scripts:
  - for formatting: `lint` and `lint:fix`
  - for testing: `test`

### Continous Integration

- Securize `main` branch:
  - two approves are required
- Define github action. Your workflow must ensure that:
  - your code is properly formatted.
  - your code is properly tested.

### Development

- Read exercises requirements
- Develop logic and test
- Push changes
- Open Pull Request (all checks must pass in 🟢)

### Dealine

- next Saturday, 09/12/2023

# CHALLENGE :: TESTS & CODE REFINEMENT

## TESTS :: mocks & spies

### 🧪 `transformStringToCollection` test refinement

- mock `onError` & `onSuccess` callbacks using `jest.fn`
- check callbacks have been called only once
- check result is the expected one for all cases defined at `index.js`

### 🧪 `createUser` test refinement

- mock `onError` & `onSuccess` callbacks using `jest.fn`
- spy `Math.random` to control returned value
- check callbacks have been called only once
- check result is the expected one for all cases defined at `index.js`

## CODE REFINEMENT :: defining helpers

1 - Create folder `helpers` at project root leve

2 - Create and export file `validateString` file as helper

3 - Define logic to validate string

- signature:
  - input: value
  - output: boolean
- validation logic:
  - if value is undefined 👉 `false`
  - if typeof value is different to 'string' 👉 `false`
  - if value is an empty string 👉 `false`

4 - Define `validateString.test.js` test cases

- when value is undefined
- when value is number
- when value is array
- when value is boolean
- when value is an object
- when value is an empty string
- when value is fulfilled string

5 - Implement validator in `transformStringToCollection` & `createUser`
