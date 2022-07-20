export function init(){
    const button = document.querySelector('.nav-menu');
    const menu = document.querySelector('.menu');
    const banner = document.getElementById('banner');

    const check = document.querySelector('.item-1 #main-heading');
    function getNumericalValue(fromString){
        let numerical = fromString.substring(0, fromString.length -2);
        return parseFloat(numerical);
    }


    button.addEventListener('click', () => {
        banner.style.opacity = '0.8';
        button.innerHTML = '<img id="nav-menu" src="./resources/images/bx-right-arrow-alt.svg"/>';
        var timer = setInterval(() => {
            let widthOfMenu = window.getComputedStyle(menu).getPropertyValue('width');
            check.innerHTML = widthOfMenu;
            if(widthOfMenu === '35vw'){
                clearInterval(timer);
            }else{
                let widthOfMenuFloat = getNumericalValue(heightOfMenu);
                widthOfMenuFloat += 1;
                widthOfMenu = widthOfMenuFloat + 'vw';
                menu.style.width = widthOfMenu;
            }
        },10)}
    );
};

