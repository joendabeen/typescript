// length 속성이 있는 타입만 허용
function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

printLength("hello");
printLength([1, 2, 3]);
printLength({ length: 3, name: "김가나" });
// printLength(123);    // error length 속성 없음

function logValue<T extends string | number>(value: T) {
  console.log(value);
}

logValue("hi");
logValue(10);
// logValue(true);  // 에러 발생

interface Person {
  name: string;
  age?: number;
}

function printName<T extends Person>(obj: T) {
  console.log(obj.name);
}

printName({ name: "김가나" });
printName({ name: "김가나", age: 12 });
// printName({ age: 21 });

// map이나 object 관련 type 제한
// T에 존재하는 key만 가능하게 K를 제한
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const user = { name: "김가나", age: 12 };

getProperty(user, "name");
getProperty(user, "age");
// getProperty(user,'job')  // job이라는 키는 존재하지 않음
