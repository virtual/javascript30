const cats = [{ name: 'Trix', age: 11 }, { name: 'Lila', age: 16 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}


// Regular
console.log("Cats mew")

// Interpolated
console.log("%s cats mew", 'blue')

// Styled
console.log("%cpink cats mew", 'color: lightpink')

// warning!
console.warn('warning: cats incoming')

// Error :|
console.error('error: cats missing')

// Info
console.info('info: cats came back')

// Testing
const h1 = document.querySelectorAll('h1');
console.assert(h1 != null, 'H1 does not exist');
const h2 = document.querySelector('h2');
console.assert(h2 != null, 'H2 does not exist');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(h1);
console.dir(h1);

// Grouping together 
cats.forEach(cat => {
  // can also used .group for uncollapsed
  console.groupCollapsed(`${cat.name}`);
  console.log(`This is ${cat.name}`);
  console.log(`${cat.name} is ${cat.age} years old`);
  console.log(`${cat.name} is ${cat.age * 7} cat years old`);
  console.groupEnd(`${cat.name}`);
});


// counting
console.count('mew')
console.count('mew')
console.count('arf')
console.count('arf')
console.count('mew')

// timing 
console.time('fetching data');
    fetch('https://api.github.com/users/virtual')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

//table
console.table(cats);