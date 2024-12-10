const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
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

  router.post('/', (req, res) => {
    const productName = req.body.productName;
    const productSize = req.body.productSize;
  
    console.log('Product Name:', productName);
    console.log('Product Size:', productSize);
  
    res.send(`Product Name: ${productName}, Product Size: ${productSize} has been logged.`);
  });

  

  module.exports= router;
  