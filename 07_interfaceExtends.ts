interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  major: string;
}

const s: Student = { name: "김가나", age: 5, major: "병아리 털색 감별" };
// const s1: Student = { name: "박다라", age: 10 };
// Property 'major' is missing in type '{ name: string; age: number; }' but required in type 'Student'.
