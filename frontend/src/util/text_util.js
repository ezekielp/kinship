export const limitChars = (str, NumOfCharsToShow) => {
  if (!str) return null;
  if (str.length > NumOfCharsToShow) {
    return str.slice(0, NumOfCharsToShow) + "...";
  } else {
    return str;
  }
};