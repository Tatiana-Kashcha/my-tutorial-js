// links

// links
// https://babeljs.io/
// https://w3schoolsua.github.io/git/index.html

// https://youtu.be/wFY5HVuQBgw

// import simpleLightbox from 'simplelightbox';
// import * as data from './02-video';
// import "simplelightbox/dist/simple-lightbox.min.css";
// import * as data from './02-video';

// const test = 1;
// const value = 10;
// console.log(value);

// function sum(a, b) {
//     return a - b;
// }

// console.log(data.add(5,5));

// import { a } from './02-video';
// import b from './02-video';

// console.log(a);
// console.log(b);

// console.log(data);

//-----------01 gallery-------
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Шаблон розмітки галереї
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

const galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
