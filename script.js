
const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const skillsBtn = document.querySelector("#skills-btn");
const contactBtn = document.querySelector("#contact-btn");

const homePage = document.querySelector("#home-page");
const aboutPage = document.querySelector("#about-page");
const skillsPage = document.querySelector("#skills-page");
const contactPage = document.querySelector("#contact-page");
const homeh1 = document.querySelector("#home-h1")

const crsr = document.querySelector("#crsr")

window.addEventListener("mousemove",(e)=>{
    gsap.to(crsr , {
        x:e.clientX,
        y:e.clientY,
        duration:0.5,
        ease:"power3.out"
    })
})

gsap.from(homeh1 , {
    y:50,
    duration:3
})

homeBtn.addEventListener("click",()=>{
    homePage.style.zIndex = "2";
    aboutPage.style.zIndex = "0";
    skillsPage.style.zIndex = "0";
    contactPage.style.zIndex = "0";
})
aboutBtn.addEventListener("click",()=>{
    homePage.style.zIndex = "0";
    aboutPage.style.zIndex = "2";
    skillsPage.style.zIndex = "0";
    contactPage.style.zIndex = "0";
})
skillsBtn.addEventListener("click",()=>{
    homePage.style.zIndex = "0";
    aboutPage.style.zIndex = "0";
    skillsPage.style.zIndex = "2";
    contactPage.style.zIndex = "0";
})
contactBtn.addEventListener("click",()=>{
    homePage.style.zIndex = "0";
    aboutPage.style.zIndex = "0";
    skillsPage.style.zIndex = "0";
    contactPage.style.zIndex = "2";
})

const images = [
    "images/img-1.jpeg",
    "images/img-2.jpeg",
    "images/img-3.jpeg",
    "images/img-4.jpeg",
    "images/img-5.jpeg",
    "images/img-6.jpeg",
    "images/img-7.jpeg",
    "images/img-8.jpeg",
];

const container = document.getElementById("home-page");

let currentImageIndex = 0;
let lastX = 0;
let lastY = 0;
let distanceThreshold = 180;

function createTrail(x, y) {
    const img = document.createElement("img");

    img.classList.add("image-trail");
    img.src = images[currentImageIndex];

    container.appendChild(img);

    currentImageIndex =
        (currentImageIndex + 1) % images.length;

    gsap.set(img, {
        x: x,
        y: y,
        scale: 0,
        opacity: 0,
        rotation: gsap.utils.random(-20, 20),
    });

    gsap.to(img, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
    });

    gsap.to(img, {
        scale: 0.2,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.in",
        onComplete: () => {
            img.remove();
        },
    });
}


window.addEventListener("mousemove", (e) => {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > distanceThreshold) {
        createTrail(e.clientX, e.clientY);

        lastX = e.clientX;
        lastY = e.clientY;
    }
}); 


// perfect till now