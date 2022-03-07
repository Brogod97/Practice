const answerButton = document.querySelector('.btn')

answerButton.addEventListener('click', function () {
  if (Math.random() < 0.5) {
    alert('지금 당장 해')
  } else {
    alert('절대 안돼')
  }
})
