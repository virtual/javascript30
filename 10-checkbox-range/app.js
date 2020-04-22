// The following is a common layout you would see in an email client.
// When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes should be checked.

 
// document.querySelectorAll('input').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//     // console.log('click')
//   })
// })
var first, last;
var firstNum, lastNum;
var checked = true;

document.querySelectorAll('input').forEach(function(item, num) {
  item.addEventListener('click', function(e) {
    //handle click
    
    // console.log(e, num)
    if (e.shiftKey) {
      // console.log(`The ${num} SHIFT key was pressed!`);
      end = e;
      lastNum = num;
    } else {
      // console.log("The SHIFT key was NOT pressed!");
      first = e;
      firstNum = num;
      end = null;
      lastNum = null;
    }

    if (first && end) {
      // console.log(firstNum, '...', lastNum)
      if (first.toElement['checked'] == true) {
        checked = true;
        toggleCheckboxes(firstNum, lastNum, checked);
        // console.log('select them!')
      } else {
        checked = false;
        toggleCheckboxes(firstNum, lastNum, checked);
        // console.log('unselect them!')
      } 
    }
  });
})
function toggleCheckboxes(start, end, checked) {
  // console.log(start, end, checked)
  var low, high;
  if (start < end) { low = start; high = end; }
  else { high = start; low = end; }

  for (var i = low; i <= high; i++) {
    if (checked) {
      // console.log('check', i)
      document.getElementsByTagName("input")[i].checked = true;
    }
    else {
      // console.log('uncheck', i)
      document.getElementsByTagName("input")[i].checked = false;

    }
  }
}