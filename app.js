// variables
var message = "Hello, TypeScript!";
var username = "John";
var ages = 30;
// condition
if (ages < 30) {
    console.log("your age is less than 30");
}
// array
var names = ["xavier", "smith", "donald"];
console.log(names);
// tuple
var students;
students = ["John", 30, true];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
var surname = students[0], age = students[1], isMale = students[2];
// console.log(surname, age, isMale);
// enums
var colors = {
    red: "one and that is red",
    green: 2,
    blue: 3
};
var bgColor = colors.red;
var fgColor = colors.green;
// console.log(bgColor);
// console.log(fgColor);
// any
var randomValue = 2; // Can be any type
console.log(randomValue);
