// Your code goes here

// alert when page has finished loading
window.addEventListener('load', (event) => {
    alert('Get your travel on!');
})

// mouseover to highlight destination picks
const destinationPick = document.querySelectorAll('.destination');
destinationPick.forEach((pick) => {
    pick.addEventListener('mouseover', () => {
        pick.style.backgroundColor = '#FFFF99';
        pick.style.color = 'blue';
    });
    pick.addEventListener('mouseout', () => {
        pick.style.backgroundColor = 'white';
        pick.style.color = 'black';
    });
})

// make window transparent while scrolling, single-click to restore
const bg = document.querySelector('body');
document.addEventListener('scroll', (event) => {
    bg.style.opacity = '0.5';

    document.addEventListener('click', (event) => {
        bg.style.opacity = '1';
    })
})

// single-click to make Fun Bus image grayscale, double-click to remove image
const busImage = document.querySelector('.home img');
busImage.addEventListener('click', (event) => {
    event.target.style.filter = 'grayscale(100%)';

    busImage.addEventListener('click', (event) => {
        event.target.style.filter = 'none';
    });

    busImage.addEventListener('dblclick', (event) => {
        event.target.style.display = 'none';
    })
})

// keydown to change background color
const body = document.querySelector('body');
document.addEventListener('keydown', (event) => {
    body.style.backgroundColor = '#C0C0C0';

    document.addEventListener('keyup', (event) => {
        body.style.backgroundColor = 'white';
    })
})

// display warning for less fun if window size is decreased
window.addEventListener('resize', (event) => {
    alert('Watch out! Less fun ahead!');
})

// prevent refresh
const links = document.querySelectorAll('.nav-link');
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Default behavior prevented successfully.');
    });
})

// stop propagation
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        event.stopPropagation();
    });
})