const modalBtn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const button = document.getElementById('button');
const fn = document.getElementById('fn');
modalBtn.addEventListener('click', openModal);
function openModal(){
    modal.style.display = 'block';
}
closeBtn.addEventListener('click', closeModal);
function closeModal(){
    modal.style.display = 'none';
}
button.addEventListener('click', submitted);
function submitted(){
    button.textContent = 'Submitted';
    alert('Your Details Successfully Submitted :)');
}
