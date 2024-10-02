// btnというidを、定数btnに
const Btn = document.getElementById('btn');

// DOM上のid=text を取得し変数：Textに代入
const Text = document.getElementById('text');

//Btnをクリックした時に
Btn.addEventListener('click', () => {
    setTimeout(() => {

 //id=textが、このテキストに差し代わる
 Text.textContent = 'ボタンをクリックしました';
  },2000);
   
   
});
