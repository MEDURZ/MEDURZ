let arrow = document.querySelector('#arrow');
let sum = document.querySelector('.chapter-sum');
let chapter = document.querySelectorAll('.chapter-pointer');

arrow.onclick = () => {
    arrow.classList.toggle('down')
    sum.classList.toggle('active')
}
chapter.forEach(link => {
    link.onclick = () => {
        sum.classList.remove('active');
        arrow.classList.remove('down');
}})