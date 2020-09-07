$("#registrarPje").submit(function(e) {
    e.preventDefault();
    var data = {"nickname":$('#nickname').val(), "puntos": parseInt($('#puntos').val())};
    const url = 'https://739erc48wj.execute-api.us-east-1.amazonaws.com/prod/puntajes';
    $.ajax({
        type: "POST",
        url: url,
        crossDomain: true,
        data: JSON.stringify(data),
        contentType:"application/json",
        success: function(response){
            alert('Puntaje registrado!');
        }
      });
});