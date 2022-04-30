// loader must be at top of js and body
window.addEventListener('load', ()=>{
    document.getElementById('loader-wrapper').classList.toggle('move-up');
})


let imageArea = document.getElementById('image-area');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let captionSpan = document.querySelector('#caption');;
let i = 1;


// add images here and html as well
let aboutImageArray = ['Gwalior Fort', 'Taj Mahal, Agra', 'tansen tomb, Gwalior', 'Sun Temple, Gwalior', 'Precious Moment', 'Abstract', 'Garden', 'Garden', 'Sunset', 'Sunrise', 'Abstract', "Abstract", 'ravines of chambal', 'India Gate, Delhi', 'India Gate, Delhi', 'Lotus Temple, Delhi', 'BMW M4', 'Abstract Product', 'Abstract', 'Abstract', 'Ladhedi Gate, Gwalior', 'Abstract Product','Waterfall'];

// function to set image in the display area
function setDisplay() {
    // imageArea.style.backgroundImage = `url(../images/photography/${i}.jpg)`;
    imageArea.style.backgroundImage = `none`;
    imageArea.innerHTML = ``;
    imageArea.innerHTML = `<img src="./images/photography/${i}.jpg" alt="">`;
    //set caption for image based upon index received
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
    if(i>=aboutImageArray.length){
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