function Check() {
    let Stories = parseFloat(document.getElementById("Stories").value);
    console.log(typeof Stories);
    let Sketches = parseFloat(document.getElementById("Sketches").value);




    document.getElementById("Total no.of Sketches").innerHTML = "$" + (Stories * Sketches);
    return false;
}