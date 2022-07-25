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
const roles = ['Freelancer', 'CS Student', 'Full Stack Developer'];
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







