function isBalanced(str) {
  let parens = { "[": "]", "(": ")", "{": "}" };
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (["[", "{", "("].includes(str[i])) {
      stack.push(str[i]);
    } else if (str[i] !== parens[stack.pop()]) {
      return false;
    }
  }
  return stack.length < 1;
}
