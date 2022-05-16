const pe = document.querySelector("#ww");
const pa = document.querySelector("#wl");
var word1 = 0;
var error = 0;
var we = "";
var ingame = 0;
var nw = 0;
var wu = "";

window.addEventListener("keydown", function(event) {
    if(ingame == 1){
        var k = event.key.toUpperCase();
        console.log(event.key);
        letter(k, word);
        wu = wu + k;
        return wu;
    }
    
});

function exit(){
    document.getElementById("hangman").style.display = "none";
    document.getElementById("bars").style.display = "none";
    document.getElementById("ps").style.display = "none";
    document.getElementById("bottom").style.display = "none";
    document.getElementById("starts").style.display = "flex";
     return ingame = 0;
}

function ST(){
    document.getElementById("hangman").style.display = "none";
    document.getElementById("starts").style.display = "none";
    document.getElementById("addArea").style.display = "none";
    document.getElementById("bottom").style.display = "flex";
    word = words[rN(0,words.length)]
    word1 = word
    pe.textContent = "";
    rl();
    Bard(word.length);
    //reseth();
    ingame = 1;
    nw = word.length;
}

function letter(k, w){
    if(wu.includes(k)){
        return alert("word used")
    }
    for(i = 0; i < w.length; i++){
    if(k == w[i]){
        console.log("good")
        word = w.replaceAll(w[i],k)
        letters(k,word);
        return word;
        }

    }
    if(error == 7){
        alert("u lost")
        pa.textContent = "The word was " + word1;
        return ingame = 0;
    }
    console.log(we+ "a")
    we = we + k + "   ";
    pe.textContent = we;
    error++
    hangman(error);
}
  
function letters(k,w){
    document.getElementById("ps").style.display = "flex";
    for(i = 0; i < w.length; i++){
        if(w[i] == k){
            letterH[i].textContent = k;
            letterH[i].style.display = "flex";
            nw = nw - 1;
        }
        if(nw == 0){
            alert("u won")
            
            return ingame = 0;
        }
    }
    return word;
}

function rl(){
    for(i = 0; i < letterH.length; i++){
        letterH[i].style.display = "none";
    }
}




function hangman(er){
    document.getElementById("hangman").style.display = "flex";
    switch(er){
        case 1:
            document.getElementById("head").style.display = "none";
            document.getElementById("body").style.display = "none";
            document.getElementById("larm").style.display = "none";
            document.getElementById("rarm").style.display = "none";
            document.getElementById("lfe").style.display = "none";
            document.getElementById("rfe").style.display = "none";
        break;
        case 2:
            document.getElementById("head").style.display = "flex";
            document.getElementById("body").style.display = "none";
            document.getElementById("larm").style.display = "none";
            document.getElementById("rarm").style.display = "none";
            document.getElementById("lfe").style.display = "none";
            document.getElementById("rfe").style.display = "none";
        break;
        case 3:
            document.getElementById("head").style.display = "flex";
            document.getElementById("body").style.display = "flex";
            document.getElementById("larm").style.display = "none";
            document.getElementById("rarm").style.display = "none";
            document.getElementById("lfe").style.display = "none";
            document.getElementById("rfe").style.display = "none";
        break;
        case 4:
            document.getElementById("head").style.display = "flex";
            document.getElementById("body").style.display = "flex";
            document.getElementById("larm").style.display = "flex";
            document.getElementById("rarm").style.display = "none";
            document.getElementById("lfe").style.display = "none";
            document.getElementById("rfe").style.display = "none";
        break;
        case 5:
            document.getElementById("head").style.display = "flex";
            document.getElementById("body").style.display = "flex";
            document.getElementById("larm").style.display = "flex";
            document.getElementById("rarm").style.display = "flex";
            document.getElementById("lfe").style.display = "none";
            document.getElementById("rfe").style.display = "none";
        break;
        case 6:
            document.getElementById("head").style.display = "flex";
            document.getElementById("body").style.display = "flex";
            document.getElementById("larm").style.display = "flex";
            document.getElementById("rarm").style.display = "flex";
            document.getElementById("lfe").style.display = "flex";
            document.getElementById("rfe").style.display = "none";
        break;
        case 7:
            document.getElementById("head").style.display = "flex";
            document.getElementById("body").style.display = "flex";
            document.getElementById("larm").style.display = "flex";
            document.getElementById("rarm").style.display = "flex";
            document.getElementById("lfe").style.display = "flex";
            document.getElementById("rfe").style.display = "flex";
        break;

    }
}

function Bard(n){
    document.getElementById("bars").style.display = "flex";
    switch(n){
        case 3:
            document.getElementById("bl4").style.display = "none";
            document.getElementById("bl5").style.display = "none";
            document.getElementById("bl6").style.display = "none";
            document.getElementById("bl7").style.display = "none";
            document.getElementById("bl8").style.display = "none";
        break;
        case 4:
            document.getElementById("bl4").style.display = "flex";
            document.getElementById("bl5").style.display = "none";
            document.getElementById("bl6").style.display = "none";
            document.getElementById("bl7").style.display = "none";
            document.getElementById("bl8").style.display = "none";
        break;
        case 5:
            document.getElementById("bl4").style.display = "flex";
            document.getElementById("bl5").style.display = "flex";
            document.getElementById("bl6").style.display = "none";
            document.getElementById("bl7").style.display = "none";
            document.getElementById("bl8").style.display = "none";
        break;
        case 6:
            document.getElementById("bl4").style.display = "flex";
            document.getElementById("bl5").style.display = "flex";
            document.getElementById("bl6").style.display = "flex";
            document.getElementById("bl7").style.display = "none";
            document.getElementById("bl8").style.display = "none";
        break;
        case 7:
            document.getElementById("bl4").style.display = "flex";
            document.getElementById("bl5").style.display = "flex";
            document.getElementById("bl6").style.display = "flex";
            document.getElementById("bl7").style.display = "flex";
            document.getElementById("bl8").style.display = "none";
        break;
        case 8:
            document.getElementById("bl4").style.display = "flex";
            document.getElementById("bl5").style.display = "flex";
            document.getElementById("bl6").style.display = "flex";
            document.getElementById("bl7").style.display = "flex";
            document.getElementById("bl8").style.display = "flex";
        break;
    }
}

function rN(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}