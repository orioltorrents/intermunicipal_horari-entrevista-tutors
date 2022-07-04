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

function obtenerTutors1ESO()
{
    let hoja = SpreadsheetApp.openById('1YGOOBL4vuGs_dfzGSx4RjaVDijgY0k-uKxKsk0cYRLA');
    let sheet = hoja.getSheetByName('1ESO');
    let datos = sheet.getDataRange().getValues();
    return datos;
}
function obtenerTutors2ESO()
{
    let hoja = SpreadsheetApp.openById('1YGOOBL4vuGs_dfzGSx4RjaVDijgY0k-uKxKsk0cYRLA');
    let sheet = hoja.getSheetByName('2ESO');
    let datos = sheet.getDataRange().getValues();
    return datos;
}
function obtenerTutors3ESO()
{
    let hoja = SpreadsheetApp.openById('1YGOOBL4vuGs_dfzGSx4RjaVDijgY0k-uKxKsk0cYRLA');
    let sheet = hoja.getSheetByName('3ESO');
    let datos = sheet.getDataRange().getValues();
    return datos;
}
function obtenerTutors4ESO()
{
    let hoja = SpreadsheetApp.openById('1YGOOBL4vuGs_dfzGSx4RjaVDijgY0k-uKxKsk0cYRLA');
    let sheet = hoja.getSheetByName('4ESO');
    let datos = sheet.getDataRange().getValues();
    return datos;
}
function obtenerTutorsBAT1()
{
    let hoja = SpreadsheetApp.openById('1YGOOBL4vuGs_dfzGSx4RjaVDijgY0k-uKxKsk0cYRLA');
    let sheet = hoja.getSheetByName('BAT1');
    let datos = sheet.getDataRange().getValues();
    return datos;
}
function obtenerTutorsBAT2()
{
    let hoja = SpreadsheetApp.openById('1YGOOBL4vuGs_dfzGSx4RjaVDijgY0k-uKxKsk0cYRLA');
    let sheet = hoja.getSheetByName('BAT2');
    let datos = sheet.getDataRange().getValues();
    return datos;
}