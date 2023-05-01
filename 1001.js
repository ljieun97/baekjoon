const readline = require("readline")
const rl = readline.createInterface({ 
    input: process.stdin,
})

let input = []

rl.on('line', (line) => {
    input = line.split(' ').map(v => parseInt(v))
    rl.close()
})

rl.on('close', ()=> {
    console.log(input[0]-input[1])
}) 