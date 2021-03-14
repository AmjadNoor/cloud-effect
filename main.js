let text = document.getElementById('text');
window.addEventListener('scroll', function() {
  let value = window.scrollY;
  text.style.marginBottom = value * 0.5 + 'px';
})