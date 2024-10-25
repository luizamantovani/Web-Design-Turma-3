let changeI = false;
function changeImg(){
    var image = document.getElementById('myImg');
    
    if(!changeI){
        image.src = "Images/cat.jpg";
        changeI = true;
    } else{
        image.src = "Images/dog.jpeg"
        changeI = false;
    }
   
}

let changeA = false;
function changeTitle(){
    const title = document.querySelector('h1');
    if(!changeA){
        title.innerHTML = "Novo Título";
        changeA = true;
    } else{
        title.innerHTML = "Título";
        changeA = false;
    }

}

let changeP = false;
function changeParagrath(){
    const text = document.querySelector('p');
    if(!changeP){
        text.style.color = "red";
        changeP = true;
    }else{
        text.style.color = "black";
        changeP = false;
    }
}

function playAudio(){
    const audio = document.querySelector('audio');

    audio.play();
}

const buttons = document.querySelectorAll('.btn');

for (let button of buttons) {
    button.addEventListener('click', function() {
        for(let btn of buttons){
            btn.classList.toggle('btn');
        }
    })
}