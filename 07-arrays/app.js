// https://github.com/wesbos/JavaScript30
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 2
// Some data we can work with
let output = ''; 
let term = '> '; 
let space = "\r\n";
 
 

 // ## Array Cardio Day 2
 const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
output += space +"people: "+ space;  
output += JSON.stringify(people);
output += space;

output += space +"comments: "+ space;  
output += JSON.stringify(comments);
output += space;

// Some and Every Checks
// Array.prototype.some() 
output += space +"Is at least one person 19 or older?"+ space;  
const hasAdult = people.some(function(person) { 
  const currentYear = new Date().getFullYear();
  return ( currentYear - person.year >= 19);
  });
output += hasAdult ? 'Yes' : 'No';
output += space;

// Array.prototype.every()
output += space +"Is everyone 19 or older?"+ space;  
const allAdult = people.every(function(person) { 
  const currentYear = new Date().getFullYear();
  return ( currentYear - person.year >= 19);
  });
output += allAdult ? 'Yes' : 'No';
output += space;

// Array.prototype.find()
output += space +"Find the comment with the ID of 823423"+ space;  
const comment = comments.find(comment => comment.id === 823423)
output += JSON.stringify(comment);
output += space;
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// Array.prototype.findIndex()
output += space +"Find the comment with the ID of 823423 and delete it"+ space;  
const deleteCommentByIndex = comments.findIndex(comment => comment.id === 823423)
output += "Delete the index: " +JSON.stringify(deleteCommentByIndex);
comments.splice(deleteCommentByIndex, 1)
output += space + "Result:" + space;
// Find the comment with this ID
// delete the comment with the ID of 823423

output += JSON.stringify(comments);

 
document.getElementById('output').innerText = output;
