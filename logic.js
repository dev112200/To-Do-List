const inputbox = document.getElementById("innn");
const listitems = document.getElementById("gggg");


function addtask(){
    if(inputbox.value ===''){
        alert("firstly write something!")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputbox.value;
        listitems.appendChild(li);
        let del = document.createElement("button");
        del.innerHTML="delete";
        li.appendChild(del);  
        del.onclick = function() {
           li.remove() ;
        };
         
    }
    inputbox.value='';
}

