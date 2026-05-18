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







const board = document.querySelector('.board-container')

const pieces = document.querySelectorAll('.draggable-piece-div')
  pieces.forEach((piece, index) => {
    if(!piece.id) {
      piece.id = 'piece-' + index
      ;
    }

  
   pieces.addEventListener('dragstart', (e) =>
   {
    e.dataTransfer.setdata('text/plain', e.target.id);
   });
  });
  
  const size = 3;
  for (let i = 0;  i < size * size; 1++) {
      const slot = document.createElement('div');

      slot.classList.add('board-slot');

      slot.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
      slot.addEventListener('drop', (e) => {
        e.preventDefault();

        const draggedPieceId =
        e.dataTransfer.getData('text/plain');

        const draggedPiece = document.getElementById(draggedPieceId);
        if (slot.children.length === 0 && draggedPiece) {
          slot.appendChild(draggedPiece);
        }
      });
      board.appendChild(slot);
  }


