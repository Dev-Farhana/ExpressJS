const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname) + '/index.html')
})

app.listen(3001, ()=> {
    console.log(`Example app listening on port 3001`)
})

