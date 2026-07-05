const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (event) => {
  if (cursor) {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  }
});

document.querySelectorAll('.spellbook a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.spellbook a').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
