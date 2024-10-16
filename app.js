// chapter :(38-42) (FUNCTIONS, SWITCH

//     STATEMENTS, WHILE... DO-
//     WHILE LOOPS)
// Q1
// function power(a, b) {
//     return Math.pow(a, b);
// }

// console.log(power(2, 3));

// Q2

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isLeapYear(2024));


// Q3
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     var S = calculateS(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// console.log(calculateArea(3, 4, 5));
// Q4
// function average(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }

// function percentage(totalMarks, maxMarks) {
//     return (totalMarks / maxMarks) * 100;
// }

// function mainFunction(marks1, marks2, marks3) {
//     var avg = average(marks1, marks2, marks3);
//     var totalMarks = marks1 + marks2 + marks3;
//     var percent = percentage(totalMarks, 300); 
//     console.log("Average:", avg);
//     console.log("Percentage:", percent + "%");
// }

// mainFunction(85, 90, 80); 

// Q5
// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(customIndexOf("hello", "e"));

// Q6
// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }

// console.log(removeVowels("This is a test sentence.")); 


// Q7


// Q8
// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }

// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }

// function mainDistanceConversion(km) {
//     console.log("Meters:", toMeters(km));
//     console.log("Feet:", toFeet(km));
//     console.log("Inches:", toInches(km));
//     console.log("Centimeters:", toCentimeters(km));
// }

// mainDistanceConversion(5); 
// Q9
// function calculateOvertime(hoursWorked) {
//     if (hoursWorked > 40) {
//         return (hoursWorked - 40) * 12;
//     } else {
//         return 0;
//     }
// }

// console.log(calculateOvertime(45)); 


// Q10
// function distributionAmmount(amount){
// var hundred =Math.floor(amount/100);
// amount = amount%100
// var fifty = Math.floor(amount/50);
// amount = amount%50
// var ten = Math.floor(amount/10);
// amount = amount%10
// return `Hundreds:${hundred}, Fifties:${fifty}, Tens:${ten}`;

// }
// console.log(distributionAmmount(1230));

// Chapter :(43-48) (EVENTS)
// Q1
// function clicked(message){
//     alert("Onclick Call...")

// }
// clicked()
// Q2
// function showAlert(mobileName) {
//     alert(`Thanks for purchesing a phone from us.... \n ${mobileName}` );
// }
// function devareRow(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }
// Q5