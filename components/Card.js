import { popupCardImg, popupCardName, openPopup, popupCard} from '../scripts/index.js'

export  class Card {
    constructor(data, cardSelector) {
        this._title = data.name
        this._image = data.link
        this._cardSelector = cardSelector
    }

    _getTemplate() {
        const newCard = document
            .querySelector('.template')
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
            this._openCard();
        });
    }

    _like() {
        this._element
            .querySelector('.element__like')
            .classList
            .toggle('element__like_active');
    }

    _removeCard() {
        this._element
            .querySelector('.element__delete')
            .closest('.element')
            .remove();
        this._element = null;
    }

    _openCard(){
        openPopup(popupCard)
        popupCardImg.src = this._image;
        popupCardName.textContent =  this._title;
    }

}

