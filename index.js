const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
//
const NotFound = require('./middleware/notFound.js');
const Errors = require('./errors/ErrorsHandling.js')
//
app.use(express.json())
app.use(express.static('./public'))

app.use(Errors);
app.use(NotFound);
//
const start = async()=>{
try {
    app.listen(port,()=>console.log(`server is running on port ${port}`)  )
} catch (error) {
    console.log(error);
}
}   
start()                                                       