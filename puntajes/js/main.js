const url = 'https://739erc48wj.execute-api.us-east-1.amazonaws.com/prod/puntajes';
function listarPuntajes() {
    let listadoPtos = document.getElementById('listaPuntos');
    let colores = ['rojo','rosa','celeste','naranja'];
    let i = 0;
    fetch(url)
        .then(response => response.json())
        .then(puntajes => {
            console.log(puntajes);
            let pts = JSON.parse(puntajes.body);
            pts.sort((a, b) => parseFloat(b.Puntaje) - parseFloat(a.Puntaje));
            pts.forEach(element => {
                if(i==4)
                    i=0;
                let color = colores[i];
                listadoPtos.innerHTML+=`<li><img src="img/fantasmas/${color}.png" alt=""><h3 class="puntos inline ${color}">- "${element.Nickname.toUpperCase()}"<span class="puntos ${color}">${element.Puntaje} PTS</span></h3></li>`
                i++;
            });
            
    }).then(()=>{
        calcSpeed(100)
    });
    
}

function calcSpeed(speed) {
    // Time = Distance/Speed
    var marquee = document.querySelector('.marquee');
    var timeTaken = marquee.offsetHeight / speed;
    var nodes = marquee.childNodes;
    for(var i=0; i<nodes.length; i++) {
            nodes[i].style.animationDuration = timeTaken + "s";
        
    }
  }