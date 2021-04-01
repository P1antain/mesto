import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from "../utils/initial-cards.js";
import { className } from "../utils/className.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {profileName, profileInfo, sectionProfile} from "../utils/constants.js";
// Определяем Попапы
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_add-profile');
const popupImage = document.querySelector('.popup_type_add-image');
const popupCard = document.querySelector('.popup_type_add-card');

// Переменные через которые открываются попапы
const popupOpenProfile = document.querySelector('.profil__edit');
const popupOpenImage = document.querySelector('.profil__add');

// Переменные для вз-вия с Попапом Профиля
const inputProfileName = document.querySelector('.popup__input_type_name');
const inputProfileInfo = document.querySelector('.popup__input_type_profession');
// const profileName = document.querySelector('.profil__name');
const profileProfession = document.querySelector('.profil__profession');

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


// Функция генерации карточек
function createCard(item) {
  const card = new Card(item, '.template', handleCardClick);
  // return card.generateCard()
    const cardElement =  card.generateCard()
    cardSection.addItem(cardElement)
}

//Добавляем все карточки на экран
const cardSection = new Section({
  items: initialCards,
  render: (item) =>{
      createCard(item)
  },
}, '.elements')
cardSection.renderItems()

const userInfo = new UserInfo('.profile__name', '.profile__profession')

const formProfileEdit = new PopupWithForm({
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    }
}, '.popup_type_add-profile');

popupOpenProfile.addEventListener('click', ()=>{
    formProfileEdit.open()
    getUserInfoForm()
    profileFormValidity.enableValidation()
})

function getUserInfoForm() {
    const info = userInfo.getUserInfo()
    inputProfileName.value = info.name
    inputProfileInfo.value = info.info
}












const formAddPlace = new PopupWithForm({
    handleFormSubmit: (formData) => {
        createCard(formData)
    }
}, '.popup_type_add-image');

//открытие формы добавления карточки с местом
popupOpenImage.addEventListener('click', () => {
    formAddPlace.open();
    formElementImage.reset();

})














//Открытие попапа Изображения
const openPopupImage = new PopupWithImage('.popup_type_add-card')
function  handleCardClick(name, link) {
    openPopupImage.open(name, link)
}
// Запускаем
formProfileEdit.setEventListeners()
formAddPlace.setEventListeners()
openPopupImage.setEventListeners()
//Добавляем класс для проверки валидации полей
const profileFormValidity = new FormValidator(className, formElementProfile);
const cardFormValidity = new FormValidator(className, formElementImage);
//Запускаем так или через фукнции
cardFormValidity.enableValidation()
profileFormValidity.enableValidation()