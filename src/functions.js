export function applyStyles() {
  const cardBtns = document.querySelectorAll('.card_main .card_botton');
  cardBtns.forEach((btn, i) => {
    if (i=== 0) {
      btn.style.backgroundColor = 'rgb(255, 255, 255)';
      btn.style.color = 'rgb(0,123,255)';
    } else{
      btn.style.backgroundColor = 'rgb(0,123,255)';
      btn.style.color = 'white';
    }
  });
}