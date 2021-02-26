const showInputError = (inputElement, errorMessage) => {
    
    const errorElement = inputElement
    .closest('.popup__section')
    .querySelector('.popup__input-error');

    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active')
}

const hideInputError = (inputElement, errorClass) =>{

    const errorElement = inputElement
    .closest('.popup__section')
    .querySelector('.popup__input-error');
    
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

const checkInputValidity = (formElement, inputElement, errorClass) => {
    const isInputNotValid = !inputElement.validity.valid;

    if(isInputNotValid) {
        const errorMessage = getErrorMessage(inputElement);

        showInputError(inputElement, errorMessage);
    } else {
        hideInputError(inputElement);
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

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector)

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (event) => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass)
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