import { galleryItems } from './gallery-items.js';

// Шаблон розмітки галереї 01
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
    }
    console.log(isEscKey); //собі для перевірки
    return isEscKey;
  };

  const instance = basicLightbox.create(`<img src='${imgElsource}'>`, {
    onShow: () => window.addEventListener('keydown', onEscKeyDown),
    onClose: () => window.removeEventListener('keydown', onEscKeyDown),
  });

  instance.show();
  const elem = instance.element(); //собі для перевірки - це === (imgElsource)
  console.log(elem); //собі для перевірки
}

// console.log(galleryItemsEl); //собі для перевірки
console.log(galleryItems);

//-----розбиття на функції-- не працює((((--------

// const itemsImages = galleryItems.map(makeGalleryItems).join('');
// galleryItemsEl.insertAdjacentHTML('beforeend', itemsImages);

// galleryItemsEl.addEventListener('click', onImgGalleryClick);

// function onImgGalleryClick(evt) {
//   evt.preventDefault();
//   const ImgGalleryEl = evt.target.classList.contains('gallery__image');

//   if (!ImgGalleryEl) {
//     return;
//   }

//   const imgElsource = evt.target.dataset.source;

//   const instance = basicLightbox.create(
//     `
//       <img src='${imgElsource}'>
//   `,
//     {
//       onShow: instance => {
//         onOpenInstance();

//         // if (isEscKey) {
//         //   instance.close();
//         // }
//       },
//     }
//   );
//   instance.show();
// }
// console.log(galleryItems);

// function onOpenInstance() {
//   window.addEventListener('keydown', onEscKeyDown);
// }

// function onCloseInstance() {
//   window.removeEventListener('keydown', onEscKeyDown);
// }

// function onEscKeyDown(event) {
//   console.log(event.code); // для перевірки
//   const isEscKey = event.code === 'Escape';

//   if (isEscKey) {
//     onCloseInstance();
//   }
//   console.log(isEscKey); // для перевірки
//   return isEscKey;
// }
// --------------------------------------------------
