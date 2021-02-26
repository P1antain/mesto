const showInputError = (inputElement, errorMessage) => {
    console.log(inputElement.name, errorMessage)
}

const hideInputError = (inputElement) =>{};

const checkInputValidity = (inputElement) => {
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
            checkInputValidity(inputElement)
        })
    })
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach(setEventListeners);
    
};

enableValidation();