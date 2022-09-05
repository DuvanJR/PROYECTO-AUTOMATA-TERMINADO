// EXPORTAR COMO XML
function save_func() {
    console.log(baseDatos);

    var data_sting = JSON.stringify(baseDatos);
    console.log(data_sting);

    var file = new Blob([data_sting], {
        type: "XML"
    });
    console.log(file);
    var anchor = document.createElement("a");
    //console.log(anchor);
    anchor.href = URL.createObjectURL(file)
        //console.log(href);
    anchor.download = "Datos.XML";
    //console.log(download);
    anchor.click();
    // console.log(anchor);

}

/* EXPORTAR COMO EXCEL
function save_func() {
    console.log(baseDatos);

    var data_sting = JSON.stringify(baseDatos);
    console.log(data_sting);

    var file = new Blob([data_sting], {
        type: "CSV"
    });
    console.log(file);
    var anchor = document.createElement("a");
    //console.log(anchor);
    anchor.href = URL.createObjectURL(file)
        //console.log(href);
    anchor.download = "Datos.CSV";
    //console.log(download);
    anchor.click();
    // console.log(anchor);

} */



/* EXPORTAR COMO TXT
function save_func() {
    console.log(baseDatos);

    var data_sting = JSON.stringify(baseDatos);
    console.log(data_sting);

    var file = new Blob([data_sting], {
        type: "txt"
    });
    console.log(file);
    var anchor = document.createElement("a");
    //console.log(anchor);
    anchor.href = URL.createObjectURL(file)
        //console.log(href);
    anchor.download = "Datos.txt";
    //console.log(download);
    anchor.click();
    // console.log(anchor);

} */


/* EXPORTAR COMO JSON
function save_func() {
    console.log(baseDatos);

    var data_sting = JSON.stringify(baseDatos);
    console.log(data_sting);

    var file = new Blob([data_sting], {
        type: "JSON"
    });
    console.log(file);
    var anchor = document.createElement("a");
    //console.log(anchor);
    anchor.href = URL.createObjectURL(file)
        //console.log(href);
    anchor.download = "Datos.JSON";
    //console.log(download);
    anchor.click();
    // console.log(anchor);

} */