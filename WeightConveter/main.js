function but(e){
  var x = parseInt(e.target.value);
  console.log(typeof(x));
  
    var sell = document.getElementById('ss');
    var pp = sell.options[sell.selectedIndex].text;
    console.log(pp);
    document.getElementById('output').style.visibility = 'visible';
    if (pp == "LB"){
    //console.log(x)
    document.getElementById('Gout'). innerHTML = x/0.0022;
    document.getElementById('Kgout').innerHTML = x/2.2;
    document.getElementById('Ozout').innerHTML = x*16;
    }

    if (pp == "MG"){
    document.getElementById('Gout').innerHTML = x/1000;
    document.getElementById('Kgout').innerHTML = x/1000000;
    document.getElementById('Ozout').innerHTML =  (x*18)/100;
    }
  }
  
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('in').addEventListener('input',but);
