let size2 = 0;

setInterval(remove, 10);

function remove(){
    var size = window.innerWidth;
    
    var a =`<div>
    <h1>Туры в Турцию по <br>лучшим ценам</h1>
    <p>Скидки до 20% в разные места Турции. Купите тур для 3-х или более людей - <br>получите 5% бонус к скидке.</p>
    <button>Подробнее</button>
    </div>`

    var b = `<div>
    <h1>Туры в Турцию по <br>лучшим ценам</h1>
    <p>Скидки до 20% в разные места Турции. Купите тур для 3-х или более людей - <br>получите 5% бонус к скидке.</p>
    <button>Подробнее</button>
    </div><img id="pilot" class="pilot" src="../Images/asideright.png" alt="">`

    if (size2 < size || size2 > size) {
        if(window.innerWidth*0.6184971098265895953757225433526 <= 428) {
            document.getElementById("main").innerHTML = a;
            с = true;
        }
        if(window.innerWidth*0.6184971098265895953757225433526 > 428){
            document.getElementById("main").innerHTML = b;
            c = false;
        }
        size2 = size;
    }


}