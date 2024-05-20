// ----- CANVAS INTRO -----
// let canvas = document.getElementById('canvas'),
//     ctx = canvas.getContext('2d'),
//     w = canvas.width = window.innerWidth,
//     h = canvas.height = window.innerHeight,
        
//     hue = 218,
//     stars = [],
//     count = 0,
//     maxStars = 700; //1400

// let mouseX = w / 2;
// let mouseY = h / 2;
// let lastMouseX = w / 2;
// let lastMouseY = h / 2;

// canvas.addEventListener('pointermove', function(e) {
//     mouseX = e.pageX;
//     mouseY = e.pageY;
// });

// let canvas2 = document.createElement('canvas'),
//     ctx2 = canvas2.getContext('2d');
//     canvas2.width = 100;
//     canvas2.height = 100;
// let half = canvas2.width/2,
//     gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
//     gradient2.addColorStop(0.025, '#fff');
//     gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
//     gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
//     gradient2.addColorStop(1, 'transparent');

// ctx2.fillStyle = gradient2;
// ctx2.beginPath();
// ctx2.arc(half, half, half, 0, Math.PI * 2);
// ctx2.fill();


// function random(min, max) {
//     if (arguments.length < 2) {
//         max = min;
//         min = 0;
//     }
    
//     if (min > max) {
//         let hold = max;
//         max = min;
//         min = hold;
//     }

//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function maxOrbit(x,y) {
//     let max = Math.max(x,y),
//         diameter = Math.round(Math.sqrt(max*max + max*max));
//     return diameter/2;
// }

// let Star = function() {

//     this.orbitRadius = random(maxOrbit(w,h));
//     this.radius = random(60, this.orbitRadius) / 12;
//     this.orbitX = w / 2;
//     this.orbitY = h / 2;
//     this.timePassed = random(0, maxStars);
//     this.speed = random(this.orbitRadius) / 600000; // Vitesse
//     this.alpha = random(2, 10) / 10;
    
//     this.targetX = 0;
//     this.targetY = 0;

//     count++;
//     stars[count] = this;
// }

// Star.prototype.draw = function() {
//     this.orbitX += (mouseX - lastMouseX) / 10;
//     this.orbitY += (mouseY - lastMouseY) / 10;

//     let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
//         y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
//         twinkle = random(10);

//     if (twinkle === 1 && this.alpha > 0) {
//         this.alpha -= 0.05;
//     } else if (twinkle === 2 && this.alpha < 1) {
//         this.alpha += 0.05;
//     }

//     ctx.globalAlpha = this.alpha;
//     ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
//     this.timePassed += this.speed;
// }

// for (let i = 0; i < maxStars; i++) {
//     new Star();
// }

// function animation() {
//     ctx.globalCompositeOperation = 'source-over';
//     ctx.globalAlpha = 0.8;
//     ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
//     ctx.fillRect(0, 0, w, h)

//     ctx.globalCompositeOperation = 'lighter';
//     for (let i = 1, l = stars.length; i < l; i++) {
//         stars[i].draw();
//     };  
    
//     lastMouseX = mouseX;
//     lastMouseY = mouseY;

//     window.requestAnimationFrame(animation);
// }

// animation();



// -----


// ----- CANVAS CONTACT -----
// let wi, he;

// const resizeReset = function() {
//     wi = canvasBody.width = window.innerWidth;
//     he = canvasBody.height = window.innerHeight;
// };

// const opts = { 
//     particleColor: "#FAAC32",
//     lineColor: "rgb(250,250,250)",
//     particleAmount: 30,
//     defaultSpeed: 0.1,
//     variantSpeed: 1,
//     defaultRadius: 2,
//     variantRadius: 2,
//     linkRadius: 200,
// };

// window.addEventListener("resize", function(){
//     deBouncer();
// });

// let deBouncer = function() {
//     clearTimeout(tid);
//     tid = setTimeout(function() {
//         resizeReset();
//     }, delay);
// };

// const checkDistance = function(x1, y1, x2, y2){ 
//     return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// };

// const linkPoints = function(point1, hubs){ 
//     for (let i = 0; i < hubs.length; i++) {
//         let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
//         let opacity = 1 - distance / opts.linkRadius;
//         if (opacity > 0) { 
//             drawArea.lineWidth = 0.5;
//             drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
//             drawArea.beginPath();
//             drawArea.moveTo(point1.x, point1.y);
//             drawArea.lineTo(hubs[i].x, hubs[i].y);
//             drawArea.closePath();
//             drawArea.stroke();
//         }
//     }
// };

