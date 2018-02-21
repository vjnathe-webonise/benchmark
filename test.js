var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var assert = require('assert');
// add tests 
/*suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
// add listeners 
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async 
.run({ 'async': true });*/

convert = "1234"
suite.add('parseInt', () => {
    assert(parseInt(convert, 10) , 1234)
})
.add('Number(x)', () => {
    assert(Number(convert) , 1234)
})
.add( '~~convert', () => {
    assert((~~convert) , 1234)
})
.add('convert|0', () => {
    assert((convert|0) , 1234)
})
.add('+convert', () => {
    assert((+convert) , 1234)
})
.on('complete', function()  { 
    this.forEach((test) => console.log(`Test: ${test.name}, Operations: ${test.hz}`));
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Slowest is ' + this.filter('slowest').map('name'));
})
.run({async : true}); 
    