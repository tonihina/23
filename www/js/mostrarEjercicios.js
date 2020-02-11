$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/MostrarEjerciciosPrincipiantes.php",
            success: function(response)
            {
                $('.principiantes').html(response).fadeIn();
            }
    });

});