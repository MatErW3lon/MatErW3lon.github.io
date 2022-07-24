export function init(){
    
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
};

