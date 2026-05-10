var flower = document.getElementById('flower')
var word = document.getElementById('word')
var flying = document.getElementById('flying')

var counter = 0

flower.onclick = function newLocation(){
    var num = Math.round(Math.random()*1500)
    flower.style.left = num + 'px'
    word.style.left = flower.style.left 

    var num2 = Math.round(Math.random()*700)
    var flowernum2 = num2 - 90

    flower.style.top = num2 + 'px'
    word.style.top = flowernum2 + 'px'

    flower.classList.add('fill')

    flower.addEventListener("animationend",function(){
        flower.classList.remove('fill')
        flying.classList.remove('popin')
    },{once:true});

    counter++

    if (counter==1){
        word.innerText='shhhh wait a bit ;)'
        flying.classList.add('popin')
    }else if(counter==2){
        word.innerText='dang gurlie wait'
        flying.classList.add('popin')
    }else if(counter==3){
        word.innerText='ok ok one last time'
        flying.classList.add('popin')
    }else if(counter==4){
        word.innerText='nah lol imma liar ;p'
        flying.classList.add('popin')
    }else if(counter==5){
        word.innerText="times 3's the charm so yeah les go"
        word.innerHTML="<a href='card.html'>press me!</a>"
        flower.innerHTML="<a href='card.html'><img src='https://i.pinimg.com/736x/af/fe/52/affe52ec35ac2704a750c10b3d8e6458.jpg' alt='sunflower' id='flower'></a>"
    }

 

}
