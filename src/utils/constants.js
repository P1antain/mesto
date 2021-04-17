//Классы валидации
export const className = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disable',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_active',
    popupSection: '.popup__section',
    inputLine: 'popup__input-active'
};

// Переменные через которые открываются попапы
export const popupOpenProfile = document.querySelector('.profil__edit');
export const popupOpenImage = document.querySelector('.profil__add');
export const popupOpenAvatar = document.querySelector('.profil__replace')
// Переменные для вз-вия с Попапом Профиля
export const inputProfileName = document.querySelector('.popup__input_type_name');
export const inputProfileInfo = document.querySelector('.popup__input_type_profession');
// Форма для отправки Поапа: 1)Профиля; 2)Добавления Карточки;
export const formElementProfile = document.querySelector('.popup__form_profile');
export const formElementImage = document.querySelector('.popup__form_image');
export const formElementAvatar = document.querySelector('.popup__form_avatar')
//Константа для Попапа
export const escape = 'Escape'
// Изображение Аватара
export const submitButtons = {
    initial: {
        'editAvatar': 'Сохранить',
        'editImage': 'Добавить',
        'editProfile': 'Сохранить',
        'deleteCard': 'Да',
    },
    changed: {
        'editAvatar': 'Сохранение...',
        'editImage': 'Добавление...',
        'editProfile': 'Сохранение...',
        'deleteCard': 'Удаление...',
    }
}