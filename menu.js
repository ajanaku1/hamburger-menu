const menuIcn = document.getElementById('menu-icn');
const ham = document.getElementById('ham');
const cancelIcn = document.getElementById('cancel-icn');

function displayHam() {
    ham.classList.toggle('ham-visible')
}

menuIcn.addEventListener('click', displayHam)

function hideHam() {
    ham.classList.remove('ham-visible');
    ham.classList.add('ham-hidden');
}

cancelIcn.addEventListener('click', hideHam);