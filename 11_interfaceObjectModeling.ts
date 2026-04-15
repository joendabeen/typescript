interface Maker {
  name: string;
  country: string;
}

interface Car {
  model: string;
  maker: Maker; // 인터페이스를 데이터 타입으로
}
