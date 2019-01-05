
console.log('hello');

function butlb(e){
    var x = e.target.value;
    console.log(x);

    document.getElementById('gm').value = x*0.0022046;
    document.getElementById('kg').value = x/2.20403;
    document.getElementById('oz').value = x*0.035274;
}

function butkg(e){
    var x = e.target.value;
    console.log(x);

    document.getElementById('lb').value = x*2.2046;
    document.getElementById('gm').value = x*1000;
    document.getElementById('oz').value = x*35.274;
}
function butoz(e){
    var x = e.target.value;
    console.log(x);

    document.getElementById('lb').value = x*0.0625;
    document.getElementById('kg').value = x/35.274;
    document.getElementById('gm').value = x/0.035274;
}
function butgm(e){
    var x = e.target.value;
    console.log(x);

    document.getElementById('lb').value = x*0.0022046;
    document.getElementById('kg').value = x/1000;
    document.getElementById('oz').value = x*0.035274;
}
document.getElementById('lb').addEventListener('input',butlb);
document.getElementById('kg').addEventListener('input',butkg);
document.getElementById('oz').addEventListener('input',butoz);
document.getElementById('gm').addEventListener('input',butgm);

