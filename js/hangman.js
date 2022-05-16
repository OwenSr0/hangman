const pe = document.querySelector("#ww");
const pa = document.querySelector("#wl");
var resets = [word1 = 0, error = 0,we = "", ingame = 0, nw = 0, wu = "", word = ""]
var word1 = 0;
var error = 0;
var we = "";
var ingame = 0;
var nw = 0;
var wu = "";

window.addEventListener("keydown", function(event) {
    if(resets[3] == 1){
        var k = event.key.toUpperCase();
        console.log(event.key);
        letter(k, resets[6]);
        resets[5] = resets[5] + k;
        resets[5];
    }
    
});

function exit(){
    document.getElementById("hangman").style.display = "none";
    document.getElementById("bars").style.display = "none";
    document.getElementById("ps").style.display = "none";
    document.getElementById("bottom").style.display = "none";
    document.getElementById("starts").style.display = "flex";
     return resets[3] = 0;
}

function ST(){
    document.getElementById("hangman").style.display = "none";
    document.getElementById("starts").style.display = "none";
    document.getElementById("addArea").style.display = "none";
    document.getElementById("bottom").style.display = "flex";
    resets[6] = words[rN(0,words.length)]
    resets[2] = "";
    resets[5] = "";
    resets[4] = 0;
    resets[1] = 0;
    resets[0] = resets[6]
    pe.textContent = "";
    pa.textContent = "";
    rl();
    Bard(resets[6].length);
    //reseth();
    resets[3] = 1;
    resets[4] = resets[6].length;
    return resets[0,1,2,3];
}

function letter(k, w){
    if(resets[5].includes(k)){
        return alert("word used")
    }
    for(i = 0; i < w.length; i++){
    if(k == w[i]){
        console.log("good")
        resets[6] = w.replaceAll(w[i],k)
        letters(k,resets[6]);
        return resets[6];
        }

    }
    if(resets[1] == 7){
        alert("u lost")
        pa.textContent = "The word was " + resets[0];
        return resets[3] = 0;
    }
    resets[2] = resets[2] + k + "   ";
    pe.textContent = resets[2];
    resets[1]++
    hangman(resets[1]);
}
  
function letters(k,w){
    document.getElementById("ps").style.display = "flex";
    for(i = 0; i < w.length; i++){
        if(w[i] == k){
            letterH[i].textContent = k;
            letterH[i].style.display = "flex";
            resets[4] = resets[4] - 1;
        }
        if(resets[4] == 0){
            alert("u won")
            
            return resets[3] = 0;
        }
    }
    return resets[6];
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