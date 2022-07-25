//Side Bar Scroll Animation
const button = document.querySelector('.nav-menu');
const menu = document.querySelector('.menu');
const banner = document.getElementById('banner');
const navBarContainer = document.getElementById('nav-bar');

let rollingStatus = true; //true-> roll Out, false-> roll Back

var initRoll = (event) => {
    if(rollingStatus){
        navBarContainer.style.left = '0';
        banner.style.opacity = '0.8';
        button.innerHTML = '<img id="nav-menu" src="./resources/images/bx-right-arrow-alt.svg"/>';
        menu.animate([
            {
                width: '0vw'
            },
            {
                width: '40vw',
                animationPlayState: 'paused'
            }
        ],{
            duration: 250,
            iterations: 1
        });
        menu.style.width = '40vw';
        rollingStatus  = false;
    }else{
        navBarContainer.style.left = '90%';
        banner.style.opacity = '1';
        button.innerHTML = '<img id="nav-menu" src="./resources/images/bx-menu.svg"/>';
        menu.animate([
            {
                width: '40vw'
            },
            {
                width: '0vw',
                animationPlayState: 'paused'
            }
        ],{
            duration: 250,
            iterations: 1
        });
        menu.style.width = '0vw';
        rollingStatus = true;
    }

}

button.addEventListener('click', initRoll);
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







