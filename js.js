var button = document.getElementById("changeBtn");
var body = document.getElementById("body");
function change(){
    if(button.innerText === "night"){
        body.style.backgroundColor ="black";
        button.innerText="day";
        button.style.backgroundColor='black';
        button.style.color='white';
    }
    else{

            body.style.backgroundColor ="white";
            button.innerText="night";
            button.style.backgroundColor='white';
            button.style.color='black';
    }
}
