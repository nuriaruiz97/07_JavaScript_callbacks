import transformStringToArray from "./transformStringToCollection.js";

//test with value as number and log result
describe("Given a transformStringToArray function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockOnError = jest.fn();
  const mockOnSuccess = jest.fn();

  describe("When it receives a number", () => {
    test("Then it should return an error", () => {
      const number = 13;
      const valueNumber = transformStringToArray(
        number,
        mockOnError,
        mockOnSuccess
      );

      expect(valueNumber).toEqual([]);
      expect(mockOnError).toHaveBeenCalledTimes(1);
      expect(mockOnSuccess).not.toHaveBeenCalled();
    });
  });

  //test with value as array and log result
  describe("When it receives an array", () => {
    test("Then it should return an error", () => {
      const valueArray = transformStringToArray([], mockOnError, mockOnSuccess);

      expect(valueArray).toEqual([]);
      expect(mockOnError).toHaveBeenCalledTimes(1);
      expect(mockOnSuccess).not.toHaveBeenCalled();
    });
  });

  //test with value as boolean and log result
  describe("When it receives a boolean", () => {
    test("Then it should return an error", () => {
      const valueBoolean = transformStringToArray(
        true,
        mockOnError,
        mockOnSuccess
      );

      expect(valueBoolean).toEqual([]);
      expect(mockOnError).toHaveBeenCalledTimes(1);
      expect(mockOnSuccess).not.toHaveBeenCalled();
    });
  });

  //test with value as empty string and log result
  describe("When it receives an empty string", () => {
    test("Then it should return an error", () => {
      const valueEmptyString = transformStringToArray(
        "",
        mockOnError,
        mockOnSuccess
      );

      expect(valueEmptyString).toEqual([]);
      expect(mockOnError).toHaveBeenCalledTimes(1);
      expect(mockOnSuccess).not.toHaveBeenCalled();
    });
  });

  //test with value as string and log result
  describe("When it receives a string", () => {
    test("Then it should return an array with the string", () => {
      const valueString = transformStringToArray(
        "Núria",
        mockOnError,
        mockOnSuccess
      );

      expect(valueString).toEqual(["Núria"]);
    });
  });
});
