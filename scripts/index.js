//Side Bar Scroll Animation
const button = document.querySelector('.nav-menu');
const buttonIcon = document.querySelector('.nav-menu img');
const navBarContainer = document.getElementById('nav-bar');

button.addEventListener('click', () => {
    const visibility = navBarContainer.getAttribute('data-visible');
     if(visibility === 'false'){
        navBarContainer.setAttribute('data-visible', 'true');
        buttonIcon.setAttribute('src', './resources/images/bx-right-arrow-alt.svg');
     }else if(visibility === 'true'){
        navBarContainer.setAttribute('data-visible', 'false');
        buttonIcon.setAttribute('src', './resources/images/bx-menu.svg');
     } 
});
//-----------------

//Banner Roles Cycle
const rolesElement = document.getElementById('rolesFade');
const roles = ['Freelancer', 'Computer Engineering Student', 'Full Stack Developer'];
let rolesIndex = 1; // not sure why this works but setting it to zero repeats the 0 index twice

function fadeAnimation(){
    rolesElement.animate([
        {
            opacity : '0'
        },
        {
            opacity : '1',
        }
    ],{
        duration : 1000,
        iterations : 2,
        direction : 'alternate' 
    });
    rolesElement.style.opacity = '0';
    rolesElement.innerHTML = roles[rolesIndex];
    rolesIndex = rolesIndex === roles.length -1 ? 0 : rolesIndex + 1;
    setTimeout(fadeAnimation, 2000);
}     
fadeAnimation();
//------------------------

//Banner background glow
const banner = document.querySelector('.banner');
function changeBackgroundColor(){
    const bgState  = banner.getAttribute('background');
    if(bgState === 'main'){
        banner.setAttribute('background', 'secondary');
    }else if(bgState === 'secondary'){
        banner.setAttribute('background', 'main');
    }
}
setInterval(changeBackgroundColor, 5000);


//Banner Scroll
const main = document.querySelector('main');
const viewportHeight = window.innerHeight;
console.log("viewport height: " + viewportHeight);
function onScrollAnimations(){
    //check if menu is scrolled
    const checkMediaQuery = window.matchMedia('only screen and (max-width:580px)').matches;
    const visibility = navBarContainer.getAttribute('data-visible');
    const rect = main.getBoundingClientRect();
    console.log("Main top: " + rect.top);
    if(rect.top < viewportHeight - 35){
        if (!checkMediaQuery) {
            navBarContainer.style.backgroundColor = "var(--clr-phrases-theme)";
        }
        banner.setAttribute("scrolled", "true");
    }else {
        if(!checkMediaQuery){
            navBarContainer.style.backgroundColor = "transparent";
        }
        banner.setAttribute("scrolled", "false");
        if(visibility === "false"){
            buttonIcon.setAttribute("src", "./resources/images/bx-menu.svg");
        }else{
            buttonIcon.setAttribute("src", "./resources/images/bx-right-arrow-alt.svg");
        }
    }
    //check for mobile menu hamburger icon
    if(rect.top <= 0){
        if(visibility === "false"){            
            buttonIcon.setAttribute("src", "./resources/images/bx-menu-black.svg");
        }else{
            buttonIcon.setAttribute("src", "./resources/images/bx-right-arrow-alt-black.svg");
        }
    }

}
setInterval(onScrollAnimations, 25);
/*banner.addEventListener('wheel', () => {
    banner.style.backgroundColor = 'blue';
});
main.addEventListener('wheel', () => {
    banner.style.backgroundColor = "yellow";
})*/
//---------------


//Typing Animation
const introPhrase = document.getElementById('introduce');
const phrasesToCycle = [
    "ENTHUSIASTIC COMPUTER ENGINEERING STUDENT",
    "LOVES PROGRAMMING",
    "HIGHLY MOTIVATED TO LEARN",
];

let phrasePtr = 0;
let text = phrasesToCycle[phrasePtr];
introPhrase.innerHTML = "";
let i = 0;
let speed = 50;
let dramaticPause = 500;
function typingAnimation(){
    if(i >= text.length){
        phrasePtr++;
        if(phrasePtr >= phrasesToCycle.length){
            phrasePtr = 0;
        }
        text = phrasesToCycle[phrasePtr];
        i = 0;
        introPhrase.innerHTML = "";
    }  
    introPhrase.innerHTML += text.charAt(i);
        i++;
    if(i === text.length){
        setTimeout(typingAnimation, dramaticPause);
    }else{
        setTimeout(typingAnimation, speed);
    }
}
typingAnimation();
//---------------------------