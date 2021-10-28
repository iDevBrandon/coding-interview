let userInput: unknown;
let userName: string;

userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

// never - never returns anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
