// code for navigation bar addition and removal
let navAddBtn = document.getElementById('nav-btn');
let navBar = document.getElementById('navigation');
let navRemoveBtn = document.getElementById('remove-nav');

navAddBtn.addEventListener('click', () =>{
    navBar.style.transform = 'translateY(0)';
    navAddBtn.style.display = 'none';
});

navRemoveBtn.addEventListener('click', () =>{
    navBar.style.transform = 'translateY(-150%)';
    navAddBtn.style.display = 'block';
});

//close navigation bar on click of any list item
let navLi = document.querySelectorAll('#navigation ul li');
navLi.forEach((item) =>{
    item.addEventListener('click', ()=>{
        navBar.style.transform = 'translateY(-150%)';
        navAddBtn.style.display = 'block';
    })
})


// code for contact form addition and removal
let contactBtn = document.getElementById('get-in-touch');
let cancelForm = document.getElementById('cancel-form');
let formDiv = document.querySelector('.contact');

contactBtn.addEventListener('click', () =>{
    formDiv.classList.add('move');
    document.querySelector('.main').style.opacity = `0.1`;
});

cancelForm.addEventListener('click', () =>{
    formDiv.classList.remove('move');
    document.querySelector('.main').style.opacity = `1`;
});


// change get in touch button position
window.addEventListener('scroll', () => {
    if (window.scrollY < contactBtn.getBoundingClientRect().y) {
        contactBtn.innerHTML = `Get In Touch`;
        contactBtn.classList.remove('round-get-in-touch');
    }
    if (window.scrollY >= contactBtn.getBoundingClientRect().y) {
        contactBtn.innerHTML = `<i class="fa fa-envelope-o" aria-hidden="true"></i>
        `;
        contactBtn.classList.add('round-get-in-touch');
    }
})



// skills section
const skillsArray = [
    'Front-end Development', 'JavaScript', 'HTML', 'CSS', 'Java', 'SQL', 'Photoshop',
    'Git & Github', 'Unix', 'RHEL Administration', 'Cloud Computing', 'ITIL Implementation',
    'Python', 'Kotlin', 'Android Development', 'SolidWorks', 'CAD'
];

var tagCloud = TagCloud('.Sphere',skillsArray, {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 225,
    keep: true,
    // itemClass: 'sphere-element'
});