const cursor = document.querySelector('.custom-cursor');

      cursor.addEventListener('mousemove', (e) =>
      {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

      });
    


