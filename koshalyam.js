const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});


$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})

// function init() {`  
//     `
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector(".main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(".main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, 
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });


//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();

// }
// init()

// var tl2 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".page4",
//         scroller:".main",
//         // markers:true,
//         start:"top 60%",
//         end:"top 55%",
//         scrub:3,
//     }
// })
// tl2.to(".main",{
//     backgroundColor:"#0f0d0d",
//     // duration:0.5,
//     // markers:true
// })
// tl2.to(".phases-wrapper h2",{
//     color:"#dadada"
// })
// tl2.to(".phases-wrapper p",{
//     color:"#707070"
// })
// tl2.to(".box1, .box2, .box3, .box4,.box5",{
//     backgroundColor:"#232323"
// })
// tl2.to(".test-card-body",{
//     backgroundColor:"#232323"
// })
// tl2.to(".section-header h1",{
//     color:"#fff"
// })


let lastScroll = window.scrollY;

        window.addEventListener('scroll', () => {
            const navbar = document.getElementById("navbar");
            if (!navbar) return;
        
            const currentScroll = window.scrollY;
            
            if (currentScroll > lastScroll && currentScroll > 20) {
                // Scrolling down - hide navbar
                navbar.style.top = "-50%";
            } else {
                // Scrolling up or at top - show navbar
                navbar.style.top = "0";
            }
            
            lastScroll = currentScroll;
        });