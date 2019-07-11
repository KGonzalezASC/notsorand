function between (given,zero){
    const rand1 = Math.random()
    
    let resut = (Math.floor((given -zero)*rand1 )) + Math.ceil(rand1)
    console.log(resut)
}
between(7,0)

 

function let(string,i){
    console.log(string[i])
}
let("howdy",2)

function randomlet(string){
    const i = Math.random()
    let index = Math.floor(string.length * i)
  
    console.log(string[index])
}
randomlet("pinstriye")

function myGuy (string){
    console.log("my guy" + " " + string);
}

myGuy( " ur gay as fuck")
function string_N_time(string,num){
    for ( i= 0; i< num; i++){
        console.log(string)
    }
}
string_N_time("dogma",10)

function hypothemoose(a,b){
    let c = Math.pow(a,2) + Math.pow(b,2);
    console.log(Math.sqrt(c));
}
hypothemoose(3,4)