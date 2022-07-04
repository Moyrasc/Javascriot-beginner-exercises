

//Your code above ^^^
let cancion1 = "let it be, ";
let cancion2 = " whisper words of wisdom, "
let cancion3 = "there will be an answer, "
let cancion = ""
//Your code above ^^^
function sing(){
    for(let i=0; i<12; i++){
        if(i==4){
            cancion+=cancion2;
        }
       else if(i==10){
           cancion +=cancion3;
       }
       else{
           cancion += cancion1
       }
        
    }
    return cancion

}
console.log(sing());
