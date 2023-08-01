// btnというidを持つHTML要素を取得し定数に代入する
const btn = document.getElementById('btn');

// btnというidを持つHTML要素を取得し定数に代入する
const text = document.getElementById('text');


// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',()=>{
    // 2秒の待ち時間を設定しtextの変更を実行する
    setTimeout(()=>{
    
    //textの設定とクリックされたときにイベント処理を実行する
    text.textContent=('ボタンをクリックしました');

    },2000);
})


