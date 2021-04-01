export  class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._title = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        return document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true)
    }

    generateCard() {
        this._element = this._getTemplate();
        this._titleElement = this._element.querySelector('.element__name');
        this._imageElement =this._element.querySelector('.element__image');
        this._likeButton = this._element.querySelector('.element__like');
        this._deleteButton = this._element.querySelector('.element__delete');
        this._setEventListeners();
        this._imageElement.src = this._link;
        this._imageElement.alt = this._link;
        this._titleElement.textContent = this._title;

        return this._element;
    }

    _setEventListeners(){
        this._likeButton .addEventListener('click', () => {
            this._like();
        });

        this._deleteButton.addEventListener('click', () => {
            this._removeCard();
        });

        this._imageElement.addEventListener('click', () => {
            this._handleCardClick(this._title, this._link)
        });
    }

    _like() {
        this._likeButton
            .classList
            .toggle('element__like_active');
    }

    _removeCard() {
        this._element.remove();
        this._element = null;
    }


}

