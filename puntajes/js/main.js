const url = 'https://739erc48wj.execute-api.us-east-1.amazonaws.com/prod/puntajes';
function listarPuntajes() {
    let listadoPtos = document.getElementById('listaPuntos');
    let colores = ['rojo','rosa','celeste','naranja'];
    let i = 0;
    fetch(url)
        .then(response => response.json())
        .then(puntajes => {
            let pts = puntajes.body;
            pts.sort((a, b) => parseFloat(b.Puntaje) - parseFloat(a.Puntaje));
            console.log(pts);
            pts.forEach(element => {
                if(i==4)
                    i=0;
                let color = colores[i];
                listadoPtos.innerHTML+=`<li><img src="img/fantasmas/${color}.png" alt=""><h3 class="puntos inline ${color}">- "${element.Nickname.toUpperCase()}"<span class="puntos ${color}">${element.Puntaje} PTS</span></h3></li>`
                i++;
            });
            calcularTiempo(50, pts.length);
    });
    
}

function calcularTiempo(velocidad, cantElementos) {
    // Tiempo   = Distancia/Velocidad
    var puntaje = document.querySelector('li');
    var tiempo = puntaje.offsetHeight / velocidad * cantElementos;
    var marquee = document.querySelector('.marquee ul')
    marquee.style.animationDuration=tiempo+"s";
  }