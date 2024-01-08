import operateWithRandomNumber from "./operateWithRandomNumber";

describe("Given operateWithRandomNumber function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(Math, "random").mockReturnValue(0.4);
  });
  const mockAdd = jest.fn((value, randomNumber) => value + randomNumber);
  const mockSubstract = jest.fn((value, randomNumber) => value - randomNumber);
  const mockMultiply = jest.fn((value, randomNumber) => value * randomNumber);
  const mockDivide = jest.fn((value, randomNumber) => value / randomNumber);

  test("It should return the result of the add callback", () => {
    //arrange
    const value = 13;

    //act
    const result = operateWithRandomNumber(value, mockAdd);

    //assert
    expect(result).toBe(17);
    expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(mockDivide).not.toHaveBeenCalled();
    expect(mockSubstract).not.toHaveBeenCalled();
    expect(mockMultiply).not.toHaveBeenCalled();
  });

  test("It should return the result of the subtract callback", () => {
    //arrange
    const value = 13;

    //act
    const result = operateWithRandomNumber(value, mockSubstract);

    //assert
    expect(result).toBe(9);
    expect(mockSubstract).toHaveBeenCalledTimes(1);
    expect(mockAdd).not.toHaveBeenCalled();
    expect(mockDivide).not.toHaveBeenCalled();
    expect(mockMultiply).not.toHaveBeenCalled();
  });

  test("It should return the result of the multiply callback", () => {
    //arrange
    const value = 13;

    //act
    const result = operateWithRandomNumber(value, mockMultiply);

    //assert
    expect(result).toBe(52);
    expect(mockMultiply).toHaveBeenCalledTimes(1);
    expect(mockAdd).not.toHaveBeenCalled();
    expect(mockSubstract).not.toHaveBeenCalled();
    expect(mockDivide).not.toHaveBeenCalled();
  });

  test("It should return the result of the divide callback", () => {
    //arrange
    const value = 13;

    //act
    const result = operateWithRandomNumber(value, mockDivide);

    //assert
    expect(result).toBe(3.25);
    expect(mockDivide).toHaveBeenCalledTimes(1);
    expect(mockAdd).not.toHaveBeenCalled();
    expect(mockSubstract).not.toHaveBeenCalled();
    expect(mockMultiply).not.toHaveBeenCalled();
  });
});
