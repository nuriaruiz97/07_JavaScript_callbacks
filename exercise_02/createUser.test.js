import createUser from "./createUser";
import onError from "./callbacks/onError";
import onSuccess from "./callbacks/onSuccess";

//test with email as empty string and log result
describe("Given a createUser function", () => {
  describe("When it receives an empty string", () => {
    test("Then it should return an error", () => {
      const emailEmptyString = createUser("", onError, onSuccess);
      expect(emailEmptyString).toEqual("");
    });
  });

  //test with email as string and log result
  describe("When it receives a string ", () => {
    test("Then it should return a string", () => {
      const emailString = createUser(
        "nuriaruizfont@gmail.com",
        onError,
        onSuccess,
      );
      expect(emailString).toEqual(emailString);
    });
  });
});
