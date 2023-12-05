import transformStringToArray from "./transformStringToCollection.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

//test with value as number and log result
describe("Given a transformStringToArray function", () => {
  describe("When it receives a number", () => {
    test("Then it should return an error", () => {
      const valueNumber = transformStringToArray(1312, onError, onSuccess);
      expect(valueNumber).toEqual([]);
    });
  });
});

//test with value as array and log result

//test with value as boolean and log result
//test with value as empty string and log result
//test with value as string and log result
