// Обявляем константы для вз-вия с элементами Попапа
const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profil__edit');
const popupClose = document.querySelector('.popup__close');
const popupSave = document.querySelector('.popup__save');
const popupName = document.querySelector('.popup__name');
const popupProfession = document.querySelector('.popup__profession');
// переменные для вз-вия с элементами Профиля
const profilName = document.querySelector('.profil__name');
const profilProfession = document.querySelector('.profil__profession');
const profilInfo = document.querySelector('.profil__info');


// Переменная для открытия закрытия окна
const launchPopup = () =>{
  popup.classList.toggle('popup__opened')
}
const closePopup = (event) => {
  if (event.target === event.currentTarget){
    launchPopup()
  }
}
// Собитие открытия и закрытия
popupOpen.addEventListener('click', launchPopup)
popupClose.addEventListener('click', launchPopup)
popup.addEventListener('click', closePopup);

// Логика отправки формы
const formElement = document.querySelector('.popup__overlay')
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

// Меняем Имя и Профессию из формы 
profilName.textContent = popupName.value;
profilProfession.textContent = popupProfession.value;
launchPopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
// Добавление лайка v1.0
document.onclick = function(event){        
    if (event.target.className == 'element__like'){
        event.target.classList.add('element__like_active');
        }
        else{
          event.target.classList.remove('element__like_active');
        }
}
