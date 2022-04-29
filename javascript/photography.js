// loader must be at top of js and body
window.addEventListener('load', ()=>{
    document.getElementById('loader-wrapper').classList.toggle('move-up');
})



let imageArea = document.getElementById('image-area');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let i = 1;

// function to set image in the display area
function setDisplay() {
    imageArea.style.backgroundImage = `url(../images/photography/${i}.jpg)`;
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
    if(i>=21){
        return;
    }
    i++;
    setDisplay()
});

// node list of all images inside container div
let imagesNode = document.querySelectorAll('.container-item img');

// for each item of node FileList, of click of any item, we reterieve its index and update i accordingly and call function to set background of the display area
imagesNode.forEach((item, index)=>{
    item.addEventListener('click', () =>{
        i = index+1;
        setDisplay();
    })
})