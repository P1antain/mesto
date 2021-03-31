// Открытие Попапа
// const openPopup = (element) =>{
//   element.classList.add('popup_opened')
//   document.addEventListener('keydown', closeByEscape);
// }

// const popupEditProfile = new PopupWithForm('.popup_type_add-profile');


// //Открытия попапа Профиля
// const launchPopupProfile = () => {
//   popupProfileName.value = profileName.textContent;
//   popupProfileProfession.value = profileProfession.textContent;
//   openPopup(popupProfile);
// };
// //Отправка формы редактирования Профиля
// popupOpenProfile.addEventListener('click', launchPopupProfile);
// // Функция  редактирования попапа Профиля
// function submitFormProfile (event){
//   event.preventDefault()
//   profileName.textContent = popupProfileName.value;
//   profileProfession.textContent = popupProfileProfession.value;
//   closePopup(popupProfile);
// }
// // Изменение профиля по кнопке
// formElementProfile.addEventListener('submit', submitFormProfile);
//Откритие попапа Изображений
// const launchPopupImage = () => {
//   popupImageName.value = '';
//   popupImageSrc.value = '';
//   openPopup(popupImage);
// };

// // Закрытие Попапа
// const closePopup = (element) => {
//   element.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEscape);
// }
// // Функция для закртыия по Escape
// function closeByEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened')
//     closePopup(openedPopup);
//   }
// }
// // Закрите поапа по событиям клика без слушателей
// popups.forEach((popup) =>{
//   popup.addEventListener('click', (event)=> {
//     if(event.target.classList.contains('popup__overlay')){
//       closePopup(popup)
//     }
//     if(event.target.classList.contains('popup__close')){
//       closePopup(popup)
//     }
//   })
// })
// // Открытие Попапа:  2) Добавления карточки
// popupOpenImage.addEventListener('click', launchPopupImage);


