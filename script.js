document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('mySidenav').classList.add('active');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('mySidenav').classList.remove('active');
});

let cpt = 0;
const thumbnails = document.querySelectorAll(".thumbnail");
const largeImg = document.querySelector("#largeImage");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const captionElement = document.getElementById("caption");




// Réinitialiser les styles des miniatures
function resetThumbnails() {
    thumbnails.forEach(thumbnail => {
        thumbnail.style.transform = "";
        thumbnail.style.borderColor = "transparent";
    });
}

// Afficher une image en grand
function showImage(index) {
    resetThumbnails();
    const thumbnail = thumbnails[index];
    largeImg.src = thumbnail.src;
    captionElement.textContent = thumbnail.getAttribute("data-caption");
    thumbnail.style.transform = "scale(1.1)";
    thumbnail.style.borderColor = "#fff";
}

// Aller à l'image suivante
function slideNext() {
    cpt = (cpt + 1) % thumbnails.length;
    showImage(cpt);
}

// Aller à l'image précédente
function slidePrev() {
    cpt = (cpt - 1 + thumbnails.length) % thumbnails.length;
    showImage(cpt);
}

// Événements pour les boutons
prev.addEventListener("click", slidePrev);
next.addEventListener("click", slideNext);

// Afficher une image au clic sur une miniature
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        cpt = index;
        showImage(cpt);
    });
});

// Initialiser avec la première image
showImage(cpt);
