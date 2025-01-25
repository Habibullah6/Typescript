// variables

let message : string = "Hello, TypeScript!";
let username: string = "John";
let ages: number = 30;

// condition
if(ages < 30) {
    // console.log("your age is less than 30")
}

// array

let names: string[] = ["xavier", "smith", "donald"];

// console.log(names);


// tuple
let students: [string, number, boolean];

students = ["John", 30, true];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

let [surname, age, isMale] = students;

// console.log(surname, age, isMale);

// enums

let colors = { 
    red: "one and that is red",
    green: 2,
    blue: 3
}

let bgColor = colors.red;
let fgColor = colors.green;
// console.log(bgColor);
// console.log(fgColor);

// any
let randomValue: any = 2; // Can be any type


// console.log(randomValue)