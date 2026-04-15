function printMultTable(num: number): void {
  console.log(`${num}`);

  for (let i: number = 1; i <= 9; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }

  console.log("\n");
}

printMultTable(1);
printMultTable(2);
printMultTable(3);
printMultTable(4);
printMultTable(5);
printMultTable(6);
printMultTable(7);
printMultTable(8);
printMultTable(9);
