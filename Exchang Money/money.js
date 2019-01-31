let money = require('./lis.js');

money.thisarray();

let chang = process.openStdin()

process.stdout.write( "Money THB = " )

chang.addListener("data", (m) => {
   console.log("Exchang to USD = " + m*number + " USD")
    chang.end()
});