console.log("Portfolio Loaded Successfully");

/* ==============================
NAVBAR SCROLL EFFECT
============================== */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 50){
        navbar.style.padding="10px 25px";
        navbar.style.background="rgba(8,8,20,.95)";
    }
    else{
        navbar.style.padding="18px 25px";
        navbar.style.background="transparent";
    }
});

/* ==============================
MOBILE MENU
============================== */
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
if(menuBtn){
menuBtn.addEventListener("click",()=>{
    mobileMenu.classList.toggle("active");
    const icon = menuBtn.querySelector("i");
    if(mobileMenu.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }
    else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});
}

/* Close mobile menu after clicking link */
const mobileLinks = document.querySelectorAll(".mobile-menu a");
mobileLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        mobileMenu.classList.remove("active");
        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});
function openResume(){
    window.open(
        "resume/Vishakha_Resume.pdf",
        "Resume",
        "width=850,height=650,resizable=yes,scrollbars=yes"
    );
}

/* ==============================
SKILL CARD EXPAND
============================== */
const skillCards=document.querySelectorAll(".skill-card");
skillCards.forEach(card=>{
card.addEventListener("click",()=>{
    skillCards.forEach(item=>{
        if(item!==card){
            item.classList.remove("active");
        }
    });
    card.classList.toggle("active");
});
});

/* ==============================
SCROLL REVEAL ANIMATION
============================== */
const animatedElements=document.querySelectorAll(
".reveal-left, .reveal-right, .skills-title, .skill-reveal, .project-card, .contact-left, .contact-right"
);

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
    entry.target.classList.add("show");
}
});
},{
threshold:0.2
});

animatedElements.forEach(element=>{
observer.observe(element);
});

/* Skill stagger animation */
const skillRevealCards=document.querySelectorAll(".skill-reveal");
skillRevealCards.forEach((card,index)=>{
card.style.transitionDelay=`${index*0.15}s`;
});

/* ==============================
PROJECT MODAL
============================== */
const viewButtons=document.querySelectorAll(".view-btn");
const modals=document.querySelectorAll(".project-modal");
viewButtons.forEach(button=>{
button.addEventListener("click",()=>{
const modalId=button.dataset.modal;
const modal=document.getElementById(modalId);
if(modal){
    modal.classList.add("active");
}
});
});

/* Close Modal */
const closeButtons=document.querySelectorAll(".close-btn");
closeButtons.forEach(button=>{
button.addEventListener("click",()=>{
modals.forEach(modal=>{
modal.classList.remove("active");
});
});
});

/* Click outside modal */
modals.forEach(modal=>{
modal.addEventListener("click",(event)=>{
if(event.target===modal){
modal.classList.remove("active");
}
});
});

/* ==============================
IMAGE GALLERY SWITCH
============================== */
const galleries=document.querySelectorAll(".gallery");
galleries.forEach(gallery=>{
const mainImage=gallery.parentElement.querySelector(".main-preview");
const images=gallery.querySelectorAll("img");
images.forEach(image=>{
image.addEventListener("click",()=>{
mainImage.src=image.src;
});

});
});

/* ==============================
CONTACT FORM SUCCESS EFFECT
============================== */
const contactForm=document.getElementById("contactForm");
if(contactForm){
contactForm.addEventListener("submit",()=>{
const button=contactForm.querySelector(".send-btn");

button.innerHTML=
`<i class="fa-solid fa-check"></i> Message Sent`;
button.style.background=
"linear-gradient(135deg,#34d399,#10b981)";
button.style.color="#fff";
});
}

/* ==============================
BACK TO TOP BUTTON
============================== */
const topBtn=document.getElementById("topBtn");
if(topBtn){
window.addEventListener("scroll",()=>{
if(window.scrollY>400){
topBtn.style.opacity="1";
topBtn.style.visibility="visible";
}
else{
topBtn.style.opacity="0";
topBtn.style.visibility="hidden";
}
});

topBtn.addEventListener("click",()=>{
document
.getElementById("hero")
.scrollIntoView({
behavior:"smooth"
});
});
}

/* ==============================
INPUT ANIMATION
============================== */
const inputs=document.querySelectorAll(
".input-group input, .input-group textarea"
);
inputs.forEach(input=>{
input.addEventListener("focus",()=>{
input.parentElement.style.transform="scale(1.02)";
});
input.addEventListener("blur",()=>{
input.parentElement.style.transform="scale(1)";
});
});