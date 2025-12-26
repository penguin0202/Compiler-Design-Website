const sidebar = document.querySelector('.sidenav');
const content = document.querySelector('.content');

function adjustContentPosition() {
  content.style.marginLeft = sidebar.offsetWidth + 'px'; // offset content by actual width in pixels
}

// Run on load and resize
window.addEventListener('load', adjustContentPosition);
window.addEventListener('resize', adjustContentPosition);