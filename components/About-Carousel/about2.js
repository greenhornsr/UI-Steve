class DotCreator{
    constructor(dot){
        this.ourDots = dot;
        // console.log(this.ourDots);
        this.data = this.ourDots.dataset.dots;
        // console.log(this.data);
        this.profileElement = document.querySelector(`.tmem2[data-dots="${this.data}"]`);
        // console.log(this.profileElement);

        this.newProfile = new ProfileCreator(this.profileElement);
        this.dotSelect = this.dotSelect.bind(this);
        this.ourDots.addEventListener('click', () => {
            this.dotSelect();
        });
    }
    // Methods
    dotSelect(){
        Array.from(allDots).forEach(function(dot){
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
})
// console.log(allDots);