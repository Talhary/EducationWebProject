const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
// Third party libraries
const helmet = require('helmet');
const cors = require('cors');


//
const NotFound = require('./middleware/notFound.js');
const Errors = require('./errors/ErrorsHandling.js')
//
app.use(express.json())
app.use(express.static('./public'))
app.use(helmet());
app.use(cors());
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