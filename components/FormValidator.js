 export class FormValidator {
     constructor(config, formElement) {
         this._formElement = formElement;
         // this._formSelector = config.formSelector;
         this._inputSelector = config.inputSelector;
         this._submitButtonSelector = config.submitButtonSelector;
         this._inactiveButtonClass = config.inactiveButtonClass;
         this._inputErrorClass = config.inputErrorClass;
         this._errorClass = config.errorClass;
         this._popupSection = config.popupSection;
     }

     _showInputError(inputElement, errorMessage) {
          this._errorElement = inputElement
             .closest(this._popupSection)
             .querySelector(this._inputErrorClass);
         this._errorElement.textContent = errorMessage;
         this._errorElement.classList.add(this._errorClass)
     }

     _hideInputError(inputElement) {
          this._errorElement = inputElement
             .closest(this._popupSection)
             .querySelector(this._inputErrorClass);
         this._errorElement.textContent = '';
         this._errorElement.classList.remove(this._errorClass)
     }

     _isValid(inputElement) {
         if (inputElement.validity.valid) {
             this._hideInputError(inputElement);
         } else {
             this._showInputError(inputElement, inputElement.validationMessage);
         }
     }

     _hasInvalidInput(inputList) {
         return inputList.some((input) => !input.validity.valid);
     }

     _toggleButtonState() {
         if (this._hasInvalidInput(this._inputList)) {
             this._buttonElement.disabled = true;
             this._buttonElement.classList.add(this._inactiveButtonClass);
         } else {
             this._buttonElement.disabled = false;
             this._buttonElement.classList.remove(this._inactiveButtonClass);
         }
     }

     _setEventListener() {
         this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
         this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
         this._inputList.forEach((input) => {
             input.addEventListener('input', () => {
                 this._isValid(input);
                 this._toggleButtonState(this._inputList, this._buttonElement);
             });
         });
         this._formElement.addEventListener('reset', () => {
             this._inputList.forEach((inputElement) => {
                 this._hideInputError(inputElement)
                 this._toggleButtonState([ { validity: {valid: false } } ], this._buttonElement);
             })
         });
         this._toggleButtonState(this._inputList, this._buttonElement);
     }

     enableValidation() {
         this._setEventListener();
     }
     resetValidation() {
         this._inputList.forEach((inputElement) => {
             this._hideInputError(inputElement);
         });
         this._toggleButtonState();
     }
 }

