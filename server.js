const express  = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="POST">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" required><br><br>

      <label for="productSize">Product Size:</label>
      <input type="text" id="productSize" name="productSize" required><br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/add-product', (req, res) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize;

  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);

  res.send(`Product Name: ${productName}, Product Size: ${productSize} has been logged.`);
});
let port = 3000;

app.listen(port,()=>{
    console.log('server is running');
    
})