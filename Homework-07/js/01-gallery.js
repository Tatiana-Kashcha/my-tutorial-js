import { galleryItems } from './gallery-items.js';

// Шаблон розмітки галереї
{
  /* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
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
      data-source=${original}
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

  const ImgGalleryEl = evt.target.classList.contains('gallery__image');

  if (!ImgGalleryEl) {
    return;
  }

  const imgElsource = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `
      <img src='${imgElsource}'>
  `,
    {
      onShow: instance => {
        onOpenInstance();

        if (onEscKeyDown(evt)) {
          instance.close();
        }
        console.log(onEscKeyDown(evt));
      },
    }
  );

  instance.show();
  console.log(imgElsource); //собі для перевірки
}

// console.log(galleryItemsEl); //собі для перевірки
console.log(galleryItems);

function onOpenInstance() {
  window.addEventListener('keydown', onEscKeyDown);
}

function onCloseInstance() {
  window.removeEventListener('keydown', onEscKeyDown);
}

function onEscKeyDown(evt) {
  // console.log(evt); //собі для перевірки
  console.log(evt.code); //собі для перевірки
  const isEscKey = evt.code === 'Escape';

  if (isEscKey) {
    onCloseInstance();
  }
  console.log(isEscKey); //собі для перевірки
  return isEscKey;
}
