export function init(){
    const role1 = document.getElementById('role-1');
    const roles = ['CS Student', 'Full Stack Developer', 'Freelancer'];
    let rolesIndex = 1; // not sure why this works but setting it to zero repeats the 0 index twice
    let opacityState = true; //true -> 1; false -> 0


    function fadeAnimation(){
        let opacity = window.getComputedStyle(role1).getPropertyValue('opacity');
        let opacityNum = parseFloat(opacity);
        if(opacityState){
            opacityNum -= 0.05;
            opacity = opacityNum.toString();
            role1.style.opacity = opacity;
            if(opacity === '0'){
                opacityState = false;
                role1.innerHTML = roles[rolesIndex];
                rolesIndex = rolesIndex + 1;
                if(rolesIndex >= roles.length){
                    rolesIndex = 0;
                }
            }
        }else{
            opacityNum += 0.05;
            opacity = opacityNum.toString();
            role1.style.opacity = opacity;
            if(opacity === '1'){
                opacityState = true;
            }
        } 
        setTimeout(fadeAnimation, 50);  
    }
    fadeAnimation();     
}








