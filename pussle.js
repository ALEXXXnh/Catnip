const cursor = document.querySelector('.custom-cursor');
      document.addEventListener('mousemove', (e) =>
      {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

      });

const button = document.querySelectorAll('button');

   button.forEach(button => {
    button.addEventListener('mouseenter', () =>
    {
      cursor.classList.add('active');
    });
    button.addEventListener('mouseleave', () =>
    {
      cursor.classList.remove('active');
    });
    
  });







const board = document.getElementById('board')
const size = 3;
const pieces = [];



