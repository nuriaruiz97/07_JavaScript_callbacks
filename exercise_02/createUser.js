/**
 * Define 'createUser' function and signature (JSDocs)
 *
 * input:
 *  - email: string
 *  - onError: function
 *  - onSuccess: function
 *
 * It will generate a random number in between 0 and 1
 * If random number is less than 0.5 or email is empty, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - string
 */

const createUser = function (email, onError, onSuccess) {
  const randomNumber = Math.random();

  if (randomNumber < 0.5 || email === "") {
    return onError();
  }

  return onSuccess(email);
};

export default createUser;
