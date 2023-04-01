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
      alt="${description}"
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

  //   console.log(evt.target); //собі для перевірки
  //   const imgElcaptions = evt.target.getAttribute('alt'); //не знадобилося
  //   console.log(imgElcaptions); //собі для перевірки

  const galleryLightBox = new SimpleLightbox('.gallery a', {
    // captions: true, // Default значення
    // captionSelector: 'img', // Default значення
    // captionType: 'attr', // Default значення
    // captionPosition: 'bottom',// Default значення
    captionsData: 'alt',
    captionDelay: 250,
  });
  //   galleryLightBox.on('show.simplelightbox', function () {}); //не знадобилося
}

console.log(galleryItems);
