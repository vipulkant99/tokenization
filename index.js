function randomNumberWithLength(len) {
  // Generate a random number between 10^(len-1) and 10^len - 1
  const min = Math.pow(10, len - 1);
  const max = Math.pow(10, len) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tokenization(token) {
  const parts = token.match(/[\w]+|[^\w\s]/g);

  console.log("tokens: ", parts);

  const result = parts.map((item) => {
    if (/^\w+$/.test(item)) {
      return randomNumberWithLength(item.length);
    } else {
      return randomNumberWithLength(2);
    }
  });

  return result;
}

const str = "Hello, sir How may I help you?";

console.log("tokenization", tokenization(str));
