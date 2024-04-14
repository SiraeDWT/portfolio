"use strict";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// let timeline = gsap.timeline();

gsap.from('.presentation__welcome', {
    duration: 2,
    opacity: 0,
    scale: 0,
    ease: "slow(0.7,0.7,false)",
});



// gsap.from('.skills__title', {
//     duration: 1,
//     opacity: 0,
//     x: '-25%',
//     // scrollTrigger: '.box',
//     scrollTrigger: {
//         trigger: '.skills__title',
//         pin: true,
//         start: '50% 65%',
//         end: '50% 65%',
//         scrub: 1,
//         toggleActions: "restart pause reverse pause",
//         delay: 0.2,
//         markers: true,
//         ease: "slow(0.7,0.7,false)",
//         // endTrigger: '.box', 
//     }
// });


gsap.to("#imgSpaceLine", {
    height: "100%",
    duration: 5,
    
    scrollTrigger: {
        trigger: "#skills",
        start: "top 75%",
        end: "40% 75%",
        scrub: 1,
    },   
});




// ----- CANVAS INTRO -----
let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,
        
    hue = 217,
    stars = [],
    count = 0,
    maxStars = 1400;

let mouseX = w / 2;
let mouseY = h / 2;
let lastMouseX = w / 2;
let lastMouseY = h / 2;

canvas.addEventListener('pointermove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

let canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
let half = canvas2.width/2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();


function random(min, max) {
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }
    
    if (min > max) {
        let hold = max;
        max = min;
        min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x,y) {
    let max = Math.max(x,y),
        diameter = Math.round(Math.sqrt(max*max + max*max));
    return diameter/2;
}

let Star = function() {

    this.orbitRadius = random(maxOrbit(w,h));
    this.radius = random(60, this.orbitRadius) / 12;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 600000; // Vitesse
    this.alpha = random(2, 10) / 10;
    
    this.targetX = 0;
    this.targetY = 0;

    count++;
    stars[count] = this;
}

Star.prototype.draw = function() {
    this.orbitX += (mouseX - lastMouseX) / 10;
    this.orbitY += (mouseY - lastMouseY) / 10;

    let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
}

for (let i = 0; i < maxStars; i++) {
    new Star();
}

function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'lighter';
    for (let i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
    };  
    
    lastMouseX = mouseX;
    lastMouseY = mouseY;

    window.requestAnimationFrame(animation);
}

animation();



// ----- CANVAS CONTACT -----
let wi, he;

const resizeReset = function() {
    wi = canvasBody.width = window.innerWidth;
    he = canvasBody.height = window.innerHeight;
};

const opts = { 
    particleColor: "#FAAC32",
    lineColor: "rgb(200,200,200)",
    particleAmount: 30,
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

const canvasBody = document.getElementById("contact-canvas"),
drawArea = canvasBody.getContext("2d");
let delay = 200, tid,
rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();



// ----- CURSOR -----
// let cursor = document.querySelector(".cursor");
// let follower = document.querySelector(".cursor-follower");

// let posX = 0;
// let posY = 0;

// let pointerX = 0;
// let pointerY = 0;

// function animateCursor() {
//     posX += (pointerX - posX) / 9;
//     posY += (pointerY - posY) / 9;

//     follower.style.left = posX - 12 + "px";
//     follower.style.top = posY - 12 + "px";

//     cursor.style.left = pointerX + "px";
//     cursor.style.top = pointerY + "px";

//     requestAnimationFrame(animateCursor);
// }

// animateCursor();

// document.addEventListener("pointermove", function (e) {
//     pointerX = e.pageX;
//     pointerY = e.pageY;
// });

// let links = document.querySelectorAll(".link");

// links.forEach(function (link) {
//     link.addEventListener("mouseenter", function () {
//         cursor.classList.add("active");
//         follower.classList.add("active");
//     });

//     link.addEventListener("mouseleave", function () {
//         cursor.classList.remove("active");
//         follower.classList.remove("active");
//     });
// });



// ----- Slide Projects -----
let sections = gsap.utils.toArray(".projects__projet");
    
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