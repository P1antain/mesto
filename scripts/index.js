import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';


// Определяем Попапы
const popup = document.querySelector('.popup');
const popupProfil = document.querySelector('.popup_type_add-profil');
const popupImage = document.querySelector('.popup_type_add-image');
export const popupCard = document.querySelector('.popup_type_add-card');

// Определяем область закрытия Попапов
const popupOverlayProfil = document.querySelector('.popup__overlay_profil');
const popupCloseProfil = document.querySelector('.popup__close_profil');
const popupOverlayImage = document.querySelector('.popup__overlay_image');
const popupCloseImage = document.querySelector('.popup__close_image');
const popupCloseCard = document.querySelector('.popup__close_card');
const popupOverlayCard = document.querySelector('.popup__overlay_card');

// Переменные через которые открываются попапы
const popupOpenProfil = document.querySelector('.profil__edit');
const popupOpenImage = document.querySelector('.profil__add');
const popupOpenCard = document.querySelector('.element__image');

// Переменные для вз-вия с Попапом Профиля
const popupProfilName = document.querySelector('.popup__input_type_name');
const popupProfilProfession = document.querySelector('.popup__input_type_profession');
const profilName = document.querySelector('.profil__name');
const profilProfession = document.querySelector('.profil__profession');

// Перменные для вз-вия с Попапом Добавления Карточек
const popupImageName = document.querySelector('.popup__input_type_image');
const popupImageSrc = document.querySelector('.popup__input_type_src');

// Переменные для вз-вия с Добавлением карточек
const elementCard = document.querySelector('.elements');
const elementTemplate = document.querySelector('.template');

// Переменные для вз-вия с Попапом Карточек 
export const popupCardImg = document.querySelector('.popup__image');
export const popupCardName = document.querySelector('.popup__name');

// Форма для отправки Поапа: 1)Профиля; 2)Добавления Карточки;
const formElementProfil = document.querySelector('.popup__form_profil');
const formElementImage = document.querySelector('.popup__form_image');

// Открытие Попапа :1)Попапа 2)Профиля; 3)Добавления Карточки; 4)Картинки;
export const openPopup = (popup) =>{
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape); 
}

const launchPopupProfil = () => {
  // popupProfil.classList.add('popup_opened');
  popupProfilName.value = profilName.textContent;
  popupProfilProfession.value = profilProfession.textContent;
  openPopup(popupProfil);
};

const launchPopupImage = () => {
  // popupImage.classList.add('popup_opened');
  popupImageName.value = '';
  popupImageSrc.value = '';
  openPopup(popupImage);
};

export const launchPopupCard = (event) => {
  // popupCard.classList.add('popup_opened');
  const targetElement = event.target;
  const targetItem = targetElement.closest('.element__image');
  const targetTitle = targetElement.nextElementSibling;

  popupCardImg.src = targetItem.src;

  popupCardImg.alt = targetItem.alt;

  popupCardName.textContent = targetTitle.textContent;
  openPopup(popupCard)
};

// Закрытие Попапа: 1)Профиля; 2)Добавления Карточки; 3)Картинки;
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape); 
  
};
// Функция для закртыия по Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

const closePopupProfil = (event) => {
  if (event.target === event.currentTarget)
  closePopup(popupProfil);
};

const closePopupImage = (event) =>{
  if (event.target === event.currentTarget)
  closePopup(popupImage);
}

const closePopupCard = (event) =>{
  if (event.target === event.currentTarget)
  closePopup(popupCard);
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


// // Функция добавления нового Элемента Карточек
function submitFormImage(event){
  event.preventDefault();
  const card = new Card({name: popupImageName.value, link: popupImageSrc.value});
  const cardElement = card.generateCard();
  elementCard.prepend(cardElement);
  popupImageName.value = '';
  popupImageSrc.value = '';
  closePopupImage(popupCloseImage, popupOverlayCard);
}

// Отправка формы картинки
formElementImage.addEventListener('submit', submitFormImage);

//Добавляем все карточки на экран
initialCards.forEach((item) => {
  const card = new Card(item, elementTemplate);
  const cardElement = card.generateCard();
  elementCard.prepend(cardElement);
  popupCloseCard.addEventListener('click', closePopupCard);
  popupOverlayCard.addEventListener('click', closePopupCard);
})

const className = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disable',
  inputErrorClass: '.popup__input-error',
  errorClass: 'popup__input-error_active'
};

//Добавляем класс для проверки валидации полей
const profileFormValidity = new FormValidator(className, formElementProfil);
const cardFormValidity = new FormValidator(className, formElementImage);
//Запускаем так или через фукнции
cardFormValidity.enableValidation()
profileFormValidity.enableValidation()