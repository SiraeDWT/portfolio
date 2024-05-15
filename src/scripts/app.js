"use strict";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// ----- Button to the top -----
window.addEventListener('scroll', function() {
    const button = document.querySelector('.top');

    if(button){
        if (window.scrollY > 250) {
            button.classList.remove('top--hide');
            button.classList.add('top--show');
        } else {
            button.classList.remove('top--show');
            button.classList.add('top--hide');
        }
    }
});

// ----- CANVAS -----
function initializeCanvas(id, context, canvasHeight) {
    let can = id;
    let ctx = context;

    function resizeCanvas() {
        can.width = window.innerWidth;
        can.height = window.innerHeight;
        clear();
    }

    can.style.background = "#060D19";

    let p = [];

    function clear(){
        ctx.fillStyle="rgba(6, 13, 25, 0.15)";
        ctx.fillRect(0,0,can.width,can.height);
    }

    function particle(x,y,speed,c){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.upd = function(){
            ctx.strokeStyle = c;
            ctx.lineWidth = 1;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);

            this.x += this.speed.x;
            this.y += this.speed.y;

            ctx.lineTo(this.x,this.y);
            ctx.stroke();

            this.ang = Math.atan2(this.speed.y,this.speed.x);
            this.mag = Math.sqrt(this.speed.x**2 + this.speed.y**2);

            let op = [this.ang+Math.PI/4,this.ang-Math.PI/4];
            let ch = Math.floor(Math.random()*op.length);

            if(Math.random() < 0.05) {
                this.speed.x = Math.cos(op[ch])*this.mag
                this.speed.y = Math.sin(op[ch])*this.mag
            }
        }
    }

    let speed = 15;
    let period = 3000;

    function pulse(){
        setTimeout(pulse,period);
        let h = Math.random()*(210-150) + 150;
        for(let i = 0; i < 56; i++) {
            p.push(new particle(can.width/2, canvasHeight, {x:Math.cos(i/8*2*Math.PI)*speed, y:Math.sin(i/8*2*Math.PI)*speed}, "#ffdd00"));
        }
    }

    function gameMove(){
        requestAnimationFrame(gameMove);
        clear();
        for(let i = 0; i < p.length; i++) {
            p[i].upd();
            if(p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
                p.splice(i,1);
            }
        }
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    pulse();
    gameMove();
}

// For first section canvas
const canvasPresentation = document.getElementById("canvas");
const ctxPresentation = canvasPresentation.getContext("2d");
const presentationHeight = 430;

// For last section canvas
const canvasContact = document.getElementById("contact-canvas");
const ctxContact = canvasContact.getContext("2d");
const contactHeight = 0;

initializeCanvas(canvasPresentation, ctxPresentation, presentationHeight);
initializeCanvas(canvasContact, ctxContact, contactHeight);


let mm = gsap.matchMedia();

