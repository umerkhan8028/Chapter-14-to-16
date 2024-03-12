// Prompt user to enter a character
var userInput = prompt("Enter a character (number or string):");

// Check the type of input
if (userInput.length === 1) {
  var charCode = userInput.charCodeAt(0);

  if (charCode >= 48 && charCode <= 57) {
    console.log("The given input is a number.");
  } else if (charCode >= 65 && charCode <= 90) {
    console.log("The given input is an uppercase letter.");
  } else if (charCode >= 97 && charCode <= 122) {
    console.log("The given input is a lowercase letter.");
  } else {
    console.log("The given input is not a number, uppercase letter, or lowercase letter.");
  }
} else {
  console.log("Invalid input. Please enter a single character.");
}




// Prompt user to enter the first integer
var firstInteger = parseInt(prompt("Enter the first integer:"));

// Prompt user to enter the second integer
var secondInteger = parseInt(prompt("Enter the second integer:"));

// Check if the entered values are valid integers
if (!isNaN(firstInteger) && !isNaN(secondInteger)) {
  // Compare the integers and display the result
  if (firstInteger > secondInteger) {
    console.log("The larger integer is: " + firstInteger);
  } else if (secondInteger > firstInteger) {
    console.log("The larger integer is: " + secondInteger);
  } else {
    console.log("Both integers are equal.");
  }
} else {
  console.log("Invalid input. Please enter valid integers.");
}

// Prompt user to enter a number
var userNumber = parseFloat(prompt("Enter a number:"));

// Check if the entered value is a valid number
if (!isNaN(userNumber)) {
  // Determine whether the number is positive, negative, or zero
  if (userNumber > 0) {
    console.log("The entered number is positive.");
  } else if (userNumber < 0) {
    console.log("The entered number is negative.");
  } else {
    console.log("The entered number is zero.");
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}


// Prompt user to enter a character
var userChar = prompt("Enter a character (string of length 1):");

// Check if the entered value is a single character
if (userChar.length === 1) {
  // Convert the character to lowercase for case-insensitive comparison
  var charLowerCase = userChar.toLowerCase();

  // Check if the character is a vowel
  var isVowel = /^[aeiou]$/.test(charLowerCase);

  // Display the result
  if (isVowel) {
    console.log("The entered character is a vowel.");
  } else {
    console.log("The entered character is not a vowel.");
  }
} else {
  console.log("Invalid input. Please enter a single character.");
}



// Store correct password in a variable
var correctPassword = "umerkhan";

// Ask user to enter his/her password
var userPassword = prompt("Enter your password:");

// Validate the entered passwords
if (!userPassword) {
  // Check if user has entered a password
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  // Check if both passwords are the same
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}

var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


// Prompt user to enter time in 24-hour clock format
var inputTime = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// Validate the input
if (!isNaN(inputTime) && inputTime >= 0 && inputTime <= 2400) {
  // Implement different cases based on the input time
  if (inputTime >= 0 && inputTime < 1200) {
    console.log("Good morning!");
  } else if (inputTime >= 1200 && inputTime < 1700) {
    console.log("Good afternoon!");
  } else if (inputTime >= 1700 && inputTime < 2100) {
    console.log("Good evening!");
  } else {
    console.log("Good night!");
  }
} else {
  console.log("Invalid input. Please enter a valid time in 24-hour clock format.");
}


// Declare an empty array for future student names using literal notation
var futureStudentNamesLiteral = [];

// Declare an empty array for future student names using object notation
var futureStudentNamesObject = new Array();

// Declare and initialize a strings array
var stringsArray = ["Umer", "Mudassir", "Saad"];

// Declare and initialize a numbers array
var numbersArray = [1, 2, 3, 4, 5];

// Declare and initialize a boolean array
var booleanArray = [true, false, true];

// Declare and initialize a mixed array
var mixedArray = ["Umer", 25, true, "Smith"];

// Declare and initialize an array with education qualifications in Pakistan
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Show the listed qualifications in the browser
document.write("Available Education Qualifications in Pakistan:<br>");
for (var i = 0; i < educationQualifications.length; i++) {
  document.write((i + 1) + ". " + educationQualifications[i] + "<br>");
}

// Arrays to store student names and scores
var studentNames = ["Umer", "Mudassir", "Saad"];
var studentScores = [490, 480, 350]; // Assuming total marks are 500 for each student

// Display scores and percentages
for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / 500) * 100;
  console.log(studentNames[i] + " scored " + studentScores[i] + " out of 500, with a percentage of " + percentage.toFixed(2) + "%");
}


