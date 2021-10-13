var titulos = {
    "Peliculas": [
    {"imagen" : "img/star-wars-la-venganza-de-los-sith.jpg ",
    "Título" : "Star wars: La venganza de los sith",
    "clasificacion" : "Clasificación (B, C, D)",
    "duracion" : "120 minutos",
    "Horario" : 10+":"+00+"am" + " " +12+":"+00+"pm" + " " +16+":"+30+"pm",}
    ,
    {"imagen" : "img/la-la-land.jpg",
    "clasificacion" : "Clasificación (A)",
    "duracion" : "160 minutos",
    "Título" : "La La Land      ",
    "Horario" : 9+":"+30+"am" + " " +12+":"+00+"pm" + " " +16+":"+30+"pm",}
    ,
    {"imagen" : "img/harry-potter-reliquias-muerte-2.jpg",
    "Título" : "Harry Potter y las reliquias de la muerte p2",
    "clasificacion" : "Clasificación (C, D)",
    "duracion" : "130 minutos",
    "Horario" : 11+":"+00+"am" + " " +14+":"+30+"pm" + " " +21+":"+30+"pm",}
    ,
    {"imagen" : "img/batman begins.jpg",
    "Título" : "Batman: Begins",
    "clasificacion" : "Clasificación (A, B, C, D)",
    "duracion" : "140 minutos",
    "Horario" : 8+":"+00+"am" + " " +12+":"+00+"pm" + " " +13+":"+30+"pm",}
    ,
    {"imagen" : "img/venom.jpg",
    "Título" : "Venom               ",
    "clasificacion" : "Clasificación (B, C, D)",
    "duracion" : "140 minutos",
    "Horario" : 9+":"+45+"am" + " " +11+":"+00+"pm" + " " +18+":"+30+"pm",}
    ,
    {"imagen" : "img/joker.jpg",
    "Título" : "The Joker              ",
    "clasificacion" : "Clasificación (B, C)",
    "duracion" : "122 minutos",
    "Horario" : 14+":"+00+"pm" + " " +16+":"+00+"pm" + " " +20+":"+30+"pm",}
    ]
    };
    //Obteniendo el elemento contenedor donde se cargarán de los objetos JASON
var div = document.getElementById("kk");
div.innerHTML = volcarDatos(titulos.Peliculas);
function volcarDatos(datos){
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for(var i=0; i<total; i++){
    data += "<li class=\"box\">\n";
    data += "<div class=\"box-shadow\"></div>\n";
    data += "<div class=\"box-gradient\">\n";
    data += "<img src=\"" + datos[i].imagen + "\" alt=\"Miniatura de " +
    datos[i].Título + " " + "\" class=\"imagen\" />\n" + "<h4>\nTítulo: " + datos[i].Título + " " + "\n</h4>\n";
    data += "<h3>\nClasificación: " + datos[i].clasificacion + "     " +"Duración: " + datos[i].duracion +  "\n<br />\n";
    data += "<h2>\n   Horarios: " + datos[i].Horario + "\n<br />\n";
    data += "</div>\n";
    data += "</li>\n";
    }
    data += "</ul>\n";
    return data;
    }
    