let ren;
const min = 1;
const max = 6;
document.getElementById("gen").onclick = function() {
    ren = Math.floor(Math.random()*((max+1)-min))+min;
    document.getElementById("output").textContent = `${ren}`;
};