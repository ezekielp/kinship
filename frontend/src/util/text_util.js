export const limitChars = (str, NumOfCharsToShow) => {
  if (str.length > NumOfCharsToShow) {
    return str.slice(0, NumOfCharsToShow) + "...";
  } else {
    return str;
  }
};