const tabList = document.getElementById('#tab-list');
const panels = document.querySelectorAll('.tab-panel');

console.log(tabList);

tabList.addEventListener('click', e => {
    // check if the tab was clicked. If so, access that tab list item and save a reference to that item in targetPanel variable based on its data attribute data-grab.
    if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.grab);
        panels.forEach(panel => {
            // for each panel element in panels variable (FYI, querySelectorAll we can use this HOF on) if that element id matches the data-grab attr in targetPanel, then add the active class.
            if (panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
    });