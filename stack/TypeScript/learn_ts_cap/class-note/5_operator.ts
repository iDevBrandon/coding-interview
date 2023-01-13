function logMessage(value: string | number) {
  console.log(value);

  if (typeof value === "string") {
    value.toLowerCase();
  }
}

logMessage(2);
