// ==============================
// RADHA MADHAV ROADLINES
// Premium JavaScript
// ==============================

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll(".box h2");

counters.forEach(counter => {

    const text = counter.innerText;

    const number = parseInt(text.replace(/\D/g, ""));

    if(isNaN(number)) return;

    let start = 0;

    const speed = Math.ceil(number / 80);

    function update(){

        start += speed;

        if(start < number){

            counter.innerText = start + "+";

            requestAnimationFrame(update);

        }else{

            counter.innerText = text;

        }

    }

    update();

});

// Sticky Header Shadow
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }

});

// Scroll To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#ff3c00";
topBtn.style.color="#fff";
topBtn.style.fontSize="24px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

console.log("RADHA MADHAV ROADLINES Website Loaded Successfully");
