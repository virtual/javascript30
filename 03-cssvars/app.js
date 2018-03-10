/* Checks all inputs for changes and updates CSS */
const inputs = document.querySelectorAll('.controls');
inputs.forEach(function(e){
  e.addEventListener("change",  handleUpdate); 
  e.addEventListener("mousemove",  handleUpdate); 
});

function handleUpdate() {
  const property = this.dataset.property;
  const value = (this.dataset.sizing) ? this.value + this.dataset.sizing : this.value;
  updateVariable(property, value);
}

/* Updates root CSS properties if changed on inputs */
function updateVariable(prop, val) {
  document.documentElement.style.setProperty('--' + prop, val);
};
 