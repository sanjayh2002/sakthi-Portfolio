// =====================
// Magical Cursor
// =====================

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    createSpark(e.clientX, e.clientY);
});


// =====================
// Spark Effect
// =====================

function createSpark(x, y){

    const spark = document.createElement('div');

    spark.className = 'spark';

    spark.style.left = x + 'px';
    spark.style.top = y + 'px';

    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 800);
}


// =====================
// Floating Candles
// =====================

function createCandle(){

    const candle = document.createElement('div');

    candle.className = 'candle';

    candle.innerHTML = '🕯️';

    candle.style.left =
        Math.random() * window.innerWidth + 'px';

    candle.style.top =
        window.innerHeight + 'px';

    candle.style.fontSize =
        (20 + Math.random() * 20) + 'px';

    document.body.appendChild(candle);

    let pos = window.innerHeight;

    const move = setInterval(() => {

        pos -= 1;

        candle.style.top = pos + 'px';

        if(pos < -100){
            clearInterval(move);
            candle.remove();
        }

    }, 40);
}

setInterval(createCandle, 2500);


// =====================
// Scroll Animation
// =====================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
                "translateY(0px)";
        }
    });

});


document.querySelectorAll('.card').forEach(card=>{

    card.style.opacity = "0";
    card.style.transform =
        "translateY(100px)";

    card.style.transition =
        "all 1s ease";

    observer.observe(card);
});


// =====================
// Random Magic Glow
// =====================

function randomGlow(){

    const cards =
        document.querySelectorAll('.card');

    const random =
        Math.floor(Math.random() *
        cards.length);

    cards[random].style.boxShadow =
        "0 0 40px gold";

    setTimeout(()=>{

        cards[random].style.boxShadow =
        "0 0 15px rgba(255,215,0,.3)";

    },1500);
}

setInterval(randomGlow,3000);


// =====================
// Magic Button Effect
// =====================

document.querySelectorAll('.magic-btn')
.forEach(btn=>{

    btn.addEventListener('click',()=>{

        document.body.animate(

            [
                {filter:'brightness(1)'},
                {filter:'brightness(2)'},
                {filter:'brightness(1)'}
            ],

            {
                duration:500
            }

        );

    });

});


// =====================
// Page Entrance Animation
// =====================

window.onload = ()=>{

    document.body.animate(

        [
            {opacity:0},
            {opacity:1}
        ],

        {
            duration:2000
        }

    );

};


// =====================
// Background Magic Particles
// =====================

for(let i=0;i<80;i++){

    const particle =
        document.createElement('div');

    particle.className =
        'magic-particle';

    particle.style.left =
        Math.random()*100+'vw';

    particle.style.top =
        Math.random()*100+'vh';

    particle.style.animationDuration =
        (5+Math.random()*10)+'s';

    document.body.appendChild(
        particle
    );
}