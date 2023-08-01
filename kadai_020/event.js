// btnというidを持つHTML要素を取得し定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',()=>{
    // 2秒の待ち時間を設定しtextの変更を実行する
    setTimeout(()=>{
        text.textContent='ボタンをクリックしました';
    },2000);
})