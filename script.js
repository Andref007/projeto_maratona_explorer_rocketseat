

const btn = document.querySelector('.btn')
const container2 = document.querySelector('.container2')

btn.onclick = function() {
  this.classList.toggle('active')
  container2.classList.toggle('active')

}