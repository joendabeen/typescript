function getNumber(value) {
    return value;
}
function getString(value) {
    return value;
}
// 제네릭은 호출할 때 타입 지정
function getSimple(value) {
    return value;
}
const result = getSimple(1);
console.log(result);
const result1 = getSimple("아가너다거ㅏ너라널다");
console.log(result1);
const result2 = getSimple(true);
console.log(result2);
function getBoolean(bool) {
    return bool;
}
// function getArray(arr: string[]) {
function getArray(arr) {
    return arr;
}
function getObject(obj) {
    return obj;
}
function getValue(value) {
    return value;
}
getValue(true);
getValue(["1"]);
getValue({ name: "김가나" });
export {};
