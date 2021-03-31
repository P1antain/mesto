import Popup from "./Popupp.js";

export class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
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
        this._image.alt = link
        super.open()
    }
}
