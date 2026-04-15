const person = { name: "손흥민", age: 30 };

interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: "손흥민", age: 30 };
// const person2: Person = { name: "손흥민" };
// Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
// const person3: Person = { name: "손흥민", age: 30, team: "LA" };
// Object literal may only specify known properties, and 'team' does not exist in type 'Person'.

interface Movie {
  title: string;
  rank: number;
}

const movie1: Movie = { title: "거북이와 두루미", rank: 1 };
const movie2: Movie = { title: "토끼와 거북이", rank: 2 };
