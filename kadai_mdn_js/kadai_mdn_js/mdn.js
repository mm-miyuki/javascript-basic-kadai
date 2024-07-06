const today = new Date();

//年を取得する
const year = today.getFullYear();

//月を取得する
const month = today.getMonth() +1;

//日付の取得
const  day = today.getDate();

//今日の年、月、日を出力する
console.log(year + `年` + month + `月` + day + `日`);