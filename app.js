var firstnum;
var secondnum;
var thirdnum;

function sum(firstnum,secondnum) {
  thirdnum = firstnum + secondnum;
  document.getElementById('par1').textContent = ('The sum of ' + firstnum + ' and ' + secondnum + ' is ' + thirdnum + '.');
  return thirdnum;
}

function multiply(firstnum,secondnum) {
  thirdnum = firstnum * secondnum;
  document.getElementById('par2').textContent = ('The product of ' + firstnum + ' and ' + secondnum + ' is ' + thirdnum + '.');
  return thirdnum;
}

function sumAndMultiply(firstnum,secondnum,thirdnum) {
  var forthnum = sum(sum(firstnum,secondnum),thirdnum);
  var fifthnum = multiply(multiply(firstnum,secondnum),thirdnum);
  var sam = [forthnum,fifthnum];
  document.getElementById('par3').textContent = (firstnum + ' and ' + secondnum + ' and ' + thirdnum + ' sum to ' + sam[0] + '. The numbers ' + firstnum + ' and ' + secondnum + ' and ' + thirdnum + ' have a product of ' + fifthnum + '.');
}

function sumArray(table) {
  var sixthnum = 0;
  for (var i = 0; i < table.length; i++) {
    sixthnum = sixthnum + table[i];
  }
  document.getElementById('par4').textContent = (table + ' was passed in as an array of numbers, and ' + sixthnum + ' is their sum.');
  console.table([table]);
  return sixthnum;
}

function multiplyArray(table) {
  var sixthnum = 0;
  for (var i = 0; i < table.length; i++) {
    sixthnum = sixthnum * table[i];
  }
  document.getElementById('par5').textContent = (table + ' was passed in as an array of numbers, and ' + sixthnum + ' is their product.');
  console.table([table]);
  return sixthnum;
}
