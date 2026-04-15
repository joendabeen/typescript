// 같은 이름으로 interface를 정의하면 병합된다
interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Person {
  name: string;
  age: number;
}
