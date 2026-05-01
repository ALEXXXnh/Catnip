
const gallerybutton = document.getElementById('photogalleryclick');
        const home = document.getElementById('home1');
        const photogalleryclick = document.getElementById('home1');

        gallerybutton.addEventListener('click', () => {
            home.style.display = 'none'
            (document.getElementById('photodecoration')).style.display = 'flex'
        });