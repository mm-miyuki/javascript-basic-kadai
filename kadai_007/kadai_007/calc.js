num = 15;

//変数(num)が3と５の倍数の場合、`３と5の倍数です`と出力
if ((num % 3) === 0 && (num % 5) === 0) {
  console.log(`3と5の倍数です`)
}

//変数(num)が3の倍数の場合、`3の倍数です`と出力
else if((num % 3)=== 0)  {
 console.log(`3の倍数です`)
}

//変数(num)が5の倍数の場合、‘5の倍数です‘と出力
else if((num % 5) === 0) {
  console.log(`5の倍数です`)
}

//それ以外の時、変数(num)を出力
else {
  console.log(num);
}