// const Particle = function(xPos, yPos){ 
//     this.x = Math.random() * wi; 
//     this.y = Math.random() * he;
//     this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
//     this.directionAngle = Math.floor(Math.random() * 360); 
//     this.color = opts.particleColor;
//     this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
//     this.vector = {
//         x: Math.cos(this.directionAngle) * this.speed,
//         y: Math.sin(this.directionAngle) * this.speed
//     };
//     this.update = function(){ 
//         this.border(); 
//         this.x += this.vector.x; 
//         this.y += this.vector.y; 
//     };
//     this.border = function(){ 
//         if (this.x >= wi || this.x <= 0) { 
//             this.vector.x *= -1;
//         }
//         if (this.y >= he || this.y <= 0) {
//             this.vector.y *= -1;
//         }
//         if (this.x > wi) this.x = wi;
//         if (this.y > he) this.y = he;
//         if (this.x < 0) this.x = 0;
//         if (this.y < 0) this.y = 0;    
//     };
//     this.draw = function(){ 
//         drawArea.beginPath();
//         drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
//         drawArea.closePath();
//         drawArea.fillStyle = this.color;
//         drawArea.fill();
//     };
// };

// let particles = [];

// function setup(){ 
//     particles = [];
//     resizeReset();
//     for (let i = 0; i < opts.particleAmount; i++){
//         particles.push( new Particle() );
//     }
//     window.requestAnimationFrame(loop);
// }

// function loop(){ 
//     window.requestAnimationFrame(loop);
//     drawArea.clearRect(0,0,wi,he);
//     for (let i = 0; i < particles.length; i++){
//         particles[i].update();
//         particles[i].draw();
//     }
//     for (let i = 0; i < particles.length; i++){
//         linkPoints(particles[i], particles);
//     }
// }

// const canvasBody = document.getElementById("contact-canvas"),
// drawArea = canvasBody.getContext("2d");
// let delay = 200, tid,
// rgb = opts.lineColor.match(/\d+/g);
// resizeReset();
// setup();








// CANVAS FIRST SECTION
// let can = document.getElementById("canvas");
// let ctx = can.getContext("2d");

// can.width = window.innerWidth;
// can.height = window.innerHeight;
// can.style.background = "#060D19";

// let p = [];

// function clear(){
//     ctx.fillStyle="rgba(6, 13, 25, 0.15)"
//     ctx.fillRect(0,0,can.width,can.height);
// }

// function particle(x,y,speed,c){
//     this.x = x;
//     this.y = y;
//     this.speed = speed;
//     this.upd = function(){
//         ctx.strokeStyle = c;
//         ctx.lineWidth = 1;
//         ctx.lineCap = "round";
//         ctx.beginPath();
//         ctx.moveTo(this.x,this.y);

//         this.x += this.speed.x;
//         this.y += this.speed.y;

//         ctx.lineTo(this.x,this.y);
//         ctx.stroke();

//         this.ang = Math.atan2(this.speed.y,this.speed.x);
//         this.mag = Math.sqrt(this.speed.x**2 + this.speed.y**2);

//         let op = [this.ang+Math.PI/4,this.ang-Math.PI/4];
//         let ch = Math.floor(Math.random()*op.length);

//         if(Math.random() < 0.05) {
//             this.speed.x = Math.cos(op[ch])*this.mag
//             this.speed.y = Math.sin(op[ch])*this.mag
//         }
//     }
// }

// let speed = 15;
// let period = 3000;

// function pulse(){
//     setTimeout(pulse,period);
//     let h = Math.random()*(210-150) + 150;
//     for(var i = 0; i < 56; i++) {
//         p.push(new particle(can.width/2, can.height/2.2, {x:Math.cos(i/8*2*Math.PI)*speed, y:Math.sin(i/8*2*Math.PI)*speed}, "#ffdd00"));
//     }
// }

// function gameMove(){
//     requestAnimationFrame(gameMove);
//     clear();
//     for(var i = 0; i < p.length; i++) {
//         p[i].upd();
//         if(p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
//             p.splice(i,1);
//         }
//     }
// }
// pulse();
// gameMove();




