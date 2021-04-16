export default class Card {
    constructor({name, link, likes, owner, _id},
                templateSelector, handleCardClick, {handleRemoveClick, handleCardLike, handleCardDislike}, {id}) {
        this._name = name;
        this._link = link;
        this._arrUsersWhoLikes = likes;
        this._owner = owner;
        this._id = _id;
        this._cardSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleRemoveClick = handleRemoveClick;
        this._mineId = id;
        this._handleCardLike = handleCardLike;
        this._handleCardDislike = handleCardDislike;
    }

    _getTemplate() {
        return document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true)
    }

    _getElementsOfCard() {
        return {
            cardImg: this._element.querySelector('.element__image'),
            cardTitle: this._element.querySelector('.element__name'),
            btnLike: this._element.querySelector('.element__like'),
            likesCounter: this._element.querySelector('.element__counter'),
            btnRemove: this._element.querySelector('.element__delete'),
        };
    }

    _setEventListeners() {
        this._elementsOfCard.btnLike.addEventListener('click', () => this._handlelike());
        this._elementsOfCard.btnRemove.addEventListener('click', () => this._handleRemoveClick());
        this._elementsOfCard.cardImg.addEventListener('click', () => this._handleCardClick(this._name, this._link))
    }

    _handlelike() {
        if (!this._elementsOfCard.btnLike.classList.contains('element__like_active')) {
            this._elementsOfCard.btnLike.classList.add('element__like_active')
            this._handleCardLike();
        } else {
            this._elementsOfCard.btnLike.classList.remove('element__like_active')
            this._handleCardDislike();
        }
    }

    setCounterOfLikes(num){
        this._elementsOfCard.likesCounter.textContent = num;
    }

    _setBtnRemoveVisible() {
        if (this._owner._id !== this._mineId) {
            this._elementsOfCard.btnRemove.classList.remove('element__delete');
        }
    }

    _isCardAlreadyLiked() {
        if (this._arrUsersWhoLikes.some(user => user._id === this._mineId)) {
            this._elementsOfCard.btnLike.classList.add('element__like_active');
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementsOfCard = this._getElementsOfCard();

        this._elementsOfCard.cardImg.src = this._link;
        this._elementsOfCard.cardImg.alt = this._name;
        this._elementsOfCard.cardTitle.textContent = this._name;
        this._elementsOfCard.likesCounter.textContent = this._arrUsersWhoLikes.length;

        this._isCardAlreadyLiked();
        this._setBtnRemoveVisible();
        this._setEventListeners();

        return this._element;
    }

    removeCard() {
        this._element.remove();
        this._element = null;
    }
}

