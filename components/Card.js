export  class Card {
    constructor(data, cardSelector, handleImageClick) {
        this._title = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
    }

    _getTemplate() {
        const newCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return newCard
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__image').src = this._image;
        this._element.querySelector('.element__image').alt = this._image;
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
            this._handleImageClick(this._title, this._image)
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