// ----- CANVAS CONTACT -----
// function displayCanvas(id, drawArea, particleAmount){
//     let wi, he;

//     const resizeReset = function() {
//         wi = id.width = window.innerWidth;
//         he = id.height = window.innerHeight;
//     };
    
//     const opts = { 
//         particleColor: "#FAAC32",
//         lineColor: "rgb(250,250,250)",
//         particleAmount: particleAmount,
//         defaultSpeed: 0.1,
//         variantSpeed: 1,
//         defaultRadius: 2,
//         variantRadius: 2,
//         linkRadius: 200,
//     };
    
//     window.addEventListener("resize", function(){
//         deBouncer();
//     });
    
//     let deBouncer = function() {
//         clearTimeout(tid);
//         tid = setTimeout(function() {
//             resizeReset();
//         }, delay);
//     };
    
//     const checkDistance = function(x1, y1, x2, y2){ 
//         return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//     };
    
//     const linkPoints = function(point1, hubs){ 
//         for (let i = 0; i < hubs.length; i++) {
//             let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
//             let opacity = 1 - distance / opts.linkRadius;
//             if (opacity > 0) { 
//                 drawArea.lineWidth = 0.5;
//                 drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
//                 drawArea.beginPath();
//                 drawArea.moveTo(point1.x, point1.y);
//                 drawArea.lineTo(hubs[i].x, hubs[i].y);
//                 drawArea.closePath();
//                 drawArea.stroke();
//             }
//         }
//     };
    
//     const Particle = function(xPos, yPos){ 
//         this.x = Math.random() * wi; 
//         this.y = Math.random() * he;
//         this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
//         this.directionAngle = Math.floor(Math.random() * 360); 
//         this.color = opts.particleColor;
//         this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
//         this.vector = {
//             x: Math.cos(this.directionAngle) * this.speed,
//             y: Math.sin(this.directionAngle) * this.speed
//         };
//         this.update = function(){ 
//             this.border(); 
//             this.x += this.vector.x; 
//             this.y += this.vector.y; 
//         };
//         this.border = function(){ 
//             if (this.x >= wi || this.x <= 0) { 
//                 this.vector.x *= -1;
//             }
//             if (this.y >= he || this.y <= 0) {
//                 this.vector.y *= -1;
//             }
//             if (this.x > wi) this.x = wi;
//             if (this.y > he) this.y = he;
//             if (this.x < 0) this.x = 0;
//             if (this.y < 0) this.y = 0;    
//         };
//         this.draw = function(){ 
//             drawArea.beginPath();
//             drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
//             drawArea.closePath();
//             drawArea.fillStyle = this.color;
//             drawArea.fill();
//         };
//     };
    
//     let particles = [];
    
//     function setup(){ 
//         particles = [];
//         resizeReset();
//         for (let i = 0; i < opts.particleAmount; i++){
//             particles.push( new Particle() );
//         }
//         window.requestAnimationFrame(loop);
//     }
    
//     function loop(){ 
//         window.requestAnimationFrame(loop);
//         drawArea.clearRect(0,0,wi,he);
//         for (let i = 0; i < particles.length; i++){
//             particles[i].update();
//             particles[i].draw();
//         }
//         for (let i = 0; i < particles.length; i++){
//             linkPoints(particles[i], particles);
//         }
//     }

//     let delay = 200, tid,
//     rgb = opts.lineColor.match(/\d+/g);
//     resizeReset();
//     setup();
// }

// const canvasContact = document.getElementById("contact-canvas");
// const drawAreaContact = canvasContact.getContext("2d");

// const canvas = document.getElementById("canvas");
// const drawArea = canvas.getContext("2d");

// const particleAmountDesktop = 30;
// const particleAmountMobile = 10;

// // displayCanvas(canvas, drawArea, particleAmountDesktop);
// displayCanvas(canvasContact, drawAreaContact, particleAmountDesktop);

// if (window.matchMedia('(min-width: 640px)').matches) {
//     // displayCanvas(canvas, drawArea, particleAmountDesktop);
//     displayCanvas(canvasContact, drawAreaContact, particleAmountDesktop);
// } else {
//     // displayCanvas(canvas, drawArea, particleAmountMobile);
//     displayCanvas(canvasContact, drawAreaContact, particleAmountMobile);
// }















