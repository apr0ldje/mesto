const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popupElm = document.querySelector('.popup');
const formElm = document.querySelector('.popup__form-edit');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__title');

const nameInputForm = document.getElementById('popup__profile-name');
const jobInputForm = document.getElementById('popup__profile-title');


//Открытие popup и закрытие popup
function popupOpen() {
    popupElm.classList.add('popup_is-opened');
    nameInputForm.value = profileName.textContent;
    jobInputForm.value = profileJob.textContent;
}

function popupClose() {
    popupElm.classList.remove('popup_is-opened');
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);


//Функция изменения данных после введения их на форме
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInputForm.value;
    profileJob.textContent = jobInputForm.value;
    popupClose();
}

formElm.addEventListener('submit', formSubmitHandler);
