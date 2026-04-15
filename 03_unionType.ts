let num: number | string = 10;
num = "10";
console.log(typeof num);

function getAge(age: number | string): string {
  return "저의 나이는" + age;
}

console.log(getAge(20));
console.log(getAge("20"));

let anyType: number | string | boolean | number[] = [1, 2, 3, 4, 5];
