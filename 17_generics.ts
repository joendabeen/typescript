function getNumber(value: number): number {
  return value;
}
function getString(value: string): string {
  return value;
}

// 제네릭은 호출할 때 타입 지정
function getSimple<T>(value: T): T {
  return value;
}

const result = getSimple<number>(1);
console.log(result);
const result1 = getSimple<string>("아가너다거ㅏ너라널다");
console.log(result1);
const result2 = getSimple(true);
console.log(result2);

function getBoolean(bool: boolean) {
  return bool;
}

// function getArray(arr: string[]) {
function getArray(arr: Array<string>) {
  return arr;
}

function getObject(obj: { name: string }) {
  return obj;
}

function getValue<T>(value: T): T {
  return value;
}

getValue(true);
getValue<string[]>(["1"]);
getValue({ name: "김가나" });
