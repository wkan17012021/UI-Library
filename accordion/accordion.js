let accordionList = document.querySelector('.accordion-list');
let accordionCtrl = document.querySelectorAll('.accordion-control');
let accordionPnl = document.querySelector('.accordion-panel');

for (let i = 0; i < accordionCtrl.length; i++) {
    accordionCtrl[i].addEventListener('click', function() {
        // console.log(this.children[1]);
        this.children[1].classList.toggle('open');
    })
}