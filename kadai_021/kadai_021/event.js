//btnのHTML要素を取得し、定数に代入する
const btn = document.getElementById(`btn`);

//textのHTML要素を取得し、定数に代入する
const text = document.getElementById(`text`);

//ボタンをクリックした２秒後に文字を書き換える
 function handleClick() {
setTimeout(() => {
 text.innerText = `ボタンをクリックしました`;
  console.log(`ボタンをクリックしました`);
}, 2000);
}

//ボタンにクリックイベントリスナーを追加する
btn.addEventListener(`click`, handleClick);



