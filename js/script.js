const boutonmodale = document.querySelectorAll(".bouton");
const modale = document.querySelector(".modale")

for(var i=0;i<boutonmodale.length;i++){
    boutonmodale[i].addEventListener("click",openmodale);
}

function openmodale(){
    modale.classList.add("visible");
    modale.addEventListener("click",closemodale);
}

function closemodale(){
    modale.classList.remove("visible");
}
