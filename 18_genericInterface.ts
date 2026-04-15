interface Box<T, U> {
  value: T;
  width: U;
}

const numberBox: Box<number, number> = { value: 10, width: 20 };
const stringBox: Box<string, number> = { value: "apfjd", width: 58 };

interface ApiResponse<T> {
  data: T;
  status: number;
}

const res: ApiResponse<string> = {
  data: "success",
  status: 200,
};

interface List<T> {
  items: T[];
}
