const showInputError = (inputElement, errorMessage, inputErrorClass, errorClass) => {
    
    const errorElement = inputElement
    .closest('.popup__section')
    .querySelector(inputErrorClass);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass)
}

const hideInputError = (inputElement, inputErrorClass, errorClass) =>{

    const errorElement = inputElement
    .closest('.popup__section')
    .querySelector(inputErrorClass);
    
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass)
};

const getErrorMessage = (inputElement) => {
    if(inputElement.validity.typeMismatch){
        return 'Введите адрес сайта.'
    }else {
        return 'Вы пропустили это поле.'
    }
}

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    const isInputNotValid = !inputElement.validity.valid;

    if(isInputNotValid) {
        const errorMessage = getErrorMessage(inputElement);

        showInputError(inputElement, errorMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(inputElement, inputErrorClass, errorClass);
    }
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    const hasNotValidInput = inputList
    .some(inputElement => !inputElement.validity.valid);

    if(hasNotValidInput){
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(inactiveButtonClass)
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(inactiveButtonClass)
    }
};

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector)

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass)
    });
    
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disable',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_active'
  });

class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

    _showInputError(inputElement, errorMessage, inputErrorClass, errorClass) {
        this._errorElement = inputElement
            .closest('.popup__section')
            .querySelector(inputErrorClass);
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._errorClass)
    }

    _hideInputError(inputElement, inputErrorClass, errorClass) {
        this._errorElement = inputElement
            .closest('.popup__section')
            .querySelector(inputErrorClass);
        this._errorElement.textContent = '';
        this._errorElement.classList.remove(this._errorClass)
    }

    _getErrorMessage(inputElement) {
        if (inputElement.validity.typeMismatch) {
            return 'Введите адрес сайта.'
        } else {
            return 'Вы пропустили это поле.'
        }
    }

    _checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
        const isInputNotValid = !inputElement.validity.valid;

        if (isInputNotValid) {
            const errorMessage = this._getErrorMessage(inputElement);

            this._showInputError(inputElement, errorMessage, inputErrorClass, errorClass);
        } else {
            this._hideInputError(inputElement, inputErrorClass, errorClass);
        }
    };

    _toggleButtonState(_inputList, _buttonElement, _inactiveButtonClass) {
        const hasNotValidInput = this._inputList
            .some(inputElement => !inputElement.validity.valid);

        if (hasNotValidInput) {
            this._buttonElement.setAttribute('disabled', true);
            this._buttonElement.classList.add(this._inactiveButtonClass)
        } else {
            this._buttonElement.removeAttribute('disabled');
            this._buttonElement.classList.remove(this._inactiveButtonClass)
        }
    };


    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList, this._buttonElement, this._inactiveButtonClass);
            });
        });
        this._toggleButtonState(this._inputList, this._buttonElement);
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        this._setEventListeners();
    }
}

const className = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disable',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_active'
};

const formElementProfil = document.querySelector('.popup__form_profil');
const formElementImage = document.querySelector('.popup__form_image');


const addCardFormValidator = new FormValidator(className, formElementProfil);
const editProfileFormValidator = new FormValidator(className, formElementImage);

addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()