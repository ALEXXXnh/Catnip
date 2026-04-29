 const game1button = document.getElementById('playaction');
        const home = document.getElementById('home')
        const game1 = document.getElementById('game1')

        game1button.addEventListener('click', () => {
            home.style.display = 'none'
            game1.style.display = 'flex';
        });


const gallerybutton = document.getElementById('photogalleryclick');
        const home1 = document.getElementById('home1')
        const photogalleryclick = document.getElementById('photogalleryclick')

        gallerybutton.addEventListener('click', () => {
            home.style.display = 'none'
            photogalleryclick.style.display = 'flex';
        });