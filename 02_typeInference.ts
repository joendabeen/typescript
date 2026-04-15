let name = "손흥민";
let age = 30;
let isOn = true;
const person1 = { name: "손흥민", age: 10 };
const bts = ["진", "슈가", "제이홉"];
console.log(typeof name);
console.log(typeof age);
console.log(typeof isOn);
console.log(typeof person1);
console.log(typeof bts);
// name = 1; // 이하 타입에러
// age = "1";
// person1 = { name: "RM" };

function sayHello(name: string): string {
  return `Hello ${name}`;
}
let greeting = sayHello("RM");
function sayHello1(name: string) {
  return `Hello ${name}`;
}
function sayHello2(name: string) {
  console.log(`Hello ${name}`);
  return;
}
function sayHello3(name: string) {
  console.log(`Hello ${name}`);
}
