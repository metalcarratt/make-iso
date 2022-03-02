function runMakeIso() {
    for (element of document.getElementsByClassName('wall_east')) {
        const width = element.offsetWidth;
        element.style.right = `-${width}px`;
        element.style.top = `-${width/2}px`;
    }
    
    for (element of document.getElementsByClassName('wall_north')) {
        const height = element.offsetHeight;
        element.style.top = `-${height}px`;
        element.style.left = `${height/2}px`;
    }
}

window.addEventListener('load', (event) => {
    runMakeIso();
});