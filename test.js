var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var assert = require('assert');
var lodash = require('lodash');
var underscore = require('underscore');

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

/*convert = "1234"
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
.run({async : true});*/ 
    
var arr = [1,2,3,4,5,6,7,8,9,10];
suite.add('lodash.each', () => {
    lodash.each(arr, (a) => a);
})
.add('underscore.each', () => {
    underscore.each(arr, (a) => a);
})
.add( 'forEach', () => {
    arr.forEach((a) => a);
})
.on('complete', function()  { 
    this.forEach((test) => console.log(`Test: ${test.name}, Operations: ${test.hz}`));
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Slowest is ' + this.filter('slowest').map('name'));
})
.run({async : true});

var suite1 = new Benchmark.Suite;
suite1.add('lodash.map', () => {
    lodash.map(arr, (a) => a);
})
.add('underscore.map', () => {
    underscore.map(arr, (a) => a);
})
.add( 'map', () => {
    arr.map((a) => a);
})
.on('complete', function()  { 
    this.forEach((test) => console.log(`Test: ${test.name}, Operations: ${test.hz}`));
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Slowest is ' + this.filter('slowest').map('name'));
})
.run({async : true});