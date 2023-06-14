import { galleryItems } from './gallery-items.js';
// Change code below this line
const galerryEl = document.querySelector(".gallery");
const createGallery = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);
galerryEl.insertAdjacentHTML('beforeend', createGallery.join(''));
galerryEl.addEventListener('click', onClick);
function onClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
 }
    const instance = basicLightbox.create
        (`<img src="${e.target.dataset.source} "width=800", "height=600">`);
    
    instance.show();
    
    function onKeydown(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }

  document.addEventListener('keydown', onKeydown);

  instance.on('beforeclose', () => {
    document.removeEventListener('keydown', onKeydown);
  });
}

 

