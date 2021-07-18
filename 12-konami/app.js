let pushedKeys = [];
const secretCode = 'mew'

function konami() {
  document.getElementsByTagName('body')[0].classList.add('konami')
  cornify_add();
}

window.addEventListener('keyup', function (e) {
  // Max length of array should be length of code
  pushedKeys.push(e.key);
  pushedKeys.splice((secretCode.length * -1) - 1, pushedKeys.length - secretCode.length)
  if (pushedKeys.join("").includes(secretCode)) {
    konami()
  }
})