mm.add("(min-width: 1440px)", () => {
    // ----- Animations GSAP -----
    // Softskills section
    gsap.from('.softskills__title', {
        x: '-25%',
        duration: 0.7,
        opacity: 0,
        scrollTrigger: {
            trigger: '.softskills',
            start: 'top 40%',
            end: 'bottom 30%',
            // markers: true,
        }
    });

    gsap.from('.softskills__grid', {
        x: '-20%',
        duration: 0.7,
        opacity: 0,
        scrollTrigger: {
            trigger: '.softskills__title',
            start: 'top 40%',
            end: 'bottom 30%',
            // markers: true,
        }
    });

    gsap.from('.softskills__el', {
        x: '-15%',
        duration: 0.7,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.softskills__text',
            start: 'top 40%',
            end: 'bottom 30%',
            // markers: true,
        }
    });

    // gsap.from(".softskills__line", {
    //     height: "0%",
    //     duration: 0.8,
        
    //     scrollTrigger: {
    //         trigger: ".softskills",
    //         start: 'top 40%',
    //         end: 'bottom 30%',
    //         // start: "top 75%",
    //         // end: "40% 75%",
    //         // scrub: 1,
    //     },   
    // });

    gsap.from(".softskills__line", {
        display: "none",
        
        scrollTrigger: {
            trigger: ".softskills",
            start: 'top 40%',
            end: 'bottom 30%',
        },   
    });


    gsap.from(".softskills__dot", {
        x: "100px",
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        
        scrollTrigger: {
            trigger: ".softskills",
            start: 'top 40%',
            end: 'bottom 30%',
            // start: "top 75%",
            // end: "40% 75%",
            // scrub: 1,
        },   
    });


    // Skills section
    gsap.from('.skills__title', {
        x: '-25%',
        duration: 0.7,
        opacity: 0,
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 40%',
            end: 'bottom 30%',
            // markers: true,
        }
    });

    gsap.from('.skills__grid', {
        x: '-15%',
        duration: 0.7,
        opacity: 0,
        scrollTrigger: {
            trigger: '.skills__title',
            start: 'top 40%',
            end: 'bottom 30%',
            // markers: true,
        }
    });

    gsap.from('.skills__el', {
        x: '-20%',
        duration: 0.7,
        opacity: 0,
        stagger: 0.25,
        scrollTrigger: {
            trigger: '.skills__text',
            start: 'top 40%',
            end: 'bottom 30%',
            // markers: true,
        }
    });

    // gsap.from(".skills__line", {
    //     height: "0%",
    //     duration: 0.8,
        
    //     scrollTrigger: {
    //         trigger: ".skills",
    //         start: 'top 40%',
    //         end: 'bottom 30%',
    //         // start: "top 75%",
    //         // end: "40% 75%",
    //         // scrub: 1,
    //     },   
    // });

    gsap.from(".skills__line", {
        display: "none",
        
        scrollTrigger: {
            trigger: ".skills",
            start: 'top 40%',
            end: 'bottom 30%',
        },   
    });

    gsap.from(".skills__dot", {
        y: "50px",
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        
        scrollTrigger: {
            trigger: '.skills__text',
            start: 'top 40%',
            end: 'bottom 30%',
        },   
    });


    // Projects section
    gsap.from(".projects__path--first", {
        display: "none",
        
        scrollTrigger: {
            trigger: ".projects",
            start: 'top 40%',
            end: 'bottom 30%',
        },   
    });

    gsap.from(".projects__path--second", {
        display: "none",
        duration: 10,
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: ".projects",
            start: '+=100% 40%',
            end: '+=100% 30%',
        },   
    });

    gsap.from(".projects__path--third", {
        display: "none",
        duration: 10,
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: ".projects",
            start: '+=250% 40%',
            end: '+=250% 30%',
        },   
    });


    gsap.from(".projects__description > *", {
        x: "-25%",
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: ".projects",
            start: 'top 40%',
            end: 'bottom 30%',
            // start: "top 75%",
            // end: "40% 75%",
            // scrub: 1,
        },   
    });

    gsap.from(".projects__assets a", {
        x: "25%",
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: ".projects",
            start: 'top 40%',
            end: 'bottom 30%',
            // start: "top 75%",
            // end: "40% 75%",
            // scrub: 1,
        },   
    });


    // Technologies list
    gsap.from(".technologies > *", {
        x: "25%",
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        
        scrollTrigger: {
            trigger: ".projects",
            start: 'top 40%',
            end: 'bottom 30%',
            // start: "top 75%",
            // end: "40% 75%",
            // scrub: 1,
        },   
    });



    // ----- Slider projects -----
    let sections = gsap.utils.toArray(".projects__el");
        
    gsap.to(sections,{
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".projects__slider",
        pin: ".projects",
        pinSpacing: true,
        scrub: 1,
        end: "+=3000",
    }
    });

    gsap.to('.contact',{
    scrollTrigger:{
        trigger: '.contact',
        pinnedContainer: ".projects",
        start:'top 50%',
        toggleActions: 'play none reset none',
    }
    });
});

// ----- Test for slider count -----
// let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.projects__el',
//       start: 'top top',
//       endTrigger: '.test',
//       end: 'bottom 80%',
//       markers: true,
//     }
// });


// const allContent = gsap.utils.toArray('.projects__el')
// allContent.forEach((eachPoint, i) => {
//   if (i) {
//     tl.to('.test', {
//       y: -32 * i
//     }, i * 1 - 0.5)
//   }
// });
// tl.to({}, {duration: 0.5});
