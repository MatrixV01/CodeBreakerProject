let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  let input = document.getElementById('user-guess');
  // add functionality to guess function here

}

// implement new functions here
function setHiddenFields() {
  answer = Math.floor(Math.random() * 10000);
  return answer;
}
