// Обявляем константы для вз-вия с элементами Попапа
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup__overlay')
const popupOpen = document.querySelector('.profil__edit');
const popupClose = document.querySelector('.popup__close');
const popupSave = document.querySelector('.popup__save');
const popupName = document.querySelector('.popup__input_type_name');
const popupProfession = document.querySelector('.popup__input_type_profession');
// переменные для вз-вия с элементами Профиля
const profilName = document.querySelector('.profil__name');
const profilProfession = document.querySelector('.profil__profession');
const profilInfo = document.querySelector('.profil__info');


// Переменная для открытия окна попапа
const launchPopup = () =>{
  popup.classList.add('popup_opened')
  popupName.textContent = profilName.value;
  popupProfession.textContent = profilProfession.value;
}
// Разделил функции. добавил обратку отменты отправки формы
const closePopup = (event) => {
  if (event.target === event.currentTarget){
    popup.classList.remove('popup_opened');
    // event.preventDefault()
  }
}

// Собитие открытия и закрытия
popupOpen.addEventListener('click', launchPopup)
popupClose.addEventListener('click', closePopup)
popupOverlay.addEventListener('click', closePopup);

// Логика отправки формы
const formElement = document.querySelector('.popup__overlay')
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

// Меняем Имя и Профессию из формы 
profilName.textContent = popupName.value;
profilProfession.textContent = popupProfession.value;
closePopup(popupClose, popupOverlay)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
// Добавление лайка v1.0 
// С ващего разрешения пока оставлю, в дальнейшем удалю или доработаю, пока буду рассылку делать на оферы(вдруг возьмут).
// document.onclick = function(event){        
//     if (event.target.className == 'element__like'){
//         event.target.classList.add('element__like_active');
//         }
//         else{
//           event.target.classList.remove('element__like_active');
//         }
// }
