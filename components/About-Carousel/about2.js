// /*
class DotCreator{
    constructor(dot){
        this.ourDots = dot;
        // console.log(this.ourDots);
        this.data = this.ourDots.dataset.dots;
        // console.log(this.data);
        this.profileElement = document.querySelector(`.tmem2[data-dots="${this.data}"]`);
        // console.log(this.profileElement);

        this.newProfile = new ProfileCreator(this.profileElement);
        // this.dotSelect = this.dotSelect.bind(this);
        this.ourDots.addEventListener('click', () => {
            this.dotSelect();
        });
    }
    // Methods
    dotSelect(){
        Array.from(allDots).forEach(function(dot){
            dot.style.backgroundColor = 'white';
        })
        Array.from(allDots2).forEach(function(dot){
            dot.style.backgroundColor = 'white';
        })
        this.ourDots.style.backgroundColor = 'green';
        this.newProfile.profileSelect();
    }
};


class ProfileCreator{
    constructor(profile){
        this.profile = profile;
    }
    // Methods
    profileSelect(){
        const profiles = document.querySelectorAll('.tmem2');
        Array.from(profiles).forEach((profile)=>profile.classList.remove('tmem-show'));
        this.profile.classList.toggle('tmem-show');
    }
}


const allDots = document.querySelectorAll('.dot');
allDots.forEach(function(dot){
    new DotCreator(dot);
    // dot.style.backgroundColor = 'green';
    // console.log(dot);
});
const allDots2 = document.querySelectorAll('.dot2');
allDots2.forEach(function(dot){
    new DotCreator(dot);
    // dot.style.backgroundColor = 'green';
    // console.log(dot);
});
// console.log(allDots);
// */

// ARROWS!!
// Arrow Functionality
// class ControlArrows{
//     constructor(element){
//         this.arrow =  element;
//         this.leftButton = this.document.querySelector('.left-button');
//         this.rightButton = this.document.querySelector('.right-button');
//         leftButton.addEventListener('click', () => {
//             this.plusSlides(-1);
//         });
//         rightButton.addEventListener('click', () => {
//             this.plusSlides(1);
//         });
//     }
//     // Methods
// }
// // Establish baseline index;
// let slideIndex = 1;
// showSlides(slideIndex);
// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("tmem2");
//     let dots = document.getElementsByClassName("dot");
//     if(n > slides.length) {slideIndex = 1} 
//     if(n < 1) {slideIndex = slides.length}
//     for(i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     // for (i = 0; i < dots.length; i++) {
//     //     dots[i].className = dots[i].className.replace(" active", "");
//     // }
//     slides[slideIndex-1].style.display = "block"; 
//     dots[slideIndex-1].style.backgroundColor = 'green';
// }