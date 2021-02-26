const showInputError = (inputElement, errorMessage) => {
    
    const errorElement = inputElement
    .closest('.popup__section')
    .querySelector('.popup__input-error');

    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active')
}

const hideInputError = (inputElement) =>{

    const errorElement = inputElement
    .closest('.popup__section')
    .querySelector('.popup__input-error');
    
    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active')
};

const getErrorMessage = (inputElement) => {
    if(inputElement.validity.typeMismatch){
        return 'Введите адрес сайта.'
    }else {
        return 'Вы пропустили это поле.'
    }
}

const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;

    if(isInputNotValid) {
        const errorMessage = getErrorMessage(inputElement);

        showInputError(inputElement, errorMessage);
    } else {
        hideInputError(inputElement);
    }
};

const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList
    .some(inputElement => !inputElement.validity.valid);

    if(hasNotValidInput){
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add('popup__save_disable')
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove('popup__save_disable')
    }
};

const setEventListeners = (formElement, inputSelector) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector('.popup__save')

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (event) => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
    toggleButtonState(inputList, buttonElement);
};

const enableValidation = ({formSelector, inputSelector}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, inputSelector)
    });
    
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disable',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
  }); 