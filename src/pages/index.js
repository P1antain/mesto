import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {popupOpenProfile, inputProfileName,
        inputProfileInfo, popupOpenImage,
        formElementProfile, formElementImage,
        initialCards, className} from "../utils/constants.js";

// Функция генерации карточек
function createCard(item) {
  const card = new Card(item, '.template', handleCardClick);
  const cardElement =  card.generateCard()
  cardSection.addItem(cardElement)
}

//Добавляем все карточки на экран
const cardSection = new Section({
  items: initialCards,
    render(item) {
        createCard(item)
    },
}, '.elements')


const userInfo = new UserInfo('.profile__name', '.profile__profession')
//Добавляем вз-вие с попапом Профиля
const formProfileEdit = new PopupWithForm({
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    }
}, '.popup_type_add-profile');
// Открываем попап Профиля
popupOpenProfile.addEventListener('click', ()=>{
    formProfileEdit.open()
    getUserInfoForm()
    profileFormValidity.enableValidation()
})
//Функция добавления текста Профиля
function getUserInfoForm() {
    const profileInfo = userInfo.getUserInfo()
    inputProfileName.value = profileInfo.inputProfileName
    inputProfileInfo.value = profileInfo.inputProfileInfo
}

//Добавляем вз-вие с попапом Карточек
const formAddPlace = new PopupWithForm({
    handleFormSubmit: (formData) => {
        createCard({
            'name': formData.editImageName,
            'link':formData.editImageSrc
        })
    }
}, '.popup_type_add-image');

//Форма добавление Карточки
popupOpenImage.addEventListener('click', () => {
    formAddPlace.open();
    formElementImage.reset();
    profileFormValidity.enableValidation()
})

//Открытие попапа Изображения
const openPopupImage = new PopupWithImage('.popup_type_add-card')
function  handleCardClick(name, link) {
    openPopupImage.open(name, link)
}
// Запускаем
cardSection.renderItems()
formProfileEdit.setEventListeners()
formAddPlace.setEventListeners()
openPopupImage.setEventListeners()
//Добавляем класс для проверки валидации полей
const profileFormValidity = new FormValidator(className, formElementProfile);
const cardFormValidity = new FormValidator(className, formElementImage);
//Запускаем так или через фукнции
cardFormValidity.enableValidation()
profileFormValidity.enableValidation()