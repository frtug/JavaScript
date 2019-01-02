function but(){
    var newshow = document.createElement("li");
    
    newshow.innerHTML = insert.value;
    
    if (insert.value){
    //                          console.log("I am Saving");
    show.appendChild(newshow);
    insert.value = ""
}}

var show =   document.getElementById('show');
var insert = document.getElementById('input');
var su =  document.getElementById('press');


console.log("I Am Clicked and saved!");
su.addEventListener('click',but);
