//5. Bintang asteriks
//Problem buatlah bintang seperti berikut
//let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let input = 5
let str =""
for(let i=0;i<=input;i++){
    for(let j=0;j<i;j++){
        str+="*"
        
    }
    str +="\n"

    
}
console.log(str)