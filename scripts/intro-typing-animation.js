export function init(){
    const introPhrase = document.getElementById('introduce');
    const phrasesToCycle = [
        "ENTHUSIASTIC COMPUTER ENGINEERING STUDENT",
        "LOVES PROGRAMMING",
        "HIGHLY MOTIVATED TO LEARN",
    ];
    const cursor = "_";

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
}