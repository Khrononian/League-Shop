import rice from "./Functionality/loaded"

console.log('Loof')

window.addEventListener('load', () => {
    const mythic = document.querySelector('.mythic-items');
    const legendary = document.querySelector('.legendary-items');
    const epic = document.querySelector('.epic-items')
    const basic = document.querySelector('.basic-items');
    const starter = document.querySelector('.starter-items');
    const boot = document.querySelector('.boot-items');

    createElements(mythic, 'Food')
})

function createElements(location, text) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p')

    location.appendChild(p)
    p.innerText = text
}