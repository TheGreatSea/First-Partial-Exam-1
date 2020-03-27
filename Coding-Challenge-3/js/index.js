
let fizzButton = document.getElementById("submitBtn");

fizzButton.addEventListener("click", (event)=>{

    let fizzValue = document.getElementById("fizzNum");
    let section = document.getElementById("resultsSection");
    let div_section = document.getElementById("resultsSection");
    div_section.innerHTML = "";
    if(fizzValue <= 0 ){
        console.log("Invalid number");
    }
    else{
        for(let i=1; i<fizzValue.nodeValue; i++){
            section.innerHTML += "<div class="box"> </div>"
            ;
        }
    }
    event.preventDefault();
});