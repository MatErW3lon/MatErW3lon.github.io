export function init(){
    
    const button = document.querySelector('.nav-menu');
    const menu = document.querySelector('.menu');
    const banner = document.getElementById('banner');
    
    
    let rollingStatus = true; //true-> roll Out, false-> roll Back
 
    var initRoll = (event) => {
        if(rollingStatus){
            banner.style.opacity = '0.8';
            button.innerHTML = '<img id="nav-menu" src="./resources/images/bx-right-arrow-alt.svg"/>';
            menu.animate([
                {
                    width: '0vw'
                },
                {
                    width: '35vw',
                    animationPlayState: 'paused'
                }
            ],{
                duration: 250,
                iterations: 1
            });
            menu.style.width = '35vw';
            rollingStatus  = false;
        }else{
            banner.style.opacity = '1';
            button.innerHTML = '<img id="nav-menu" src="./resources/images/bx-menu.svg"/>';
            menu.animate([
                {
                    width: '35vw'
                },
                {
                    width: '0vw',
                    animationPlayState: 'paused'
                }
            ],{
                duration: 100,
                iterations: 1
            });
            menu.style.width = '0vw';
            rollingStatus = true;
        }

    }

    button.addEventListener('click', initRoll);
};

