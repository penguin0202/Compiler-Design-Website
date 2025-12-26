const sidebar = document.querySelector('.sidenav');
const content = document.querySelector('.content');

function adjustContentPosition() {
  content.style.marginLeft = px(sidebar.offsetWidth); // offset content by actual width in pixels
}

// Run on load and resize
window.addEventListener('load', adjustContentPosition);
window.addEventListener('resize', adjustContentPosition);
window.addEventListener("load", print);

function print() {
    console.log(sidebar.offsetWidth);
}

function px(n) {
    return n + 'px';
}