


const board = document.querySelector('.board-container')

const pieces = document.querySelectorAll('.draggable-piece')
  pieces.forEach((piece, index) => {
    if(!piece.id) {
pieces.addEventListener('dragstart', (e) =>
   {
    e.dataTransfer.setdata('text/plain', e.target.id);
   });
  }});
  
  const size = 3;
  for (let i = 0;  i < size * size; i++) {
      const slots = document.querySelectorAll('.slot');
forEach(
      slots.classList.add('slots');

      slots.addEventListener('dragover', (e) => {
        e.preventDefault();
      }));
      slots.addEventListener('drop', (e) => {
        e.preventDefault();

        const draggedPieceId =
        e.dataTransfer.getData('text/plain');

        const draggedPiece = document.getElementById(draggedPieceId);
        if (slots.children.length === 0 && draggedPiece) {
          slots.appendChild(draggedPiece);
        }
      });
      board.appendChild(slot);
  }


