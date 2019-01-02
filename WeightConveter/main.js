function but(e){
  var x = e.target.value;
  console.log(typeof(x))

  document.getElementById('select').addEventListener('option' ,function(){
   if (document.getElementById('option').value = "LB"){
    if (x >=0 && x <=Infinity){
      document.getElementById('output').style.visibility = 'visible';
  
  
      //console.log(x)
      document.getElementById('Gout').innerHTML = Math.round(x/0.0021);
      document.getElementById('Kgout').innerHTML = Math.round(x/2.2);
      document.getElementById('Ozout').innerHTML = x*16;
    }
    else{
      document.getElementById('output').style.visibility = 'hidden';
      window.alert("Enter the Number:");
      document.getElementById('');
    }
   }
else{
  document.getElementById('output').style.visibility = 'visible';

  document.getElementById('Gout').innerHTML = Math.round(x);
  document.getElementById('Kgout').innerHTML = Math.round(x);
  document.getElementById('Ozout').innerHTML = x;
}

  });
  
 
}

document.getElementById('output').style.visibility = 'hidden';
document.getElementById('in').addEventListener('input' ,but);

