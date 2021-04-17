import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor ({popupSelector, submitButtons, handleFormSubmit}) {
        super(popupSelector);
        this._submitButtons = submitButtons;
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
        this._submit = this._submitForm.bind(this);
        this._submitButton = this._popupForm.querySelector('.popup__save ');
        this._submitText = this._popupForm.getAttribute('name');
    };

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    _setButtonName() {
        this._submitButton.textContent = this._submitButtons.initial[`${this._submitText}`];
    }

    renameButtonName() {
        this._submitButton.textContent = this._submitButtons.changed[`${this._submitText}`];
    }

    _submitForm(evt){
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._submit);
    }

    openPopup() {
        super.open();
        this._setButtonName();
    }

    closePopup() {
        super.close();
        this._popupForm.reset();
    }
}

