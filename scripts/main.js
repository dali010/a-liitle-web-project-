document.querySelector('html').onkeydown = pocking 

function pocking() {
    alert('Ouch! Stop poking me!');
}


let myImg = document.querySelector('img')
myImg.onclick= function() {
    let mySrc = myImg.getAttribute('src')

    if(mySrc === 'images/firefox-logo.jpg') {
        myImg.setAttribute('src','images/logo-Chrome-1.png')
    }
    else {
        myImg.setAttribute('src','images/firefox-logo.jpg')
    }
}

let myHeading = document.querySelector('h1');
let but = document.querySelector('button');

function userName() {
   let nom = prompt("Entrez votre nom");
   localStorage.setItem('name',nom);
   myHeading.innerHTML='Mozilla is cool'+ nom;
}

but.onclick= function() {
    userName();
}