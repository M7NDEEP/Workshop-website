// JavaScript

// FOR BURGER 
const burger = document.querySelector('.burger');
const navContent = document.querySelector('#navcontent');

navContent.classList.add('hide');

burger.addEventListener('click', () => {
  navContent.classList.toggle('hide');
}); 


function alertfnc(){
    alert('Booked, Check you Email for details.')
}