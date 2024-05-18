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


// ----- CANVAS Portfolio -----
function initializeCanvas(id, canvasHeight) {
    let can = id;
    let ctx = id.getContext("2d");

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
            ctx.lineCap = "square";
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
                this.speed.x = Math.cos(op[ch])*this.mag;
                this.speed.y = Math.sin(op[ch])*this.mag;
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


const canvasPresentation = document.getElementById("canvas");
const canvasContact = document.getElementById("contact-canvas");

if(canvasPresentation){
    const presentationHeight = 430;
    initializeCanvas(canvasPresentation, presentationHeight);
}

if(canvasContact){
    const contactHeight = 0;
    initializeCanvas(canvasContact, contactHeight);
}












// ----- Iterations Canvas -----
const canvasSpeed = document.getElementById("speed-canvas");
if(canvasSpeed){
    let can = canvasSpeed;
    let ctx = canvasSpeed.getContext("2d");

    function resizeCanvas() {
        can.width = 320;
        can.height = 320;
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
            ctx.lineWidth = 2;
            ctx.lineCap = "square";
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
                this.speed.x = Math.cos(op[ch])*this.mag;
                this.speed.y = Math.sin(op[ch])*this.mag;
            }
        }
    }

    let speed = 30;
    let period = 1;

    function pulse(){
        setTimeout(pulse,period);
        let h = Math.random()*(210-150) + 150;
        for(let i = 0; i < 56; i++) {
            p.push(new particle(can.width/2, can.height/2, {x:Math.cos(i/8*2*Math.PI)*speed, y:Math.sin(i/8*2*Math.PI)*speed}, "#ffdd00"));
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

const canvasSpeed2 = document.getElementById("speed-canvas2");
if(canvasSpeed2){
    let can = canvasSpeed2;
    let ctx = canvasSpeed2.getContext("2d");

    function resizeCanvas() {
        can.width = 320;
        can.height = 320;
        clear();
    }

    can.style.background = "#060D19";

    let p = [];

    function clear(){
        ctx.fillStyle="rgba(6, 13, 25, 0.05)";
        ctx.fillRect(0,0,can.width,can.height);
    }

    function particle(x, y, speed, c) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.upd = function () {
            ctx.strokeStyle = c;
            ctx.lineWidth = 2;
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
    
            this.x += this.speed.x;
            this.y += this.speed.y;
    
            // Rebondissement sur les bords du canvas
            if (this.x < 0 || this.x > can.width) {
                this.speed.x *= -1;
                this.x = Math.min(Math.max(this.x, 0), can.width); // Assure que la particule reste dans les limites du canvas
            }
            if (this.y < 0 || this.y > can.height) {
                this.speed.y *= -1;
                this.y = Math.min(Math.max(this.y, 0), can.height); // Assure que la particule reste dans les limites du canvas
            }
    
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
    
            this.ang = Math.atan2(this.speed.y, this.speed.x);
            this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
    
            let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
            let ch = Math.floor(Math.random() * op.length);
    
            if (Math.random() < 0.05) {
                this.speed.x = Math.cos(op[ch]) * this.mag;
                this.speed.y = Math.sin(op[ch]) * this.mag;
            }
        };
    }
    

    let speed = 1;
    let period = 3000;

    function pulse(){
        setTimeout(pulse,period);
        let h = Math.random()*(210-150) + 150;
        for(let i = 0; i < 56; i++) {
            p.push(new particle(can.width/2, can.height/2, {x:Math.cos(i/8*2*Math.PI)*speed, y:Math.sin(i/8*2*Math.PI)*speed}, "#ffdd00"));
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

const canvasSpeed3 = document.getElementById("speed-canvas3");
if (canvasSpeed3) {
    let can = canvasSpeed3;
    let ctx = canvasSpeed3.getContext("2d");

    function resizeCanvas() {
        can.width = 320;
        can.height = 320;
        clear();
    }

    can.style.background = "#060D19";

    let p = [];

    function clear() {
        ctx.fillStyle = "rgba(6, 13, 25, 0.15)";
        ctx.fillRect(0, 0, can.width, can.height);
    }

    function particle(x, y, speed, c) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.upd = function () {
            ctx.strokeStyle = c;
            ctx.lineWidth = 2;
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);

            this.x += this.speed.x;
            this.y += this.speed.y;

            ctx.lineTo(this.x, this.y);
            ctx.stroke();

            this.ang = Math.atan2(this.speed.y, this.speed.x);
            this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);

            let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
            let ch = Math.floor(Math.random() * op.length);

            if (Math.random() < 0.05) {
                this.speed.x = Math.cos(op[ch]) * this.mag;
                this.speed.y = Math.sin(op[ch]) * this.mag;
            }
        }
    }

    let speed = 15;
    let period = 1;

    function pulse(x, y) {
        let h = Math.random() * (210 - 150) + 150;
        for (let i = 0; i < 56; i++) {
            let angle = Math.atan2(y - can.height / 2, x - can.width / 2);
            let distance = Math.sqrt((x - can.width / 2) ** 2 + (y - can.height / 2) ** 2);
            let newX = Math.cos(angle + i / 8 * 2 * Math.PI) * distance + can.width / 2;
            let newY = Math.sin(angle + i / 8 * 2 * Math.PI) * distance + can.height / 2;
            p.push(new particle(newX, newY, { x: Math.cos(i / 8 * 2 * Math.PI) * speed, y: Math.sin(i / 8 * 2 * Math.PI) * speed }, "#ffdd00"));
        }
    }

    function gameMove() {
        requestAnimationFrame(gameMove);
        clear();
        for (let i = 0; i < p.length; i++) {
            p[i].upd();
            if (p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
                p.splice(i, 1);
            }
        }
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    can.addEventListener('mousemove', function (e) {
        pulse(e.clientX - can.getBoundingClientRect().left, e.clientY - can.getBoundingClientRect().top);
    });

    gameMove();
}

const canvasSpeed4 = document.getElementById("speed-canvas4");
if(canvasSpeed4){
    let can = canvasSpeed4;
    let ctx = canvasSpeed4.getContext("2d");

    function resizeCanvas() {
        can.width = 320;
        can.height = 320;
        clear();
    }

    can.style.background = "#060D19";

    let p = [];

    function clear(){
        ctx.fillStyle="rgba(6, 13, 25, 0.05)";
        ctx.fillRect(0,0,can.width,can.height);
    }

    function particle(x, y, speed, c) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.upd = function () {
            ctx.strokeStyle = c;
            ctx.lineWidth = 2;
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
    
            this.x += this.speed.x;
            this.y += this.speed.y;
    
            // if (this.x < 0 || this.x > can.width) {
            //     this.speed.x *= -1;
            //     this.x = Math.min(Math.max(this.x, 0), can.width);
            // }
            // if (this.y < 0 || this.y > can.height) {
            //     this.speed.y *= -1;
            //     this.y = Math.min(Math.max(this.y, 0), can.height);
            // }
    
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
    
            this.ang = Math.atan2(this.speed.y, this.speed.x);
            this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
    
            let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
            let ch = Math.floor(Math.random() * op.length);
    
            if (Math.random() < 0.05) {
                this.speed.x = Math.cos(op[ch]) * this.mag;
                this.speed.y = Math.sin(op[ch]) * this.mag;
            }
        };
    }
    

    let speed = 1;
    let period = 3000;

    function pulse(){
        setTimeout(pulse, period);
        let speedX = Math.cos(Math.PI / 4) * speed;
        let speedY = Math.sin(Math.PI / 4) * speed;
        
        for(let i = 0; i < 4; i++) {
            let startX, startY;
    
            if (i === 0 || i === 3) {
                startX = 0;
            } else {
                startX = can.width;
            }
    
            if (i === 0 || i === 1) {
                startY = 0;
            } else {
                startY = can.height;
            }
    
            for(let j = 0; j < 14; j++) {
                p.push(new particle(startX, startY, {x: speedX, y: speedY}, "#ffdd00"));
            }
    
            let tempX = speedX;
            speedX = -speedY;
            speedY = tempX;
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

const canvasSpeed5 = document.getElementById("speed-canvas5");
if(canvasSpeed5){
    let can = canvasSpeed5;
    let ctx = canvasSpeed5.getContext("2d");

    function resizeCanvas() {
        can.width = 320;
        can.height = 320;
        clear();
    }

    can.style.background = "#060D19";

    let p = [];

    function clear(){
        ctx.fillStyle="rgba(6, 13, 25, 0.05)";
        ctx.fillRect(0,0,can.width,can.height);
    }

    function particle(x, y, speed, c) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = c;
    
        this.upd = function () {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
    
            this.x += this.speed.x;
            this.y += this.speed.y;
    
            // Vérifier si la particule rebondit sur le bord
            if (this.x <= 0 || this.x >= can.width || this.y <= 0 || this.y >= can.height) {
                // Changer la couleur de la particule
                this.color = getRandomColor();
            }
    
            if (this.x < 0 || this.x > can.width) {
                this.speed.x *= -1;
                this.x = Math.min(Math.max(this.x, 0), can.width);
            }
            if (this.y < 0 || this.y > can.height) {
                this.speed.y *= -1;
                this.y = Math.min(Math.max(this.y, 0), can.height);
            }
    
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
    
            this.ang = Math.atan2(this.speed.y, this.speed.x);
            this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
    
            let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
            let ch = Math.floor(Math.random() * op.length);
    
            if (Math.random() < 0.05) {
                this.speed.x = Math.cos(op[ch]) * this.mag;
                this.speed.y = Math.sin(op[ch]) * this.mag;
            }
        };
    }
    
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    

    let speed = 1;
    let period = 10000;

    let firstPulse = true;

    function pulse(){
        if(firstPulse) {
            firstPulse = false;
        } else {
            return; // Sortir de la fonction si le premier pulse a déjà été exécuté
        }
        
        let h = Math.random()*(210-150) + 150;
        for(let i = 0; i < 56; i++) {
            p.push(new particle(can.width/2, can.height/2, {x:Math.cos(i/8*2*Math.PI)*speed, y:Math.sin(i/8*2*Math.PI)*speed}, "#ffdd00"));
        }
    }

    function gameMove(){
        requestAnimationFrame(gameMove);
        clear();
        for(let i = 0; i < p.length; i++) {
            p[i].upd();
    
            // Vérification de collision
            for(let j = i + 1; j < p.length; j++) {
                if(Math.abs(p[i].x - p[j].x) < 5 && Math.abs(p[i].y - p[j].y) < 5) {
                    p[i].color = "#ff0000";
                    p[j].color = "#ff0000";
                }
            }
    
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

const canvasSpeed6 = document.getElementById("speed-canvas6");
if (canvasSpeed6) {
    let can = canvasSpeed6;
    let ctx = canvasSpeed6.getContext("2d");

    function resizeCanvas() {
        can.width = 320;
        can.height = 320;
        clear();
    }

    can.style.background = "#060D19";

    let p = [];

    function clear() {
        ctx.fillStyle = "rgba(6, 13, 25, 0.15)";
        ctx.fillRect(0, 0, can.width, can.height);
    }

    function particle(x, y, speed, c) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.upd = function () {
            ctx.strokeStyle = c;
            ctx.lineWidth = 2;
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);

            this.x += this.speed.x;
            this.y += this.speed.y;

            ctx.lineTo(this.x, this.y);
            ctx.stroke();

            this.ang = Math.atan2(this.speed.y, this.speed.x);
            this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);

            let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
            let ch = Math.floor(Math.random() * op.length);

            if (Math.random() < 0.05) {
                this.speed.x = Math.cos(op[ch]) * this.mag;
                this.speed.y = Math.sin(op[ch]) * this.mag;
            }
        }
    }

    let speed = 1;
    let period = 100;

    function pulse(x, y) {
        let h = Math.random() * (210 - 150) + 150;
        for (let i = 0; i < 56; i++) {
            let angle = Math.atan2(y - can.height / 2, x - can.width / 2);
            let distance = Math.sqrt((x - can.width / 2) ** 2 + (y - can.height / 2) ** 2);
            let newX = Math.cos(angle + i / 8 * 2 * Math.PI) * distance + x;
            let newY = Math.sin(angle + i / 8 * 2 * Math.PI) * distance + y;
            p.push(new particle(x, y, { x: Math.cos(i / 8 * 2 * Math.PI) * speed, y: Math.sin(i / 8 * 2 * Math.PI) * speed }, "#ffdd00")); // Utilisez 'x' et 'y' comme position initiale
        }
    }

    function gameMove() {
        requestAnimationFrame(gameMove);
        clear();
        for (let i = 0; i < p.length; i++) {
            p[i].upd();
            if (p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
                p.splice(i, 1);
            }
        }
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    can.addEventListener('mousemove', function (e) {
        pulse(e.clientX - can.getBoundingClientRect().left, e.clientY - can.getBoundingClientRect().top);
    });

    gameMove();
}

const canvasSpeed7 = document.getElementById("speed-canvas7");
if(canvasSpeed7){
    let can = canvasSpeed7;
    let ctx = canvasSpeed7.getContext("2d");

    function resizeCanvas() {
        can.width = 320;
        can.height = 320;
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
            ctx.lineWidth = 2;
            ctx.lineCap = "square";
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
                this.speed.x = Math.cos(op[ch])*this.mag;
                this.speed.y = Math.sin(op[ch])*this.mag;
            }
        }
    }

    let speed = 100;
    let period = 1;

    function pulse() {
        setTimeout(pulse, period);
        let h = Math.random() * (210 - 150) + 150;
        p = [];
        p.push(new particle(can.width / 2, can.height / 2, { x: Math.random() * speed * 2 - speed, y: Math.random() * speed * 2 - speed }, "#ffdd00"));
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

const canvasSpeed8 = document.getElementById("speed-canvas8");
if(canvasSpeed8){
    let can = canvasSpeed8;
    let ctx = canvasSpeed8.getContext("2d");

    function resizeCanvas() {
        can.width = 320;
        can.height = 320;
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
            ctx.lineWidth = 2;
            ctx.lineCap = "square";
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
                this.speed.x = Math.cos(op[ch])*this.mag;
                this.speed.y = Math.sin(op[ch])*this.mag;
            }
        }
    }

    let speed = 5;
    let period = 3000;

    function pulse(){
        setTimeout(pulse,period);
        let h = Math.random()*(210-150) + 150;
        for(let i = 0; i < 56; i++) {
            p.push(new particle(can.width/2, can.height/2, {x:Math.cos(i/8*2*Math.PI)*speed, y:Math.sin(i/8*2*Math.PI)*speed}, "#ffdd00"));
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

const canvasSpeed9 = document.getElementById("speed-canvas9");
if(canvasSpeed9){
    let can = canvasSpeed9;
    let ctx = canvasSpeed9.getContext("2d");

    function resizeCanvas() {
        can.width = 320;
        can.height = 320;
        clear();
    }

    can.style.background = "#060D19";

    let particle = null;

    function clear(){
        ctx.fillStyle="rgba(6, 13, 25, 0.15)";
        ctx.fillRect(0,0,can.width,can.height);
    }

    function Particle(x,y,speed,c){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = c;
        this.update = function(){
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);

            this.x += this.speed.x;
            this.y += this.speed.y;

            if (this.x < 0 || this.x > can.width) {
                this.speed.x *= -1;
                this.speed.x += (this.speed.x > 0) ? 1 : -1;
            }
            if (this.y < 0 || this.y > can.height) {
                this.speed.y *= -1;
                this.speed.y += (this.speed.y > 0) ? 1 : -1;
            }

            ctx.lineTo(this.x,this.y);
            ctx.stroke();

            let angle = Math.atan2(this.speed.y,this.speed.x);
            let magnitude = Math.sqrt(this.speed.x**2 + this.speed.y**2);

            let options = [angle+Math.PI/4, angle-Math.PI/4];
            let choice = Math.floor(Math.random()*options.length);

            if(Math.random() < 0.05) {
                this.speed.x = Math.cos(options[choice])*magnitude;
                this.speed.y = Math.sin(options[choice])*magnitude;
            }
        }
    }

    let speed = 5;

    function pulse(){
        if (!particle) {
            let posX = can.width/2;
            let posY = can.height/2;
            let angle = Math.random() * 2 * Math.PI;
            particle = new Particle(posX, posY, {x: Math.cos(angle) * speed, y: Math.sin(angle) * speed}, "#ffdd00");
        }
    }

    function gameMove(){
        requestAnimationFrame(gameMove);
        clear();
        if (particle) {
            particle.update();
        }
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    pulse();
    gameMove();
}







// ----- Animation GSAP -----
let mm = gsap.matchMedia();


mm.add("(max-width: 1439px)", () => {
    // Softskills section
    gsap.from('.softskills__title', {
        x: '-15%',
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: '.softskills',
            start: 'top 40%',
            end: 'bottom 30%',
        }
    });

    gsap.from('.softskills__grid', {
        x: '-10%',
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: '.softskills__title',
            start: 'top 40%',
            end: 'bottom 30%',
        }
    });

    gsap.from('.softskills__el', {
        x: '-10%',
        duration: 0.5,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.softskills__text',
            start: 'top 40%',
            end: 'bottom 30%',
        }
    });

    // Skills section
    gsap.from('.skills__title', {
        x: '-15%',
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 40%',
            end: 'bottom 30%',
        }
    });

    gsap.from('.skills__grid', {
        x: '-10%',
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: '.skills__title',
            start: 'top 40%',
            end: 'bottom 30%',
        }
    });

    gsap.from('.skills__el', {
        x: '-10%',
        duration: 0.5,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.skills__text',
            start: 'top 40%',
            end: 'bottom 30%',
        }
    });

    gsap.from(".projects__description > *", {
        x: "-15%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".projects",
            start: 'top 40%',
            end: 'bottom 30%',
        },   
    });

    gsap.from(".projects__assets a", {
        x: "15%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".projects",
            start: 'top 40%',
            end: 'bottom 30%',
        },   
    });

    // Technologies list
    gsap.from(".technologies > *", {
        x: "15%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".projects",
            start: 'top 40%',
            end: 'bottom 30%',
        },   
    });
});


