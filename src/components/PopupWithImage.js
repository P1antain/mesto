import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._title = this._popup.querySelector('.popup__name');
        this._image = this._popup.querySelector('.popup__image');

    }

    open(name, link) {
        // const cardImage = this._popup.querySelector('.popup__image')
        // const cardTitle = this._popup.querySelector('.popup__name')
        // cardImage.src = image
        // cardTitle.textContent = title;
        this._title.textContent = name;
        this._image.src = link;
        super.open()
    }
}
