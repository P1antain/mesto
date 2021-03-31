import Popup from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popupElement, formSubmit) {
        super(popupElement);
        this._formSubmit = formSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }
    _getInputValues(){
        const inputValues = [];
        this._popup.querySelectorAll('.popup__input').forEach((element) => {
            inputValues.push(element.value);
        });
        return inputValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._getInputValues());
        });
    }
    close() {
        super.close();
        this._form.reset()
    }
}