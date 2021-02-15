// Определяем Попапы
const popupProfil = document.querySelector('.popup__add-profil');
const popupImage = document.querySelector('.popup__add-image');
const popupCard = document.querySelector('.popup__add-card');

// Определяем область закрытия Попапов
const popupOverlayProfil = document.querySelector('.popup__overlay_profil');
const popupCloseProfil = document.querySelector('.popup__close_profil');
const popupOverlayImage = document.querySelector('.popup__overlay_image');
const popupCloseImage = document.querySelector('.popup__close_image');
const popupOverlayCard = document.querySelector('.popup__overlay_card');
const popupCloseCard = document.querySelector('.popup__close_card');

// Переменные через которые открываются попапы
const popupOpenProfil = document.querySelector('.profil__edit');
const popupOpenImage = document.querySelector('.profil__add');
const popupOpenCard = document.querySelector('.element__image')

// Переменные для вз-вия с Попапом Профиля
const popupProfilName = document.querySelector('.popup__input_type_name');
const popupProfilProfession = document.querySelector('.popup__input_type_profession');
const profilName = document.querySelector('.profil__name')
const profilProfession = document.querySelector('.profil__profession')

// Перменные для вз-вия с Попапом Добавления Карточек
const popupImageName = document.querySelector('.popup__input_type_image');
const popupImageSrc = document.querySelector('.popup__input_type_src');

// Переменные для вз-вия с Добавлением карточек
const elementCard = document.querySelector('.elements');
const elementTemplate = document.querySelector('.template')

// Переменные для вз-вия с Попапом Карточек 
const popupCardImg = document.querySelector('.popup__image');
const popupCardName = document.querySelector('.popup__name');

// Форма для отправки Поапа: 1)Профиля; 2)Добавления Карточки;
const formElementProfil = document.querySelector('.popup__form_profil');
const formElementImage = document.querySelector('.popup__form_image');


// Открытие Попапа : 1)Профиля; 2)Добавления Карточки; 3)Картинки;
const launchPopupProfil = () => {
  popupProfil.classList.add('popup_opened');
  popupProfilName.value = profilName.textContent;
  popupProfilProfession.value = profilProfession.textContent;
};

const launchPopupImage = () => {
  popupImage.classList.add('popup_opened');

};

const launchPopupCard = (event) => {
  popupCard.classList.add('popup_opened');
  const targetElement = event.target;
  const targetItem = targetElement.closest('.element__image');
  const targetTitle = targetElement.nextElementSibling;

  popupCardImg.src = targetItem.src;

  popupCardImg.alt = targetItem.alt;

  popupCardName.textContent = targetTitle.textContent;
};

// Закрытие Попапа: 1)Профиля; 2)Добавления Карточки; 3)Картинки;
const closePopupProfil = (event) => {
  if (event.target === event.currentTarget)
  popupProfil.classList.remove('popup_opened');
};

const closePopupImage = (event) =>{
  if (event.target === event.currentTarget)
  popupImage.classList.remove('popup_opened');
}

const closePopupCard = (event) =>{
  if (event.target === event.currentTarget)
  popupCard.classList.remove('popup_opened');

}

// Открытие Попапа: 1)Профиля; 2) Добавления карточки
popupOpenProfil.addEventListener('click', launchPopupProfil);
popupOpenImage.addEventListener('click', launchPopupImage);


// Закрытие Попапа: 1) Профиля; 2)Добавления Карточки
popupCloseProfil.addEventListener('click', closePopupProfil)
popupOverlayProfil.addEventListener('click', closePopupProfil)
popupCloseImage.addEventListener('click', closePopupImage);
popupOverlayImage.addEventListener('click', closePopupImage);

// Функция  редактирования Профиля
function submitFormProfil (event){
  event.preventDefault();
  profilName.textContent = popupProfilName.value;
  profilProfession.textContent = popupProfilProfession.value;
  closePopupProfil(popupCloseProfil, popupOverlayProfil);
}
// Изменение профиля по кнопке
formElementProfil.addEventListener('submit', submitFormProfil);

// Карточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// Добавление элементов Карточек
function renderElement (){
  const addElement = initialCards.map(getItem);
  elementCard.append(...addElement);
}

// Получение Карточек
function getItem(item){
  const newItem = elementTemplate.content.cloneNode(true);

  const headerElement = newItem.querySelector('.element__name');
  headerElement.textContent = item.name;

  const imageElement = newItem.querySelector('.element__image');
  imageElement.src = item.link;
  imageElement.alt = item.name;
  imageElement.addEventListener('click', launchPopupCard);
  // popupOverlayCard.addEventListener('click', closePopupCard)
  popupCloseCard.addEventListener('click', closePopupCard)

  const deleteElement = newItem.querySelector('.element__delete');
  deleteElement.addEventListener('click', deletingElement);

  const likeElement = newItem.querySelector('.element__like');
  likeElement.addEventListener('click', likesElement)

  return newItem;
}

// Удаление Карточек
function deletingElement(event){
  const targetElement = event.target;
  const targetItem = targetElement.closest('.element');
  targetItem.remove();
}

// Добавление на карточку :like:
function likesElement(event){
  const targetElement = event.target;
  const targetItem = targetElement.closest('.element__like');
  targetItem.classList.toggle('element__like_active');
}

// Функция добавления нового Элемента Картинки
function submitFormImage(event){
  event.preventDefault();
  elementCard.prepend(getItem({name: popupImageName.value, link: popupImageSrc.value}));

  popupImageName.value = '';
  popupImageSrc.value = '';
  closePopupImage(popupCloseImage);
}

// Отправка формы картинки 
formElementImage.addEventListener('submit', submitFormImage);



renderElement ()