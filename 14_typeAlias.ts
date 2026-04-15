// 특정 타입에 의미론적 별칭을 붙임 중복 불가
type PersonName = string;

let name: string = "신호탄";
let name1: PersonName = "국기봉";

type Person = {
  uname: string;
  email: string;
}; // interface와 조금 유사 뒤에 차이 나옴

function printAge(num: string | number) {
  console.log(num);
}

type Age = string | number;
function printAge1(num: Age) {
  console.log(num);
}