mm.add("(min-width: 1440px)", () => {
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
    // let sections = gsap.utils.toArray(".projects__el");
        
    // gsap.to(sections,{
    // xPercent: -100 * (sections.length - 1),
    // ease: "none",
    // scrollTrigger: {
    //     trigger: ".projects__slider",
    //     pin: ".projects",
    //     pinSpacing: true,
    //     scrub: 1,
    //     end: "+=3000",
    // }
    // });

    // gsap.to('.contact',{
    // scrollTrigger:{
    //     trigger: '.contact',
    //     pinnedContainer: ".projects",
    //     start:'top 50%',
    //     toggleActions: 'play none reset none',
    // }
    // });

    let sections = gsap.utils.toArray(".projects__el");
    let projectsNumber = document.querySelector(".projects__number .projects__number--size");
    let indicatorBars = gsap.utils.toArray(".projects__indicator-bar");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".projects__slider",
            pin: ".projects",
            pinSpacing: true,
            scrub: 1,
            end: "+=3000",
            onUpdate: self => {
            let index = Math.round(self.progress * (sections.length - 1));
            updateProjectNumber(index + 1);
            updateIndicatorBar(index);
            }
        }
    });

    gsap.to('.contact', {
        scrollTrigger: {
            trigger: '.contact',
            pinnedContainer: ".projects",
            start: 'top 50%',
            toggleActions: 'play none reset none',
        }
    });

    function updateProjectNumber(number) {
        projectsNumber.textContent = `0${number}`;
    }

    function updateIndicatorBar(index) {
        indicatorBars.forEach((bar, i) => {
            if (i === index) {
            bar.classList.add("projects__indicator-bar--active");
            } else {
            bar.classList.remove("projects__indicator-bar--active");
            }
        });
    }
});
