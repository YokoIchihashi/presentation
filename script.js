'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 9日目　基礎演習
// 3."tar" ではなく "art" というモールス信号を表示するために、
// 関数 morseCodeArt を宣言してください。
/**
 * @param {string} string - モールス信号に変換する文字 ・・・配列
 * @returns {string} 与えられた文字に対応するモールス信号・・・配列
*/

const morseCode = {
  t:"-", 
  a: ".-",
  r: ".-.",
}

const morseCode2 = [
 ".-",
 ".- .",
 "..",
 "- - .",
 ".-",
 "-",
 "- - -",
 "..-",
 "- - .",
 "- - -",
 "- - ..",
 ".-",
 "..",
 "- -",
 ".-",
 "...",
 "....",
 "..",
 "-",
 ".-",
 "- .- .- -",
 "..- - -",
 "- - - - -",
 "- ..",
 ".-",
 "- .- -",
 "...",
 "- .- .- -",
 "- .- .- -",
 "🦝",
 " a",
 " r",
 " i",
 " g",
 " a",
 " t",
 " o",
 " u",
 " g",
 " o",
 " z",
 " a",
 " i",
 " m",
 " a",
 " s",
 " h",
 " i",
 " t",
 " a",
 " !",
 " 2",
 " 0",
 " d",
 " a",
 " y",
 " s",
 " !",
 " !",
 "🐊",
]


// パターン1
function morseCodeArt(string) {
  let result = "";                            // 空の文字列を準備
  for (const str of string) {                 // 文字列を1文字ずつにばらしてループ
      result += morseCode[str] + " ";         // 空の文字列に代入演算子を使ってモールス信号の値とスペースを追加
  }
  result = result.trimEnd();                  // 最後のスペースを切り取る
  return result;                              // 文字列を返す
}

console.log("＜パターン１＞")
test(morseCodeArt("a"), ".-");
test(morseCodeArt("r"), ".-.");
test(morseCodeArt("t"), "-");
test(morseCodeArt("art"), ".- .-. -");
  
// パターン2
function morseCodeArt(string) {
  const returnArray = [];                 //空の配列を準備
  for (const str of string) {             //文字列を1文字ずつにばらしてループ
      returnArray.push(morseCode[str]);   //.pushを使って空の配列にモールス信号の値を追加
  }
  return returnArray.join(" ");           //最後にスペースを追加して配列としての文字列と返す
}

console.log("＜パターン２＞")
test(morseCodeArt("a"), ".-");
test(morseCodeArt("r"), ".-.");
test(morseCodeArt("t"), "-");
test(morseCodeArt("art"), ".- .-. -");
  
// パターン3・・・パターン2を.split.mapメソッドを使って書いた場合
function morseCodeArt(string) {
  const returnArray = [];                       // 空の配列を準備
  let splitString = string.split("");           //.splitを使って文字列を1文字ずつにばらす
  splitString.map(function (str) {              //.mapを使って↓１行をループ
    return returnArray.push(morseCode[str])     // .pushを使って空の配列にモールス信号の値を追加
  });
  return returnArray;                           //配列としての文字列を返す
}

console.log("＜パターン３＞")
test(morseCodeArt("a"), ".-");
test(morseCodeArt("r"), ".-.");
test(morseCodeArt("t"), "-");
test(morseCodeArt("art"), ".- .-. -");

// // // パターン4
// function morseCodeArt(string) {
//   let splitString = string.split("");
//   let result = "";
//   splitString.map(function (str) {
//     if (result === "") {
//       result += morseCode[str];
//     } else {
//       result += " " + morseCode[str];
//     }
//   });
//   return result;
// }

// console.log("＜パターン４＞")
// test(morseCodeArt("a"), ".-");
// test(morseCodeArt("r"), ".-.");
// test(morseCodeArt("t"), "-");
// test(morseCodeArt("art"), ".- .-. -");

// ＜html表示＞
let i = 0;                                          //カウンターを設定
let addCode = () => {                               //addCodeの定義 ↓の7行を関数addCodeで定義
  let theCode = document.getElementById("thanks");  //htmlファイルのidに"thanks"を取得し、変数theCodeとする
  if (i >= morseCode2.length) {                     //カウンターがモールス信号の長さより大きくなったら
    i = 0;                                          //カウンターリセット
  }
    theCode.append(morseCode2[i]);                  //htmlファイルのid"thanks"にモールス信号を追加していく
  i++;                                              //カウントアップ
};
  window.addEventListener("load", () => {           //特定のイベントが配信されるたびに呼び出される関数
  window.setInterval(addCode, 100);                 //0.1secごとにaddCodeを実行
});

