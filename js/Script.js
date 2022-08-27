let btn = document.querySelector(".btn-scroll");
window.onscroll = function (){
    
    if (this.scrollY >= 100){
        btn.classList.add("show");
    }else {
            btn.classList.remove("show");
        
    }
};

btn.onclick = function (){
    window.scrollTo({
        top : 0,
        behavior:"smooth",

      });
    };
const accordion = document.getElementsByClassName('content-box');

for ( i = 0; i<accordion.lenght; i++){

    accordion[i].addEventListener('click',function(){
    this.classList.toggle('active')
    });
} ;

