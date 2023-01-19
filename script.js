let num = document.getElementById("num");
let hearts = document.querySelectorAll(".h-non-fill");



for (let heart of hearts){
    heart.addEventListener("click", function() {
        let text = heart.id;

        if (text!="h-fill"){
            
            heart.id="h-fill";
            num.innerHTML = (parseInt(num.innerHTML) + 1).toString();
        }
        else{
            heart.id="";
            num.innerHTML = (parseInt(num.innerHTML) - 1).toString();

        }
    }
    )};
    


