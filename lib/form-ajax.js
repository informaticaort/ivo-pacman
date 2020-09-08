$("#registrarPje").submit(function(e) {
    e.preventDefault();
    var data = {"nickname":$('#nickname').val(), "puntos": parseInt($('#puntos').val())};
    const url = 'https://739erc48wj.execute-api.us-east-1.amazonaws.com/prod/puntajes';
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        success: function(response){
            alert('Puntaje registrado!');
        }
      });
});