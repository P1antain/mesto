 export default class FormValidator {
     constructor(config, formElement) {
         this._formElement = formElement;
         this._inputSelector = config.inputSelector;
         this._submitButtonSelector = config.submitButtonSelector;
         this._inactiveButtonClass = config.inactiveButtonClass;
         this._inputErrorClass = config.inputErrorClass;
         this._errorClass = config.errorClass;
         this._popupSection = config.popupSection;
         this._inputLine = config.inputLine;
     }

     _showInputError(inputElement, errorMessage) {
          this._errorElement = inputElement
             .closest(this._popupSection)
             .querySelector(this._inputErrorClass);
         this._errorElement.textContent = errorMessage;
         this._errorElement.classList.add(this._errorClass)
         inputElement.classList.add(this._inputLine)
     }

     _hideInputError(inputElement) {
          this._errorElement = inputElement
             .closest(this._popupSection)
             .querySelector(this._inputErrorClass);
         this._errorElement.textContent = '';
         this._errorElement.classList.remove(this._errorClass)
         inputElement.classList.remove(this._inputLine)
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

     _disableSubmitButton(){
         this._buttonElement.classList.add(this._inactiveButtonClass);
         this._buttonElement.disabled = true;
     }

     _toggleButtonState() {
         if (this._hasInvalidInput(this._inputList)) {
             this._disableSubmitButton()
         } else {
             this._buttonElement.disabled = false;
             this._buttonElement.classList.remove(this._inactiveButtonClass);
         }
     }

     _setEventListener() {
         this._formElement.addEventListener('submit', (event) => {
             event.preventDefault();
         });
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
             })
             this._disableSubmitButton();
         });
         this._toggleButtonState(this._inputList, this._buttonElement);
     }

     enableValidation() {
         this._setEventListener();
     }

 }

