'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ＜html表示＞
let i = 0;
let addCode = () => {
  let theCode = document.getElementById("thanks");
  if (i >= morseCode2.length) {
    i = 0;
  }
    theCode.append(morseCode2[i]);
  i++;
};
  window.addEventListener("load", () => {
  window.setInterval(addCode, 100);
});

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

  

