const pe = document.querySelector("#ww");
var resets = [word1 = 0, error = 0,we = "", ingame = 0, nw = 0, wu = "", word = "", pa = "",]
resets[7] = document.querySelector("#wl");
window.addEventListener("keydown", function(event) {
    if(resets[3] == 1){
        var k = event.key.toUpperCase();
        console.log(event.key);
        letter(k, resets[6]);
        resets[5] = resets[5] + k;
         return resets[5];
    }
});

function LT(k){
    letter(k, resets[6]);
    resets[5] = resets[5] + k;
    return resets[5];
}

function exit(){
    document.getElementById("hangman").style.display = "none";
    document.getElementById("bars").style.display = "none";
    document.getElementById("ps").style.display = "none";
    document.getElementById("bottom").style.display = "none";
    document.getElementById("starts").style.display = "flex";
     return resets[3] = 0;
}

function ST(){
    document.getElementById("starts").style.display = "none";
    document.getElementById("addArea").style.display = "none";
    document.getElementById("ps").style.display = "flex";
    document.getElementById("hangman").style.display = "flex";
    document.getElementById("bottom").style.display = "flex";
    resets[6] = words[rN(0,words.length)]
    resets[2] = "";
    resets[5] = "";
    resets[4] = 0;
    resets[1] = 0;
    resets[0] = resets[6]
    pe.textContent = "";
    resets[7].textContent = "";
    rl();
    Bard(resets[6].length);
    resets[3] = 1;
    resets[4] = resets[6].length;
    ps(resets[4])
    return resets[0,1,2,3];
}

function ps(n){
    for(var i = 0; i < n; i++){
        document.getElementById("l"+i).textContent = "";
        document.getElementById("l"+i).style.display = "flex";
        console.log(n)
    }
}

function letter(k, w){
    if(resets[5].includes(k)){
        return alert("word used")
    }
    for(i = 0; i < w.length; i++){
    if(k == w[i]){
        resets[6] = w.replaceAll(w[i],k)
        letters(k,resets[6]);
        return resets[6];
        }

    }
    if(resets[1] == 6){
        alert("u lost")
        resets[7].textContent = "The word was " + resets[0];
        resets[3] = 0;
        return resets[3,7];
    }
    resets[2] = resets[2] + k + "   ";
    pe.textContent = resets[2];
    resets[1]++
    hangman(resets[1]);

    return resets[1];
}
  
function letters(k,w){
    document.getElementById("ps").style.display = "flex";
    for(i = 0; i < w.length; i++){
        if(w[i] == k){
            document.getElementById("l"+i).textContent = k;
            document.getElementById("l"+i).style.display = "flex";
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
    for(i = 0; i < 8; i++){
        document.getElementById("l"+i).style.display = "none";
    }
}

function hangman(e){
    document.getElementById("base").style.display = "flex";
    document.getElementById("bar1").style.display = "flex";
    document.getElementById("bar2").style.display = "flex";
    document.getElementById("bar3").style.display = "flex";
    for(i = 0; i < 6; i++){
        if(i < e){
            document.getElementById("b"+ i).style.display = "flex"
        }else{
            document.getElementById("b"+ i).style.display = "none"
         }

    }
}

function Bard(n){
    document.getElementById("bars").style.display = "flex";
    for(var i = 0; i < 8; i++){
        if(i < n){
            document.getElementById("bl"+ i).style.display = "flex"
        } else{
            document.getElementById("bl"+ i).style.display = "none"
        }
    }
}

function rN(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}