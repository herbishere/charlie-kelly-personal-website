var images = document.getElementsByClassName("carousel-images-list-member");
var numImages = images.length;
var buttonPrev = document.getElementById("button-prev");
var buttonNext = document.getElementById("button-next");
var buttons;

/* dynamically create buttons for each image in html */
function createButton(number) {
    var button = document.createElement("button");
    button.classList.add("carousel_button_slide");
    button.id = "carousel_button" + number;
    return button;
}

function addButtons() {
    /* add buttons to navigation for each image */
    var carousel_nav = document.querySelector(".button-slide-selection");
    for (var current = 0; current < numImages; current++) {
        carousel_nav.appendChild(createButton(current + 1));
    }
    /* make the first button the current button */
    document.querySelector(".carousel_button_slide").classList.add("carousel_button_slide_current");
    return document.getElementsByClassName("carousel_button_slide");
}

function moveFront(buttonNumber) {
    /* get current image and remove as the current */
    var oldFrontImage = document.getElementById("current-image");
    oldFrontImage.removeAttribute("id");
    /* set new current image */
    images[buttonNumber].id = "current-image";
}

function selectButton(buttonNumber) {
    /* get currently seleceted button and remove */
    var oldSelectedButton = document.querySelector(".carousel_button_slide_current");
    oldSelectedButton.classList.remove("carousel_button_slide_current");
    /* set new current button */
    buttons[buttonNumber].classList.add("carousel_button_slide_current");
}

buttons = addButtons();

for (var start = 0; start < numImages; start++) {
    var makeButtonsClick = function (buttonNumber) {
        buttons[buttonNumber].addEventListener("click", event => {
            selectButton(buttonNumber);
            moveFront(buttonNumber);
        });
    }(start);

}