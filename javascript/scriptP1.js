// loader must be at top of js and body
window.addEventListener('load', ()=>{
    document.getElementById('loader-wrapper').classList.toggle('move-up');
    anime(animeObj); // text animation olay on page fully load
})


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
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 225,
    keep: true,
});



let animeObj = {
    targets: '#svg-name path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    // delay: function(el, i) { return i * 200 },
    delay: 1000,
    direction: 'alternate',
    loop: false
};


// tooltip for education section
let eduCaptions = ['<span>Class X &#183 Science &#183 10 CGPA &#183 2013</span>', '<span>Class XII &#183 Science &#183 86% &#183 2015</span>', '<span>B.E. &#183 Automobile &#183 7.56 CGPA &#183 2015-2019</span>']
document.querySelectorAll('.each-edu').forEach((item, index) =>{
    item.addEventListener('mouseenter', () =>{
        document.getElementById('edu-caption').innerHTML = '';
        document.getElementById('edu-caption').classList.remove('hide-caption')
        document.getElementById('edu-caption').innerHTML = `${eduCaptions[index]}`;
    })

    item.addEventListener('mouseleave', () =>{
        document.getElementById('edu-caption').classList.add('hide-caption')
    })
})



// working of contact form
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', sendMessage);

function sendMessage(e) {
    e.preventDefault(); //very important step
    let name = document.getElementById('contact-name').value;
    let message = document.getElementById('message').value;
    let email = document.getElementById('contact-email').value;
    let subject = document.getElementById('contact-subject').value;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "portfolio.anmol@gmail.com",
        Password : "portfolio@603.anmol",
        To : 'portfolio.anmol@gmail.com',
        From : email,
        Subject : subject,
        Body : `name - ${name} <br> email id - ${email} <br> subject - ${subject} <br> message - ${message}`
    }).then(
      message => {
          if (message == 'OK') {
            alert('Mail Sent Successfully. Thanks for connecting!');
          }
          else {
              alert(`error - ${message}`);
          }
      }
    ).then(()=>{
        contactForm.reset();
    });
    
}
