const textI = document.querySelector("#input");

function ST2(){
    document.getElementById("addArea").style.display = "none";
    document.getElementById("hangman").style.display = "flex";
    document.getElementById("letters").style.display = "flex";
    document.getElementById("bottom").style.display = "flex";
}

function back(){
    document.getElementById("addArea").style.display = "none";
    document.getElementById("starts").style.display = "flex";
}

function addword(){
    data = textI.value
    text = data.toUpperCase();
    for(i = 0; i < 10; i++){
        if(text.includes(i))
        return alert("error numbers")
    }
    if(text.length == 0){
        return alert("empty space");
    }if(text.length <= 8){
        words.push(text)
        textI.value = "";
    }else{ return alert("word to long")}
}