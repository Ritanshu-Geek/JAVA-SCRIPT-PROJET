let output = 0;
let restart;
document.getElementById("add").onclick = function() {
    output+=1;
    document.getElementById("output").textContent = `${output}`;
};
document.getElementById("sub").onclick = function() {
    output-=1;
    document.getElementById("output").textContent = `${output}`;
};
document.getElementById("restart").onclick = function() {
    output = 0;
    document.getElementById("output").textContent = `${output}`;
};