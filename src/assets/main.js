const answer = document.getElementById('answer');
const attempt = document.getElementById('attempt');

function guess() {
  const input = document.getElementById('user-guess');
  // add functionality to guess function here
}

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while (answer.value.length < 4) {
    answer.value = `0${answer.value}`;
  }
}
