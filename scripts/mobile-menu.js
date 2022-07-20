export function init(){
    const button = document.querySelector('.nav-menu');
    const menu = document.querySelector('.menu');
    const banner = document.getElementById('banner');
    let rollingStatus = true; //true-> roll Out, false-> roll Back

    const check = document.querySelector('.item-1 #main-heading');

    
    function getNumericalValue(fromString){
        let numerical = fromString.substring(0, fromString.length - 2);
        return parseFloat(numerical);
    }

    var initRoll = (event) => {
        if(rollingStatus){
            banner.style.opacity = '0.8';
            button.innerHTML = '<img id="nav-menu" src="./resources/images/bx-right-arrow-alt.svg"/>';
            var timer = setInterval(() => {
                let widthOfMenu = window.getComputedStyle(menu).getPropertyValue('width');
                let widthOfMenuFloat = getNumericalValue(widthOfMenu);
                if(widthOfMenuFloat >= 150){
                    rollingStatus = false;
                    clearInterval(timer);
                }else{
                    widthOfMenuFloat += 5;
                    widthOfMenu = widthOfMenuFloat + 'px';
                    menu.style.width = widthOfMenu;
                }
            },5);
        }else{
            banner.style.opacity = '1';
            button.innerHTML = '<img id="nav-menu" src="./resources/images/bx-menu.svg"/>';
            var timer = setInterval(() => {
                let widthOfMenu = window.getComputedStyle(menu).getPropertyValue('width');
                let widthOfMenuFloat = getNumericalValue(widthOfMenu);
                if(widthOfMenuFloat <= 0){
                    rollingStatus = true;
                    clearInterval(timer);
                }else{
                    widthOfMenuFloat -= 5;
                    if(widthOfMenuFloat < 0){
                        widthOfMenuFloat = 0;
                    }
                    widthOfMenu = widthOfMenuFloat + 'px';
                    menu.style.width = widthOfMenu;
                }
            },5);
        }

    }

    button.addEventListener('click', initRoll);
};

