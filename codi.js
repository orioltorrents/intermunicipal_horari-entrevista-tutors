function doGet()
{
    // Posem evaluate per si en la web tenim scriplets
    // Hem esborrat el Title del fitxer html perquè Posem .SetTitle aquí
    
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Horari entrevista dels tutors');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}