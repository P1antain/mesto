const popupProfile = document.querySelector('.popup_place_profile');
const formProfile = popupProfile.querySelector('.popup__container');
const closePopupProfile = formProfile.querySelector('.button_type_close');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_job');
const openPopupProfile = document.querySelector('.button_type_edit');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const listContainer = document.querySelector('.places');
const templatePlace = document.querySelector('.template');
const openPopupPlaces = document.querySelector('.button_type_add-card');
const popupPlaces = document.querySelector('.popup_place_places');
const formPlaces = popupPlaces.querySelector('.popup__container');
const closePopupPlaces = formPlaces.querySelector('.button_type_close');
const placeInput = formPlaces.querySelector('.popup__input_type_place');
const linkInput = formPlaces.querySelector('.popup__input_type_link');
const popupPicture = document.querySelector('.popup_place_picture');
const popupImage = popupPicture.querySelector('.popup__image');
const popupTitle = popupPicture.querySelector('.popup__title');
const formPicture = popupPicture.querySelector('.popup__container');
const closePopupPicture = formPicture.querySelector('.button_type_close');


function togglePopup(popup) {

  popup.classList.toggle('popup_opened');
}

function openProfilePopup() {

  nameInput.value = nameProfile.textContent;

  jobInput.value = jobProfile.textContent;

  togglePopup(popupProfile);
}

// function closePopupProfileOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopup();
//   }
// }

function editProfileFormSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;

  togglePopup(popupProfile);
}

function openPlacePopup() {

  placeInput.value = '';

  linkInput.value = '';

  togglePopup(popupPlaces);
}

// function closePopupPlacesOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopupPlaces();
//   }
// }

function renderInitialCards() {
  const cards = initialCards.map(getItem);

  listContainer.append(...cards);
}

function getItem(item) {
    const newItem = templatePlace.content.cloneNode(true);
    const textPlace = newItem.querySelector('.place__title');
    const placeImage = newItem.querySelector('.place__image');
    const removePlace = newItem.querySelector('.button_type_remove');
    const likePlace = newItem.querySelector('.button_type_like');

    textPlace.textContent = item.name;
    placeImage.src = item.link;
    placeImage.alt = item.name;

    removePlace.addEventListener('click', deleteCard);

    likePlace.addEventListener('click', likeCard);

    placeImage.addEventListener('click', openImagePopup);

return newItem;
}

renderInitialCards();

function formSubmitHandlerPlaces (evt) {
  evt.preventDefault();

  listContainer.prepend(getItem({name: placeInput.value, link: linkInput.value}));

  placeInput.value = '';
  linkInput.value = '';

  togglePopup(popupPlaces);
}

function deleteCard(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.place');
  targetItem.remove();
}

function likeCard(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.button_type_like');
  targetItem.classList.toggle('button_clicked');
}

function openImagePopup(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.place__image');
  const targetTitle = targetEl.nextElementSibling;

  togglePopup(popupPicture);

  popupImage.src = targetItem.src;

  popupImage.alt = targetItem.alt;

  popupTitle.textContent = targetTitle.textContent;
}


openPopupProfile.addEventListener('click', () => {openProfilePopup()});
closePopupProfile.addEventListener('click', () => {togglePopup(popupProfile)});
//popupProfile.addEventListener('click', closePopupProfileOverlay);
formProfile.addEventListener('submit', editProfileFormSubmitHandler);
openPopupPlaces.addEventListener('click', () => {openPlacePopup(popupPlaces)});
closePopupPlaces.addEventListener('click', () => {togglePopup(popupPlaces)});
//popupPlaces.addEventListener('click', closePopupPlacesOverlay);
formPlaces.addEventListener('submit', formSubmitHandlerPlaces);
closePopupPicture.addEventListener('click', () => {togglePopup(popupPicture)});
