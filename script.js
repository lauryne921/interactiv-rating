// let btn = document.queryElementById('btn-submit'); 

// let div = document.getElementById('global-content');

// let div_icon = document.createElement("div"); 
// div.appendChild(div_icon);

// let img = document.createElement("img"); 
// img.src = 'illustration-thank-you.svg', 
// div_icon.appendChild(img); 



// btn.addEventListener('click', function () ) {
    //div_icon.appendChild(img);
//}


let btn = document.getElementById('btn-submit');

let cardOne = document.getElementById('card1'); 
let cardTwo = document.getElementById('card2'); 

let btnTwo = document.getElementById('btn-submit2');





[btn, btnTwo].forEach(element=>element.addEventListener("click", function () {
    let cardOne = document.getElementById('card1'); 
    let cardTwo = document.getElementById('card2'); 
    cardOne.classList.toggle("hidden");
    cardTwo.classList.toggle("hidden");
}));


[...document.querySelectorAll("input[name='btn-number']")].forEach(element=>element.addEventListener("change", function (e) {
    const radioValue = e.target.value;
    document.querySelector('#choice-message #rating').innerText = radioValue;
}));