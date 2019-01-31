let mo = require('./lis.js');

mo.thisarray();

let mul = process.openStdin()

process.stdout.write( "Number => " )

mul.addListener("data", (m) => {
    for(let i=0;i<array.length;i++)
        console.log( m.toString().trim() + ' x ' + array[i]+ ' = ' + array[i]*m)
    mul.end()
});