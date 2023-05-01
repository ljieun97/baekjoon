const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []

rl.on("line", (line) => {
    input = line.split(' ').map(v => parseInt(v))
    rl.close()
})

rl.on('close', () => {
    let result = 0
    input.forEach(v => {result=result+v})
    console.log(result)
    process.exit()
})