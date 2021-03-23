import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {initialCards} from "../utils/initial-cards.js";
import {className} from "../utils/className.js";


// Определяем Попапы
const popup = document.querySelector('.popup');
const popupProfil = document.querySelector('.popup_type_add-profil');
const popupImage = document.querySelector('.popup_type_add-image');
const popupCard = document.querySelector('.popup_type_add-card');

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
const popupCardImg = document.querySelector('.popup__image');
const popupCardName = document.querySelector('.popup__name');
const popupSection = document.querySelector('.popup__section')

// Форма для отправки Поапа: 1)Профиля; 2)Добавления Карточки;
const formElementProfil = document.querySelector('.popup__form_profil');
const formElementImage = document.querySelector('.popup__form_image');

// Открытие Попапа :1)Попапа 2)Профиля; 3)Добавления Карточки; 4)Картинки;
const openPopup = (popup) =>{
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape); 
}

const launchPopupProfil = () => {
  popupProfilName.value = profilName.textContent;
  popupProfilProfession.value = profilProfession.textContent;
  openPopup(popupProfil);
};

const launchPopupImage = () => {
  popupImageName.value = '';
  popupImageSrc.value = '';
  openPopup(popupImage);
};

//Открытие попапа Изображения
function  openPicture(name, link) {
  openPopup(popupCard)
  popupCardImg.src = link;
  popupCardName.textContent =  name;
}

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

const handleClosePopup = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupProfil);
    closePopup(popupImage);
    closePopup(popupCard);
  }
};

// Открытие Попапа: 1)Профиля; 2) Добавления карточки
popupOpenProfil.addEventListener('click', launchPopupProfil);
popupOpenImage.addEventListener('click', launchPopupImage);


// Закрытие Попапа: 1) Профиля; 2)Добавления Карточки 3)Картинок
popupCloseProfil.addEventListener('click', handleClosePopup)
popupOverlayProfil.addEventListener('click', handleClosePopup)
popupCloseImage.addEventListener('click', handleClosePopup);
popupOverlayImage.addEventListener('click', handleClosePopup)
popupCloseCard.addEventListener('click', handleClosePopup);
popupOverlayCard.addEventListener('click', handleClosePopup);

// Функция  редактирования Профиля
function submitFormProfil (event){
  event.preventDefault();
  profilName.textContent = popupProfilName.value;
  profilProfession.textContent = popupProfilProfession.value;
  handleClosePopup(popupProfil);
}

// Изменение профиля по кнопке
formElementProfil.addEventListener('submit', submitFormProfil);

// // Функция добавления нового Элемента Карточек
function submitFormImage(event){
  event.preventDefault();
  const card = new Card({name: popupImageName.value, link: popupImageSrc.value},'.template', openPicture);
  const cardElement = card.generateCard();
  elementCard.prepend(cardElement);
  popupImageName.value = '';
  popupImageSrc.value = '';
  formElementImage.reset()
  handleClosePopup(popupCard);
}


// Отправка формы картинки
formElementImage.addEventListener('submit', submitFormImage);

//Добавляем все карточки на экран
initialCards.forEach((item) => {
  const card = new Card(item, '.template', openPicture);
  const cardElement = card.generateCard();
  elementCard.prepend(cardElement);

});

//Добавляем класс для проверки валидации полей
const profileFormValidity = new FormValidator(className, formElementProfil);
const cardFormValidity = new FormValidator(className, formElementImage);
//Запускаем так или через фукнции
cardFormValidity.enableValidation()
profileFormValidity.enableValidation()