import transformStringToArray from "./transformStringToCollection.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

//test with value as number and log result
const valueNumber = transformStringToArray(1312, onError, onSuccess);
console.log("valueNumber => ", valueNumber);

//test with value as array and log result
const valueArray = transformStringToArray([13, 13, 13], onError, onSuccess);
console.log("valueArray => ", valueArray);

//test with value as boolean and log result
const valueBoolean = transformStringToArray(true, onError, onSuccess);
console.log("valueBoolean => ", valueBoolean);

//test with value as empty string and log result
const valueEmptyString = transformStringToArray("", onError, onSuccess);
console.log("valueEmptyString => ", valueEmptyString);

//test with value as string and log result
const valueString = transformStringToArray("Hello Jaume", onError, onSuccess);
console.log("valueString => ", valueString);
