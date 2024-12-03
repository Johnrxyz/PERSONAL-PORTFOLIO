function showSidebar(){
    const phonebar = document.querySelector('.phonebar');
    phonebar.style.display = 'flex'
}

function hideSidebar(){
    const phonebar = document.querySelector('.phonebar');
    phonebar.style.display = 'none'
}

function showSocials() {
    const socials = document.querySelectorAll('.socialItem');
    socials.forEach(item => {
        item.style.display = item.style.display === 'none' || item.style.display === '' ? 'block' : 'none';
    });
}
