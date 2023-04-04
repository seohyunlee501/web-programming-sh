//변수, 상수
let myVariable = 123;
const myConstant = "Hell0, world!";

console.log(myVariable);
console.log(myConstant);

//데이터 타입
let myNumber = 123;
let myyString = "hello, world";
let myBoolean = false;
let myNull = null;
let myUndefined = undefined;
let myObject = { name: "John", age: 30 };
let mySymbol = Symbol("mySymbol");

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof myObject);
console.log(typeof mySymbol);

//연산자

//조건문
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

//switch문
let fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("apple");
    break;
  case "banana":
    console.log("banana");
    break;
  case "0range":
    console.log("orange");
    break;
  default:
    console.log("unknown");
}

//for문

//while문

//배열 순회
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.forEach(function (element) {
  console.log(element);
});

//함수
function add(a, b) {
  return a + b;
}

let result = add(1, 2);
console.log(result);

//객체
let myObject2 = {
  name: "John",
  age: 30,
  isMarried: false,
};

console.log(myObject2.name);

//배열
let myArray = ["apple", "banana", "orange"];
console.log(myArray[0]);
