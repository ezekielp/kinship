export const limitChars = (str, NumOfCharsToShow) => {
  if (!str) return null;
  if (str.length > NumOfCharsToShow) {
    return str.slice(0, NumOfCharsToShow) + "...";
  } else {
    return str;
  }
};

export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];