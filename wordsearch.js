const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  let verticalJoin = [];
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      if (i === 0) {
        verticalJoin[j] = "";
      }
      verticalJoin[j] += letters[i][j];
    }
  }
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false
};

module.exports = wordSearch;
