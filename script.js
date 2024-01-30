var today = new Date();
var day = today.getDate();
console.log('Dagens dato:', day);

var year = today.getFullYear();
var month = today.getMonth() + 1;
console.log('Year: ' + year);
console.log('Month: ' + month);

localStorage.setItem('test', 'test');
var testValue = localStorage.getItem('test');
console.log('LocalStorage-test:', testValue);

console.log('Koden køres.');
// ... resten af din kode ...
