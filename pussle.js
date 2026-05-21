


const board = document.querySelector('.board-container')
const pieces = document.querySelectorAll('.draggable-piece')
     pieces.forEach((piece) => {
      piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
      });
     });
  
  const size = 3;

      const slots = document.querySelectorAll('.slot');
slots.forEach((slot) => {

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
  });




const cursor = document.querySelector('.custom-cursor');

      window.addEventListener('mousemove', (e) => {
      {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
      });
    