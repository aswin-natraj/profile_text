const findUpper = (string) => {
  let extractedString;
  const extractFirstChar = string
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
  extractedString = extractFirstChar.slice(0, 2);
  return extractedString;
};

module.exports = findUpper;
