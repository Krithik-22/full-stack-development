console.log('Main JS loaded');

const currentPage = window.location.pathname;
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.style.textDecoration = 'underline';
  }
});
