var obrazki = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
var nr = 0;

function nastepny(){
var galeria = document.getElementById("galeria");
nr++;
if (nr >= obrazki.lenght) {
nr = 0;
}
galeria.src = "grafika/" + obrazki[nr];
}


function poprzedni(){
var galeria = document.getElementById("galeria");
nr--;
if (nr < 0) {
nr = obrazki.lenght - 1;
}
galeria.src = "grafika/" + obrazki[nr];
}