// -----------------------------------------





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

// const canvasSpeed2 = document.getElementById("speed-canvas2");
// if(canvasSpeed2){
//     let can = canvasSpeed2;
//     let ctx = canvasSpeed2.getContext("2d");

//     function resizeCanvas() {
//         can.width = 320;
//         can.height = 320;
//         clear();
//     }

//     can.style.background = "#060D19";

//     let p = [];

//     function clear(){
//         ctx.fillStyle="rgba(6, 13, 25, 0.05)";
//         ctx.fillRect(0,0,can.width,can.height);
//     }

//     function particle(x, y, speed, c) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.upd = function () {
//             ctx.strokeStyle = c;
//             ctx.lineWidth = 2;
//             ctx.lineCap = "square";
//             ctx.beginPath();
//             ctx.moveTo(this.x, this.y);
    
//             this.x += this.speed.x;
//             this.y += this.speed.y;
    
//             // Rebondissement sur les bords du canvas
//             if (this.x < 0 || this.x > can.width) {
//                 this.speed.x *= -1;
//                 this.x = Math.min(Math.max(this.x, 0), can.width); // Assure que la particule reste dans les limites du canvas
//             }
//             if (this.y < 0 || this.y > can.height) {
//                 this.speed.y *= -1;
//                 this.y = Math.min(Math.max(this.y, 0), can.height); // Assure que la particule reste dans les limites du canvas
//             }
    
//             ctx.lineTo(this.x, this.y);
//             ctx.stroke();
    
//             this.ang = Math.atan2(this.speed.y, this.speed.x);
//             this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
    
//             let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
//             let ch = Math.floor(Math.random() * op.length);
    
//             if (Math.random() < 0.05) {
//                 this.speed.x = Math.cos(op[ch]) * this.mag;
//                 this.speed.y = Math.sin(op[ch]) * this.mag;
//             }
//         };
//     }
    

//     let speed = 1;
//     let period = 3000;

//     function pulse(){
//         setTimeout(pulse,period);
//         let h = Math.random()*(210-150) + 150;
//         for(let i = 0; i < 56; i++) {
//             p.push(new particle(can.width/2, can.height/2, {x:Math.cos(i/8*2*Math.PI)*speed, y:Math.sin(i/8*2*Math.PI)*speed}, "#ffdd00"));
//         }
//     }

//     function gameMove(){
//         requestAnimationFrame(gameMove);
//         clear();
//         for(let i = 0; i < p.length; i++) {
//             p[i].upd();
//             if(p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
//                 p.splice(i,1);
//             }
//         }
//     }

//     resizeCanvas();

//     window.addEventListener('resize', resizeCanvas);

//     pulse();
//     gameMove();
// }

// const canvasSpeed3 = document.getElementById("speed-canvas3");
// if (canvasSpeed3) {
//     let can = canvasSpeed3;
//     let ctx = canvasSpeed3.getContext("2d");

//     function resizeCanvas() {
//         can.width = 320;
//         can.height = 320;
//         clear();
//     }

//     can.style.background = "#060D19";

//     let p = [];

//     function clear() {
//         ctx.fillStyle = "rgba(6, 13, 25, 0.15)";
//         ctx.fillRect(0, 0, can.width, can.height);
//     }

//     function particle(x, y, speed, c) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.upd = function () {
//             ctx.strokeStyle = c;
//             ctx.lineWidth = 2;
//             ctx.lineCap = "square";
//             ctx.beginPath();
//             ctx.moveTo(this.x, this.y);

//             this.x += this.speed.x;
//             this.y += this.speed.y;

//             ctx.lineTo(this.x, this.y);
//             ctx.stroke();

//             this.ang = Math.atan2(this.speed.y, this.speed.x);
//             this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);

//             let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
//             let ch = Math.floor(Math.random() * op.length);

//             if (Math.random() < 0.05) {
//                 this.speed.x = Math.cos(op[ch]) * this.mag;
//                 this.speed.y = Math.sin(op[ch]) * this.mag;
//             }
//         }
//     }

//     let speed = 15;
//     let period = 1;

