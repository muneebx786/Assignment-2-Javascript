//************************Chapter 21 (Changing Case)*********************** */

var userInput = "karachi"
var allLower = userInput.toLowerCase();

x = userInput.toLowerCase();

y = userInput.toUpperCase();

var newVariable = userInput.toLowerCase();

var newArrayElement = userInput.toLowerCase();

alert(userInput.toUpperCase());

var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();


//************************Chapter 22 - 25 (Strings) ********************** */

var sameWords = "captain";
var slicedWord = sameWords.slice(2, 4);

console.log (sameWords , slicedWord);

var str = "example";
var length = str.length;

console.log(str , length)

var animal = "elephant";
var seg = animal.slice(2, 6);

console.log(animal ,seg)

var str = "example";
var count = str.length;

console.log(str , count)

var str = "example";
var length = str.length;
var slicedStr = str.slice(1, length - 3);

console.log(str , count , slicedStr)

var text = "To be or not to be.";
var indx = text.indexOf("be");

console.log(text , indx)

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

console.log(text , indx)

var text = "To go or not to go.";
var indx = text.lastIndexOf("go");

console.log(text , indx)

var indexNum = 5;
if (str.charAt(indexNum)) {

}

var str = "abcde";
var character = str.charAt(2);

var text = "This is a sample text.";
var cha = text.charAt(9);

console.log(str , character , text , cha)

var str = "example";
var x = str.charAt(str.length - 1);


var input = "example";
var cha = input.charAt(4);

console.log (str , x , input , cha)

var str = "example";
if (str.charAt(2) === "a") {
}

var str = "example";
var arr = [];

var str = "I have 1 apple and 1 banana.";
var newStr = str.replace("1", "one");

console.log(str , newStr , arr)

var y = x.replace(/a/g, "z");

console.log(y)

//*************************Chapter 26 (Rounding Numbers)****************** */

var origNum = 3.7;
var roundNum = Math.round(origNum);

var origNum = 3.2;
var roundNum = Math.ceil(origNum);

var origNum = 3.9;
var roundNum = Math.floor(origNum);

var origNum = 3.4;
var roundNum = Math.round(origNum);

var num = 0.5;
var roundedNum = Math.floor(num);

console.log(origNum , roundNum)

//********************************Chapter 27 (Random Numbers)************** */

var randomNumber = Math.random();  
var numberInRange = Math.floor(randomNumber * 50) + 1; 

var randomNum = Math.random();  

var diceRoll = Math.floor(Math.random() * 6) + 1;  

var coinToss = Math.random() < 0.5 ? "Head" : "Tail"; 

console.log(randomNumber , numberInRange , randomNum , diceRoll , coinToss )

/*************************Chapter 28, 29 (Converting Strings)************* */

var str = "123";
var intValue = parseInt(str);

var num = 42;
var strValue = num.toString();

var decimalStr = "3.14";
var intValue = parseInt(decimalStr);

console.log(str , intValue , decimalStr , intValue)

//************************Chapter 30 (Controlling the length of decimals)********* */

var num = 3.14159265359;
var newNum = num.toFixed(4).toString();

var num = 3.789;
num = Number(num.toFixed(2).toString());

if (num.toFixed(2).toString().length > 4) {
   
  }

  var num = 3.14159265359;
var roundedNum = num.toFixed(2).toString();
alert(roundedNum);

console.log(num , newNum , roundedNum)

/**********************Chapter 31 - 34 (Date & Time)*********************** */

var dObj = new Date();
var d = new Date();

var dStr = d.toString();
var d = new Date();

console.log(dStr , dObj)

var day = d.getDay();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[day]);

var d = new Date();

var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var milliseconds = d.getMilliseconds();
var later = new Date(2020, 11, 31);
var specificDate = new Date(1992, 1, 2);
var referenceDate = new Date(1980, 0, 1);
var elapsedMilliseconds = d.getTime() - referenceDate.getTime();

console.log (d)
console.log (new Date)

alert(elapsedMilliseconds);
function changeMonthToJanuary(date) {
    date.setMonth(0);
    return date;
  }

  function changeMinutesToSpecificValue(date) {
    var specificMinutes = prompt("Enter the specific minutes:");
    date.setMinutes(specificMinutes);
    return date;
  }

  function addHoursToTime(date, hours) {
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    return date;
  }

  function calculateAge(birthDate) {
    var now = new Date();
    var diff = now - birthDate;
    var ageDate = new Date(diff);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age;
  }
  console.log(calculateAge , changeMinutesToSpecificValue , addHoursToTime , alert)

  /*********************Chapter 35 - 37 (Functions)*********************** */

  function displayAlert() {
    
  }
  function askName() {
    var userName = prompt("Enter name");
  }
  function callTwoFunctions() {
    function1();
    function2();
  }
  
  function displayAndAlertName() {
    var name = prompt("Enter name");
    alert(name);
  }
  displayAndAlertName(); 

  function concat(a, b, c) {
    
  }
  
  function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
  }

  function multiplyNumbers(num1, num2, num3) {
    var result = num1 * num2 * num3;
    return result;
  }
 
  function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
  }
  
  function calculateSum(num1, num2) {
    var sum = num1 + num2;
    return sum;
  }
  
  function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
  }
 
//   var result = functionName();

  function countLetters(word) {
    var letterCounts = {};
    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      if (letterCounts[letter]) {
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
    return letterCounts;
  }
 
  function setYear(date, year) {
    date.setFullYear(year);
  }
  
  function calculateAge(dateOfBirth) {
    var now = new Date();
    var diff = now - dateOfBirth;
    var ageDate = new Date(diff);
    var age = Math.absageDate.getUTCFullYear()
  
  }
  
/******************Chapter 38 (Local vs. Global Variables)*********************** */

function calculateSum(num1, num2) {
    var result = num1 + num2; 
    console.log(result); 
}
  var globalVariable = 10; 

function accessGlobalVariable() {
  console.log(globalVariable); 
}

accessGlobalVariable();
  
/******************Chapter 39, 40 (Switch Statements)*********************** */

var fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple.");
    break;
  case "banana":
    console.log("It's a banana.");
    break;
  case "orange":
    console.log("It's an orange.");
    break;
  default:
    console.log("It's an unknown fruit.");
    break;
}

var cityName = prompt("Enter a city name:");

switch (cityName) {
  case "London":
    alert("You entered London!");
    break;
  case "Paris":
    alert("You entered Paris!");
    break;
  case "Tokyo":
    alert("You entered Tokyo!");
    break;
  default:
    alert("City not recognized.");
    break;
}
