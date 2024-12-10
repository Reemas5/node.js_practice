const express  = require('express')
const bodyParser = require('body-parser')
const addproductroutes = require('./routes/routes')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));



app.use('/add-product',addproductroutes)

app.use((req, res,next) => {
    res.status(404).send('404 Not Found: The page you are looking for does not exist.');
});


let port = 3000;

app.listen(port,()=>{
    console.log('server is running');
    
})