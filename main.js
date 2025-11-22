//const imagens =document.querySelectorAll(".estudantes-img")
const imagens = document.getElementsByClassName("estudantes-img")



for(let i = 0; i < imagens.length; i++){
    imagens[i].addEventListener('click',()=>{
        alert("Para com isso meo! D:<")
    })
}
