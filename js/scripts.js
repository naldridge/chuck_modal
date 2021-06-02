'use strict';

function buildQuote(theQuote) {
    //1. Select the Modal Element
    //2. Select the Paragraph Element from the Modal
    //3. Change the innerText of the Paragraph to read the quote

    const modalElement = document.querySelector('#modal p');
    modalElement.innerText = theQuote;
    toggleModal();
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        buildQuote(data.value);
    })
    .catch(function (error) {
        console.error("ERROR: ", error);
        return error;
    });
});

function toggleModal() {
    const modalOverlay = document.getElementById('overlay');
    
    modalOverlay.classList.toggle('visible');

}

const closeModalButton = document.getElementById('closeModal');

closeModalButton.addEventListener('click', function () {
    toggleModal();
})
