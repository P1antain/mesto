import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {Api} from "../components/Api.js";
import {popupOpenProfile, inputProfileName,
        inputProfileInfo, popupOpenImage,
        formElementProfile, formElementImage,
        initialCards, className, id} from "../utils/constants.js";

const userInfo = new UserInfo('.profil__name', '.profil__profession')
// Апи данные
let api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-22',
    authorization: 'c64c7158-2414-4469-9e6c-496f1ef4fdaa'
})
// Функция генерации карточек
function createCard(item) {
  const card = new Card(item, '.template', handleCardClick, id.myId);
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

api.getData()
    .then((data)=> {
        let [userData, cardsData] = data;
        id.myId = userData._id;
        userInfo.setUserInfo(userData)
        cardSection.renderItems(cardsData)
    })
    .catch((err)=>{
        console.log(err)
    })

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
})
//Функция добавления текста Профиля
function getUserInfoForm() {
    const profileInfo = userInfo.getUserInfo()
    inputProfileName.value = profileInfo.inputProfileName
    inputProfileInfo.value = profileInfo.inputProfileInfo
}

//Добавляем вз-вие с попапом Карточек
const formAddCard = new PopupWithForm({
    handleFormSubmit: (formData) => {
        createCard({
            'name': formData.editImageName,
            'link':formData.editImageSrc
        })
    }
}, '.popup_type_add-image');

//Форма добавление Карточки
popupOpenImage.addEventListener('click', () => {
    formAddCard.open();
    formElementImage.reset();
})

//Открытие попапа Изображения
const openPopupImage = new PopupWithImage('.popup_type_add-card')
function  handleCardClick(name, link) {
    openPopupImage.open(name, link)
}
// Запускаем
cardSection.renderItems()
formProfileEdit.setEventListeners()
formAddCard.setEventListeners()
openPopupImage.setEventListeners()
//Добавляем класс для проверки валидации полей
const profileFormValidity = new FormValidator(className, formElementProfile);
const cardFormValidity = new FormValidator(className, formElementImage);
//Запускаем так или через фукнции
cardFormValidity.enableValidation()
profileFormValidity.enableValidation()



console.log(api.getCard())