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
        this._setEventListeners();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._link;
        this._element.querySelector('.element__name').textContent = this._title;

        return this._element;
    }

    _setEventListeners(){
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._like();
        });

        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._removeCard();
        });

        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick(this._title, this._link)
        });
    }

    _like() {
        this._element
            .querySelector('.element__like')
            .classList
            .toggle('element__like_active');
    }

    _removeCard() {
        this._element.remove();
        this._element = null;
    }


}

