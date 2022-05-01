// loader must be at top of js and body
window.addEventListener('load', ()=>{
    document.getElementById('loader-wrapper').classList.toggle('move-up');
})

let i = 0;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let imageArea = document.getElementById('image-area');
let captionSpan = document.querySelector('#caption');;

// add images here and html as well
let aboutImageArray = ['Hoverboard Surface Modeling', 'ferrari surface modeling','Mahindra BAJA - ATV', 'Electric go-Kart', 'transmission system', 'W8 Engine', 'Suspension System', 'Dual Drive Steering System - Major Project', 'Logos', 'Hoverboard Surface Modeling'];

// function to set image in the display area
function setDisplay() {
    if (i == 1) {
        imageArea.innerHTML = ``;
        imageArea.innerHTML = `<video src="./images/cad/My Hoverboard 1 HD.mp4" controls></video>`;
    }
    else if (i == 2) {
        imageArea.innerHTML = ``;
        imageArea.innerHTML = `<video src="./images/cad/My Ferrari {HD}.mp4" controls></video>`;
    }
    else {
        imageArea.innerHTML = ``;
        imageArea.innerHTML = `<img src="./images/cad/${i}.png" alt="">`;
    }
    captionSpan.innerHTML= `<span>${aboutImageArray[i-1]}</span>`;
}


// evelt listeners of navigation buttons
prev.addEventListener('click',()=>{
    if(i<=1){
        return;
    }
    i--;
    setDisplay()
});

next.addEventListener('click',()=>{
    if(i>=10){
        return;
    }
    i++;
    setDisplay()
});