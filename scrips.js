let menuVisible = false;
function mostrarocultarmenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="resposive";
        menuVisible = true;
    }
}

function seleccionar(){
    
        document.getElementById("nav").classList = "";
        menuVisible = false;
}