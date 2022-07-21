//Открытие popup и закрытие popup
const popupBtn = document.querySelector('.profile__edit-button');
const popupCls = document.querySelector('.popup__close');
const popupElm = document.querySelector('.popup');

function popupOpen() {
    popupElm.classList.add('popup__is-opened');
}

function popupClose() {
    popupElm.classList.remove('popup__is-opened');
}

popupBtn.addEventListener('click', popupOpen);
popupCls.addEventListener('click', popupClose);


//Функция изменения данных после введения их на форме
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__title');

const nameInputForm = document.querySelector('.popup__profile-name');
const jobInputForm = document.querySelector('.popup__profile-title');

const popupSave = document.querySelector('.popup__save-button');

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameInput.textContent = nameInputForm.value;
    jobInput.textContent = jobInputForm.value;
}

popupElm.addEventListener('submit', formSubmitHandler);
popupSave.addEventListener('click', popupClose);