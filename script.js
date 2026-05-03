

const game1button = document.getElementById('buttonchangepage1');
        const homepage = document.getElementById('homepage')
        const game1 = document.getElementById('game1')

        game1button.addEventListener('click', () => {
            homepage.style.display = 'none'
            game1.style.display = 'flex';
        });

function back() {
    document.getElementById('homepage').style.display = 'block'
    document.getElementById('game1').style.display = 'none'

     game1button.addEventListener('click', () => {
            game1.style.display = 'none';
            homepage.style.display = 'flex'
        });
}       