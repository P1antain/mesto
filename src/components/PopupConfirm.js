import Popup from "./Popup";

export default class PopupConfirm extends Popup {


    constructor(popupSelector) {
        super(popupSelector)
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }

    // слушатель клика
    setEventListeners() {
        super.setEventListeners(); // вызываем родительский метод
        // обработчик сабмита
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
        });
    }

    // создаем колбэк для сабмита из принимаемых данных
    createHandleSubmit(func) {
        this._handleFormSubmit = func;
    }
}