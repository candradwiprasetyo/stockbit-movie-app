function checkAnagram(words) {
  let groups = {};
  let result = [];

  function getKey(word) {
    let letters = word.split("");
    for (let i = 0; i < letters.length - 1; i++) {
      for (let j = 0; j < letters.length - i - 1; j++) {
        if (letters[j] > letters[j + 1]) {
          const temp = letters[j];
          letters[j] = letters[j + 1];
          letters[j + 1] = temp;
        }
      }
    }
    return letters.join("");
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const key = getKey(word);

    if (groups[key] === undefined) {
      groups[key] = [];
    }
    groups[key].push(word);
  }

  for (let k in groups) {
    if (groups.hasOwnProperty(k)) {
      result.push(groups[k]);
    }
  }

  return result;
}

const words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
console.log(checkAnagram(words));
