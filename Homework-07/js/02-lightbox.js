import { galleryItems } from './gallery-items.js';
// Change code below this line

// Шаблон розмітки галереї 02
{
  /* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
  </a>
</li>; */
}

const galleryItemsEl = document.querySelector('.gallery');
const makeGalleryItems = itemsEl => {
  const { preview, original, description } = itemsEl;
  return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>
</li>`;
};
const itemsImages = galleryItems.map(makeGalleryItems).join('');
galleryItemsEl.insertAdjacentHTML('beforeend', itemsImages);

galleryItemsEl.addEventListener('click', onImgGalleryClick);

function onImgGalleryClick(evt) {
  evt.preventDefault();

  console.log(evt); //собі для перевірки

  const ImgGalleryEl = evt.target.classList.contains('gallery__image');

  if (!ImgGalleryEl) {
    return;
  }

  const imgElsource = evt.target.dataset.source;
  console.log(imgElsource); //собі для перевірки

  const onEscKeyDown = event => {
    console.log(event); //собі для перевірки
    console.log(event.code); //собі для перевірки
    const isEscKey = event.code === 'Escape';

    if (isEscKey) {
      instance.close();
      window.removeEventListener('keydown', onEscKeyDown);
    }
    console.log(isEscKey); //собі для перевірки
    return isEscKey;
  };

  const instance = basicLightbox.create(`<img src='${imgElsource}'>`, {
    onShow: () => window.addEventListener('keydown', onEscKeyDown),
  });

  instance.show();
}

// console.log(galleryItemsEl); //собі для перевірки
console.log(galleryItems);
