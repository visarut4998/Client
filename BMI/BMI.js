
let mo = require('./q_bmi.js');

mo.thisarray();

var htwt = []
var sum 

function ask(i){
    process.stdout.write( questions[i] )
}

process.stdin.on('data' , function(data){
    htwt.push(data.toString().trim())
    if(htwt.length <2 ){
        ask(htwt.length)
    }
    else{
        process.exit()
    }
  
})

process.on('exit',function(){
    sum = htwt[0] / (htwt[1] * htwt[1]) 
    console.log('BMI = ' + sum)
    if(sum<18){
        console.log("Low Weight")
    }
    else if(sum>18 && sum<22){
        console.log("Normal")
    }
    else{
        console.log("Fat")
    }
    
})
ask(0)
