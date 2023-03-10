
let ageTile= document.querySelector('#Yng');
let stateTile= document.querySelector('#Med');
let old= document.querySelector('#Old');
let reset= document.querySelector('Reset');

ageTile.addEventListener('click',popOutAge);

function popOutAge(){
    console.log('Age hover');
    const dd= document.createElement('div')
    const guy=dd.textContent('dropdown in theoru');
    dd.appendChild(guy);
}