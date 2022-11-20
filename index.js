// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function callback0(value) {
  console.log('callback0 input value', value);
  return value + ' and bar ';
}

function callback1(value) {
  console.log('callback1 input value', value);

  return value + ' and also baz ';
}

function callback2(value) {
  console.log('callback2 input value', value);

  return value + ' and also foo';
}
// callback hell
let result = callback2(callback1(callback0('value1')));

console.log(result);

// eager evaluation
// always return whole value - as entire array, entire object etc;
Promise.resolve(true)
  .then((d) => {
    console.log('first then', d);
    // throw new Error('purposly failed');
    return false;
  })
  .then((d) => {
    console.log('second then', d);
    return d;
  })
  .then((d) => {
    return d === true ? 1 : -1;
  })
  .then(console.log)
  .catch((e) => {
    console.error('Hurrey error cathced successfully', e);
  });
