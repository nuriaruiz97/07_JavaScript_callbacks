import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

//test with email as empty string and log result
const emailEmptyString = createUser("", onError, onSuccess);
console.log("emailEmptyString => ", emailEmptyString);

//test with email as string and log result
const emailString = createUser("nuriaruiz@gmail.com", onError, onSuccess);
console.log("emailString => ", emailString);
