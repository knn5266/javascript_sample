window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const val = document.querySelector('#input').value;

    // 変数の初期化
    let len = val.length; // 文字列の長さを得る
    const max = 10;
    let res = '';

    // 文字数によって分岐
    if (len == 0) {
      res = '文字数が０です';
    }

    document.querySelector('#output').innerHTML = res;
  });
});
