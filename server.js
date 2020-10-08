const app = require("./src/app")

const porta = 3001
app.listen(porta,function(){
    console.log(`porta ${porta} está funcionando `)
})