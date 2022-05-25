const carouselImgs = document.getElementsByClassName("carousel-img");
const sliderDots = document.getElementsByClassName("dot");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let position=0;

next.addEventListener("click", moveToNext);
previous.addEventListener("click", moveToPrevious);

function moveToNext(){
    hideAllImgs();
    if(position==carouselImgs.length-1){
        position=0;
    }else{
        position++;
    }
    carouselImgs[position].classList.add("active");
    sliderDots[position].classList.add("dot-active");
}

function moveToPrevious(){
    hideAllImgs();
    if(position==0){
        position=carouselImgs.length-1;
    }else{
        position--;
    }
    carouselImgs[position].classList.add("active");
    sliderDots[position].classList.add("dot-active");
}

function hideAllImgs(){
    for(let i=0; i<carouselImgs.length;i++){
        carouselImgs[i].classList.remove("active");
        sliderDots[i].classList.remove("dot-active");
    }
}


function autoSlider(){
    setInterval(moveToNext, 5000);
}

autoSlider();