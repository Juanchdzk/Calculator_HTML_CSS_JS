function lineas(){
    let sizeW = Math.random() * 12;
    let duracion = Math.random() * 3
    let ci = document.createElement('div');
    ci.setAttribute('class', 'circulos');
    document.body.appendChild(ci);
    ci.style.width = 2+sizeW+'px';
    ci.style.left = Math.random() * + innerWidth + 'px';
    ci.style.animationDuration = 2 + duracion+'s';

    setTimeout(function(){
        document.body.removeChild(ci)
    }, 5000);
}


setInterval(function(){
    lineas();
}, 150);