//     function pulse(x, y) {
//         let h = Math.random() * (210 - 150) + 150;
//         for (let i = 0; i < 56; i++) {
//             let angle = Math.atan2(y - can.height / 2, x - can.width / 2);
//             let distance = Math.sqrt((x - can.width / 2) ** 2 + (y - can.height / 2) ** 2);
//             let newX = Math.cos(angle + i / 8 * 2 * Math.PI) * distance + can.width / 2;
//             let newY = Math.sin(angle + i / 8 * 2 * Math.PI) * distance + can.height / 2;
//             p.push(new particle(newX, newY, { x: Math.cos(i / 8 * 2 * Math.PI) * speed, y: Math.sin(i / 8 * 2 * Math.PI) * speed }, "#ffdd00"));
//         }
//     }

//     function gameMove() {
//         requestAnimationFrame(gameMove);
//         clear();
//         for (let i = 0; i < p.length; i++) {
//             p[i].upd();
//             if (p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
//                 p.splice(i, 1);
//             }
//         }
//     }

//     resizeCanvas();

//     window.addEventListener('resize', resizeCanvas);

//     can.addEventListener('mousemove', function (e) {
//         pulse(e.clientX - can.getBoundingClientRect().left, e.clientY - can.getBoundingClientRect().top);
//     });

//     gameMove();
// }

// const canvasSpeed4 = document.getElementById("speed-canvas4");
// if(canvasSpeed4){
//     let can = canvasSpeed4;
//     let ctx = canvasSpeed4.getContext("2d");

//     function resizeCanvas() {
//         can.width = 320;
//         can.height = 320;
//         clear();
//     }

//     can.style.background = "#060D19";

//     let p = [];

//     function clear(){
//         ctx.fillStyle="rgba(6, 13, 25, 0.05)";
//         ctx.fillRect(0,0,can.width,can.height);
//     }

//     function particle(x, y, speed, c) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.upd = function () {
//             ctx.strokeStyle = c;
//             ctx.lineWidth = 2;
//             ctx.lineCap = "square";
//             ctx.beginPath();
//             ctx.moveTo(this.x, this.y);
    
//             this.x += this.speed.x;
//             this.y += this.speed.y;
    
//             // if (this.x < 0 || this.x > can.width) {
//             //     this.speed.x *= -1;
//             //     this.x = Math.min(Math.max(this.x, 0), can.width);
//             // }
//             // if (this.y < 0 || this.y > can.height) {
//             //     this.speed.y *= -1;
//             //     this.y = Math.min(Math.max(this.y, 0), can.height);
//             // }
    
//             ctx.lineTo(this.x, this.y);
//             ctx.stroke();
    
//             this.ang = Math.atan2(this.speed.y, this.speed.x);
//             this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
    
//             let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
//             let ch = Math.floor(Math.random() * op.length);
    
//             if (Math.random() < 0.05) {
//                 this.speed.x = Math.cos(op[ch]) * this.mag;
//                 this.speed.y = Math.sin(op[ch]) * this.mag;
//             }
//         };
//     }
    

//     let speed = 1;
//     let period = 3000;

//     function pulse(){
//         setTimeout(pulse, period);
//         let speedX = Math.cos(Math.PI / 4) * speed;
//         let speedY = Math.sin(Math.PI / 4) * speed;
        
//         for(let i = 0; i < 4; i++) {
//             let startX, startY;
    
//             if (i === 0 || i === 3) {
//                 startX = 0;
//             } else {
//                 startX = can.width;
//             }
    
//             if (i === 0 || i === 1) {
//                 startY = 0;
//             } else {
//                 startY = can.height;
//             }
    
//             for(let j = 0; j < 14; j++) {
//                 p.push(new particle(startX, startY, {x: speedX, y: speedY}, "#ffdd00"));
//             }
    
//             let tempX = speedX;
//             speedX = -speedY;
//             speedY = tempX;
//         }
//     }

//     function gameMove(){
//         requestAnimationFrame(gameMove);
//         clear();
//         for(let i = 0; i < p.length; i++) {
//             p[i].upd();
//             if(p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
//                 p.splice(i,1);
//             }
//         }
//     }

//     resizeCanvas();

//     window.addEventListener('resize', resizeCanvas);

//     pulse();
//     gameMove();
// }

// const canvasSpeed5 = document.getElementById("speed-canvas5");
// if(canvasSpeed5){
//     let can = canvasSpeed5;
//     let ctx = canvasSpeed5.getContext("2d");

