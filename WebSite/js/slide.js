let slideIndex = 0,
    slider = document.getElementsByClassName("mySlider"),
    dots = document.getElementsByClassName("dot");

function reset() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }

};

function resetDot() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.background = "";
    }
};

let showSlides = () => {
    reset();
    slideIndex++;

    if (slideIndex > slider.length) {
        slideIndex = 1;
    }

    resetDot();

    dots[slideIndex - 1].style.background += "white";

    slider[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
};

function slideLeft() {
    reset();
    resetDot();
    dots[slideIndex - 1].style.background = "white";
    slider[slideIndex - 1].style.display = "block";
    slideIndex--;

};
function slideRight() {
    reset();
    resetDot();
    dots[slideIndex + 1].style.background = "white";
    slider[slideIndex + 1].style.display = "block";
    slideIndex++;
}


document.getElementById("prev").addEventListener("click", function () {
    if (slideIndex === 0) {
        slideIndex = slider.length;
    }

    slideLeft();

});

document.getElementById("next").addEventListener("click", function () {
    if (slideIndex === slider.length - 1) {
        slideIndex = -1;
    }
    slideRight();

});

showSlides();

document.getElementById("closeForm").addEventListener("click",function(){
    document.getElementById("miniCartForm").style.display = "none";
});

document.getElementById("basket").addEventListener("click",function(){
    document.getElementById("miniCartForm").style.display = "block";
});
