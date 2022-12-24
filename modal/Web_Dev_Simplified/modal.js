const openModalBtn = document.querySelectorAll('[data-modal-target]'); // use the data attr to save to the variable, not the css class (SOC)
const closeModalBtn = document.querySelectorAll('[data-close-button]');

console.log(openModalBtn);

const openModal = overlayElement => {
    // console.log(overlayElement);
    if (!overlayElement) {
        return new Error
    }

    overlayElement.forEach(element => {
        element.classList.toggle('active');
});
}

const closeOverlay = overlayElement => {
    console.log('to access properties, iterate over list: ' + overlayElement);
    if (!overlayElement) {
        return new Error;
    }
    overlayElement.forEach(element => {
        element.classList.remove('active');
});
}

openModalBtn.forEach(button => {
    button.addEventListener('click', function handleClick() {
        button.nextElementSibling.classList.toggle('active');
        const overlay = document.querySelectorAll('#overlay');
        openModal(overlay);
    });
});

closeModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Accessing the parent element to closeModalBtn with an id of modal: ' + button.closest('#modal'));
        button.closest('#modal').classList.toggle('active');
        const overlay = document.querySelectorAll('#overlay');
        console.log('grab the overlay element when the x button is clicked: ' + overlay);

        closeOverlay(overlay);
    });
});
