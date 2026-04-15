interface User {
  uname: string;
  email: string;
}

const DB: User[] = [];

function saveDB(user: User): Promise<User> {
  const oldDBLength: number = DB.length;
  DB.push(user);
  console.log(`${user.uname} 저장 완료되었습니다.`);

  if (DB.length > oldDBLength) {
    return Promise.resolve(user);
  } else {
    return Promise.reject(new Error("저장에 실패했습니다"));
  }
}

function sendEmail(user: User): Promise<User> {
  console.log(`${user.email}으로 이메일을 발송했습니다.`);
  return Promise.resolve(user);
}

function getResult(user: User): Promise<string> {
  return Promise.resolve(`${user.uname}님 등록 성공했습니다.`);
}

function registerByPromise(user: User): Promise<string | Error> {
  const result: Promise<string | Error> = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error));
  return result;
}

const user1: User = {
  uname: "김가나",
  email: "gana@gggg.com",
};
const result: Promise<string | Error> = registerByPromise(user1);
result.then(console.log);
