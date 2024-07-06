//btnのHTML要素を取得し、定数に代入する
const btn = document.getElementById(`btn`);

//textのHTML要素を取得し、定数に代入する
const text = document.getElementById(`text`);

btn.addEventListener(`click`,() => {
 
text.textContent = `ボタンをクリックしました` ; 
  console.log(text);
});

