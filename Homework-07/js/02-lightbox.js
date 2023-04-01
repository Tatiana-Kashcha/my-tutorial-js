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

  const galleryLightBox = new SimpleLightbox('.gallery a');
  galleryLightBox.on('show.simplelightbox', function () {
    // необхідні налаштування з секції JavaScript Options
  });
}

console.log(galleryItems);
