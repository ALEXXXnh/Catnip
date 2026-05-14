
const cursor = document.querySelector('.custom-cursor');
      document.addEventListener('mousemove', (e) =>
      {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

      });

      document.addEventListener('mouseenter', (e) =>
      {
        cursor.classList.add('cursor-active')

      });
      document.addEventListener('mouseleave',() =>
      {
        cursor.classList.remove('cursor-active');
      });


const game1button = document.getElementById ('buttonchangepage1');
        const homepage = document.getElementById('homepage')
        const game1 = document.getElementById('game1')

        game1button.addEventListener('click', () => {
            homepage.style.display = 'none'
            game1.style.display = 'flex';
        });

function back() {

       document.getElementById('game1').style.display = 'none'
       document.getElementById('homepage').style.display = 'block'

       game1button.addEventListener('click', () => {
              game1.style.display = 'none';
              homepage.style.display = 'block'
        });

        const game1button = document.getElementById ('buttonchangepage1');
        const homepage = document.getElementById('homepage')
        const game1 = document.getElementById('game1')
            const rows = 3;
            const columns = 3;
            const board = document.getElementById('puzzle-board');

        game1button.addEventListener('click', () => {
            homepage.style.display = 'none'
            game1.style.display = 'flex';


            if (board) {
            board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    }s
        });
}      





