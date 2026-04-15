function add(num1, num2) {
    return num1 + num2;
}
const result0 = add(5, 4); // 자동으로 상수 result의 타입이 number가 됨
// const result1 = add("1", "2");
// const result2: string = add(4, 5);
// const result3: number = add(4);
function sayHello(name) {
    return `Hello ${name}`;
}
let greeting1 = sayHello("RM");
console.log(greeting1);
function sayHi(name) {
    console.log(`Hi ${name}`);
}
const hi = sayHi("손흥민");
console.log(hi);
function greeting(name, callback) {
    return callback(name);
}
const result = greeting("손흥민", sayHello);
const result1 = greeting("이강인", (name) => `Hello ${name}`);
const result2 = greeting("민민민", function (name) {
    return `민민민${name}`;
});
console.log(result, result1, result2);
export {};
