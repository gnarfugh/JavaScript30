const panel = document.querySelectorAll('.panel');
const notPanel = document.querySelectorAll('panel.open-active');

function toggleOpen() {
    this.classList.toggle('open');
    this.classList.toggle('open-active');
}

function toggleActive(e) {
    if (e.propertyName.includes('open')) {
        this.classList.toggle('open-active');
    }
}

function removeActive() {
    if (e.propertyName.includes('open')) {
        this.ClassList.remove('open-active');
    }
}

panel.forEach(panel => panel.addEventListener('click', toggleOpen));
panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));
