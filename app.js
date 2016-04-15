var firstnum;
var secondnum;
var thirdnum;

function sum(firstnum,secondnum) {
  thirdnum = firstnum + secondnum;
  // console.log('The sum of ' + firstnum + ' and ' + secondnum + ' is ' + thirdnum + '.');
  return thirdnum;
}

function multiply(firstnum,secondnum) {
  forthnum = firstnum * secondnum;
  // console.log('The product of ' + firstnum + ' and ' + secondnum + ' is ' + thirdnum + '.');
  return forthnum;
}

function sumAndMultiply(firstnum,secondnum,thirdnum) {
  var forthnum = sum(sum(firstnum,secondnum),thirdnum);
  var fifthnum = multiply(multiply(firstnum,secondnum),thirdnum);
  var sam = [forthnum,fifthnum];
  console.log(firstnum + ' and ' + secondnum + ' and ' + thirdnum + ' sum to ' + sam[0] + '.');
  console.log('The numbers ' + firstnum + ' and ' + secondnum + ' and ' + thirdnum + ' have a product of ' + fifthnum + '.');
}

function sumArray(table) {
  var sixthnum = 0;
  for (var i = 0; i < table.length; i++) {
    sixthnum = sixthnum + table[i];
  }
  console.log(table + ' was passed in as an array of numbers, and ' + sixthnum + ' is their sum.');
  console.table([table]);
  return sixthnum;
}
