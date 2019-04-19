class CircleNavs{
    constructor(button){
        this.button = button;
        this.data = button.dataset.buttonnav
        this.infocontent = document.querySelector(`.site-info[data-buttonnav="${this.data}"]`);
        this.pginfo = new PgInfo(this.infocontent);
        this.button.addEventListener('click', () => this.select());
        // testing mouseover animation
        // this.button.addEventListener('mouseover', (event) => this.animatespin(event));
    }
    // Methods
    select() {
        const pgbuttons = document.querySelectorAll('.button-navs');
        Array.from(pgbuttons).forEach(function(button){
            button.classList.remove('rel-button-selected');
        });
        this.button.classList.toggle('rel-button-selected');
        this.pginfo.select();
    }
    // animatespin(event){
    //     event.target.style.color = "orange";
    //     event.currentTarget.style.backgroundColor = "yellow"
    // }
}

class PgInfo {
    constructor(info) {
        this.info = info;
    }
    //Methods
    select() {
        const siteinfo = document.querySelectorAll('.site-info');
        Array.from(siteinfo).forEach(function(info){
        info.classList.remove('show-MM-content');
    })
    this.info.classList.toggle('show-MM-content');
    }
}


const buttonnavs = document.querySelectorAll('.button-navs')
buttonnavs.forEach(function(button){
    new CircleNavs(button);
});
