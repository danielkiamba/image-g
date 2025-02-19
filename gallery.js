

function toggleDarkMode(){
    const myClass = document.getElementsByTagName(`body`)[0];
    myClass.classList.toggle(`darkmode`);
   
}

function gridView(){
   const gridView = document.getElementById(`grid`);
    gridView.classList.add(`grid`,);
}

function colView(){
    const columnView = document.getElementById(`grid`);
    columnView.classList.remove(`grid`);
}

function toggleMenu(){
    const menu = document.querySelector(`header`);
    menu.classList.toggle(`hidden`);
}

function galleryOn(){
    const gallery = document.getElementById(`grid`);
    gallery.classList.add(`border`,`bg-white`);
}

function galleryOff(){
    const galleryNone = document.getElementById(`grid`);
    galleryNone.classList.remove(`bg-white`,`border`);
}