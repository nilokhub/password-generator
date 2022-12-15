const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let elPass = document.getElementById("el-pass")

function passGen() {
    let randomChar = Math.floor(Math.random() * characters.length)
    console.log(characters[randomChar])

    for (let i = 0; i < 16; i++){
        elPass.textContent += characters[randomChar]
        return
    }
}

function timesTen(){
    if (elPass.textContent === ""){
    passGen()
    passGen()
    passGen()
    passGen()
    passGen()
    passGen()
    passGen()
    passGen()
    passGen()
    passGen()
    } else {
        elPass.textContent = ""
    }
}

function resetPass(){
    elPass.textContent = ""
}