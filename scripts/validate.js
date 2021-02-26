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

const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;

    if(isInputNotValid) {
        const errorMessage = inputElement.validationMessage;

        showInputError(inputElement, errorMessage);
    } else {
        hideInputError(inputElement);
    }

};

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (event) => {
            checkInputValidity(formElement, inputElement)
        })
    })
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach(setEventListeners);
    
};

enableValidation();