//     function resizeCanvas() {
//         can.width = 320;
//         can.height = 320;
//         clear();
//     }

//     can.style.background = "#060D19";

//     let p = [];

//     function clear(){
//         ctx.fillStyle="rgba(6, 13, 25, 0.05)";
//         ctx.fillRect(0,0,can.width,can.height);
//     }

//     function particle(x, y, speed, c) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.color = c;
    
//         this.upd = function () {
//             ctx.strokeStyle = this.color;
//             ctx.lineWidth = 2;
//             ctx.lineCap = "square";
//             ctx.beginPath();
//             ctx.moveTo(this.x, this.y);
    
//             this.x += this.speed.x;
//             this.y += this.speed.y;
    
//             // Vérifier si la particule rebondit sur le bord
//             if (this.x <= 0 || this.x >= can.width || this.y <= 0 || this.y >= can.height) {
//                 // Changer la couleur de la particule
//                 this.color = getRandomColor();
//             }
    
//             if (this.x < 0 || this.x > can.width) {
//                 this.speed.x *= -1;
//                 this.x = Math.min(Math.max(this.x, 0), can.width);
//             }
//             if (this.y < 0 || this.y > can.height) {
//                 this.speed.y *= -1;
//                 this.y = Math.min(Math.max(this.y, 0), can.height);
//             }
    
//             ctx.lineTo(this.x, this.y);
//             ctx.stroke();
    
//             this.ang = Math.atan2(this.speed.y, this.speed.x);
//             this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
    
//             let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
//             let ch = Math.floor(Math.random() * op.length);
    
//             if (Math.random() < 0.05) {
//                 this.speed.x = Math.cos(op[ch]) * this.mag;
//                 this.speed.y = Math.sin(op[ch]) * this.mag;
//             }
//         };
//     }
    
//     function getRandomColor() {
//         return '#' + Math.floor(Math.random() * 16777215).toString(16);
//     }
    

//     let speed = 1;
//     let period = 10000;

//     let firstPulse = true;

//     function pulse(){
//         if(firstPulse) {
//             firstPulse = false;
//         } else {
//             return; // Sortir de la fonction si le premier pulse a déjà été exécuté
//         }
        
//         let h = Math.random()*(210-150) + 150;
//         for(let i = 0; i < 56; i++) {
//             p.push(new particle(can.width/2, can.height/2, {x:Math.cos(i/8*2*Math.PI)*speed, y:Math.sin(i/8*2*Math.PI)*speed}, "#ffdd00"));
//         }
//     }

//     function gameMove(){
//         requestAnimationFrame(gameMove);
//         clear();
//         for(let i = 0; i < p.length; i++) {
//             p[i].upd();
    
//             // Vérification de collision
//             for(let j = i + 1; j < p.length; j++) {
//                 if(Math.abs(p[i].x - p[j].x) < 5 && Math.abs(p[i].y - p[j].y) < 5) {
//                     p[i].color = "#ff0000";
//                     p[j].color = "#ff0000";
//                 }
//             }
    
//             if(p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
//                 p.splice(i,1);
//             }
//         }
//     }

//     resizeCanvas();

//     window.addEventListener('resize', resizeCanvas);

//     pulse();
//     gameMove();
// }

// const canvasSpeed6 = document.getElementById("speed-canvas6");
// if (canvasSpeed6) {
//     let can = canvasSpeed6;
//     let ctx = canvasSpeed6.getContext("2d");

//     function resizeCanvas() {
//         can.width = 320;
//         can.height = 320;
//         clear();
//     }

//     can.style.background = "#060D19";

//     let p = [];

//     function clear() {
//         ctx.fillStyle = "rgba(6, 13, 25, 0.15)";
//         ctx.fillRect(0, 0, can.width, can.height);
//     }

//     function particle(x, y, speed, c) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.upd = function () {
//             ctx.strokeStyle = c;
//             ctx.lineWidth = 2;
//             ctx.lineCap = "square";
//             ctx.beginPath();
//             ctx.moveTo(this.x, this.y);

//             this.x += this.speed.x;
//             this.y += this.speed.y;

//             ctx.lineTo(this.x, this.y);
//             ctx.stroke();

//             this.ang = Math.atan2(this.speed.y, this.speed.x);
//             this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);

//             let op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
//             let ch = Math.floor(Math.random() * op.length);