// Initialize an array with color names
var colorArray = ["Red", "Green", "Blue"];

// Display the initial array in the browser
document.write("Initial Array: " + colorArray + "<br><br>");

// a. Add color to the beginning of the array
var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
colorArray.unshift(colorToAddBeginning);
document.write("Array after adding color to the beginning: " + colorArray + "<br><br>");

// b. Add color to the end of the array
var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colorArray.push(colorToAddEnd);
document.write("Array after adding color to the end: " + colorArray + "<br><br>");

// c. Add two more colors to the beginning of the array
colorArray.unshift("Yellow", "Orange");
document.write("Array after adding two more colors to the beginning: " + colorArray + "<br><br>");

// d. Delete the first color in the array
colorArray.shift();
document.write("Array after deleting the first color: " + colorArray + "<br><br>");

// e. Delete the last color in the array
colorArray.pop();
document.write("Array after deleting the last color: " + colorArray + "<br><br>");

// f. Add color to a user-defined position/index
var indexToAdd = prompt("Enter the index at which you want to add a color:");
var colorToAdd = prompt("Enter the color to add:");
colorArray.splice(indexToAdd, 0, colorToAdd);
document.write("Array after adding color at user-defined position: " + colorArray + "<br><br>");

// g. Delete color(s) from user-defined position/index
var indexToDelete = prompt("Enter the index from which you want to delete color(s):");
var numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colorArray.splice(indexToDelete, numberOfColorsToDelete);
document.write("Array after deleting color(s) from user-defined position: " + colorArray + "<br><br>");


// Array to store student scores
var studentScores = [85, 72, 94, 68, 90];

// Display the original array
console.log("Original Array: " + studentScores);

// Sort the array in ascending order
studentScores.sort(function(a, b) {
  return a - b;
});

// Display the sorted array
console.log("Sorted Array (Ascending Order): " + studentScores);

// Initialize an array with city names
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Initialize an empty array for selected cities
var selectedCities = [];

// Copy 3 array elements from cities array to selectedCities array
selectedCities = cities.slice(1, 4); // Assuming you want to copy elements at index 1, 2, and 3

// Display the original and selected cities arrays
console.log("Cities Array: " + cities);
console.log("Selected Cities Array: " + selectedCities);

// Given array
var arr = ["This", "is", "my", "cat"];

// Create a single string using the join method
var resultString = arr.join(" ");

// Display the result string
console.log(resultString);


// Initialize an empty array
var fifoArray = [];

// Add values to the array using push
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");

// Access values in the order they were stored (FIFO)
console.log(fifoArray.shift()); // Output: "First"
console.log(fifoArray.shift()); // Output: "Second"
console.log(fifoArray.shift()); // Output: "Third"


// Initialize an empty array
var reverseArray = [];

// Add values to the array using unshift
reverseArray.unshift("First");
reverseArray.unshift("Second");
reverseArray.unshift("Third");

// Access values in reverse order (LIFO)
console.log(reverseArray.shift()); // Output: "Third"
console.log(reverseArray.shift()); // Output: "Second"
console.log(reverseArray.shift()); // Output: "First"


// Array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Display dropdown/select menu
document.write("<select>");

// Loop through the array to create options
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");
