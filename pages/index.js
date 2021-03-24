import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {initialCards} from "../utils/initial-cards.js";
import {className} from "../utils/className.js";


// Определяем Попапы
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_add-profile');
const popupImage = document.querySelector('.popup_type_add-image');
const popupCard = document.querySelector('.popup_type_add-card');

// Переменные через которые открываются попапы
const popupOpenProfil = document.querySelector('.profil__edit');
const popupOpenImage = document.querySelector('.profil__add');

// Переменные для вз-вия с Попапом Профиля
const popupProfileName = document.querySelector('.popup__input_type_name');
const popupProfilProfession = document.querySelector('.popup__input_type_profession');
const profilName = document.querySelector('.profil__name');
const profilProfession = document.querySelector('.profil__profession');

// Перменные для вз-вия с Попапом Добавления Карточек
const popupImageName = document.querySelector('.popup__input_type_image');
const popupImageSrc = document.querySelector('.popup__input_type_src');

// Переменные для вз-вия с Добавлением карточек
const elementCard = document.querySelector('.elements');

// Переменные для вз-вия с Попапом Карточек 
const popupCardImg = document.querySelector('.popup__image');
const popupCardName = document.querySelector('.popup__name');

// Форма для отправки Поапа: 1)Профиля; 2)Добавления Карточки;
const formElementProfile = document.querySelector('.popup__form_profile');
const formElementImage = document.querySelector('.popup__form_image');

// Открытие Попапа
const openPopup = (element) =>{
  element.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEscape); 
}
//Открытия попапа Форма
const launchPopupProfile = () => {
  popupProfileName.value = profilName.textContent;
  popupProfilProfession.value = profilProfession.textContent;
  openPopup(popupProfile);
};
// Функция  редактирования попапа Профиля
function submitFormProfile (event){
  event.preventDefault()
  profilName.textContent = popupProfileName.value;
  profilProfession.textContent = popupProfilProfession.value;
  closePopup(popupProfile);
}
// Изменение профиля по кнопке
formElementProfile.addEventListener('submit', submitFormProfile);
//Откритие попапа Изображений
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
// Закрытие Попапа
const closePopup = (element) => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}
// Функция для закртыия по Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}
// Закрите поапа по событиям клика без слушателей
popups.forEach((popup) =>{
  popup.addEventListener('click', (event)=> {
    if(event.target.classList.contains('popup__overlay')){
      closePopup(popup)
    }
    if(event.target.classList.contains('popup__close')){
      closePopup(popup)
    }
  })
})
// Открытие Попапа: 1)Профиля; 2) Добавления карточки
popupOpenProfil.addEventListener('click', launchPopupProfile);
popupOpenImage.addEventListener('click', launchPopupImage);
// Функция генерации карточек
function createCard(item) {
  const card = new Card(item, '.template', openPicture);
  const cardElement = card.generateCard();
  elementCard.prepend(cardElement);
}
// // Функция добавления нового Элемента Карточек
function submitFormImage(event){
  event.preventDefault();
  createCard({name: popupImageName.value, link: popupImageSrc.value});
  popupImageName.value = '';
  popupImageSrc.value = '';
  formElementImage.reset()
  closePopup(popupImage)
}
// Отправка формы Элемента Карточек
formElementImage.addEventListener('submit', submitFormImage);
//Добавляем все карточки на экран
initialCards.forEach((item) => {
  createCard(item)
});
//Добавляем класс для проверки валидации полей
const profileFormValidity = new FormValidator(className, formElementProfile);
const cardFormValidity = new FormValidator(className, formElementImage);
//Запускаем так или через фукнции
cardFormValidity.enableValidation()
profileFormValidity.enableValidation()