//             if (Math.random() < 0.05) {
//                 this.speed.x = Math.cos(op[ch]) * this.mag;
//                 this.speed.y = Math.sin(op[ch]) * this.mag;
//             }
//         }
//     }

//     let speed = 1;
//     let period = 100;

//     function pulse(x, y) {
//         let h = Math.random() * (210 - 150) + 150;
//         for (let i = 0; i < 56; i++) {
//             let angle = Math.atan2(y - can.height / 2, x - can.width / 2);
//             let distance = Math.sqrt((x - can.width / 2) ** 2 + (y - can.height / 2) ** 2);
//             let newX = Math.cos(angle + i / 8 * 2 * Math.PI) * distance + x;
//             let newY = Math.sin(angle + i / 8 * 2 * Math.PI) * distance + y;
//             p.push(new particle(x, y, { x: Math.cos(i / 8 * 2 * Math.PI) * speed, y: Math.sin(i / 8 * 2 * Math.PI) * speed }, "#ffdd00")); // Utilisez 'x' et 'y' comme position initiale
//         }
//     }

//     function gameMove() {
//         requestAnimationFrame(gameMove);
//         clear();
//         for (let i = 0; i < p.length; i++) {
//             p[i].upd();
//             if (p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
//                 p.splice(i, 1);
//             }
//         }
//     }

//     resizeCanvas();

//     window.addEventListener('resize', resizeCanvas);

//     can.addEventListener('mousemove', function (e) {
//         pulse(e.clientX - can.getBoundingClientRect().left, e.clientY - can.getBoundingClientRect().top);
//     });

//     gameMove();
// }

// const canvasSpeed7 = document.getElementById("speed-canvas7");
// if(canvasSpeed7){
//     let can = canvasSpeed7;
//     let ctx = canvasSpeed7.getContext("2d");

//     function resizeCanvas() {
//         can.width = 320;
//         can.height = 320;
//         clear();
//     }

//     can.style.background = "#060D19";

//     let p = [];

//     function clear(){
//         ctx.fillStyle="rgba(6, 13, 25, 0.15)";
//         ctx.fillRect(0,0,can.width,can.height);
//     }

