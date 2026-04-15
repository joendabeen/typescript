const DB = [];
function saveDB(user) {
    const oldDBLength = DB.length;
    DB.push(user);
    console.log(`${user.uname} 저장 완료되었습니다.`);
    if (DB.length > oldDBLength) {
        return Promise.resolve(user);
    }
    else {
        return Promise.reject(new Error("저장에 실패했습니다"));
    }
}
function sendEmail(user) {
    console.log(`${user.email}으로 이메일을 발송했습니다.`);
    return Promise.resolve(user);
}
function getResult(user) {
    return Promise.resolve(`${user.uname}님 등록 성공했습니다.`);
}
function registerByPromise(user) {
    const result = saveDB(user)
        .then(sendEmail)
        .then(getResult)
        .catch((error) => new Error(error));
    return result;
}
const user1 = {
    uname: "김가나",
    email: "gana@gggg.com",
};
const result = registerByPromise(user1);
result.then(console.log);
export {};
