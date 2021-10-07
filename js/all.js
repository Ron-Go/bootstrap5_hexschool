var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});


// 表單focus效果
// --------------------------------------------------------------------------------

var inputMail = document.querySelector('.jsFormMail');

// 觸發事件監聽為keyup鍵盤按鍵釋放
inputMail.addEventListener('keyup',function (){
  let inputMailAlert = document.querySelector('.jsFormMailAlert');
  // 從電子信箱輸入欄位取值
  let inputMailValue = inputMail.value;
  // 電子信箱輸入欄位取值，比對字串‘＠’ && '.com'
  if (inputMailValue.includes("@") && inputMailValue.includes(".com")) {
    // 判斷式為true，class選擇器『增加』d-none，讓提示文字隱藏
    inputMailAlert.classList.add("d-none");
  } else {
    // 判斷式為false，class選擇器『移除』d-none，讓提示文字出現
    inputMailAlert.classList.remove("d-none");
  }
})