//     function particle(x,y,speed,c){
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.upd = function(){
//             ctx.strokeStyle = c;
//             ctx.lineWidth = 2;
//             ctx.lineCap = "square";
//             ctx.beginPath();
//             ctx.moveTo(this.x,this.y);

//             this.x += this.speed.x;
//             this.y += this.speed.y;

//             ctx.lineTo(this.x,this.y);
//             ctx.stroke();

//             this.ang = Math.atan2(this.speed.y,this.speed.x);
//             this.mag = Math.sqrt(this.speed.x**2 + this.speed.y**2);

//             let op = [this.ang+Math.PI/4,this.ang-Math.PI/4];
//             let ch = Math.floor(Math.random()*op.length);

//             if(Math.random() < 0.05) {
//                 this.speed.x = Math.cos(op[ch])*this.mag;
//                 this.speed.y = Math.sin(op[ch])*this.mag;
//             }
//         }
//     }

//     let speed = 100;
//     let period = 1;

//     function pulse() {
//         setTimeout(pulse, period);
//         let h = Math.random() * (210 - 150) + 150;
//         p = [];
//         p.push(new particle(can.width / 2, can.height / 2, { x: Math.random() * speed * 2 - speed, y: Math.random() * speed * 2 - speed }, "#ffdd00"));
//     }

//     function gameMove(){
//         requestAnimationFrame(gameMove);
//         clear();
//         for(let i = 0; i < p.length; i++) {
//             p[i].upd();
//             if(p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
//                 p.splice(i,1);
//             }
//         }
//     }

//     resizeCanvas();

//     window.addEventListener('resize', resizeCanvas);

//     pulse();
//     gameMove();
// }

// const canvasSpeed8 = document.getElementById("speed-canvas8");
// if(canvasSpeed8){
//     let can = canvasSpeed8;
//     let ctx = canvasSpeed8.getContext("2d");

//     function resizeCanvas() {
//         can.width = 320;
//         can.height = 320;
//         clear();
//     }

//     can.style.background = "#060D19";

//     let p = [];

//     function clear(){
//         ctx.fillStyle="rgba(6, 13, 25, 0.15)";
//         ctx.fillRect(0,0,can.width,can.height);
//     }

//     function particle(x,y,speed,c){
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.upd = function(){
//             ctx.strokeStyle = c;
//             ctx.lineWidth = 2;
//             ctx.lineCap = "square";
//             ctx.beginPath();
//             ctx.moveTo(this.x,this.y);

//             this.x += this.speed.x;
//             this.y += this.speed.y;

//             ctx.lineTo(this.x,this.y);
//             ctx.stroke();

//             this.ang = Math.atan2(this.speed.y,this.speed.x);
//             this.mag = Math.sqrt(this.speed.x**2 + this.speed.y**2);

//             let op = [this.ang+Math.PI/4,this.ang-Math.PI/4];
//             let ch = Math.floor(Math.random()*op.length);

//             if(Math.random() < 0.05) {
//                 this.speed.x = Math.cos(op[ch])*this.mag;
//                 this.speed.y = Math.sin(op[ch])*this.mag;
//             }
//         }
//     }

//     let speed = 5;
//     let period = 3000;

//     function pulse(){
//         setTimeout(pulse,period);
//         let h = Math.random()*(210-150) + 150;
//         for(let i = 0; i < 56; i++) {
//             p.push(new particle(can.width/2, can.height/2, {x:Math.cos(i/8*2*Math.PI)*speed, y:Math.sin(i/8*2*Math.PI)*speed}, "#ffdd00"));
//         }
//     }

//     function gameMove(){
//         requestAnimationFrame(gameMove);
//         clear();
//         for(let i = 0; i < p.length; i++) {
//             p[i].upd();
//             if(p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
//                 p.splice(i,1);
//             }
//         }
//     }

//     resizeCanvas();

//     window.addEventListener('resize', resizeCanvas);

//     pulse();
//     gameMove();
// }

// const canvasSpeed9 = document.getElementById("speed-canvas9");
// if(canvasSpeed9){
//     let can = canvasSpeed9;
//     let ctx = canvasSpeed9.getContext("2d");

//     function resizeCanvas() {
//         can.width = 320;
//         can.height = 320;
//         clear();
//     }

//     can.style.background = "#060D19";

//     let particle = null;

//     function clear(){
//         ctx.fillStyle="rgba(6, 13, 25, 0.15)";
//         ctx.fillRect(0,0,can.width,can.height);
//     }

//     function Particle(x,y,speed,c){
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         this.color = c;
//         this.update = function(){
//             ctx.strokeStyle = this.color;
//             ctx.lineWidth = 2;
//             ctx.lineCap = "square";
//             ctx.beginPath();
//             ctx.moveTo(this.x,this.y);

//             this.x += this.speed.x;
//             this.y += this.speed.y;

//             if (this.x < 0 || this.x > can.width) {
//                 this.speed.x *= -1;
//                 this.speed.x += (this.speed.x > 0) ? 1 : -1;
//             }
//             if (this.y < 0 || this.y > can.height) {
//                 this.speed.y *= -1;
//                 this.speed.y += (this.speed.y > 0) ? 1 : -1;
//             }

//             ctx.lineTo(this.x,this.y);
//             ctx.stroke();

//             let angle = Math.atan2(this.speed.y,this.speed.x);
//             let magnitude = Math.sqrt(this.speed.x**2 + this.speed.y**2);

//             let options = [angle+Math.PI/4, angle-Math.PI/4];
//             let choice = Math.floor(Math.random()*options.length);

//             if(Math.random() < 0.05) {
//                 this.speed.x = Math.cos(options[choice])*magnitude;
//                 this.speed.y = Math.sin(options[choice])*magnitude;
//             }
//         }
//     }

//     let speed = 5;

//     function pulse(){
//         if (!particle) {
//             let posX = can.width/2;
//             let posY = can.height/2;
//             let angle = Math.random() * 2 * Math.PI;
//             particle = new Particle(posX, posY, {x: Math.cos(angle) * speed, y: Math.sin(angle) * speed}, "#ffdd00");
//         }
//     }

//     function gameMove(){
//         requestAnimationFrame(gameMove);
//         clear();
//         if (particle) {
//             particle.update();
//         }
//     }

//     resizeCanvas();

//     window.addEventListener('resize', resizeCanvas);

//     pulse();
//     gameMove();
// }