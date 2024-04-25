"use strict";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// let timeline = gsap.timeline();

// Animations
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

gsap.from('.softskills__grid-col-3', {
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

gsap.from(".softskills__line", {
    height: "0%",
    duration: 0.8,
    
    scrollTrigger: {
        trigger: ".softskills",
        start: 'top 40%',
        end: 'bottom 30%',
        // start: "top 75%",
        // end: "40% 75%",
        // scrub: 1,
    },   
});

gsap.from(".softskills__dots .dots", {
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

gsap.from('.skills__grid-col-3', {
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




gsap.from(".skills__line", {
    height: "0%",
    duration: 0.8,
    
    scrollTrigger: {
        trigger: ".skills",
        start: 'top 40%',
        end: 'bottom 30%',
        // start: "top 75%",
        // end: "40% 75%",
        // scrub: 1,
    },   
});

gsap.from(".skills__dots", {
    y: "-25%",
    opacity: 0,
    duration: 0.8,
    
    scrollTrigger: {
        trigger: ".skills",
        start: 'top 40%',
        end: 'bottom 30%',
        // start: "top 75%",
        // end: "40% 75%",
        // scrub: 1,
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


// ----- Slide Projects -----
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



// Change width svg
let projectSvg = document.querySelectorAll('.projects__svg');

projectSvg.forEach((svg) => {
    if (window.matchMedia('(max-width: 1920px)').matches) {
        svg.setAttribute('width', '2500px');
    } else {
        svg.setAttribute('width', '3000px');
    }
});

window.addEventListener('resize', () => {
    projectSvg.forEach((svg) => {
        if (window.matchMedia('(max-width: 1920px)').matches) {
            svg.setAttribute('width', '2500px');
        } else {
            svg.setAttribute('width', '3000px');
        }
    });
});


// ----- CANVAS CONTACT -----
function displayCanvas(id, drawArea, particleAmount){
    let wi, he;

    const resizeReset = function() {
        wi = id.width = window.innerWidth;
        he = id.height = window.innerHeight;
    };
    
    const opts = { 
        particleColor: "#FAAC32",
        lineColor: "rgb(250,250,250)",
        particleAmount: particleAmount,
        defaultSpeed: 0.1,
        variantSpeed: 1,
        defaultRadius: 2,
        variantRadius: 2,
        linkRadius: 200,
    };
    
    window.addEventListener("resize", function(){
        deBouncer();
    });
    
    let deBouncer = function() {
        clearTimeout(tid);
        tid = setTimeout(function() {
            resizeReset();
        }, delay);
    };
    
    const checkDistance = function(x1, y1, x2, y2){ 
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    
    const linkPoints = function(point1, hubs){ 
        for (let i = 0; i < hubs.length; i++) {
            let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
            let opacity = 1 - distance / opts.linkRadius;
            if (opacity > 0) { 
                drawArea.lineWidth = 0.5;
                drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
                drawArea.beginPath();
                drawArea.moveTo(point1.x, point1.y);
                drawArea.lineTo(hubs[i].x, hubs[i].y);
                drawArea.closePath();
                drawArea.stroke();
            }
        }
    };
    
    const Particle = function(xPos, yPos){ 
        this.x = Math.random() * wi; 
        this.y = Math.random() * he;
        this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
        this.directionAngle = Math.floor(Math.random() * 360); 
        this.color = opts.particleColor;
        this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
        this.vector = {
            x: Math.cos(this.directionAngle) * this.speed,
            y: Math.sin(this.directionAngle) * this.speed
        };
        this.update = function(){ 
            this.border(); 
            this.x += this.vector.x; 
            this.y += this.vector.y; 
        };
        this.border = function(){ 
            if (this.x >= wi || this.x <= 0) { 
                this.vector.x *= -1;
            }
            if (this.y >= he || this.y <= 0) {
                this.vector.y *= -1;
            }
            if (this.x > wi) this.x = wi;
            if (this.y > he) this.y = he;
            if (this.x < 0) this.x = 0;
            if (this.y < 0) this.y = 0;    
        };
        this.draw = function(){ 
            drawArea.beginPath();
            drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
            drawArea.closePath();
            drawArea.fillStyle = this.color;
            drawArea.fill();
        };
    };
    
    let particles = [];
    
    function setup(){ 
        particles = [];
        resizeReset();
        for (let i = 0; i < opts.particleAmount; i++){
            particles.push( new Particle() );
        }
        window.requestAnimationFrame(loop);
    }
    
    function loop(){ 
        window.requestAnimationFrame(loop);
        drawArea.clearRect(0,0,wi,he);
        for (let i = 0; i < particles.length; i++){
            particles[i].update();
            particles[i].draw();
        }
        for (let i = 0; i < particles.length; i++){
            linkPoints(particles[i], particles);
        }
    }

    let delay = 200, tid,
    rgb = opts.lineColor.match(/\d+/g);
    resizeReset();
    setup();
}

const canvasContact = document.getElementById("contact-canvas");
const drawAreaContact = canvasContact.getContext("2d");

const canvas = document.getElementById("canvas");
const drawArea = canvas.getContext("2d");

const particleAmountDesktop = 30;
const particleAmountMobile = 10;

displayCanvas(canvas, drawArea, particleAmountDesktop);
displayCanvas(canvasContact, drawAreaContact, particleAmountDesktop);

if (window.matchMedia('(min-width: 640px)').matches) {
    displayCanvas(canvas, drawArea, particleAmountDesktop);
    displayCanvas(canvasContact, drawAreaContact, particleAmountDesktop);
} else {
    displayCanvas(canvas, drawArea, particleAmountMobile);
    displayCanvas(canvasContact, drawAreaContact, particleAmountMobile);
}

// Button to the top
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