const imgs = document.querySelectorAll('.img-container img')
const popupImgWrapper = document.querySelector('.popup-img')
const popupImg = document.querySelector('.popup-img img')
const closeBtn = document.querySelector('.popup-img span');


imgs.forEach(image => {
  if (!image) {
    return;
  }

  image.addEventListener('click', () => {
    popupImg.src = image.getAttribute('src');
    popupImgWrapper.style.display = 'block'
  })
  
})

closeBtn.addEventListener('click', () => {
    popupImgWrapper.style.display = 'none'
});