const sidenav = document.getElementById('sidenav');
const body = document.getElementById('body');

document.getElementById('open').addEventListener('click', () => {
    document.getElementById('open').style.cssText = "inset: 0 0 1px 1px"
    if (sidenav.classList.contains('close')) {
        sidenav.classList.remove('close');
        sidenav.classList.add('open');
        body.style.cssText = "width: 100%; height: 100vh; background-color: rgba(0,0,0,0.5); transition: background-color 0.5s";
    }
})

document.getElementById('close').addEventListener('click', () => {
    if (sidenav.classList.contains('open')) {
        sidenav.classList.remove('open');
        sidenav.classList.add('close');
        body.style.cssText = "background-color: transparent; width: 100%; transition: background-color 0.5s";
    }
})