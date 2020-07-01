
function translateToEnglish(){
    $(".translator").text("ESPAÑOL");
    // Index
    $("#tc").text("Total Cases");
    $("#td").text("Total Deaths");
    $("#r10").text("Rate Per 10k");
    $("#hos").text("Hospitalized");
    // County
    $("#cnty").text("County Information");
    // Links
    $("#linkT").text("Links");
    // Abous us
    $("#about1").text("About Us");
    $("#about2").html("We are Americans<br>We are North Carolinians<br>We are web developers<br>but most importantly, we are concerned...");
    $("#about3").html("There's no need to beat around the bush. Covid-19 has been one of the most challenging trials our nation has faced in our time. It infects indiscriminately, without mercy, and continues to expand it's reach and firm it's grip on our health as we try to balance social norms with social distancing.<br>Sadly, its impact is felt even harder on our latino community. Over 33% of confirmed cases in the U.S. were of Hispanic or Latino descent, yet information and resources to help this community is scarce. It's our mission to pull in information from trusted, reliable sources to show you the current totals, updated daily, along with helpful tips, links and resources to connect you to the people who can help.<br>Together, we can achieve anything!");
}

function translateToSpanish(){
    $(".translator").text("ENGLISH");
    // Index
    $("#tc").text("Casos Totales");
    $("#td").text("Muertes Totales");
    $("#r10").text("Tasa Por 10k");
    $("#hos").text("Hospitalizado");
    // County
    $("#cnty").text("Información del Condado");
    // Links
    $("#linkT").text("Enlaces");
    // Abous us
    $("#about1").text("Sobre Nosotros");

    $("#about2").html("Nosotros somos Americanos<br>Nosotros somos Carolinianos del Norte<br>Somos desarrolladores web");
    $("#about3").html("Pero lo mas importante, estamos preocupados. No hay necesidad de andar por las ramas. Covid-19 ha sido una de las pruebas mas desafiantes que nuestra nacion ha enfrentado en nuestro tiemo. Infecta indiscriminadamente sin piedad, y coninua expandiendo su alcance y firme su control sobre nuestra salud minetras tratamos de equilibrar las normas sociales con el distanciamiento social.<br>Lamentablemente, su impacto se siente aun mas duro en nuestra comunidad latina. Mas del 33% de los casos confirmados en Carolina del Norte eran de ascendencia hispana o latina, sin embargo, los recursos de información para ayudar a esta comunidad son escasos. Nuestra mision es obtener información de fuentes confiables para mostrarle los totales actualizados, junto con enlaces y recursos utiles para conectarse con personas que pueden ayudar.<br>¡Juntos podemos lograr cualquier cosa!");
}

$(".translator").on("click", function(){
    event.preventDefault();
    if($(this).text() == "ENGLISH"){
        translateToEnglish();
    } else{
        translateToSpanish();
    }
})