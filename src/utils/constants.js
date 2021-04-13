// Карточки
export const initialCards = [
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
//Классы валидации
export const className = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disable',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_active',
    popupSection: '.popup__section'
};

// Переменные через которые открываются попапы
export const popupOpenProfile = document.querySelector('.profil__edit');
export const popupOpenImage = document.querySelector('.profil__add');
// Переменные для вз-вия с Попапом Профиля
export const inputProfileName = document.querySelector('.popup__input_type_name');
export const inputProfileInfo = document.querySelector('.popup__input_type_profession');
// Форма для отправки Поапа: 1)Профиля; 2)Добавления Карточки;
export const formElementProfile = document.querySelector('.popup__form_profile');
export const formElementImage = document.querySelector('.popup__form_image');
//Константа для Попапа
export const escape = 'Escape'
//Id
export const id = {myId: ''};