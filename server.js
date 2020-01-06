const path = require('path')
const express = require('express')
const app = express();
const PORT = 3006

const staticPath = express.static(path.join(__dirname, 'build'))
const filePath = path.resolve(__dirname,'build','upgrade.html')

app.use('/static', staticPath)
app.get('/',(req,res)=>{
    res.redirect('/upgrade.html')
})
app.get('/upgrade.html',(req,res)=>{
    res.sendFile(filePath)
})
app.listen(PORT,()=>{
    console.log(`listen in port:${PORT}`)
})