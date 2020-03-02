function Check() {
    let total = parseFloat(document.getElementById("Stories").value);
    console.log(typeof total);
    let rate = parseFloat(document.getElementById("Sketches").value);




    document.getElementById("Total no.of Sketches").innerHTML = "$" + (Stories * Sketches);
    return false;
}