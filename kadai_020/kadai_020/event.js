//btnのHTML要素を取得し、定数に代入する
const btn = document.getElementById(`btn`);

//textのHTML要素を取得し、定数に代入する
const text = document.getElementById(`text`);

btn.addEventListener(`click`,() => {
  //li要素を追加する
  const childlist = document.createElement(`li`) 
  //作成したli要素にテキストを追加
  childlist.textContent =`ボタンをクリックしました`;

  console.log(text);
});
 
