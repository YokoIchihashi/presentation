'use strict'
// 1行目に記載している 'use strict' は削除しないでください

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

  
// ＜html表示＞
let i = 0;                                          // カウンターを設定
let addCode = () => {                               // addCodeの定義 ↓の7行を関数addCodeで定義
  let theCode = document.getElementById("thanks");  // htmlファイルのidの"thanks"を取得し、変数theCodeとする
  if (i >= morseCode2.length) {                     // カウンターがモールス信号の長さより大きくなったら
    i = 0;                                          // カウンターリセット
  }
    theCode.append(morseCode2[i]);                  // htmlファイルのid"thanks"にモールス信号を追加していく
  i++;                                              // カウントアップ
};
  window.addEventListener("load", () => {           // 100msecのイベントを登録
  window.setInterval(addCode, 100);                 // 100msecごとにaddCodeを実行
});
