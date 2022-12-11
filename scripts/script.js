console.log("test");

// Menu button in Nav // 
var menuButton = document.querySelector("header nav button");
var navMenu = document.querySelector("nav ul:last-of-type");

menuButton.addEventListener("click", openMenu);

function openMenu() {
    navMenu.classList.toggle("navAnders");
  }



// Character page 
// var uitklapPijl = document.querySelector(".characters main ul li button");
// var characterInfo = document.querySelector(".characters main ul li div");

// uitklapPijl.addEventListener("click", openCharacter);

// function openCharacter(){
//     characterInfo.classList.toggle("charactersUitgeklapt")
// }




// Character page uitklappen alle buttons
var buttons = document.querySelectorAll('.characters main ul li button');

console.log(buttons.length);

var i = 0;
while ( i < buttons.length ) {
    buttons[i].addEventListener("click",openKlappen);
    i = i + 1;
}

function openKlappen() {
    console.log(this.parentnode);
    this.nextElementSibling.classList.toggle('charactersUitgeklapt'); // div
    this.parentElement.classList.toggle('parentAnders'); // parent dus li
    this.classList.toggle('pijlAnders'); // button zelf
}



// EXTRA
var robin = document.querySelector('footer p strong');
var alles = document.querySelector("body");

robin.addEventListener("click", allesDraait);

function allesDraait() {
    alles.classList.toggle("extra");
  }


// SLIDE IN ON SCROLL

// met hulp van deze video: https://www.youtube.com/watch?v=T33NN_pPeNI&ab_channel=BeyondFireship

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsTwee = document.querySelectorAll('.hiddenTwee')

hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsTwee.forEach((el) => observer.observe(el));

